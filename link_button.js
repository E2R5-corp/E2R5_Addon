chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		chrome.tabs.create({
			"url": "https://www.youtube.com/channel/UCZLeHDKNgjo1xj8WXlVnalA"
		});
	});
});
