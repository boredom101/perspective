{ stdenv, lib }:

stdenv.mkDerivation {
    name = "perspective-framework";
    src = ./.;
    dontBuild = true;
    installPhase = ''
    mkdir -p $out
    cp * $out
    '';
}