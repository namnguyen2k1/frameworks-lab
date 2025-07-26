### 🎨 Font Awesome (Angular)

#### 1. Cài đặt thư viện Font Awesome:

```bash
npm install @fortawesome/angular-fontawesome @fortawesome/free-solid-svg-icons
```

---

#### 2. Tạo file `icon.module.ts`:

```ts
// icon.module.ts
import { NgModule } from '@angular/core';
import { FaConfig, FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCheckCircle,
  faCircle,
  faCircleQuestion,
  faCircleXmark,
  faCoffee,
  faDownLong,
  faPlusCircle,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IconModule {
  constructor(library: FaIconLibrary, faConfig: FaConfig) {
    library.addIcons(
      faCoffee,
      faTrash,
      faPlusCircle,
      faCheckCircle,
      faCircleXmark,
      faCircleQuestion,
      faDownLong // thêm icon khác tại đây nếu cần
    );

    faConfig.fallbackIcon = faCircle; // fallback nếu icon không tìm thấy
    // faConfig.defaultPrefix = 'far';
    // faConfig.fixedWidth = true;
  }
}
```

---

#### 3. Sử dụng trong Component:

- Import `IconModule` trong module sử dụng:

```ts
@NgModule({
  imports: [IconModule]
})
export class SomeFeatureModule {}
```

- Sau đó trong HTML bạn có thể sử dụng:

```html
<fa-icon icon="circle-plus"></fa-icon>
```

---

#### 🔎 Tìm tên icon:

- Truy cập: [Font Awesome Free Icons](https://fontawesome.com/search?ic=free&o=r)
- Đảm bảo chọn đúng icon **Free** và thuộc nhóm **solid** (`fas`)
