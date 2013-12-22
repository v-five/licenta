<script type="text/javascript">
  window.location.reload()
</script>

<?php

$page = $_POST['link'];

echo $page;

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $page);
curl_exec($ch);
curl_close($ch);
?>