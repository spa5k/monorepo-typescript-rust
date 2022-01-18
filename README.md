# PNPM Typescript Rust Monorepo

Pnpm workspaces based monorepo with essential configs and things.

## Info -

- Athena - Frontend Vite App
- Gaia - Backend Rust Server using actix-web
- Hera - Frontend NextJS App
- Libs/Ui - Simple UI components
- Libs/Logger - Logger can be added

All packages/apps needs to be started with `@core`/package-name in order to keep them inside the scope.

## Installation

```sh
pnpm install
```
To run the @gaia crate
```sh
cargo install cargo-watch 
```

## Usage

### Athena - Frontend Vite App

- Directly
  ```
  pnpm athena dev
  ```
- Through Turborepo
  ```sh
  pnpm athena:dev
  ```

### Hera - Frontend NextJS App

- Directly
  ```
  pnpm hera dev
  ```
- Through Turborepo
  ```sh
  pnpm hera:dev
  ```

### Gaia - Backend Rust Server using actix-web

- Directly

  ```
  pnpm gaia:dev
  ```

## Want to run other commands for some specific package?

```sh
pnpm <package> <command>
```

  Example -

  Run lint in Athena

  ```sh
  pnpm athena lint
  ```

## Authors

- [@spa5k](https://www.github.com/spa5k)
