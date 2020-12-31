let enable = true;
chrome.extension.onMessage.addListener(function (
  request,
  sender,
  sendResponse
) {
  enable = !enable;
});

chrome.tabs.onUpdated.addListener(function () {
  if (enable) {
    chrome.browsingData.remove(
      {
        origins: ["http://localhost:3000/"],
      },
      {
        appcache: true,
        cache: true,
        cacheStorage: true,
        serviceWorkers: true,
      }
    );
  }
});
