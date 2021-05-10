{  }:

import ./gen.nix {
    src = ./dataset;
    type = "length";
    unit = "meter";
    factor = 5;
    stdenv = (import <nixpkgs> {}).stdenv;
    lib = (import <nixpkgs> {}).lib;
    framework = import ./framework {
        stdenv = (import <nixpkgs> {}).stdenv;
        lib = (import <nixpkgs> {}).lib;
    };
}