import { ExpoConfig, ConfigContext } from 'expo/config';

const IS_DEV = process.env.APP_VARIANT === 'development';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: IS_DEV ? "mobile-expo-lab (dev)" : "mobile-expo-lab",
  slug: "mobile-expo-lab",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  runtimeVersion: {
    "policy": "sdkVersion"
  },
  version: "1.0.3",
  updates: {
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/762d0e7e-2e88-455c-9752-a8a8170bf811"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true,
    buildNumber: "1",
    bundleIdentifier: IS_DEV ? "com.jonathanseehagen.mobileexpolab.dev" : "com.jonathanseehagen.mobileexpolab"
  },
  android: {
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF"
    },
    package: IS_DEV ? "com.jonathanseehagen.mobileexpolab.dev" : "com.jonathanseehagen.mobileexpolab"
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  extra: {
    eas: {
      projectId: "762d0e7e-2e88-455c-9752-a8a8170bf811"
    },
    APP_VARIANT: process.env.APP_VARIANT || null,
  }
});