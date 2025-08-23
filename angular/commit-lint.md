### Commitlint (Angular)

- Install packages:

```bash
npm install --save-dev @commitlint/config-angular @commitlint/cli
```

- Create the `commitlint.config.js` file:

```js
// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-angular']
};
```

- Create the `commit-msg` file inside the `.husky` folder:

```bash
# .husky/commit-msg
npx commitlint --edit
```

- Grant execute permission to `commit-msg`:

```bash
chmod +x .husky/commit-msg
```

---

### References

- [[NPM] Commitlint Config Angular](https://www.npmjs.com/package/@commitlint/config-angular)
- [[Guide] Angular Commit Message](https://github.com/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md)
