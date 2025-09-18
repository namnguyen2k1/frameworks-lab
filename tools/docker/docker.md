# Docker

## 1. Core Concepts

- **Image**: App blueprint (immutable package).
- **Container**: Running instance of an image (process).
- **Registry**: Remote repo to store/share images (default: **Docker Hub**).
- **OCI**: Open Container Initiative (standards for image & runtime).
- **Immutable & Ephemeral**: Containers should be stateless; data stored via **volumes** or **bind mounts**.

---

## 2. Container Lifecycle

- **Build → Ship → Run**
- Run modes: foreground, detached (`-d`), interactive (`-it`).
- Benefits: isolation, consistent environments, faster change, speed.
- Typical use: develop → test → deploy faster.

---

## 3. Run Containers

```bash
docker run -d -p 8800:80 httpd
docker container run --publish 8080:80 --detach --name webhost nginx
```

- `--detach (-d)`: run in background → returns container ID.
- `--publish (-p) host:container`: expose ports.
- `--name`: custom name.
- `--rm`: auto remove after stop.
- Exit: `Ctrl + C`.

### Manage Containers

```bash
docker ps                       # running containers
docker container ls -a          # all containers
docker stop <id|name>           # stop
docker container rm <id|name>   # remove (use -f to force)
docker container start <id>     # start existing
```

---

## 4. Images

```bash
docker images                   # list local images
docker pull alpine              # download image
docker history <image>          # show image history
docker image tag nginx user/nginx
docker push user/nginx          # push to registry
```

- `docker build -t myapp .` → build from Dockerfile.
- Images are layered, read-only; containers add a writable layer.

---

## 5. Logs & Debugging

```bash
docker logs webhost
docker container top <id|name>
docker container inspect <id|name>
docker container stats
```

---

## 6. Shell Access

```bash
docker run -it alpine sh              # new container interactive
docker run -it --name proxy nginx bash
docker exec -it mysql bash            # run command in existing
```

---

## 7. Networking

```bash
docker network ls
docker network inspect <network>
docker network create --driver bridge mynet
docker network connect mynet webhost
docker network disconnect mynet webhost
docker inspect --format '{{ .NetworkSettings.IPAddress }}' webhost
```

- Default driver: `bridge`.
- Use custom networks for service-to-service communication.

---

## 8. Volumes & Bind Mounts

- **Volumes**: managed by Docker.
- **Bind mounts**: map host folder ↔ container.

```bash
docker run -d -p 80:80 -v $(pwd):/usr/share/nginx/html nginx
```

- All changes in host folder reflected inside container.

---

## 9. System & Cleanup

```bash
docker system df          # disk usage
docker system prune -a    # remove unused images/containers/networks
```

---

## 10. Dockerfile

### Buildtime

- `FROM`, `RUN`, `COPY`, `ADD`, `ARG`, `ONBUILD`.

### Runtime

- `EXPOSE`, `VOLUME`, `STOPSIGNAL`, `CMD`, `ENTRYPOINT`, `HEALTHCHECK`.

### Both

- `WORKDIR`, `ENV`, `USER`, `LABEL`.

Notes:

- **CMD** & **WORKDIR** → last one wins (overwrite).
- **EXPOSE**, **ENV**, **ARG** → additive.
- Use `ENTRYPOINT` for mandatory command, `CMD` for defaults.

---

## 11. Common Issues

- Docker Desktop removed:

  ```bash
  docker context use default
  docker context rm desktop-linux
  ```

- Login bug with `credsStore`: remove/edit in `~/.docker/config.json`.

---

## 12. Ways to Run Containers

- **Local**: Docker Desktop, Rancher Desktop.
- **Servers**: Docker Engine, Kubernetes.
- **PaaS**: Google Cloud Run, AWS Fargate.

---

## 13. Automation / CI/CD

- CI/CD pipelines build, test, push images, then deploy.
- Registry: Docker Hub, GitHub Container Registry, AWS ECR, GCP Artifact Registry.

---
