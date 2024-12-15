# vbox_disk
- https://www.pragmaticlinux.com/2020/09/how-to-increase-the-disk-size-in-a-virtualbox-virtual-machine/

- click tools > media , and chose u disk
- chnage the memory to ur want
- open machine
  - lsbk -p | grep "disk"
  - lsbk -p | grep "part"
- if u have gprated u can install and add in ide partisi
- pindahin alocated ke extend dev2,
- lalu dari situ tambahin yang dev5 yaitu sswap tapi yang free storage
- lalu kecilini partisi extend dev2
- lalu tambahin deh yang dev1
- aply lalu aktifkan dev5 ke swap dan restart