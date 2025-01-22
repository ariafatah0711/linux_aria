# setup
yum install podman haproxy named
firewall-cmd --add-port={22/tcp,53/tcp,53/udp,80tcp,443/tcp,8080-8090/tcp} --permanent
firewall-cmd --add-service=dns --permanent
firewall-cmd --reload

# podman
cd /home/aria
mkdir web1 web2 && echo "web1" > web1/index.html && echo "web2" > web2/index.html

podman run -d --name web1 -p 8081:80 -v ./web1:/usr/share/nginx/html:Z nginx
podman run -d --name web2 -p 8082:80 -v ./web2:/usr/share/nginx/html:Z nginx

# haproxy
cd /etc/haproxy/

cat >> haproxy.cfg << EOF
frontend fe
    bind *:80
    default_backend be
backend be
    balance roundrobin
    server node1 localhost:8081
    server node2 localhost:8082
EOF

systemctl enable --now haproxy
systemctl start haproxy
systemctl restart haproxy
