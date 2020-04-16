
chrome.runtime.sendMessage('ali', function(response) {
    if(response.ali && response.ali == 'true' && /[a-zA-Z]{2,}.wikipedia.[a-zA-Z]{2,}/.test(window.location.href)) {
        var link = window.document.createElement('link');
        link.href = chrome.extension.getURL('theme/default.css');
        link.id = 'dark_styles';
        link.type = 'text/css';
        link.rel = 'stylesheet';
        window.document.getElementsByTagName('head')[0].appendChild(link);
    }
});


    

    
    