//All you need to do to declare the dependency on the angular-json-rpc module is add it to the array when you create a module.

app.controller('tournaments-controller', function ($scope, $http, $httpParamSerializerJQLike, $q) {

  $scope.language = "en";
  $scope.liveStatus = "BOTH"; //NOT_LIVE, GOING_LIVE, LIVE, EXITING_LIVE, BOTH
  $scope.virtualStatus = "NOT_VIRTUAL"; //VIRTUAL, NOT_VIRTUAL, BOTH
  $scope.matchLimit = 10;
  $scope.locationId = 100077;
  $scope.tournamentId = 212685518;
  $scope.matchId = 219523562;
  $scope.groupId = 1;
  $scope.disciplineId = window.localStorage.getItem('disciplineId') || 1;
  $scope.disciplineName = window.localStorage.getItem('disciplineName');

  $scope.column1tournaments = [];
  $scope.column2tournaments = [];
  $scope.column3tournaments = [];

  $scope.betsPlaced = [];
  $scope.allTournaments = [];

  $scope.liveStatusMatchesEnum = {
    LIVE: 1,
    NOT_LIVE: 2,
    BOTH: 3
  };

  $scope.disciplineMatches = {
    SOCCER: 1
  };

  function initIcons() {
	$scope.icons = {};
    $scope.icons["Soccer"] = "sport_ico_3";
    $scope.icons["Basketball"] = "sport_ico_4";
    $scope.icons["Cricket"] = "sport_ico_5";
    $scope.icons["Rugby League"] = "sport_ico_6";
    $scope.icons["Rugby Union"] = "sport_ico_6";
    $scope.icons["Golf"] = "sport_ico_7";
    $scope.icons["Tennis"] = "sport_ico_8";
    $scope.icons["Motor Racing"] = "sport_ico_9";
    $scope.icons["Football"] = "sport_ico_10";
    $scope.icons["Handball"] = "sport_ico_11";
    $scope.icons["Volleyball"] = "sport_ico_12";
    $scope.icons["Horse Racing"] = "sport_ico_13";
    $scope.icons["Hockey"] = "sport_ico_14";
    $scope.icons["Boxing/MMA"] = "sport_ico_15";
    $scope.icons["Baseball"] = "sport_ico_18";
    $scope.icons["Athletics"] = "sport_ico_17";
    $scope.icons["Pesapallo"] = "sport_ico_25";
    $scope.icons["E-Sports"] = "sport_ico_22";
    $scope.icons["Specials"] = "sport_ico_24";
    $scope.icons["Snooker"] = "sport_ico_19";
    $scope.icons["Cycling"] = "sport_ico_22";
    $scope.icons["Darts"] = "sport_ico_20";
    $scope.icons["Futsal"] = "sport_ico_23";
    $scope.icons["Table Tennis"] = "sport_ico_21";
  };

  
  
  $scope.getDisciplines = function(liveStatus) {
	  window.alert('hello');
	    var params = {};

	    if($scope.language) {
	       params["lang"] = "en";
	    };

	    if($scope.liveStatus) {
	       params["liveStatus"] = liveStatus; 
	    };

	    if ($scope.virtualStatus) {
	      params["virtualStatus"] = $scope.virtualStatus;
	    };
	    
	    var JSONParams = JSON.stringify(params);
	    console.log(JSONParams);

	    $http({
	      method: 'POST',
	      url: 'http://82.221.98.17:80/disciplines',
	      data:  $httpParamSerializerJQLike(JSON.parse(JSONParams)),
	      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	    })
	    .then(function (response) {
	      $scope.disciplines = response.data;
	         for(var i = 0; i < $scope.disciplines.length; i++) {
	           $scope.disciplines[i]["menu"] = "sports_sub_menu_" + (i+3).toString();
	           $scope.disciplines[i]["icon"] = $scope.icons[$scope.disciplines[i].disciplineName];
	           $scope.disciplines[i]["id"] = $scope.disciplines[i].model.id;
	           console.log(i + " " + $scope.disciplines[i].disciplineName + " tag: " + $scope.disciplines[i].menu + " icon: " + $scope.disciplines[i].icon + " id: " + $scope.disciplines[i].id);   
	           console.log($scope.disciplines[i]);
	         }; 
	    });
	  };
  
  
  
  
  initIcons();

  $scope.tournamentIcon = $scope.icons[$scope.disciplineName];

  console.log('sportsbook controller');

  $scope.getLocations = function() {
    
    var params = {};

    if($scope.language) {
       params["lang"] = "en";
    };

    if($scope.disciplineId) {
       params["disciplineId"] = $scope.disciplineId;
    } else {
      params["disciplineId"] = 1; //default to soccer
    }
    
    var JSONParams = JSON.stringify(params);
    console.log(JSONParams);

    $http({
      method: 'POST',
      url: 'http://82.221.98.17:80/locations',
      data:  $httpParamSerializerJQLike(JSON.parse(JSONParams)),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(function (response) {
      $scope.locations = response.data;
      console.log("locations");
      console.log(response);

      for(var i = 0; i < $scope.locations.length; i++) {
           $scope.locations[i]["menu"] = "toggle_box_label_0_" + (i).toString();
           $scope.locations[i]["locationId"] = $scope.locations[i].model.id;
           console.log(i + " " + $scope.locations[i].locationName + " menu: " + $scope.locations[i].menu + " id: " + $scope.locations[i].locationId);   
         }; 

      //set tournament for each location and filter on view   
      $scope.setAllTournaments();    
        
    });
  };
 
  $scope.test = function() {
    window.alert("testing");
  };

  function columnize(input, cols) {
    var arr = [];
    for(i = 0; i < input.length; i++) {
      var colIdx = i % cols;
      arr[colIdx] = arr[colIdx] || [];
      arr[colIdx].push(input[i]);
    }
    return arr;
  }

  $scope.getTournaments = function(locationId) {

    $scope.locationId = locationId;
    
    var params = {};

    if($scope.language) {
       params["lang"] = "en";
    };

    if($scope.groupId) {
       params["groupId"] = $scope.groupId;
    };

    if($scope.locationId) {
       params["locationId"] = $scope.locationId;
    };
    
    var JSONParams = JSON.stringify(params);
    console.log(JSONParams);

    var deferred = $q.defer();

    $http({
      method: 'POST',
      url: 'http://82.221.98.17:80/tournaments',
      data:  $httpParamSerializerJQLike(JSON.parse(JSONParams)),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(function (response) {
      
      $scope.tournaments = response.data;
      $scope.columns = columnize($scope.tournaments, 3);
      console.log("tournaments");
      console.log(response.data);
      deferred.resolve(response.data);
    });

    return deferred.promise;
  };

  $scope.setTournaments = function(location) {
    var locationId = location.model.id;

    $scope.tournaments = []; //blank before displaying
    console.log("location ****** " + location.locationName);
    $scope.getTournaments(locationId);
  };

  
  $scope.setAllTournaments = function() {
    for(var i = 0; i < $scope.locations.length; i++) { 
      var promise = $scope.getTournaments($scope.locations[i].locationId);
      promise.then(function(payload) {
        $scope.allTournaments.push(payload);
      });
      console.log("tournaments so far");
      console.log($scope.allTournaments);
    };
  }; 

  $scope.chooseTournament = function(tournament) {
    window.localStorage.setItem('tournamentId', tournament.model.id);
    window.location = "sportsbook.php";
  };

  /* initialize with soccer locations and matches   */
  $scope.getLocations();
  $scope.sporticon = $scope.icons["Soccer"];

  console.log('tournaments controller');

});