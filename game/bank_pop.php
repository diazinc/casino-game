<!DOCTYPE html>
<html>
    <head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css">
	<link rel="stylesheet" href="boilerplate.css">
	<link rel="stylesheet" href="shangrila.css">
    <link rel="stylesheet" href="shangrila_responsive.css">
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale = 1.0">
    <script type="text/javascript" src="js/modernizr-1.6.min.js"></script>

    <script src="../js/jquery-2.1.0.min.js"></script>
    <script src="../js/angular-1.4.8.min.js"></script>
    <script src="../js/angular-sanitize.1.4.8.min.js"></script>
    <link rel="stylesheet" href="colorbox.css">
    <script src="https://autobahn.s3.amazonaws.com/autobahnjs/latest/autobahn.min.jgz"></script>
    <script src="js/fortuna-rpc-app.js" type="text/javascript"></script>
    <script src="js/login-controller.js" type="text/javascript"></script>

    <title>Shangri La Casino</title>    
    </head>
    <body ng-app="fortuna-rpc">
	<?php
		print $_GET["form"];
	?>
	<form id="depositForm" name="depositForm" action="https://test.envoytransfers.com" method="post" target="_self">
	<input type="hidden" name="merchantID" value="000366ODM" /><input type="hidden" name="customerRef" value="ODMEUA049NUK" />
	<input type="hidden" name="email" value="clint@webactive8.co.za" />
	<input type="hidden" name="country" value="RU" />
	<input type="hidden" name="receiveCurrency" value="EUR" /><input type="hidden" name="service" value="WEBMONEY" /><input type="hidden" name="uid" value="991e6439aa2b4b3284bf5934ef447505"/></form>
   </body>
</html>