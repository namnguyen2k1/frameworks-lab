### Prettier (Angular)

#### Cài đặt Prettier:

```bash
npm install --save-dev prettier
```

---

#### Thêm script vào `package.json`:

```json
{
  "scripts": {
    "format": "prettier --write"
  }
}
```

---

#### Tạo file cấu hình `.prettierrc`:

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

#### 5. Chạy lệnh format:

```bash
npm run format
```
