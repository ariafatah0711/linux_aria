# ha proxy
- High Availability Proxy

# haproxy
- install
  - ```sudo apt install haproxy```

- config
  - ```vi /etc/haproxy/haproxy.cfg```

# configuration haproxy
## template
```bash
frontend fe
        bind *:80
        default_backend be

backend be
        balance roundrobin
        server server1 127.0.0.1:8081
        server server2 127.0.0.1:8082
```

## backup, check
```bash
backend be
        server server1 127.0.0.1:8081 check maxconn 30
        server server2 127.0.0.1:8082 backup
```

## weight => berapa kali koneksi di satu sever
```bash
backend be
    server  app1 127.0.0.1:8081 check weight 3
    server  app1_ 127.0.0.1:8082 check weight 1
```

## acl
```bash
frontend fe
    bind *:80
    use_backend app-a if { path /a } || { path_beg /a/ }
    use_backend app-b if { path /b } || { path_beg /b/ }

    acl ig path /ig
    # acl ig path_beg /ig
    use_backend ig_be if ig

backend app-a
    # http-request replace-path /a(/)?(.*) /\2
    http-request replace-path ^/a(/.*)?$ /\1
    server server1 127.0.0.1:8080 check maxconn 30

backend app-b
    # strip the prefix '/b' off of the path
    http-request replace-path /b(/)?(.*) /\2
    server server1 127.0.0.1:8081 check maxconn 30

backend ig
    http-request set-uri /main.html
    server ig_aria 127.0.0.1:8000/main.html check
```

## stats
```bash
frontend stats
        bind *:8080 # Listening port. A different port can also be used.
        mode http
        stats enable  # This enables the stats page
        # stats hide-version
        # stats realm Haproxy\ Statistics  # A custom title for the stats window
        stats uri /stats  # A custom URI for the stats page
        # stats auth admin:admin # Login credentials
```

## backups with many backup
```bash
backend app
    balance     roundrobin
    option      allbackups
    server  app1 127.0.0.1:8081 check
    server  app2 127.0.0.1:8082 check backup
    server  app3 127.0.0.1:8083 check backup
```

## http response status
### config error
```bash
defaults
    errorfile 503 /etc/haproxy/error/503.http

frontend fe
    errorfiles err
    http-response return  status 404  default-errorfiles  if { status 404 }

http-errors err
    errorfile 404 /etc/haproxy/error/404.http
```

### error config 404.http
```bash
HTTP/1.1 403 Forbidden
Cache-Control: no-cache
Connection: close
Content-Type: text/html

<!DOCTYPE html>
<html>
   <body>
      <h1>403 Forbidden</h1>
      <p>Sorry, but you are not authorized to view this page.</p>
   </body>
</html>
```

## selinux
- [https://man.docs.euro-linux.com/EL%206%20ELS/selinux-policy-doc/haproxy_selinux.8.en.html](https://man.docs.euro-linux.com/EL%206%20ELS/selinux-policy-doc/haproxy_selinux.8.en.html)
### not permanent
```bash
sudo semanage permissive -a haproxy_t
```

### permanent
```bash
cat > haproxy_permissive.te <<EOF
module haproxy_permissive 1.0;

require {
    type haproxy_t;
}

permissive haproxy_t;
EOF

checkmodule -M -m -o haproxy_permissive.mod haproxy_permissive.te
semodule_package -o haproxy_permissive.pp -m haproxy_permissive.mod
semodule -i haproxy_permissive.pp
```