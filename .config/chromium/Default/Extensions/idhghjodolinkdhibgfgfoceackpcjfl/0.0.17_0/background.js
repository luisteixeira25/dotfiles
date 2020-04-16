var isenable = false;
var enable = "/img/enable.png";
var disable = "/img/disable.png";

chrome.browserAction.onClicked.addListener(function(tab){
	var cssfile = "default.css";
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        var isalik = /[a-zA-Z]{2,}.wikipedia.[a-zA-Z]{2,}/.test(tabs[0].url);

		if(isalik){
            if (isenable){
				chrome.browserAction.setIcon({
					path:{
						"38": disable
					}
				});
				chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
			}
			else{
				chrome.browserAction.setIcon({
					path:{
						"38": enable
					}
				});
				chrome.tabs.insertCSS(tabs[0].id, {file:"theme/"+cssfile});
			}
			isenable = !isenable;
			localStorage['ALI_MODE']=isenable;
		}
	});
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	var cssfile = "default.css";
	
        if(localStorage['ALI_MODE'])
			isenable=JSON.parse(localStorage['ALI_MODE']);
	    var isalik = /[a-zA-Z]{2,}.wikipedia.[a-zA-Z]{2,}/.test(tab.url);
		if(isalik){	
			if (isenable){
				chrome.browserAction.setIcon({
					path:{
						"38": enable
					}
				});
				chrome.tabs.insertCSS(tabId, {file:"theme/"+cssfile});
			}
			else{
				chrome.browserAction.setIcon({
					path:{
						"38": disable
					}
				});
			}
		}
	
});


chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	if(msg == 'ali') {
        sendResponse({'ali': localStorage['ALI_MODE']})
	}
});

var isFirefox = typeof InstallTrigger !== 'undefined';


chrome.runtime.onInstalled.addListener(function(details) {

    if (details.reason === 'install') {
		
        if (isFirefox) {
            chrome.tabs.create({
                url: "https://addons.mozilla.org/firefox/addon/dark-mode-theme/"
            });
        } else {
            chrome.tabs.create({
                url: "https://chrome.google.com/webstore/detail/dark-mode-theme/eiomngfcbbapjpfnhniipcnhaenhohfg"
            });
        }

    } else if(details.reason == "update") {
		
        // if (isFirefox) {
        //     chrome.tabs.create({
        //         url: "https://addons.mozilla.org/firefox/addon/dark-mode-theme/"
        //     });
        // } else {
        //     chrome.tabs.create({
        //         url: "https://chrome.google.com/webstore/detail/dark-mode-theme/eiomngfcbbapjpfnhniipcnhaenhohfg"
        //     });
        // }
        
    }

    return false;
});


if (isFirefox) {
    chrome.runtime.setUninstallURL("https://addons.mozilla.org/firefox/addon/dark-mode-theme/");
} else {
    chrome.runtime.setUninstallURL("https://chrome.google.com/webstore/detail/dark-mode-theme/eiomngfcbbapjpfnhniipcnhaenhohfg");
}



