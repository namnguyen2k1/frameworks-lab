### ESLint (Angular)

- Install packages:

```bash
ng add angular-eslint
```

This command will automatically:

- Install related packages: `angular-eslint`, `eslint`, `typescript-eslint`, etc.
- Generate the `eslint.config.js` configuration file
- Update `angular.json`

---

### Detailed Configuration

- `eslint.config.js` file:

```js
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended
    ],
    processor: angular.processInlineTemplates,
    rules: {}
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {}
  }
);
```

- `angular.json` includes a `lint` section:

```json
{
  "lint": {
    "builder": "@angular-eslint/builder:lint",
    "options": {
      "lintFilePatterns": ["src/**/*.ts", "src/**/*.html"]
    }
  }
}
```

- Add script to `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --fix"
  }
}
```

---

### References
