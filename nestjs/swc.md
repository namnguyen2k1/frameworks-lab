### SWC (Nest)

- Install packages:

```bash
npm i --save-dev @swc/cli @swc/core
```

- Create the `.swcrc` file:

```json
{
  "$schema": "https://swc.rs/schema.json",
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "decorators": true,
      "dynamicImport": true
    },
    "paths": {}
  }
}
```

- Update the `nest-cli.json` file:

```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true,
    "typeCheck": true,
    "watchAssets": true,
    "builder": {
      "type": "swc",
      "options": {
        "swcrcPath": ".swcrc"
      }
    }
  }
}
```

---

### References

- [[Guide] SWC | NestJs](https://docs.nestjs.com/recipes/swc)
- [[Guild] Official Documentation Homepage SWC](https://swc.rs/)
