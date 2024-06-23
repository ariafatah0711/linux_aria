container network => container yang terdapat di dalam network yang sama bisa saling berkomunikasi (tergantung jenis driver network nya)
    - dengan cara menambahkan container ke network
    - container bisa mengakses container lain dengan menyebutkan hostname dari container yaitu nama_container nya

- langkah langkah
```bash
docker network create -d bridge mongo-net

docker container create --name mongodb --network mongo-net \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=admin \
mongo:8.0.0-rc4-jammy

docker image pull mongo-express

docker container create --name mongodb-express --network mongo-net \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_URL=mongodb://root:admin@mongodb:27017 \
mongo-express:latest

# mongodb://root:admin@mongo:27017
# root => user, admin => pass
# @mongodb => nama container, :27017 => port_container

docker container start mongodb
docker container start mongodb-express

# go to http://localhost:8081
```

- menghapus container dari docker network
```bash
docker network disconnect mongo-net mongodb

# menghapus network mongo-net pada container mongodb
```


- more
```bash
docker volume create --name net-main
docker volume create --name net-data

docker network create -d bridge jakarta

docker container create --name net-main -p 8085:80 --mount "type=volume,source=net-main" --network jakarta nginx:latest

docker container create --name net-data --mount "type=volume,source=net-data" --network jakarta nginx:latest

docker network ls
docker netowrk inspect jakarta

# go to http://127.21.0.1 u can check port is active have 2
```