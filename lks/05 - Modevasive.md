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

## Customisasi Parameter ModEvasive
