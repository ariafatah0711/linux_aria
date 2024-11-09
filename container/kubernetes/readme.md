# kubectl
```
# info
kubectl version

# get
kubectl get (nodes|node|no)
kubectl get (pods|pod)
kubectl get pod --all-namespace
kubectl get pod -o (wide|yaml)

# describe
kubectl describe node <nama_node>
kubectl describe pod <nama_pod>

# create
kubectl create -f (filepod.yaml|filepod.json)

# port forwarding (hanya di development jika prod tidak digunakan)
kubectl port-forward <namapod> portLocal:portRemote
```