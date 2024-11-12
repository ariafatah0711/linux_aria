# ha proxy
- install
```sudo apt install haproxy```

- config load balance round robind
```vi /etc/haproxy/haproxy.cfg
frontend fe
        bind *:80
        default_backend be

backend be
        server server1 127.0.0.1:8081
        server server2 127.0.0.1:8082
```

- config load balance fail over
```
frontend fe
        bind *:80
        default_backend be

backend be
        balance roundrobin
        server server1 127.0.0.1:8081 check maxconn 30
        server server2 127.0.0.1:8082 backup
```

- config acl
```

#---------------------------------------------------------------------
# main frontend which proxys to the backends
#---------------------------------------------------------------------
frontend fe
        # balance       roundrobin
        bind    *:80

        acl ig path /ig
        # acl ig path_beg /ig
        use_backend ig_be if ig

        # acl static_files path_beg /css /js /images
        # use_backend be if static_files

        default_backend be

#---------------------------------------------------------------------
# static backend for serving up images, stylesheets and such
#---------------------------------------------------------------------
backend be
        server web1 127.0.0.1:8081 check
        server web2 127.0.0.1:8082 check
        server web3 127.0.0.1:8083 check

backend ig_be
        # http-request set-path /main.html if ig
        # http-request replace-path ^/ig /main.html if ig
        http-request set-uri /main.html
        server ig_aria 127.0.0.1:8000/main.html check
```

- path acl
```
frontend mysite
  bind :80

  # route to a backend based on path's prefix
  use_backend app-a if { path /a } || { path_beg /a/ }
  use_backend app-b if { path /b } || { path_beg /b/ }

backend app-a
  # strip the prefix '/a' off of the path
  # http-request replace-path /a(/)?(.*) /\2
  http-request replace-path ^/a(/.*)?$ /\1
  server server1 127.0.0.1:8080 check maxconn 30

backend app-b
  # strip the prefix '/b' off of the path
  http-request replace-path /b(/)?(.*) /\2
  server server1 127.0.0.1:8081 check maxconn 30
```