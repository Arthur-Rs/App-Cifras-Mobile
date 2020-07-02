// Call onDeviceReady when Cordova is loaded.
//
// At this point, the document has loaded but cordova-1.6.0.js has not.
// When Cordova is loaded and talking with the native device,
// it will call the event `deviceready`.
//
function onLoad() {
  document.addEventListener("deviceready", onDeviceReady, false);
}

// Cordova is loaded and it is now safe to make calls Cordova methods
//
function onDeviceReady() {
  window.plugins.insomnia.keepAwake();
  // Now safe to use the Cordova API
}

var admobid = {};
if (/(android)/i.test(navigator.userAgent)) {
  admobid = {
    // for Android
    banner: "ca-app-pub-9479512003588235/6198900391",
    interstitial: "ca-app-pub-9479512003588235/6633224017",
  };
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = {
    // for iOS
    banner: "ca-app-pub-9479512003588235/6198900391",
    interstitial: "ca-app-pub-9479512003588235/6633224017",
  };
} else {
  admobid = {
    // for Windows Phone
    banner: "ca-app-pub-9479512003588235/6198900391",
    interstitial: "ca-app-pub-9479512003588235/6633224017",
  };
}

function initApp() {
  if (AdMob) {
    AdMob.createBanner({
      adId: admobid.banner,
      position: AdMob.AD_POSITION.BOTTOM_CENTER,
      autoShow: true,
    });
  }
}

document.addEventListener("deviceready", initApp, false);
