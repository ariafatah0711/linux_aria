# install kubectl for kubernetes master
- digunakan untuk berinteraksi dengan cluster
- install 
    ```
    sudo snap install kubectl
    ./kubectl version
    ```

# install kubernetes node
- minikube with virtual box
    ```
    ./minkube start
    ```

# install kubenetes node with minkube
- on wsl
- minikube on wsl => https://github.com/dubeytapan12/RunK8sOnWSL
```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
minikube start --driver=docker
```


# install kubernetes node with kind (kubernetes in docker)
- https://kind.sigs.k8s.io/docs/user/quick-start/
```
curl -Lo ./kind https://kind.sigs.k8s.io/dl/latest/kind-linux-amd64
sudo install -o root -g root -m 0755 kind /usr/local/bin/kind

kind create cluster
```
- k3s
```
curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash
k3d cluster create mycluster
```