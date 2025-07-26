### 📊 Source Map Explorer (Angular)

#### 1. Cài đặt thư viện:

```bash
# Tham khảo: https://www.npmjs.com/package/source-map-explorer
npm install --save-dev source-map-explorer
```

---

#### 2. Bật source map trong cấu hình `angular.json`:

Tìm đến phần `configurations.production` của project và thêm:

```json
{
  "sourceMap": true
}
```

Ví dụ:

```json
{
  "projects": {
    "angular-bb": {
      "architect": {
        "build": {
          "configurations": {
            "production": {
              "sourceMap": true
            }
          }
        }
      }
    }
  }
}
```

---

#### 3. Thêm script vào `package.json`:

> ⚠️ Thay `angular-bb` bằng tên project thực tế của bạn.

```json
{
  "scripts": {
    "analyze": "ng build --configuration production && source-map-explorer dist/angular-bb/**/*.js"
  }
}
```

---

Giờ bạn có thể chạy:

```bash
npm run analyze
```

Để kiểm tra dung lượng và phân tích chi tiết các bundle file 🎯
