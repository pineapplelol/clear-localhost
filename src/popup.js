document.querySelector("#enable").addEventListener("click", function () {
  chrome.runtime.sendMessage({
    toggle: true,
  });
  document.getElementById("enable").hidden = true;
  document.getElementById("disable").hidden = false;
});

document.querySelector("#disable").addEventListener("click", function () {
  chrome.runtime.sendMessage({
    toggle: true,
  });
  document.getElementById("enable").hidden = false;
  document.getElementById("disable").hidden = true;
});
