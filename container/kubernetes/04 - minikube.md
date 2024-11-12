## install kubernetes node with minikube
- installation on wsl
```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
minikube start --driver=docker
```

- restart after reboot
    ```
    ./minkube start
    ```

## upgrade minikube
- update: https://github.com/kubernetes/minikube
```
# update, jika ada versi terbaru silakan download di website resminya gitunya: https://github.com/kubernetes/minikube
minikube update-check

# stop, hapus
minikube stop
minikube delete 

# menjalankan minikube
minikube start --vm-driver=(virtualbox|docker)
minikube start --vm-driver=virtualbox --cpus=2 --memory=2g --disk-size=20g
```

## service
```
minikube service <name-service>
minikube service list
```