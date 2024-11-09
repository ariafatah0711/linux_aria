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

```