<cms:template title='Sportsbook'>
<!-- LOGGED IN BANNERS -->
<cms:editable name='LoggedIn_image1' label='LoggedIn Image 1' desc='Upload image here' type="image" />
<cms:editable name='loginBannerLink1' label='Link for Banner1' desc='URL when banner clicked' type="text" />

<cms:editable name='LoggedIn_image2' label='LoggedIn Image 2' desc='Upload image here' type="image" />
<cms:editable name='loginBannerLink2' label='Link for Banner2' desc='URL when banner clicked' type="text" />

<cms:editable name='LoggedIn_image3' label='LoggedIn Image 3' desc='Upload image here' type="image" />
<cms:editable name='loginBannerLink3' label='Link for Banner3' desc='URL when banner clicked' type="text" />



<!-- LOGGED OUT BANNERS -->
<cms:editable name='LoggedOut_image1' label='LoggedOut Image 1' desc='Upload image here' type="image" />
<cms:editable name='logoutBannerLink1' label='Link for Banner1' desc='URL when banner clicked' type="text" />

<cms:editable name='LoggedOut_image2' label='LoggedOut Image 2' desc='Upload image here' type="image" />
<cms:editable name='logoutBannerLink2' label='Link for Banner2' desc='URL when banner clicked' type="text" />

<cms:editable name='LoggedOut_image3' label='LoggedOut Image 3' desc='Upload image here' type="image" />
<cms:editable name='logoutBannerLink3' label='Link for Banner3' desc='URL when banner clicked' type="text" />


</cms:template>

<!DOCTYPE html>
<html>
    <head>
   		<?php include('sportsbook_div_head.php'); ?>
    </head>
    <body ng-app="fortuna-rpc"  ng-controller="sportsbook-controller" ng-cloak>

	<!-- HEADER START -->
   <!-- This code must be installed within the body tags -->
    <script type="text/javascript" src="js/lhn.js"></script>
    <a href="http://www.livehelpnow.net/products/live-chat-system" target="_blank" style="font-size:10px;" id="lhnHelp"></a>
    <script src="//www.livehelpnow.net/lhn/widgets/chatbutton/lhnchatbutton-current.min.js" type="text/javascript" id="lhnscript"></script>

    <div id="modal_mask" class="clearfix"></div>
	<div id="primary_wrapper" class="clearfix">
    <div id="primary_container" class="clearfix">
        <div id="header_bg" class="clearfix">
        <?php include('sportsbook_div_header.php'); ?>
        <!-- HEADER END -->
        
        <!-- MENU START -->
        <?php include('sportsbook_div_mainmenu.php'); ?>
     	<!-- MENU END -->
        
        <div id="content_wrapper">
          <div id="content" class="clearfix">
            	<?php include('sportsbook_div_leftpanel.php'); ?>
            	
            	
                <div id="sports_menu_more"><a href="#"><div class="sport_ico_more"></div><span>MORE</span></a>
                    <ul id="sports_sub_menu">
                        <li id="sports_sub_menu_1"><a href="sportsbook.php" class="selected"><span>HOME</span></a></li>
                        <li id="sports_sub_menu_2"><a href="#"><span>LIVE IN-PLAY</span></a></li>               
                        <li ng-repeat="sport in disciplines" ng-click="setNewDiscipline(sport.id)" id="{{sport.menu}}"><a href=""><span>{{sport.name | uppercase}}</span></a></li>
                    </ul>
                </div>
                <div id="sports_menu_betslip"><a href="#" onClick="document.getElementById('betslip_panel').style.display='block'; document.getElementById('modal_mask').style.display='block'"><div class="sport_ico_betslip"></div><span>BETSLIP</span></a></div>
                
                <div id="center_panel"  class="clearfix">
                     <div id="slider_wrapper" class="clearfix" ng-controller="login-controller" ng-init="checkIfLoggedIn()">
                        <ng-include src="banner"></ng-include>
                    </div>

                    <!-- inject here -->
                    
                    <div class="sports_book_board" ng-init="getLiveMatches()"><div class="header_holder"><h4><a href="#" style="text-decoration: underline">LIVE IN-PLAY</a></h4></div> <!-- colored bar -->
                        <ul class="board_filter noJS">
                            <li ng-init="getDisciplines()">
                                <a onClick="return true"><div class="tiny_menu_ico filter_list_ico"></div><span class="left_25px">SELECT</span></a>
                            	<ul id="sports_filter_list_1" class="dropdown_list">
                                    <li ng-repeat="sport in disciplines" ng-if="sport.name == 'Football' || sport.name == 'Tennis'" ng-click="getLiveMatches(sport.id)" id="{{sport.menu}}">
                                        <a  href="#"><span>{{sport.name | uppercase}}</span></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>



                        <div class="toggle_box" ng-repeat="match in liveMatches | filter:{data: {isAvailable: true} } | limitTo:20">
							<div class="toggle_item">
                            	<table border="0" cellspacing="0" cellpadding="5px" class="toggle_box_label_info">
                                	<tr>
                                    	<td class="game_odds">{{match.homeGlobalScore}}-{{match.awayGlobalScore}}</td><td ng-bind="match.currentTime || '00:00'" class="game_time"> </td>
                                        <td class="game_markets_btn"><a ng-click="gotoOddsPage(match.id)" class="green_btn responsive_btn_1000"><img src="img/sportsbook/ico_arrow.png" width="9" height="15" alt="" class="reveal_1000"/><span>20 MARKETS &gt;</span></a></td>
                                  	</tr>
                              	</table>
                              	<input type="checkbox" id="toggle_box_label_0_{{$index}}" class="toggle_box_label_name"/>
                                <label class="toggle_box_label" for="toggle_box_label_0_{{$index}}"><div class="toggle_box_title_holder"><span ng-bind-template="{{match.homeParticipantName}} vs {{match.awayParticipantName}}" class="toggle_box_title"></span></div></label>
                              	<div class="expand_chevron"></div><div class="{{liveIcon}} game_list_ico"></div><div class="hidden_content">
                                	<table width="100%" border="0" cellspacing="0" cellpadding="5px" class="bet_select_buttons">
                                    	<tr>	
                                        	<td width="38%"><input type="radio" ng-model="value" ng-change="addBet(match.data.odds.home)" name="game_group_0_{{$index}}" id="game_0_{{$index}}_1" value="{{match.priceHome}}" class="bet_select_btn"><label for="game_0_{{$index}}_1"><span class="bet_select_name">{{match.homeParticipantName}}</span><span class="bet_select_odds">{{match.priceHome | number: 2}}</span></label></td>
                                          	<td width="auto"><input type="radio" ng-model="value" ng-change="addBet(match.data.odds.draw)"  name="game_group_0_{{$index}}"  id="game_0_{{$index}}_2" value="{{match.priceDraw}}" class="bet_select_btn"><label for="game_0_{{$index}}_2"><span class="bet_select_name middle_bet_select_column">DRAW</span> <span class="bet_select_odds">{{match.priceDraw | number: 2}}</span></label></td>
                                         	<td width="38%"><input type="radio" ng-model="value" ng-change="addBet(match.data.odds.away)"  name="game_group_0_{{$index}}"  id="game_0_{{$index}}_3" value="{{match.priceAway}}" class="bet_select_btn"><label for="game_0_{{$index}}_3"><span class="bet_select_name">{{match.awayParticipantName}}</span><span class="bet_select_odds">{{match.priceAway | number: 2}}</span></label></td>
                                      	</tr>
                                  	</table>
                              	</div>
                            </div>
                               
                        </div>     
                    </div>
                    
                    <!-- inject here -->
                    <div class="sports_book_board" ng-init="getUpcomingMatches()"><div class="header_holder"><h4><a href="#" style="text-decoration: underline">UPCOMING EVENTS</a></h4></div> <!-- colored bar -->
                        <ul class="board_filter noJS dropdown_list" id="sports_filter_list_2">
                            <li data-toggle="collapse" data-target=".nav-collapse">
                                <a ng-click="setNewDisciplineBetCat(disciplineId)"><div class="tiny_menu_ico filter_list_ico"></div><span class="left_25px">SHOW ALL</span></a>
                            </li>
                        </ul>
                        <ul class="highlight_event">
                            <li>
                                <table width="100%" border="0" cellspacing="0" cellpadding="5px" class="highlight_event_table">
                                    <tr ng-repeat="match in upcomingMatches | limitTo:50"  ng-click="gotoOddsPage(match.id)">
                                       <td class="highlight_day highlight_event_info {{upcomingIcon}}"><span class="hide_768">{{match.data.dayInWeek}}<span class="hide_768"><!--,RSDAY--> </span></span></td><td class="highlight_time">{{match.data.matchTime}}</td>
                                       <td class="highlight_name"><div class="highlight_title_holder"><span class="highlight_title">{{match.homeParticipantName}} vs {{match.awayParticipantName}}</span></div></td>
                                       <td class="highligh_markets_btn"><a ng-click="gotoOddsPage(match.id)" class="green_btn responsive_btn_1000"><img src="img/sportsbook/ico_arrow.png" width="9" height="15" alt="" class="reveal_1000"/><span>20 MARKETS &gt;</span></a></td>
                                    </tr>
                                </table>
                            </li>
                        </ul>
                    </div>           
             	</div>
            <!--End center panel -->
                
                <div id="right_panel"  class="clearfix">
	            <?php include("sportsbook_div_betslip.php"); ?>
                    <div id="quick_links_panel" class="panel_module">

                    </div>
                </div> <!--End right panel -->
           	</div>
        </div> <!--End wrapper -->
        <!-- END PAGE -->
        
          </div>
      </div>
    </div>
    </div>
    <script type="text/javascript" src="js/scripts.js"></script>
    <script>document.getElementById('betslip_multiple').style.display='none'; document.getElementById('betslip_system').style.display='none';</script>	
    <!-- END FOOTER --> 
    <?php include("loggedin_content.php"); ?>
    <?php include("notloggedin_content.php"); ?>
    <?php include("loggedin_banner.php"); ?>
    <?php include("notloggedin_banner.php"); ?>
    <?php include("footer.php"); ?>
  </body>
</html>
<?php COUCH::invoke(); ?>