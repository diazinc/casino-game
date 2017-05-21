// This file contains the WebSocket implementation basing on comet protocol
// If this file is included in the web page, the connection will be established in comet manner
// NOTE, this file depends on jQuery
if (!window.jQuery)
    throw new Error('jQuery must be loaded before dummy-websocket.js');

function WebSocket() {
	var me = this;
	me.protocol = "wamp";
	me.onopen = null;
	me.onmessage = null;
	me.onclose = null;
	var sessionID = null;

	var init = function(){
	    if (typeof (me.onopen) == typeof (init) &&
			typeof(me.onmessage) == typeof(init) ){
			
	        connect();
		}
		else{
			setTimeout( init, 150);
		}
	};

	setTimeout( init, 150);

	var errorCount = 0;
	var receiveMsg = function() {
	    var url = FALLBACK_API_URL + '/api/messages?sid=' + sessionID + '&jsoncallback=?';

	    // actually the server will return within 20 seconds, 
	    // hence, if the JSONP does not response after 30 second, it means timed-out and try again
	    var timer = window.setTimeout(receiveMsg, 30000);
	    $.ajax({
	        type: "GET",
	        url: url,
	        dataType: 'jsonp',
	        success: function (json) {
	            errorCount = 0;
	            window.clearTimeout(timer);
	            if (json.success) {
	                if (json.messages != null && typeof(json.messages) == typeof ([])) {
	                    for (var i = 0; i < json.messages.length; i++) {
	                        me.onmessage({ data: json.messages[i] });
	                    }
	                }

	                receiveMsg();
	            }
	            else {
	                if (typeof (me.onclose) == typeof (receiveMsg)) {
	                    me.onclose({ code: 1001, reason: '', wasClean: false });
	                }
	            }
	        },
	        error: function () {
	            window.clearTimeout(timer);

	            if (++errorCount > 3) {
	                if (typeof (me.onclose) == typeof (receiveMsg)) {
	                    me.onclose({ code: 1001, reason: '', wasClean: false });
	                }
	            }
	            else {
	                receiveMsg();
	            }
	        }
	    });
	}

	function connect(){
		if( typeof(FALLBACK_API_URL) == typeof('') ){
		    var url = FALLBACK_API_URL + '/api/connect?v=2&jsoncallback=?';
		    
		    var errorCount = 0;
		    var sendConnect = function () {
		        var timer = window.setTimeout(sendConnect, 8000);
		        $.ajax({
		            type: "GET",
		            url: url,
		            dataType: 'jsonp',
		            success: function (data) {
		                var json = $.parseJSON(data);
		                window.clearTimeout(timer);
		                if (typeof (json) == typeof ([]) &&
                            json.length > 1 &&
                            json[0] == 0) {
		                    sessionID = json[1];
		                    

		                    me.onopen();
		                    receiveMsg();
		                }
		                
		            },
		            error: function () {
		                window.clearTimeout(timer);
		                
		                if (++errorCount > 3) {
		                    if (typeof (me.onclose) == typeof (sendConnect)) {
		                        me.onclose({ code: 1001, reason: '', wasClean: false });
		                    }
		                }
		                else {
		                    sendConnect();
		                }
		            }
		        });
		    }
		    sendConnect();
		}
		else {
			alert('[FALLBACK_API_URL] is not defined!');
		}
	}

	me.send = function(text){
	    var url = FALLBACK_API_URL + '/api/send?sid=' + sessionID;

	    // according to http://support.microsoft.com/kb/208427
	    // IE will truncate the URL before sending to server when it is too long.
        // Hence, if the length is too long, the request is sent in POST
	    if (text.length <= 1000) {
	        $.ajax({
	            type: "GET",
	            url: url,
	            dataType: 'jsonp',
	            data: { message: text }
	        });
	    }
	    else {
	        var iid = "iframe_" + (new Date()).getTime() + Math.random();
	        var $iframe = $('<iframe id="' + iid + '" name="' + iid + '" style="display:none" width="1px" height="1px"></iframe>').appendTo(document.body);
	        var $form = $('<form style="display:none" method="post"></form>').appendTo(document.body);
	        $form.attr('target', iid).attr('action', url);
	        var $hidden = $('<input type="hidden" name="message" />').appendTo($form);
	        $hidden.val(text);
	        $form.submit();
	    }
	};

	me.close = function () {
	    if (typeof (me.onclose) == typeof (receiveMsg)) {
	        me.onclose({ code: 1001, reason: '', wasClean: false });
	    }
	};
	
}
WebSocket.isFallback = true;