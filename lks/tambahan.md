ssh user@ip -x "perintah1; perintah2"

tcp wraper
nano /etc/hosts.allow
```
# Allow access to SSH from the local network
sshd : 10.129.14.0/24

# Allow access to FTP from a specific host
ftpd : 10.129.14.10

# Allow access to Telnet from any host in the inlanefreight.local domain
telnetd : .inlanefreight.local
```
nano /etc/hosts.deny
```
# Deny access to all services from any host in the inlanefreight.com domain
ALL : .inlanefreight.com

# Deny access to SSH from a specific host
sshd : 10.129.22.22

# Deny access to FTP from hosts with IP addresses in the range of 10.129.22.0 to 10.129.22.255
ftpd : 10.129.22.0/24
```

# menambahkan fungstion pada nodejs
```
const sanitizeHtml = require('sanitize-html');
```

```
<script>
    const name = new URLSearchParams(window.location.search).get('name');
    // Escape the user input to prevent XSS attacks
    const escapedName = encodeURIComponent(name);
    document.getElementById("greeting").textContent = "Hello, " + escapedName;
</script>
```