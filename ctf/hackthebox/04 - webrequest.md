HTB{64$!c_cURL_u$3r}
HTB{p493_r3qu3$t$_m0n!t0r}
HTB{curl_g3773r}
HTB{p0$t_r3p34t3r}

curl -k https://inlanefreight.com # https
curl inlanefreight.com -v # verbose
curl -I https://www.inlanefreight.com # header

curl https://www.inlanefreight.com -A 'Mozilla/5.0'

curl -u admin:admin http://<SERVER_IP>:<PORT>/
curl http://admin:admin@<SERVER_IP>:<PORT>/

curl 'http://<SERVER_IP>:<PORT>/search.php?search=le' -H 'Authorization: Basic YWRtaW46YWRtaW4='
curl http://83.136.252.32:48596/search.php?search=flag -H 'Authorization: Basic YWRtaW46YWRtaW4='

curl -X POST -d 'username=admin&password=admin' http://<SERVER_IP>:<PORT>/
curl -X POST -d 'username=admin&password=admin' http://<SERVER_IP>:<PORT>/ -i # mendapatkan cookie
curl -b 'PHPSESSID=c1nsa6op7vtk7kdis7bcnbadf1' http://<SERVER_IP>:<PORT>/
curl -H 'Cookie: PHPSESSID=c1nsa6op7vtk7kdis7bcnbadf1' http://<SERVER_IP>:<PORT>/
curl -X POST -d '{"search":"london"}' -b 'PHPSESSID=c1nsa6op7vtk7kdis7bcnbadf1' -H 'Content-Type: application/json' http://<SERVER_IP>:<PORT>/search.php

curl -X POST -d '{"search":"flag"}' -b "PHPSESSID=7nbql3j3kn9e05g7augiapar80" -H "Content-Type: application/json" http://83.136.252.32:54898/search.php

curl -X PUT http://<SERVER_IP>:<PORT>/api.php/city/london ...SNIP...

curl http://<SERVER_IP>:<PORT>/api.php/city/london
[{"city_name":"London","country_name":"(UK)"}]

ariafatah@htb[/htb]$ curl -s http://<SERVER_IP>:<PORT>/api.php/city/london | jq
[
  {
    "city_name": "London",
    "country_name": "(UK)"
  }
]

curl -X POST http://<SERVER_IP>:<PORT>/api.php/city/ -d '{"city_name":"HTB_City", "country_name":"HTB"}' -H 'Content-Type: application/json'
curl -X PUT http://<SERVER_IP>:<PORT>/api.php/city/london -d '{"city_name":"New_HTB_City", "country_name":"HTB"}' -H 'Content-Type: application/json'zx

curl -X DELETE http://<SERVER_IP>:<PORT>/api.php/city/New_HTB_City