# Server Utils

Nitro provide auto `imports` feature to import function from the supported directory.

It is because Nitro uses [unjs/unimport](https://github.com/unjs/unimport) to auto import utilities when used with full tree-shaking support so you don't have to!

`H3 utils`

`Nitro` enables all `h3` utils as auto imports so you can use `defineEventHandler`, `readBody`, etc without manually importing them.

<br />

`utils` directory

You can add your application specific utils inside `utils/` directory and they will be auto imported when used. Every export in the utils directory and its subdirectories will become available globally in your application.

Please create utils directory inside the `server` directory as sibling of `api/` and `route/`

`Example:` visite the `utils` inside `server`

`Nitro utils:`

- `defineCachedFunction(fn, options) / cachedFunction(fn, options)`
- `defineCachedEventHandler(handler, options) / cachedEventHandler(handler, options)`
- `defineRenderHandler(handler)`
- `defineRouteMeta(options) (experimental)`
- `useRuntimeConfig(event?)`
- `useAppConfig(event?)`
- `useStorage(base?)`
- `useNitroApp()`
- `defineNitroPlugin(plugin)`
- `nitroPlugin(plugin)`
- `getRouteRules(event)`

<br />

`Manual imports`

For some edge cases (IDE support and libraries in `node_modules`) it is impossible to rely on auto imports.

You can explicitly import them from virtual `#imports` file.

```ts
// plugins/test.ts

import {useStorage} from "#imports";
```

<br />

`Async Context (Experimental)`

Nitro (2.6+) enables a new server development experience in order to split application logic into smaller` "composable"` utilities that are fully decoupled from each other and can directly assess to a shared context (request event) without needing it to be passed along. This pattern is inspired from `Vue Composition API` and powered by `unjs/unctx`.

`Note:` This feature is currently supported for Node.js and Bun runtimes and also coming soon to other presets that support [`AsyncLocalStorage`](https://nodejs.org/api/async_context.html#class-asynclocalstorage) interface.

```ts
export default defineNitroConfig({
	experimental: {
		asyncContext: true,
	},
});
```

After enabling this flag, you can use `useEvent()` (auto imported)

```ts
// with async context

// routes/index.ts
export default defineEventHandler(async () => {
	const user = await useAuth();
});

// utils/auth.ts
export function useAuth() {
	return useSession(useEvent());
}

// without async context
// routes/index.ts
export default defineEventHandler(async (event) => {
	const user = await useAuth(event);
});

// utils/auth.ts
export function useAuth(event) {
	return useSession(event);
}
```
