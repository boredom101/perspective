{ src, mode, type, unit, stdenv, lib, framework, factor, closeness }:

let
    templatify = set: file:
        builtins.replaceStrings
            (map (x: "@${x}@") (builtins.attrNames set))
            (map builtins.toString (builtins.attrValues set))
            (builtins.readFile file);
    capitalize = s:
        (lib.toUpper (builtins.substring 0 1 s)) +
        (builtins.substring 1 ((builtins.stringLength s)-1) s);

in
stdenv.mkDerivation {
    name = "perspective-${mode}-${type}";
    src = src;
    buildPhase = ''
        cat <<HEREDOC > lib.js
            ${templatify {
                dataset = builtins.readFile "${src}/data.json";
                factor = factor; closeness = closeness;
            } "${framework}/lib.js"}
        HEREDOC
    '' +
    (if mode == "webapp" then
    ''
        cat <<HEREDOC > index.html
        ${templatify {unit = unit; type = capitalize type;} "${framework}/index.html"}
        HEREDOC
    ''
    else "");
    installPhase = ''
        mkdir -p $out
        cp lib.js $out
    '' +
    (if mode == "webapp" then
    ''
        cp ${framework}/script.js $out
        cp ${framework}/style.css $out
        cp index.html $out
    ''
    else "");
}