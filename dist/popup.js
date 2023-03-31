document.addEventListener('DOMContentLoaded', function() {
    var myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
      // Load index.js
      var bkg = chrome.runtime.getBackgroundPage();
      var script = bkg.createElement('script');
      script.src = 'index.js';
    });
  });
  