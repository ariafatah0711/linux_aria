# web server
- Web server adalah sebuah software (perangkat lunak) yang memberikan layanan berupa data. Berfungsi untuk menerima permintaan HTTP atau HTTPS dari klien atau kita kenal dengan web browser (Chrome, Firefox).
- port 80/http, 443/https

## apache2 HTTPS (ubuntu)
- install apache2
  - ```apt install apache2 openssl```
  - ```a2enmod ssl```

- config apache2
  - go to root directory html ```cd /var/www/```
    - and change make ur new folder and add ur file index.html, and sytle
  - ssl config
    ```bash
    openssl req -x509 -nodes -days 356 -newkey rsa:2048 -keyout /etc/ssl/private/ariafatah.com.key -out /etc/ssl/certs/ariafatah.com.crt
    # county(negara) : IN
    # province(provinsi) : Jawa Barat
    # city(kota) : Depok
    # organitation name(nama organisasi): smk_hb
    # common name: ariafatah.com
    # email address: ariafatah999@gmail.com
    ```
  - change configuration apache2
    - ```cp /etc/apache2/sites-available/default-ssl.conf /etc/apache2/sites-available/ariafatah.com-ssl.conf```
    - ```nano /etc/apache2/sites-available/ariafatah.com-ssl.conf```
      ```bash
      ServerAdmin ariafatah999@gmail.com
      ServerName ariafatah.com
      ServerAlias www.ariafatah.com
      DocumentRoot /var/www/html

      SSLCertificateFile      /etc/ssl/certs/ariafatah.com.crt
      SSLCertificateKeyFile /etc/ssl/private/ariafatah.com.key
      ```
    - ```a2ensite ariafatah.com-ssl.conf``` to active configuration
    - ```a2dissite 000-default.conf``` to deactive configuration
    - ```a2query -s``` to list active configuration

- start configuration
  - ```systemctl restart/status```
  - check ur host windows browser and go ip address / dns
    - click learn more / advance and click accept

## nginx (red hat)
- install nginx
  - ```mount /dev/sr0 /mnt/disc```
  - ```yum install nginx```

- config nginx
  - go to directory /usr/share/nginx/
    - ```cd /usr/share/nginx```
    - add ur file / repositroy
  - go to directory config nginx, or edit file in /etc/nginx/nginx.conf
    - ```vi /etc/nginx/nginx.conf```
      ```bash
        listen       80;
        listen       [::]:80;
        server_name  _;
        root         /usr/share/nginx/newFolder;
      ```
  - ```nginx -t```
  - ```setenforce 0``` for disable security nginx folder
  - ```systemctl restart nginx```

- firewall
  - ```firewall-cmd --permanent --add-port={80/tcp,443/tcp}```
  - ```firewall-cmd --reload```

### nginx custom path
- add folder in any directory
  - ```cd /var/www/```
  - ```git clone https://agithub.com/riafatah0711/linktree.git```
  - ```chown -R $USER:$USER linktree```
  - ```chmod -R 755 linktree```

- add new port
  - ```cd /etc/nginx/conf.d/```
  - ```vi linktree.conf```
    ```bash
    server {
        listen 1010;
        listen [::]:1010;
        server_name ariafatah.id;
        root /var/www/linktree;

        index index.html;

        location / {
                try_files $uri $uri/ =404;
            }
    }
    ```

## nginx with ssl
- create cert
  ```bash
  sudo mkdir -p /etc/ssl/private

  openssl req -x509 -nodes -days 356 -newkey rsa:2048 -keyout /etc/ssl/private/domain.key -out /etc/ssl/certs/domain.crt

  openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /etc/ssl/private/domain.key -out /etc/ssl/certs/domain.crt \
  -subj "/C=ID/ST=Jawa_Barat/L=Depok/O=Dev-Universe/OU=Dev-Universe/CN=ariafatah.id"
  ```
- config nginx
  ```bash
  server {
      listen 443 ssl;
      server_name your_domain.com;

      ssl_certificate /etc/ssl/my_domain/your_certificate.crt;
      ssl_certificate_key /etc/ssl/my_domain/your_private.key;

      location / {
          proxy_pass http://backend_server;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
      }
  } 
  ```

- test nginx conf, and disable security nginx
  - ```nginx -t```
  - ```setenforce 0``` for disable security nginx folder
  - ```systemctl restart nginx```

- firewall
  - ```firewall-cmd --permanent --add-port=1010/tcp```
  - ```firewall-cmd --reload```

## centos
- yum install apache
  - nano /etc/apache2/sites-avaible/conf
    ```bash
    <Directory /usr/local/apache2/htdocs/dontlistme>
      Options -Indexes
    </Directory>

    Options FollowSymLinks
    AllowOverride None

    Options -Indexes

    IndexIgnore tmp* .. #Jika Anda ingin daftar diaktifkan, tetapi Anda ingin menghilangkan file tertentu,
    IndexOptions ShowForbiddenShowForbidden
    ```

    ```bash
    ServerTokens Prod
    ServerSignature Off
    TraceEnable Off
    Options all -Indexes
    Header always unset X-Powered-By
    ```

# tls host with cerbot
```bash
sudo apt-get install python3-certbot-nginx -y
sudo certbot --nginx -d <yourdomain.com> -d <www.yourdomain.com>
```

## selinux
```bash
man semanage-fcontext

semanage fcontext -a -t httpd_sys_content_t "/path(/.*)?"
restorecon /path
ls -ldZ /path

semanage fcontext -a -t httpd_sys_content_t "/linktree(/.*)?"/
restorecon /linktree/
ls -ldZ /path
```