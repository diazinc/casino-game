<script type="text/ng-template" id="casino_2_template">
<div id="content_list_1" class="clearfix">
 <div class="small_block_container">
  <div class="small_block" ng-repeat="game in column1games"><a href="#"><img src="{{ game.thumbnail }}" width="230" height="170" alt=""/></a><div class="reflection_highlight"></div>
    <div class="game_jackpot_container" ng-if="game.jackpot"><span>{{ game.jackpot }}</span></div>
    <div class="game_overlay" ng-click="gameClicked(game)"><div class="play_buttons hidden_content"><a href="" ng-click="setRealMoney(true)" class="green_btn">PLAY FOR REAL</a><br/><a href="" ng-click="setRealMoney(false)" class="red_btn">PLAY FOR FUN</a></div></div>
   <div class="game_name">{{ game.name | limitTo: 25 }} {{game.name.length < 25 ? '' : '...'}}</div>
  </div>
 </div>
</div>

<div id="content_list_2" class="clearfix">
 <div class="small_block_container">
  <div class="small_block" ng-repeat="game in column2games"><a href="#"><img src="{{ game.thumbnail }}" width="230" height="170" alt=""/></a><div class="reflection_highlight"></div>
    <div class="game_jackpot_container" ng-if="game.jackpot"><span>{{ game.jackpot }}</span></div>
    <div class="game_overlay" ng-click="gameClicked(game)"><div class="play_buttons hidden_content"><a href="" ng-click="setRealMoney(true)" class="green_btn">PLAY FOR REAL</a><br/><a href="" ng-click="setRealMoney(false)" class="red_btn">PLAY FOR FUN</a></div></div>
   <div class="game_name">{{ game.name | limitTo: 25 }} {{game.name.length < 25 ? '' : '...'}}</div>
  </div>
 </div>
</div>

</script>