chrome.tabs.onUpdated.addListener(function () {
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
});
