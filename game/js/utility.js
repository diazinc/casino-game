// This file implements the helper functions
// CookieHelper : A set of functions to perform operation on cookie
// getQueryString : A function to retrieve the parameter from url query string
// GUID : A function to generate GUID
// Observer : A class implements observer pattern

function setItemVersioned(key, value, version) {
    var item = {};
    item.version = version;
    item.data = value;
    window.localStorage.setItem(key, JSON.stringify(item));
}

function getItemVersioned(key, defaultValue, version) {
  var value = window.localStorage.getItem(key);
  if (value == null)
      return defaultValue;
  var value = JSON.parse(value);
  if (value.version != version)
      return defaultValue;
  return value.data;
}

function getQueryString(name, defaultValue) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(top.location.search);
    var value = results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    if (value.toLowerCase().indexOf("<script") > 0)
        value = value.substring(0, value.toLowerCase().indexOf("<script"));
    if (value === "" && typeof(defaultValue) !== "undefined")
        return defaultValue;
    return value;
}

function generateUniqueID() {
    var codes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '_'];
    var str = '';
    while (str.length < 12) {
        var r = Math.floor(Math.random() * 10000);
        str += codes[r % codes.length];
    }
    return str;
}


function Observer() {
    var self = this;
    self.subscribers = [];
    self.subscribe = function (fn) {
        if (typeof (fn) != 'function')
            throw '[fn] should be function!';

        self.subscribers.push(fn);
        return true;
    };
    self.unsubscribe = function (fn) {
        for (var i = 0; i < self.subscribers.length; i++) {
            if (self.subscribers[i] == fn) {
                self.subscribers = self.subscribers.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    self.publish = function (data) {
        for (var i = 0; i < self.subscribers.length; i++) {
            self.subscribers[i](data);
        }
    }
}

CookieHelper = {
    // get the cookie as string
    get: function (name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(name + "=");
            if (c_start != -1) {
                c_start = c_start + name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    },

    // store the cookie
    set: function (name, val) {
        var str = name + "=" + val + "; path=/;";
        var domain = location.hostname;

        document.cookie = str;
    },

    // get the cookie as array
    getAsArray: function (name) {
        var str = CookieHelper.get(name);
        if (str == null || str == '')
            return [];

        return str.split('|');
    },

    // append an value to array
    appendToArray: function (name, val) {
        var array = CookieHelper.getAsArray(name);
        array.push(val);

        CookieHelper.set(name, array.join('|'));
    },

    // remove specific value from array
    removeFromArray: function (name, val) {
        var array = CookieHelper.getAsArray(name);
        for (var i = 0; i < array.length; i++) {
            if (array[i] == val) {
                array.splice(i, 1);
                break;
            }
        }
        CookieHelper.set(name, array.join('|'));
    }
};

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {

    var k;

    // 1. Let o be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of o with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = o.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      if (k in o && o[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
