// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(null, {file:'js/jquery.js'});
	chrome.tabs.executeScript(null, {file:'js/sketch.js'});
	chrome.tabs.executeScript(null, {file: 'inject.js'});
		
});