<!doctype html>
<html>
<head>
    <script src="../js/jquery-2.1.0.min.js"></script>
    <script src="../js/angular-1.4.8.min.js"></script>
    <script src="../js/angular-sanitize.1.4.8.min.js"></script>
    <link rel="stylesheet" href="colorbox.css">
    <script src="js/gameFields.js"></script>
    <script src="js/utility.js"></script>
    <script src="js/variables.js"></script>
    <script src="js/session-mgr.js"></script>
    <script src="https://autobahn.s3.amazonaws.com/autobahnjs/latest/autobahn.min.jgz"></script>
    <script src="js/fortuna-rpc-app.js" type="text/javascript"></script>
    <script src="js/casino-controller.js" type="text/javascript"></script>
    <script src="js/login-controller.js" type="text/javascript"></script>
    <script src="js/angular-translate.min.js"></script>
    <script src="js/translations.js"></script>
    
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css">
    <link rel="stylesheet" href="boilerplate.css">
    <link rel="stylesheet" href="shangrila.css">
    <link rel="stylesheet" href="shangrila_responsive.css">
    <link rel="stylesheet" href="casino.css">
    <link rel="stylesheet" href="casino_responsive.css">
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale = 1.0">
    <script type="text/javascript" src="js/modernizr-1.6.min.js"></script>
<meta charset="utf-8">
<title>Shangri La Casino</title>
<link href="mobileInGame.css" rel="stylesheet" type="text/css">
</head>

<body ng-app="fortuna-rpc" ng-controller="casino-controller" ng-init="mobileGame()" ng-cloak>
 	<div id="background_container" style="display: block;" ng-controller="login-controller">  
 		<object  id="main_game_container" data=""></object>                                          
    </div>
</body>
</html>
