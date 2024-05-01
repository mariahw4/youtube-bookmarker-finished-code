chrome.tabs.onUpdated.addListener((tabId, tab) => {
  //listens for any updates on the chrome tab system
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);

    chrome.tabs.sendMessage(tabId, {
      //messaging system that happens to the extension
      type: "NEW", //this is a new video event in this situation/example
      videoId: urlParameters.get("v"), //grabs everyting after the v= in the url
    });
  }
});
