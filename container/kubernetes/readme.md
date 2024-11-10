# kubectl
```
# info
kubectl version

# get
kubectl get (nodes|node|no)
kubectl get (pods|pod)
kubectl get pod --all-namespace
kubectl get pod -o (wide|yaml)
kubectl get pods --show-labels

# describe
kubectl describe node <nama_node>
kubectl describe pod <nama_pod>

# create
kubectl create -f (filepod.yaml|filepod.json)

# port forwarding (hanya di development jika prod tidak digunakan)
kubectl port-forward <namapod> portLocal:portRemote
```

## label, annotation
- pod bisa diganti dengan ()
```
# add label, changem and find label
kubectl label pod <nama_pod> env=prod
kubectl label pod <nama_pod> env=dev --overwrite

kubectl get pods -l key
kubectl get pods -l key=value
kubectl get pods -l '!key'
kubectl get pods -l 'key!=value'
kubectl get pods -l 'key in (value1, value2)'
kubectl get pods -l 'key notin (value1, value2, value3)'
kubectl get pods -l key, key1=value1

# annotation
kubectl annotate pod <nama_pod> key=value --overwrite
```