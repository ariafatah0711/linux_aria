# modevasive

## log percobaan DOS yang dibuat sendiri
/usr/share/doc/libapache2-mod-evasive/examples/test.pl

```
#!/usr/bin/perl

# test.pl: a small perl script that test's mod_dosevasive's effectiveness

use IO::Socket;
use strict;

for(0..100) {
  my($response);
  my($SOCKET) = new IO::Socket::INET( Proto   => "tcp",
                                      PeerAddr=> "127.0.0.1:80");
  if (! defined $SOCKET) { die $!; }
  print $SOCKET "GET /?$_ HTTP/1.0\r\nHost: 127.0.0.1\r\n\r\n";
  $response = <$SOCKET>;
  print $response;
  close($SOCKET);
}
```
perl /usr/share/doc/libapache2-mod-evasive/examples/test.pl

## Instalasi Konfigurasi Module ModEvasive
yum install mod_evasive
nano /etc/httpd/conf/httpd.conf
```
LoadModule evasive20_module modules/mod_evasive24.so

<IfModule mod_evasive24.c>
    DOSHashTableSize 3097
    DOSPageCount 2
    DOSSiteCount 50
    DOSPageInterval 1
    DOSSiteInterval 1
    DOSBlockingPeriod 10
    DOSEmailNotify you@example.com
    DOSLogDir "/var/log/httpd/evasive"
</IfModule>
```

## Customisasi Parameter ModEvasive
