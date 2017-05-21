var app = angular.module('fortuna-rpc', ['ngSanitize', 'pascalprecht.translate']);

app.directive('colorbox', function($compile, $rootScope){
  return {
    link: function(scope, element, attrs){
      element.click('bind', function(){
        $.colorbox({
          href: attrs.colorbox, 
          width:"360px", 
          height:"400px",
          scrolling:false,
          onComplete: function(){
            $rootScope.$apply(function(){
              var content = $('#cboxLoadedContent');
              $compile(content)($rootScope);      
            })
          }
        });
      });
    }
  };
});

app.factory('items', function() {
    var items = [];
    var itemsService = {};
    
    itemsService.add = function(item) {
        items.push(item);
    };
    itemsService.list = function() {
        return items;
    };
    
    return itemsService;
});

app.factory('authInterceptor', function ($rootScope, $q, $window) {
 return {
request: function (config) {
 config.headers = config.headers || {};
 if (localStorage.getItem('shangrilaToken')) {
config.headers.Authorization = 'Bearer ' + localStorage.getItem('shangrilaToken');
 }
 return config;
},
response: function (response) {
 if (response.status === 401) {
// handle the case where the user is not authenticated
console.log("401 not authenticated");
 }
 return response || $q.when(response);
}
 };
});

app.config(function ($httpProvider) {
 $httpProvider.interceptors.push('authInterceptor');
});
