# kubectl
```bash
# info
kubectl version

# get
kubectl get (nodes|node|no)
kubectl get (pods|pod)
kubectl get pod --all-namespace
kubectl get pod -o (wide|yaml)
kubectl get pods --show-labels
kubectl get (namespaces|namespace|ns)

# delete
kubectl delete pod <namapod> | kubectl delete pod pod1 pod2
kubectl delete pod <namapod> --namespace <namespace>
kubectl delete pod -l key=value

kubectl delete namespace <namespace>
kubectl delete pod --all --namespace <namespace>

# describe
kubectl describe node <nama_node>
kubectl describe pod <nama_pod>

# create pod, namespace, etc
kubectl create -f (filepod.yaml|filepod.json)

# port forwarding (hanya di development jika prod tidak digunakan)
kubectl port-forward <namapod> portLocal:portRemote
```

## label, annotation, namespace
- pod bisa diganti dengan ()
```bash
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

## namespace
```bash
kubectl get (namespaces|namespace|ns)
kubectl get pod --namespace <namespace> | kubectl get pod -n <namespace>

# delete namespace beserta resource
# harus create namespace dulu pakae config.yaml, baru bisa masukin pod ke namespace
kubectl create -f config.yaml --namespace <namespac/e>
kubectl delete namespace <namespace>

# delete namespace without delete namespace
kubectl delete pod --all --namespace <namespace>
```

# probe
```

```