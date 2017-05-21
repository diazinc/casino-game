<script type="text/ng-template" id="loggedinTemplate">
<div id="loggedin" ng-app="fortuna-rpc" ng-controller="login-controller">
    <div id="login_controls_wrapper">
        <div id="login_controls">
            <form>
                <div class="button_holder">
                    <div class="login_buttons">
                        <a id="depositButton" href="account_deposit.php" class="login_btn">{{ 'E231' | translate}}</a>
                        <a id="myaccountButton" href="account_4_1.php" class="login_btn">{{ 'E16' | translate}}</a> 
                        <a id="logoutButton" ng-click="logout()" class="register_btn">{{ 'E17' | translate}}</a>                                          
                    </div>
                </div>
                <ul class="language_btn none_display_login">
					<li><a href="" class="flag_eng">{{ 'E78' | translate}}</a>
                    <ul class="language_list">
                        <li><a href="" ng-click="changeLanguage('ru')" class="flag_rus">{{ 'E77' | translate}}</a></li>
                    </ul></li>
                </ul>
                <br/><div id="usernametext">
                <img id="userIcon" src="img/ui/user_icon.png"/>
                <a id="userName" href="account_4_1.php" class="green_text" ng-bind-template="{{ 'E15' | translate}}, {{uEmailOrUsername | uppercase}}"></a> </div>
                <div id="balancetext"> 
                    <a id="mainText" href="" ng-bind-template="{{ 'E18' | translate}}: {{currency}} {{balance | number:2}}"></a><br/>
                    <a id="bonusText" href="" ng-if="bonus != 0 && bonus != ''" ng-bind-template="{{ 'E19' | translate}}: {{currency}} {{bonus | number:2}}"></a>
					<a id="bonusText" href="" ng-if="sportsBonus != 0" ng-bind-template="{{ 'E20' | translate}}: {{currency}} {{sportsBonus | number:2}}"></a>
                </div>
                <div id="user_panel_dropdown_container">
                  <ul id="user_panel_dropdown"><a href="#"><img src="img/ui/chevron_dropdown.png" width="15" height="8" alt=""/> USER CONTROLS</a>
                    <li><a href="account_deposit.php">{{ 'E231' | translate}}</a></li>
                    <li><a href="account_4_1.php">{{ 'E16' | translate}}</a></li>
                    <li><a href="" ng-click="logout()">{{ 'E17' | translate}}</a></li>
                  </ul>
                </div>
            </form>
        </div>
    </div>
</div>
</script>