{ lib, pkgs, ... }:

{
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_18;
    corepack.enable = true;
  };

  pre-commit.hooks.a_format = {
    enable = true;
    entry = "pnpm run format";
    pass_filenames = false;
  };

  pre-commit.hooks.b_check = {
    enable = true;
    entry = "pnpm run check";
    pass_filenames = false;
  };

  pre-commit.hooks.c_test = {
    enable = true;
    entry = "pnpm run test";
    pass_filenames = false;
  };
}
