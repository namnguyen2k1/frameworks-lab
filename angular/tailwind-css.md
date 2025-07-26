### TailwindCSS (Angular)

#### Cài đặt các gói cần thiết:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

---

#### Cấu hình PostCSS:

Tạo file `.postcssrc.json` hoặc `postcss.config.mjs` ở thư mục gốc Angular:

```json
// .postcssrc.json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

---

#### Thiết lập Tailwind trong `styles.scss`

- Trong `src/styles.scss`:

```scss
@use 'tailwindcss';
```

- Tương đương với khai báo từng phần:

```scss
@tailwind base; // gồm reset.css
@tailwind theme;
@tailwind utilities; // thường chỉ dùng utilities
```

---

#### Kiểm tra cấu hình trong `angular.json`:

```json
"styles": ["src/styles.scss"]
```

#### Sử dụng:

```html
<h1 class="text-3xl font-bold underline">Hello Angular + Tailwind!</h1>
```
