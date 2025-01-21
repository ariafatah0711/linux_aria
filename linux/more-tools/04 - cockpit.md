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