- docker compose => aplikasi yang digunakan untuk mendefiniskan dan menjalankan multiple Docker Container Secara sekaligus
```bash
DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
mkdir -p $DOCKER_CONFIG/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v2.29.0/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose

chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
# or
sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose

docker compose version
```

- perintah compose
```bash
# docker-compose or docker compose

docker-compose up --force-recreate # create ulang / network yang error

docker-compose create # membuat container
docker-compose start # start container semua docker container yang di konfigurasi
docker-compose ps # list container yang ada pada file konfigurasi
docker-compose stop # stop container yang ada pada konfigurasi
docker-compose down # menghapus container, volume, network (meskipun sedang container berjalan)

docker-compose ls # list docker compose (list berdasarkan nama folder yang berisi docker-compose.yaml yang sudah dibuat)
```

- konfigurasi docker-compose.yaml
```yaml
version: "3.18"

services:
  nginx-aria:
    container_name: nginx-aria
    image: nginx:latest
```

- port => kita bisa mengekspose port di container keluar menggunakan port forwading
    - kita bisa melakukan hal tersebut di konfigurasi file docker compose dengan menggunakan attributes port
        - short syntax => kita bisa gunakan syntax pendek yang berisi string 
            - ```HOST:CONTAINER``` misal ````8080:80```
        - long syntax => syntax panjang yang bisa kiat buat dalam bentuk object
            ```yaml
            target: <port didalam container>
            published: <port yang digunakan di host>
            protocol: <jenis port (TCP/UDP)>
            mode: <host untuk port di tiap node, atau ingress untuk swarm mode>
            # karena kita tidak menggunakan docker swarm. jadi kita cukup gunakan nilai host
            ```
```yaml
# docker-compose.yaml
version: "3.18"

services:
  nginx-aria-1:
    container_name: nginx-aria-1
    image: nginx
    ports:
      - target: 80
        published: 8081
        protocol: tcp
  nginx-aria-2:
    container_name: nginx-aria-2
    image: nginx
    ports:
      - "8082:80"
```

- environment variable
```yaml

```