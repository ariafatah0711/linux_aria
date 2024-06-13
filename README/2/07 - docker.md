# docker

## ubuntu
- insallasion
    - nano docker-install.sh
    ```
    #!/bin/bash

    # Preparation
    sudo apt update -y
    sudo apt install ca-certificates curl gnupg lsb-release -y
    sudo mkdir -m 0755 -p /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

    # Install Docker Engine
    sudo apt update -y
    sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

    # Add user htb-student to the Docker group
    sudo usermod -aG docker htb-student
    echo '[!] You need to log out and log back in for the group changes to take effect.'

    # Test Docker installation
    docker run hello-world
    ```
    - bash docker-install.sh

- docker file
    - nano
    ```
    # Use the latest Ubuntu 22.04 LTS as the base image
    FROM ubuntu:22.04

    # Update the package repository and install the required packages
    RUN apt-get update && \
        apt-get install -y \
            apache2 \
            openssh-server \
            && \
        rm -rf /var/lib/apt/lists/*

    # Create a new user called "student"
    RUN useradd -m docker-user && \
        echo "docker-user:password" | chpasswd

    # Give the htb-student user full access to the Apache and SSH services
    RUN chown -R docker-user:docker-user /var/www/html && \
        chown -R docker-user:docker-user /var/run/apache2 && \
        chown -R docker-user:docker-user /var/log/apache2 && \
        chown -R docker-user:docker-user /var/lock/apache2 && \
        usermod -aG sudo docker-user && \
        echo "docker-user ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

    # Expose the required ports
    EXPOSE 22 80

    # Start the SSH and Apache services
    CMD service ssh start && /usr/sbin/apache2ctl -D FOREGROUND
    ```
    - bash docker-file.sh
- Membangun Docker
    - docker build -t FS_docker .
- menjalankan docker
    - docker run -p <host port>:<docker port> -d <docker container name>
    - docker run -p 8022:22 -p 8080:80 -d FS_docker

- perintah docker
    ```
    Perintah	Deskripsi
    docker ps	Cantumkan semua kontainer yang berjalan
    docker stop	Hentikan kontainer yang sedang berjalan.
    docker start	Mulai kontainer yang dihentikan.
    docker restart	Mulai ulang kontainer yang sedang berjalan.
    docker rm	Menghapus kontainer.
    docker rmi	Menghapus gambar Docker.
    docker logs	Lihat log kontainer.
    ```

# linux container lxc
- install lxc
    - sudo apt-get install lxc lxc-utils -y
- membuat kontainer lxc
    - sudo lxc-create -n linuxcontainer -t ubuntu
- perintah lxs
    ```
    Perintah	Deskripsi
    lxc-ls	Cantumkan semua kontainer yang ada
    lxc-stop -n <container>	Hentikan kontainer yang sedang berjalan.
    lxc-start -n <container>	Mulai kontainer yang dihentikan.
    lxc-restart -n <container>	Mulai ulang kontainer yang sedang berjalan.
    lxc-config -n <container name> -s storage	Mengelola penyimpanan kontainer
    lxc-config -n <container name> -s network	Mengelola pengaturan jaringan kontainer
    lxc-config -n <container name> -s security	Mengelola pengaturan keamanan kontainer
    lxc-attach -n <container>	Sambungkan ke kontainer.
    lxc-attach -n <container> -f /path/to/share	Sambungkan ke kontainer dan bagikan direktori atau file tertentu.
    ```
- mengamankan lxc
    - sudo vim /usr/share/lxc/config/linuxcontainer.conf
        ```
        lxc.cgroup.cpu.shares = 512
        lxc.cgroup.memory.limit_in_bytes = 512M
        ```
- sudo systemctl restart lxc.service

- Berikut adalah 9 latihan opsional untuk berlatih LXC:
    1	Instal LXC di komputer Anda dan buat kontainer pertama Anda.
    2	Konfigurasikan pengaturan jaringan untuk kontainer LXC Anda.
    3	Buat gambar LXC kustom dan gunakan untuk meluncurkan kontainer baru.
    4	Konfigurasikan batas sumber daya untuk kontainer LXC Anda (CPU, memori, ruang disk).
    5	Jelajahi perintah untuk mengelola kontainer.lxc-*
    6	Gunakan LXC untuk membuat kontainer yang menjalankan versi server web tertentu (misalnya, Apache, Nginx).
    7	Konfigurasikan akses SSH ke kontainer LXC Anda dan sambungkan dari jarak jauh.
    8	Buat kontainer dengan persistensi, sehingga perubahan yang dilakukan pada kontainer disimpan dan dapat digunakan kembali.
    9	Gunakan LXC untuk menguji perangkat lunak dalam lingkungan yang terkendali, seperti aplikasi web yang rentan atau malware.