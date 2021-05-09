{ src, type, unit, stdenv, lib, framework }:

let
    templatify = set: file:
        builtins.replaceStrings
            (map (x: "@${x}@") (builtins.attrNames set))
            (builtins.attrValues set)
            (builtins.readFile file);
    capitalize = s:
        (lib.toUpper (builtins.substring 0 1 s)) +
        (builtins.substring 1 ((builtins.stringLength s)-1) s);

in
stdenv.mkDerivation {
    name = "perspective-${type}";
    src = src;
    buildPhase = ''
        cat <<HEREDOC > index.html
        ${templatify {unit = unit; type = capitalize type;} "${framework}/index.html"}
        HEREDOC
        cat <<HEREDOC > script.js
        ${templatify {dataset = builtins.readFile "${src}/data.json";} "${framework}/script.js"}
        HEREDOC
    '';
    installPhase = ''
        mkdir -p $out
        cp index.html $out
        cp ${framework}/style.css $out
        cp script.js $out
    '';
}