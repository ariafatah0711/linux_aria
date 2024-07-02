- docker build
```bash
docker build -t ariafatah/app:1.0.0 folder-dockerfile
docker build -t ariafatah/app:1.0.0 -t ariafatah/app:latest folder-dockerfile

# ariafatah/app => nama-image
# 1.0.0 => tag
# folder-dockerfile => file / folder docker file

# :latest => ini agar tag latest bakal terupdate yang baru gitu
```

- docker file format
```bash
# KOMENTAR
INSTRUCTION arguments
```

- from instruction
```bash
mkdir app && cd app
nano Dockerfile
***
isi Dockerfile
***

docker build -t ariafatah/app 
```

- RUN instruction
```bash
FROM alpine:3

RUN mkdir hello
RUN echo "hello WOrld" > "hello/world.txt"
RUN cat "hello/world.txt"
```

- command instruction
```bash
FROM alpine:3

# build container
RUN mkdir hello
RUN echo "hello WOrld" > "hello/world.txt"

# RUN container
CMD cat "hello/world.txt"
```

- label instrucsion (hanya informasi tambahan)
```bash
LABEL author="ariafatah"
LABEL compnay="smk harapan bangsa"
LABEL name="app1"
```

- add instrucsion
```bash
# build container
RUN mkdir data_siswa
ADD add/*.txt data_siswa/

# RUN container
CMD cat "data_siswa/data-siswa.txt" & cat "data_siswa/umur-siswa.txt"
```

- copy instrucsion (can with url file, can automatic extract)
```bash
RUN mkdir data_siswa
COPY add/*.txt data_siswa/
RUN tar xfvz data_siswa/zip.tar.gz

# RUN container
# build containe
RUN mkdir data_siswa
# COPY add/*.txt data_siswa/
COPY data.tar.gz data_siswa/
RUN tar xvz -f data_siswa/data.tar.gz -C data_siswa/
RUN ls data_siswa
RUN ls

# RUN container
CMD cat "data_siswa/data-siswa.txt" & cat "data_siswa/umur-siswa.txt"
```

- .dockerignore

- expose (informasi port)
```bash
FROM golang:1.18-alpine

RUN mkdir app
COPY main.go app

EXPOSE 8080

CMD go run app/main.go
```

- environment variable instrction
```bash
FROM golang:1.18-alpine

ENV APP_PORT=8080

RUN mkdir app
COPY main.go app/

EXPOSE ${APP_PORT}

CMD go run app/main.go
```

- volume instruction
```bash
FROM golang:1.18-alpine

ENV APP_PORT=8080
ENV APP_DATA=/logs

RUN mkdir ${APP_DATA}
RUN mkdir app
COPY main.go app

EXPOSE ${APP_PORT}
VOLUME ${APP_DATA}

CMD go run app/main.go
```

- working directory
```bash
FROM golang:1.18-alpine

WORKDIR /app
COPY main.go /app

EXPOSE 8080
CMD go run main.go # sudah tidak perlu pergi ke /app
```

- user instruction
```bash
RUN addgroup -S harbas
RUN adduser -SDh /app ariafatah harbas
RUN chown -R ariafatah:harbas /app
USER ariafatah
```

- argument instruction
```bash
FROM golang:1.18-alpine

ARG APP="main-app"

WORKDIR /app
COPY main.go .
RUN mv main.go ${APP}.go

EXPOSE 8080

ENV APP-ENV=${APP}
CMD ["go", "run", "/app/${APP-ENV}.go"]
```