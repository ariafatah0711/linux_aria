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

- container exec
```bash
docker container exec -i -t redis-app /bin/bash

root@7b4c0acad15d:/# redis-cli 

127.0.0.1:6379> set name "aria"
OK
127.0.0.1:6379> get name
"aria"
127.0.0.1:6379>
```

- docker port forwading
```bash
docker container create --name nginx-app -p 8080:80 nginx:latest
docker container start nginx-app

docker container ls
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                                   NAMES
15c77bfc9642   nginx:latest   "/docker-entrypoint.…"   16 seconds ago   Up 3 seconds    0.0.0.0:5001->80/tcp, :::5001->80/tcp   nginx-app
```

- docker env
```bash
docker container create --name mongodb-app --publish 27017:27017 --env MONGO_INITDB_ROOT_USERNAME=aria --env MONGO_INITDB_ROOT_PASSWORD:aria  mongo:latest

# untuk mengubah variable user dan password login
```

- container stats
```bash
docker container stats

CONTAINER ID   NAME        CPU %     MEM USAGE / LIMIT     MEM %     NET I/O       BLOCK I/O        PIDS
15c77bfc9642   nginx-app   0.00%     3.789MiB / 3.018GiB   0.12%     14.7kB / 0B   1.41MB / 4.1kB   3
7b4c0acad15d   redis-app   0.26%     10.17MiB / 3.018GiB   0.33%     14.4kB / 0B   7.63MB / 0B      6
```

- container resource limit
```bash
docker container create --name smallnginx --publish 8081:80 --memory 100m --cpus 0.5 nginx:latest

docker container start smallnginx

docker container stats
CONTAINER ID   NAME         CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O        PIDS
61453f7f015d   smallnginx   0.00%     3.125MiB / 100MiB     3.12%     15.9kB / 1.65kB   668kB / 12.3kB   3
15c77bfc9642   nginx-app    0.00%     3.801MiB / 3.018GiB   0.12%     39.5kB / 664B     1.41MB / 4.1kB   3
```

- 