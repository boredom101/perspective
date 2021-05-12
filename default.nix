{ mode }:

import ./gen.nix {
    src = ./dataset;
    type = "length";
    unit = "meter";
    factor = 5;
    closeness = 2;
    stdenv = (import <nixpkgs> {}).stdenv;
    lib = (import <nixpkgs> {}).lib;
    framework = import ./framework {
        stdenv = (import <nixpkgs> {}).stdenv;
        lib = (import <nixpkgs> {}).lib;
    };
    mode = mode;
}