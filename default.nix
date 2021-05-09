{  }:

import ./gen.nix {
    src = ./dataset;
    type = "length";
    unit = "meter";
    stdenv = (import <nixpkgs> {}).stdenv;
    lib = (import <nixpkgs> {}).lib;
    framework = import ./framework {
        stdenv = (import <nixpkgs> {}).stdenv;
        lib = (import <nixpkgs> {}).lib;
    };
}