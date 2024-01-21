# database

Database server adalah program komputer (server) yang bertugas untuk mengelola, mendistribusikan, serta menyimpan database dengan menggunakan model klien server

## ubuntu
- install package
  - ```apt install mysql-server apache2 php```

- install phpmyadmin
  - ```apt install php myadmin```
  - if show config php myadmin
    - chose apache2 using tab and enter
    - chose yes is common
    - password for phpmyadmin and try angain pass

- configuration password for mysql
  - ```mysql -u root -p```
    input ur pass
  - create user
    - ```CREATE USER 'ariafatah'@'%' IDENTIFIED BY '123';```
    - ```GRANT ALL PRIVILEGES ON *.* TO 'ariafatah'@'%' WITH GRANT OPTION;```
    - ```FLUSH PRIVILEGES;```

- and open ur browser with ip address server and add subdomain /phpmyadmin
  - ex: 10.10.10.1/phpmyadmin