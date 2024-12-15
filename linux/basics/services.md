# services
## /etc/init
### /etc/init.d (ubuntu, debian)
```bash
sudo /etc/init.d/<nama-service> status
sudo /etc/init.d/<nama-service> restart
sudo /etc/init.d/<nama-service> stop

ls /etc/init.d
```

### /etc/rc.d/init.d (cent, redhat)
```bash
ls /etc/init.d
```

## service
```bash
service --status-all
service <nama-service> status
service <nama-service> start | restart | stop
```

## systemctl
```bash
systemctl daemon-reload
systemctl restart <nama-service>

sudo systemctl enable <nama-service>

systemctl is-active <nama-service>
systemctl list-unit-files --type=service | grep enabled
```