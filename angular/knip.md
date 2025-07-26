### 🧹 Knip – Unused Files & Dependencies Detector (Angular)

#### 1. Cài đặt Knip:

```bash
# Tham khảo: https://knip.dev/overview/getting-started
npm install --save-dev knip
```

---

#### 2. Thêm script vào `package.json`:

```json
{
  "scripts": {
    "knip": "npx knip --cache --reporter symbols --performance"
  }
}
```

---

#### ✅ Giải thích tuỳ chọn:

- `--cache`: sử dụng cache để tăng tốc các lần kiểm tra sau.
- `--reporter symbols`: hiển thị báo cáo chi tiết với biểu tượng rõ ràng.
- `--performance`: hiển thị thông tin về thời gian và hiệu năng.

---

Giờ bạn có thể chạy:

```bash
npm run knip
```

Để quét và phát hiện các **file, export, hoặc dependency không dùng đến** ✨
