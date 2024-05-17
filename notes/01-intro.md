# Nitro

Nitro is an open source framework to build `web server` using [unjs/h3](https://h3.unjs.io/) and lots of built-in features

`Nitro` automatically makes your code compatible with any `deployment` provider and `runtime`!

<br />

**`Create nitro project`**

```ts
npx giget@latest nitro project_name --install


// start project
// cd project_name
// npm run dev - will start the server

// create production build
// npm run build
// Output is in the .output directory and ready to be deployed on almost any provider with no dependencies.
```

**`Directory structure`**

- `routes/`

  The `routes/` directory contains your application handlers.

  You can create `subdirectories` inside `routes/` dir to create nested handlers. The file name is the route path.

- `api/`

  The `api/` directory is similar to `routes/` with only difference that routes inside it will be prefixed with `/api/` for convenience.

- `utils/`

  This directory contains your application utils with auto import support.

- `plugins/`

  This directory contains your custom nitro plugins.

- `nitro.config.ts`

  The nitro.config.ts file contains the configuration for Nitro.

- `tsconfig.ts`

  The tsconfig.json file contains the TypeScript configuration for your project.

- `package.json`
