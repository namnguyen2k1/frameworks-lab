### ✅ Commit Lint Setup

#### 1. Cài đặt commitlint với cấu hình Angular:

```bash
# Tham khảo:
# - https://www.npmjs.com/package/@commitlint/config-angular
# - Angular commit conventions: https://github.com/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md

npm install --save-dev @commitlint/config-angular @commitlint/cli
```

---

#### 2. Tạo file cấu hình `commitlint.config.js`:

```js
// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-angular']
};
```

---

#### 3. Tạo file hook `commit-msg` trong thư mục `.husky`:

```bash
# .husky/commit-msg
npx commitlint --edit
```

> 📌 Đảm bảo thư mục `.husky` đã được thiết lập (sử dụng `husky install` nếu chưa có).

---

#### 4. Cấp quyền thực thi cho file hook:

```bash
chmod +x .husky/commit-msg
```
