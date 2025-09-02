### Nest CLI

```bash
# Install CLI
npm install -g @nestjs/cli
# Check version
nest -v
# Create new app
nest new my-nest-app
# Generate module
nest g mo my-module
# Generate controller
nest g co my-controller
# Generate service
nest g s my-service
# More information
nest -h
```

---

### Postgresql Service (Ubuntu)

```bash
psql --version
systemctl status postgresql
```

---

### Mongodb Service (Ubuntu)

```bash
mongosh --version
systemctl status mongod
```

---

### Redis Service (Ubuntu)

```bash
redis-server -v
systemctl status redis
```

---

### Ubuntu

```bash
lsb_release -a
```

---

### Surge

- [Offical Documentation](https://surge.sh/)

```bash
npm install -g surge
surge login
# forgor password: enter empty password x3
surge list
surge teardown [project_name]
```

---

### References

- [[Guide] NestJs Official Documentation](https://nestjs.com/)
- [[NPM] NestJs CLI](https://www.npmjs.com/package/@nestjs/cli)
