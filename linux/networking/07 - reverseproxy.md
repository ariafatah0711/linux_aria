# reverse proxy
- Reverse proxy bekerja sebagai perantara antara klien dan server, menerima permintaan klien dan menentukan server terbaik untuk mengelola respon tersebut. 
- Setelah menerima permintaan, reverse proxy memproses lalu lintas untuk meningkatkan keamanan dan efisiensi.

# nginx
- edit config
  - ```sudo nano /etc/nginx/sites-available/default```
    ```bash
    location / {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    
        # …
    }
    ```

- yang ini bisa dihapus
  ```bash
  try_files $uri $uri/ =404;
  ```

- restart
  ```systemctl restart nginx```

# menerapkan limit access
- edit config
  - ```sudo nano /etc/nginx/sites-available/default```
    ```bash
    limit_req_zone $binary_remote_addr zone=one:10m rate=30r/m;

    location / {    
        # …

        limit_req zone=one;
    }

    # jika lokasi spesifik seperti /admin
    location /admin {
        limit_req zone=one;
    }
    ```

- restart
  ```systemctl restart nginx```

# apache2
- enable modul rate limit
  ```bash
  a2enmod ratelimit
  ```
- enable modul proxy
  ```bash
  a2enmod proxy
  a2enmod proxy_http
  ```
- edit config
  ```bash
  <VirtualHost *:3000>
    ServerName localhost

    # Root folder
    DocumentRoot /var/www/html

    # Rate limiting dengan mod_ratelimit
    <Location "/">
        SetOutputFilter RATE_LIMIT
        # Batasi kecepatan transfer menjadi 10KB per detik per koneksi
        SetEnv rate-limit 1024
    </Location>

    # Proxy ke localhost:8000
    ProxyPreserveHost On
    ProxyPass / http://localhost:8000/
    ProxyPassReverse / http://localhost:8000/

    # Aktifkan modul proxy dan proxy_http
    ProxyRequests Off
    <Proxy *>
        Require all granted
    </Proxy>
  </VirtualHost>
  ```

- jika ingin mengganti port apache bisa ganti /etc/apache2/ports.conf dan 000-default.nya