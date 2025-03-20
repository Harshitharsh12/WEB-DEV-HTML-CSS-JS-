<?php
$num=78;
$r;
$reverse=0;
while($num>0){
    $r=$num%10;
    $num= int($num/10);
    $reverse=$reverse*10+r;
}
echo 'the reverse of '.$temp.' is '.$reverse;
?>



