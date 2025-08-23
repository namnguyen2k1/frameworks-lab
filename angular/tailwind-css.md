### TailwindCSS (Angular)

- Install packages:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

- Create `.postcssrc.json` file:

```json
// .postcssrc.json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

- Update `styles.scss`:

```scss
@use 'tailwindcss';
// @tailwind base;
// @tailwind theme;
// @tailwind utilities;
```

- Verify configuration in `angular.json`:

```json
"styles": ["src/styles.scss"]
```

---

### Usage

- In HTML template:

```html
<div class="font-bold text-[green]">Hello Angular + Tailwind!</div>
```
