- install
```
sudo dnf install freeipa-server
sudo hostnamectl set-hostname ariafatah.ipa.com
```
- etc/hosts
```
192.168.12.99 ariafatah.ipa.com ariafatah
```

# server
- install ipa-server
```
sudo ipa-server-install 

The log file for this installation can be found in /var/log/ipaserver-install.log
==============================================================================
This program will set up the IPA Server.
Version 4.12.1

This includes:
  * Configure a stand-alone CA (dogtag) for certificate management
  * Configure the NTP client (chronyd)
  * Create and configure an instance of Directory Server
  * Create and configure a Kerberos Key Distribution Center (KDC)
  * Configure Apache (httpd)
  * Configure SID generation
  * Configure the KDC to enable PKINIT

To accept the default shown in brackets, press the Enter key.

Do you want to configure integrated DNS (BIND)? [no]: 

Enter the fully qualified domain name of the computer
on which you're setting up server software. Using the form
<hostname>.<domainname>
Example: master.example.com


Server host name [ariafatah.ipa.com]: 

The domain name has been determined based on the host name.

Please confirm the domain name [ipa.com]: 

The kerberos protocol requires a Realm name to be defined.
This is typically the domain name converted to uppercase.

Please provide a realm name [IPA.COM]: 
Certain directory server operations require an administrative user.
This user is referred to as the Directory Manager and has full access
to the Directory for system management tasks and will be added to the
instance of directory server created for IPA.
The password must be at least 8 characters long.

Directory Manager password: 
Password (confirm): 

The IPA server requires an administrative user, named 'admin'.
This user is a regular system account used for IPA server administration.

IPA admin password: 
Password (confirm): 

Trust is configured but no NetBIOS domain name found, setting it now.
Enter the NetBIOS name for the IPA domain.
Only up to 15 uppercase ASCII letters, digits and dashes are allowed.
Example: EXAMPLE.


NetBIOS domain name [IPA]: 

Do you want to configure chrony with NTP server or pool address? [no]: 

The IPA Master Server will be configured with:
Hostname:       ariafatah.ipa.com
IP address(es): 192.168.12.99
Domain name:    ipa.com
Realm name:     IPA.COM

The CA will be configured with:
Subject DN:   CN=Certificate Authority,O=IPA.COM
Subject base: O=IPA.COM
Chaining:     self-signed

Continue to configure the system with these values? [no]: yes

The following operations may take some minutes to complete.
Please wait until the prompt is returned.

Disabled p11-kit-proxy
Synchronizing time
No SRV records of NTP servers found and no NTP server or pool address was provided.
Using default chrony configuration.
Attempting to sync time with chronyc.
Time synchronization was successful.
Configuring directory server (dirsrv). Estimated time: 30 seconds
  [1/42]: creating directory server instance
Validate installation settings ...
Create file system structures ...
Perform SELinux labeling ...
```

- firewall
```
firewall-cmd --add-service=freeipa-ldap --add-service=freeipa-ldaps --permanent
firewall-cmd --add-port={80/tcp,443/tcp}
firewall-cmd --reload
```

# client
- install ipa client
