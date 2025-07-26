### 🛡️ Husky + Lint-Staged (Angular)

#### 1. Cài đặt thư viện:

```bash
npm install --save-dev husky lint-staged
```

---

#### 2. Khởi tạo Husky:

```bash
npx husky
```

Lệnh này sẽ tạo thư mục `.husky` và cấu hình git hook.

---

#### 3. Tạo file hook `pre-commit`:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

Hoặc tự tạo file `.husky/pre-commit` với nội dung sau:

```bash
npx lint-staged
```

> Đừng quên cấp quyền thực thi cho file hook:

```bash
chmod +x .husky/pre-commit
```

---

#### 4. Cập nhật `package.json`:

```json
{
  "scripts": {
    "lint": "eslint --fix",
    "format": "prettier --write",
    "prepare": "husky"
  },
  "lint-staged": {
    "*.{ts,html,scss}": ["npm run lint", "npm run format"]
  }
}
```

---

#### ✅ Giải thích:

- `prepare`: được chạy sau khi cài `npm install`, giúp tự động setup Husky.
- `lint-staged`: chỉ lint & format những file thay đổi, giúp nhanh và hiệu quả.
