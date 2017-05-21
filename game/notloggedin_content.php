<script type="text/ng-template" id="notloggedinTemplate">
<div id="login" ng-controller="login-controller">
    <div id="login_controls_wrapper">
        <div id="login_controls">
            <form>
                <div id="containerButton" class="login_input_box_container">
                    <input id="usernameButton" name="User name" type="text" ng-model="uEmailOrUsername" class="username_field" placeholder="{{ 'E54' | translate}}" required>                         
                    <input id="passwordButton" name="Password" type="password" ng-model="uPassword" class="password_field" placeholder="{{ 'E55' | translate}}" ng-keydown="$event.which === 13 && prelogin()" required>                          
                </div>
                <div class="button_holder">
                    <div class="login_buttons">
                        <a id="loginButton" ng-if="mobileResponsiveWidth == true" colorbox="login_modal.php" class="login_btn">{{ 'E14' | translate}}</a>
                        <a id="loginButton" ng-if="mobileResponsiveWidth == false" ng-click="prelogin()" class="login_btn">{{ 'E14' | translate}}</a>
                        <a id="registerButton" href="signup.php" class="register_btn">{{ 'E13' | translate}}</a>                                  
                    </div>
                </div>
                <ul class="language_btn"><li><a href="" ng-click="changeLanguage('en')" class="flag_eng">{{ 'E78' | translate}}</a>
                    <ul class="language_list">
                        <li><a href="" ng-click="changeLanguage('ru')" class="flag_rus">{{ 'E77' | translate}}</a></li>
                    </ul></li>
                </ul>
                <br/>
                <div id="login_options">
                    <table  border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td><a href="forgot_password.php">{{ 'E56' | translate}}</a></td>
                        </tr>
                    </table>
                </div>
            </form>
        </div>
    </div>
</div>
</script>