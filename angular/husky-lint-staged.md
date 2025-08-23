### Husky + Lint-Staged (Angular)

- Install packages:

```bash
npm install --save-dev husky lint-staged
```

- Create `.husky` folder:

```bash
npx husky
```

- Create the `pre-commit` file inside the `.husky` folder:

```bash
# .husky/pre-commit
npx lint-staged
```

- Grant execute permission to `pre-commit`:

```bash
chmod +x .husky/pre-commit
```

- Update `package.json`:

```json
{
  "scripts": {
    "lint": "eslint --fix",
    "format": "prettier --write",
    "prepare": "npx husky"
  },
  "lint-staged": {
    "*.{ts,html,scss}": ["npm run lint", "npm run format"]
  }
}
```

---

#### References

- [[NPM] Husky](https://www.npmjs.com/package/husky)
- [[NPM] Lint-Staged](https://www.npmjs.com/package/lint-staged)
