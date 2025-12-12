const fs = require('fs');

const hasAndroidGoogleServices = fs.existsSync('./google-services.json');
const hasIosGooglePlist = fs.existsSync('./GoogleService-Info.plist');

module.exports = () => {
  const plugins = [
    // './plugins/android-native-config.js',
    // './plugins/with-android-notification-icons.js',
    // './plugins/with-android-splash-screen.js',
    // './plugins/with-android-widgets.js',
    // './plugins/with-updates.js',
    // './plugins/with-gradle-properties.js',
  ];

  return {
    name: "Pikashow",  // Yahan tum apna naya name daal sakte ho agar chaaho
    slug: "vega-app",
    version: "2.3.1",
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
      "package": "com.zendacross.vega"
    },
    web: {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "0f3f82d9-f30c-4ddc-a30c-98cdd0fadf04"  // Dashboard se ID daalo
      }
    },
    plugins
  };
};
