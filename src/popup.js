document.querySelector("#toggle").addEventListener("click", function () {
  chrome.runtime.sendMessage({
    toggle: true,
  });
});
