# Landing Strip

Opinionated UI Framework for web, chat and AI using SvelteKit, Cloudflare and nix

> Inspired by [shadcn/ui](https://ui.shadcn.com/)

## Features

- ☑ [nix](https://nixos.org/guides/how-nix-works/) with [devenv](https://devenv.sh/)
- ☑ Web [SvelteKit with *Java*script](https://kit.svelte.dev/docs/introduction)
- ☑ Persistence ([Cloudflare KV](https://developers.cloudflare.com/kv/reference/how-kv-works/))
- ☑ deployment on Cloudflare
- ☐ tailwindcss
- ☐ git hooks
- ☐ auth

## Requirements

This project uses nix for all dependencies outside of what npm packages provide.

> **Windows Only** You must [install WSL](https://learn.microsoft.com/en-us/windows/wsl/install) if you haven't already. The Ubuntu distribution is a safe default choice.

[Setup nix](https://zero-to-nix.com/start/install) for your platform.

## Project Setup

Now we need to install devenv (and cachix):

```sh
nix profile install nixpkgs#cachix
cachix use devenv
nix profile install --accept-flake-config tarball+https://install.devenv.sh/latest
```

### Optional: Setup Direnv

If you are familiar with and use the CLI often and don't already know [direnv](https://direnv.net), you will love this:

```sh
nix profile install nixpkgs#direnv
```

> **Tip:**: `echo $SHELL` shows you what shell you are running

[Hook direnv into your shell](https://direnv.net/docs/hook.html)

Restart your shell.

Inside of the landing-strip directory enter `direnv allow`.

## Usage

Nix provides us with a nice (and uniform) development environment:

> **NOTE:** direnv users don't need to do this next step

```sh
devenv shell
```

Once we are in our nix environment:

```sh
devenv up
```

Congratulations you now have everything you need to develop locally!
