### ESLint (Angular)

#### Cài đặt ESLint cho Angular:

```bash
ng add angular-eslint
```

Lệnh này sẽ tự động:

- Cài đặt các thư viện liên quan: `angular-eslint`, `eslint`, `typescript-eslint`, v.v.
- Tạo file cấu hình `eslint.config.js`
- Cập nhật `angular.json` để sử dụng ESLint thay vì TSLint (nếu trước đó có)

---

#### 2. File `eslint.config.js` ví dụ:

```js
// @ts-check
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
    rules: {
      '@angular-eslint/directive-selector': [
        'warn',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'warn',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-unsafe-function-type': 'warn'
    }
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {
      '@angular-eslint/template/label-has-associated-control': 'warn'
    }
  }
);
```

---

#### Cấu hình `angular.json`:

Thêm mục `lint` trong phần cấu hình của project:

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

---

#### Thêm script vào `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --fix"
  }
}
```

---

#### Chạy lệnh lint:

```bash
npm run lint
```
