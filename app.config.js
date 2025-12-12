const fs = require('fs');

const hasAndroidGoogleServices = fs.existsSync('./google-services.json');
const hasIosGooglePlist = fs.existsSync('./GoogleService-Info.plist');

module.exports = () => {
  const plugins = [];  // Empty kar do – yeh error fix karega

  return {
    name: "Pikashow",  // Yahan apna naya name daal do (jaise "PikaFlix" ya "Free Movies HD")
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
      "package": "com.zendacross.vega"  // Yahan apna unique package name daal sakte ho
    },
    web: {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "0f3f82d9-f30c-4ddc-a30c-98cdd0fadf04"  // Dashboard se ID daalo (zaruri!)
      }
    },
    plugins  // Empty
  };
};
