# ha proxy
- install
```sudo apt install haproxy```
- config
```
vi /etc/haproxy/haproxy.cfg
```

## template
```
frontend fe
        bind *:80
        default_backend be

backend be
        balance roundrobin
        server server1 127.0.0.1:8081
        server server2 127.0.0.1:8082
```

## backup, check
```
backend be
        server server1 127.0.0.1:8081 check maxconn 30
        server server2 127.0.0.1:8082 backup
```

## weight => berapa kali koneksi di satu sever
```
backend be
    server  app1 127.0.0.1:8081 check weight 3
    server  app1_ 127.0.0.1:8082 check weight 1
```

# frontend acl
## acl
```
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

- stats
```
frontend stats
        bind *:8080 # Listening port. A different port can also be used.
        mode http
        stats enable  # This enables the stats page
        # stats hide-version
        # stats realm Haproxy\ Statistics  # A custom title for the stats window
        stats uri /stats  # A custom URI for the stats page
        # stats auth admin:admin # Login credentials
```

- backups with many backup
```
backend app
    balance     roundrobin
    option      allbackups
    server  app1 127.0.0.1:8081 check
    server  app2 127.0.0.1:8082 check backup
    server  app3 127.0.0.1:8083 check backup
```