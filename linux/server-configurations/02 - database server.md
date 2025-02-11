# database
- Database server adalah program komputer (server) yang bertugas untuk mengelola, mendistribusikan, serta menyimpan database dengan menggunakan model klien server
- menggunakan port 1433, 1521, 8000

# ubuntu
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

# redhat
- install package
  - ```yum install mariadb-server httpd php```
  or
  - ```yum install mysql-server``` pass: none

- configuration user root
  - ```sudo mysql_secure_installation```

- if cant connect, and have the error
  ```bash
  sudo systemctl stop mysqld
  sudo rm -rf /var/lib/mysql/*
  sudo mkdir -p /var/lib/mysql
  sudo chown -R mysql:mysql /var/lib/mysql
  sudo chmod -R 755 /var/lib/mysql

  # initilaization database (opsional) 
  sudo mysqld --initialize --user=mysql --datadir=/var/lib/mysql

  sudo systemctl enable mysqld
  sudo systemctl start mysqld
  ```

- configuration password for mysql
  - ```mysql -u root -p```
    input ur pass
  - create user
    - ```CREATE USER 'ariafatah'@'%' IDENTIFIED BY '123';```
    - ```GRANT ALL PRIVILEGES ON *.* TO 'ariafatah'@'%' WITH GRANT OPTION;```
    - ```FLUSH PRIVILEGES;```

- install phpmyadmin with apahce atau http
  - https://www.tecmint.com/install-phpmyadmin-rhel-centos-fedora-linux/
    ```bash
    sudo dnf install php php-mysqlnd php-json php-mbstring

    cd /var/www/html
    sudo wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.tar.gz
    sudo tar -xvzf phpMyAdmin-latest-all-languages.tar.gz

    sudo mv phpMyAdmin-*/ phpmyadmin
    sudo cp /var/www/html/phpmyadmin/config.sample.inc.php /var/www/html/phpmyadmin/config.inc.php
    ```
    - ubah file
      - ```sudo nano /var/www/html/phpmyadmin/config.inc.php```
        ```bash
        $cfg['blowfish_secret'] = 'your_secret';
        ```

- configure access
  ```bash
  sudo nano /etc/my.cnf.d/mariadb-server.cnf
  # bind-address=0.0.0.0
  
  sudo systemctl restart mariadb
  ```

- install phpmyadmin manual instalation

# sql command
## databases
```bash
CREATE DATABASE db_kucing;
DROP DATABASE db_test;

SHOW DATABASES;
USE db_kucing;
status
```

## tables
```bash
CREATE TABLE data_kucing (
  Id int,
  Nama varchar(300),
  Jenis char(300),
  Umur int
);


SHOW TABLES;
DESC table_kucing;
DESCRIBE data_kucing;

DROP TABLE data_test;
TRUNCATE TABLE data_test;

ALTER TABLE data_kucing
ADD power varchar(100) NOT NULL,
DROP COLUMN power;

ALTER TABLE data_kucing
MODIFY COLUMN umur varchar(2);
```

## INSERT
```bash
INSERT INTO data_kucing VALUES (1, “popy”, “jantan”, 15);
INSERT INTO data_kucing (id) values (1)
```

## select
```bash
SELECT * FROM data_kucing;

SELECT id, name FROM data_kucing;
SELECT id, nama FROM data_kucing WHERE “popy”;
SELECT id, nama FROM data_kucing WHERE umur > 15 AND jenis=”betina”;
SELECT id, nama FROM data_kucing WHERE umur > 15 ORDER BY umur;
SELECT id, nama FROM data_kucing WHERE umur > 15 ORDER BY nama ASC;
SELECT id, nama FROM data_kucing LIMIT 0,3;
```

## delete
```bash
DELETE FROM data_kucing WHERE umur=15;
DELETE FROM data_kucing WHERE id=1;
DELETE FROM data_kucing;
```

## update
```bash
UPDATE data_kucing SET nama=”aria”, warna=”putih” WHERE id=1;
```

## primary key and foreign key
```bash
CREATE TABLE owners (
  Id int NOT NULL,
  Age int,
  PRIMARY KEY (id)
)

CREATE TABLE data_kucing (
  Id_kucing int NOT NULL,
  id_owner int NOT NULL,
  Nama varchar(300) UNIQE,
  PRIMARY KEY (id_kucing),
  FOREIGN KEY (id_owner) REFERENCES owners(id)
)
```

## more type data
```bash
CREATE TABLE owners (
  Id int NOT NULL,
  Nama varchar(300),
  Age int,
  UNIQUE.  (Id),
  CHECK(id > 100)
  CONSTRAINT UC_Person UNIQUE (id, nama);
)
```

## test
```bash
AND OR NOT

NOT NULL - Ensures that a column cannot have a NULL value
UNIQUE - Ensures that all values in a column are different
PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
FOREIGN KEY - Prevents actions that would destroy links between tables
CHECK - Ensures that the values in a column satisfies a specific condition
DEFAULT - Sets a default value for a column if no value is specified
CREATE INDEX - Used to create and retrieve data from the database very quickly
```