# pod
- unit terkecil yang bisa kita deploy di kubernetes cluster
- pod berisi satu atau lebih container
- secara sederhana pod adalah aplikasi kita yang running di kubernetes cluster
    - pod hanya bisa di deploy di 1 node tidak bisa dibagi bagi
- jika kita langsung menggunakan container. nanti kita hanya bisa pake satu spesifik container saja seperti docker makanya kita butuh pod
    - seperti kita ingin scalling aplikasi ke aplikasi yang lainya

```
kubectl get pod
kubectl describe pod <nama_pod>
```

# create pod
- create configuration file
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod-name
spec:
  containers:
    - name: container-name
      image: image-name
      ports:
        - containerPort: 80
```

- example nginx
```yaml
apiVersion: v1
kind: pod
metadata:
    name: nginx
spec:
    containers:
        - name: nginx
          image: nginx
          ports:
            - containerPort: 80
        # - name: nginx
        #   image: nginx
        #   ports:
        #     - containerPort: 80
```

- create pod
```
kubectl create -f filepod.yaml
kubectl create -f filepod.json

# Create a pod based on the JSON passed into stdin
cat pod.json | kubectl create -f -

# Edit the data in registry.yaml in JSON then create the resource using the edited data
kubectl create -f registry.yaml --edit -o json
```

- akses pod
```
kubectl port-forward <namapod> portLocal:portRemote
kubectl port-forward nginx 8881:80
```