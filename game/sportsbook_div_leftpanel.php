<div id="left_panel" class="clearfix" ng-controller="sportsbook-controller" ng-init="getDisciplines('BOTH')">
    <ul class="side_menu" id="sports_list_menu">
    <li id="sports_menu_1"><a  href="sportsbook.php" title="HOME"><div class="sport_ico_1 sports_ico"></div><span class="sport_ico_1 sports_ico_1000">HOME</span></a></li>
    <li id="sports_menu_2"><a  href="" title="LIVE IN PLAY" ><div class="sport_ico_2 sports_ico"></div><span class="sport_ico_2 sports_ico_1000">LIVE IN-PLAY</span></a></li>
                                                                                          <!-- {{sport.disciplineId}} -->      
    <li ng-repeat="sport in disciplines" id="{{sport.menu}}"><a href="" ng-click="setNewDiscipline(sport.id, sport.name)" title="{{sport.name | uppercase}}"><div class="{{sport.icon}} sports_ico"></div><span class="{{sport.icon}} sports_ico_1000">{{sport.name | uppercase}}</span></a></li>
</div>