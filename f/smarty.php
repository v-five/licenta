<?php
$link1 = $_POST['link'];
$link="f=h&lc=en&lc_cc=GB&s=1&where=".$link1;


print_r ($link);
echo "<br/><br/><br/><br/>";

$page = "http://uk.bestfares.amadeus.net/f/smarty";

$ch = curl_init();
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 GTB5');
curl_setopt($ch, CURLOPT_URL, $page);
curl_setopt($ch, CURLOPT_HEADER, 0); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $link);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
$data = curl_exec($ch);
curl_close($ch);
echo ($data);
$myFile = "smarty";
$fh = fopen($myFile, 'w') or die("can't open file");
//$stringData = "Bobby Bopper\n";
fwrite($fh, $data);
//$stringData = "Tracy Tanner\n";
//fwrite($fh, $stringData);
fclose($fh);
?>