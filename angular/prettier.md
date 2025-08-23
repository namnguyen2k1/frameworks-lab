### Prettier (Angular)

- Install packages:

```bash
npm install --save-dev prettier
```

- Add script to `package.json`:

```json
{
  "scripts": {
    "format": "prettier --write"
  }
}
```

- Create `.prettierrc` file:

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "printWidth": 100,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always"
}
```

---

### References

- [[NPM] Prettier](https://www.npmjs.com/package/prettier)
- [[VS Code] Prettier Extension ](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
