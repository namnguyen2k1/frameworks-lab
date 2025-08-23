### Font Awesome (Angular)

* Install packages:

```bash
npm install @fortawesome/angular-fontawesome @fortawesome/free-solid-svg-icons
```

* Create `icon.module.ts`:

```ts
// icon.module.ts
import { NgModule } from '@angular/core';
import { FaConfig, FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle, faCoffee } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IconModule {
  constructor(library: FaIconLibrary, faConfig: FaConfig) {
    library.addIcons(
      faCoffee // add more icons ...
    );
    faConfig.fallbackIcon = faCircle;
    // faConfig.defaultPrefix = 'far';
    // faConfig.fixedWidth = true;
  }
}
```

---

### Usage

* Import:

```ts
@Component({
  standalone: true,
  imports: [IconModule]
})
export class SomeComponent {}
```

* Use in HTML template:

```html
<fa-icon icon="coffee"></fa-icon>
```

---

### References

* [[NPM] Angular-Fontawesome](https://www.npmjs.com/package/@fortawesome/angular-fontawesome)
* [[Icon] Font-Awesome](https://fontawesome.com/search?ic=free&o=r)
