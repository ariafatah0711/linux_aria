# cockpit
- [https://cockpit-project.org/running.html](https://cockpit-project.org/running.html)

## ubuntu
```bash
sudo apt install -t ${VERSION_CODENAME}-backports cockpit
```

## tool
### podman
```bash
sudo apt install cockpit-podman
sudo systemctl enable --now cockpit.socket
sudo systemctl restart cockpit.socket
```

### error tls / ssl for tunnel cockpit
```bash
# sudo apt install sscg
# sudo systemctl restart cockpit

sudo cat > /etc/cockpit/cockpit.conf << EOF
[WebService]
AllowedOrigins = *
EOF

sudo systemctl restart cockpit
```