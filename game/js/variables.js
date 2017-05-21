// This file declares the connection variables 
// You can replace them with hard-code strings for your site

//PROD
var WEBSOCKET_API_URL = "wss://api3.everymatrix.com/v2"; 
var FALLBACK_API_URL = "https://comet3.everymatrix.com";

var DOMAIN_PREFIX = "http://www.playshangrila.com";

CookieHelper.set('_WEBSOCKET_API_URL', WEBSOCKET_API_URL);
CookieHelper.set('_DOMAIN_PREFIX', DOMAIN_PREFIX);
CookieHelper.set('_FALLBACK_API_URL', FALLBACK_API_URL);