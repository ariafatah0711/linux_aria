# reverse proxy

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