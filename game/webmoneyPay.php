<html>
    <head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css">
	<link rel="stylesheet" href="boilerplate.css">
	<link rel="stylesheet" href="shangrila.css">
    <link rel="stylesheet" href="shangrila_responsive.css">
    <link rel="stylesheet" href="casino.css">
    <link rel="stylesheet" href="casino_responsive.css">
    <link rel="stylesheet" href="account.css">
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale = 1.0">
    <script type="text/javascript" src="js/modernizr-1.6.min.js"></script>

    <script src="../js/jquery-2.1.0.min.js"></script>
    <script src="../js/angular-1.4.8.min.js"></script>
    <script src="../js/angular-sanitize.1.4.8.min.js"></script>
    
    <script src="js/gameFields.js"></script>
    <script src="js/utility.js"></script>
    <script src="js/variables.js"></script>
    <script src="js/session-mgr.js"></script>
    <script src="https://autobahn.s3.amazonaws.com/autobahnjs/latest/autobahn.min.jgz"></script>
    <script src="js/fortuna-rpc-app.js" type="text/javascript"></script>
    <script src="js/deposit-skrill-controller.js" type="text/javascript"></script>
    <script src="js/login-controller.js" type="text/javascript"></script>
    <script src="js/angular-translate.min.js"></script>
    <script src="js/translations.js"></script>

    <title>Shangri La Casino</title>    
    </head>
    <body ng-app="fortuna-rpc" ng-controller="deposit-skrill-controller">

	<div id="primary_wrapper" class="clearfix">
        <div id="header_bg" class="clearfix">
            <div id="header_top" class="clearfix">
                <div id="logo" class="clearfix">
                	<h1>SHANGRI LA</h1>
                    <h4>ONLINE CASINO &amp; SPORTS BOOK</h4>
                </div>                
            </div>
        </div>
		<div id="content_wrapper">
        	<div id="content" class="clearfix">
            	<div class="gen_container" id="help_container">
            	<div id="account_right">
                        <h5>{{ 'E231' | translate }} - {{depositName}}</h5>
                        <div class="account_content" id="account_content_00_2"> 
                            <table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0" class="system_rspns_tab"><tbody>
                            	<tr>
                            		<td>
                            			<div id="pForm"></div>
                            			<iframe></iframe>
                            		</td>
                            		<td>
                            			{{ 'E257a' | translate }}
                            		</td>
                            	</tr>
                            	<tr>
                            		<td colspan="2" ng-bind-html="pForm"></td>
                            	</tr>
                            </tbody></table>                            
                            <a class="green_btn">{{ 'E258' | translate }}</a>
                        </div>
                    </div>

            	</div>
            </div>
        </div>
     </div>
    </body>
</html>
