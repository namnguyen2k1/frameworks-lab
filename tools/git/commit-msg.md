# Commit Message Cheat Sheet (Conventional Commits)

| Type         | Description                           | Example                                |
| ------------ | ------------------------------------- | -------------------------------------- |
| **feat**     | A new feature                         | `feat(auth): add login API`            |
| **fix**      | A bug fix                             | `fix(token): correct validation`       |
| **docs**     | Documentation only                    | `docs: update installation guide`      |
| **style**    | Code style (formatting, no logic)     | `style: format code with prettier`     |
| **refactor** | Code restructure (no bug/feature)     | `refactor(user): simplify service`     |
| **perf**     | Performance improvement               | `perf(db): optimize query performance` |
| **test**     | Add/update/remove tests               | `test(auth): add unit tests`           |
| **build**    | Build system / dependencies / tools   | `build: upgrade typescript to v5`      |
| **ci**       | CI/CD configuration                   | `ci: add GitHub Actions workflow`      |
| **chore**    | Other tasks (configs, scripts, tools) | `chore: setup husky and lint-staged`   |
| **revert**   | Revert a previous commit              | `revert: feat(auth): add login API`    |

---

## Format

```
<type>(optional scope): <short description>
```

### Rules

- **type**: must be one of the allowed keywords (`feat`, `fix`, …)
- **scope**: optional, describes the area of change (e.g. `auth`, `user`, `db`)
- **description**: short, imperative, lowercase

---
