### Source Map Explorer (Angular)

- Install packages:

```bash
npm install --save-dev source-map-explorer
```

- Enable `sourceMap` in `angular.json` configuration:

```json
{
  "projects": {
    "[your-project-name]": {
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

- Add script to `package.json`:

```json
{
  "scripts": {
    "analyze": "ng build --configuration production && source-map-explorer dist/[your-project-name]/**/*.js"
  }
}
```

---

### References

- [[NPM] Source Map Explorer](https://www.npmjs.com/package/source-map-explorer)
