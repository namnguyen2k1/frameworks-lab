### Vite CLI

- Install packages:

```bash
npm create vite@latest

# Select vanilla-ts
```

- Create the `vite.config.ts` file:

```ts
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the
  // `VITE_` prefix.
  // https://vite.dev/config/
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      // Provide an explicit app-level constant derived from an env var.
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    // Example: use an env var to set the dev server port conditionally.
    server: {
      port: env.APP_PORT ? Number(env.APP_PORT) : 5173
    }
  };
});
```
