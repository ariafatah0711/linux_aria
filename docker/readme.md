- docker
```bash
docker --version
```

- image
```bash
docker iamge ls # show docker image

docker image pull redis:latest # pull docker image
docker image rm redis:latest # remove docker image
```

- container
```bash
docker container ls -a # semua container
docker container ls # hanya container yang sedang berjalan

docker container create --name redis-app redis:latest # membuat container

docker container start redis-app # start container with name container
docker container start 7b4c0acad15d # with container ID

docker container stop redis-app # stop container

docker container rm redis-app # menghapus container
```

- container logs
```bash
docker container logs redis-app # logs yang terjadi
docker container logs -f redis-app # logs secara realtime
```