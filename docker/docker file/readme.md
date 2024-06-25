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