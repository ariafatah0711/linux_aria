# firewall

## firewall-cmd
```bash
firewall-cmd --permanent --add-port=1000-1100/tcp
firewall-cmd --permanent --add-port={80/tcp,443/tcp}
firewall-cmd --add-port=8080-8090/tcp
firewall-cmd --permanent --add-port=21/tcp
firewall-cmd --permanent --add-service=dns
firewall-cmd --permanent --remove-port=21/tcp

firewall-cmd --reload
firewall-cmd --list-ports

firewall-cmd --new-zone=

firewall-cmd --zone=public --add-port=8080-8090/tcp --permanent
```

## ufw
```bash
ufw status
ufw enable
ufw disable
ufw allow 23
```

## ip tables
```bash
iptables -A INPUT -p tcp --dport 22 -j ACCEPT # allow port 22
iptables -A INPUT -p tcp -m tcp --dport 80 -j ACCEPT

# -p or --protocol	Specifies the protocol to match (e.g. tcp, udp, icmp)
# --dport	Specifies the destination port to match
# --sport	Specifies the source port to match
# -s or --source	Specifies the source IP address to match
# -d or --destination	Specifies the destination IP address to match
# -m state	Matches the state of a connection (e.g. NEW, ESTABLISHED, RELATED)
# -m multiport	Matches multiple ports or port ranges
# -m tcp	Matches TCP packets and includes additional TCP-specific options
# -m udp	Matches UDP packets and includes additional UDP-specific options
# -m string	Matches packets that contain a specific string
# -m limit	Matches packets at a specified rate limit
# -m conntrack	Matches packets based on their connection tracking information
# -m mark	Matches packets based on their Netfilter mark value
# -m mac	Matches packets based on their MAC address
# -m iprange	Matches packets based on a range of IP addresse
```