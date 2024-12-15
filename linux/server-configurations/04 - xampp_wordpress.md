# xamp
## installation
```bash
wget https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/8.0.30/xampp-linux-x64-8.0.30-0-installer.run
chmod +x xampp-linux-x64-8.0.30-0-installer.run
sudo ./xampp-linux-x64-8.0.30-0-installer.run

cd /opt/lamp
sudo ./manager-linux-x64.run 

cd /opt/lamp/htdocs
cp -r ~/wordpress /opt/lamp/htdocs 

# mysql
mysql -u root -P 3306 -p
pass: blank
```

# worpress
## installation
```bash
apt install php libapache2-mod-php php-mysql
mkdir -p /var/www/html/wordpress

chmod 777 /var/www/html/wordpress
## OR
sudo chown www-data: /var/www/html/wordpress/

apt install mariadb-server

mysql_secure_installation
    current_pass: ukk12345
    : y
    pass        : ukk12345
    retry pass  : ukk12345
    rm anonymous: y
    disallow    : y
    rm test db  : y
    reload priv : y
```

## create user, and db
```bash
mysql -u root -p 
pass: ukk12345

# maria-db
create database wordpress;
create user 'aria'@'localhost' identified by 'UKK12345';
grant all privileges on *.* to'aria'@'localhost';
flush privileges;
quit
```

## installation wordpress
```bash
# go https://wordpress.org/download/
wget https://wordpress.org/latest.zip
unzip latest.zip -d /var/www/html/

## OR
```

## setup wordpress
```bash
cd /var/www/html/wordpress
cp wp-config-sample.php wp-config.php

vi wp-config.php
#####
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'aria' );

/** Database password */
define( 'DB_PASSWORD', 'UKK12345' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );
#####
```

## setup apache
```bash
sudo vi /etc/apache2/sites-available/000-default.conf
###
DocumentRoot /var/www/html/wordpress
###
```

## restart configuration
```bash
a2enmod rewrite
systemctl restart apache2
```

- go page
- install wordpress
  - Site Title: UKK_TKJ_ARIA
  - Username  : 
  - Password  : 
  - email     : 