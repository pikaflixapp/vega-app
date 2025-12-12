const fs = require('fs');

const hasAndroidGoogleServices = fs.existsSync('./google-services.json');
const hasIosGooglePlist = fs.existsSync('./GoogleService-Info.plist');

module.exports = () => {
  const plugins = [];  // Empty array bana do (sab plugins hata do)

  return {
    name: "Pikashow",  // Yahan tum apna naya name daal sakte ho (jaise "PikaFlix")
    slug: "pikashow",
    version: "1.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "automatic",
    splash: {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#000000"
    },
    updates: {
      "fallbackToCacheTimeout": 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      "supportsTablet": true
    },
    android: {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#000000"
      },
      "package": "com.zendacross.vega"  // Yahan tum apna package name change kar sakte ho agar chaaho
    },
    web: {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "0f3f82d9-f30c-4ddc-a30c-98cdd0fadf04"  // Dashboard se ID daalo (zaruri hai)
      }
    },
    plugins  // Empty plugins
  };
};
