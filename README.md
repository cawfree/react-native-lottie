# react-native-lottie
This is a simple wrapper around [`lottie-react-native`](https://github.com/react-native-community/lottie-react-native) for Android and iOS runtimes, and [`react-native-web-lottie`](https://github.com/react-native-web-community/react-native-web-lottie) on the Web.

This project saves you from having to [**tinker with webpack**](https://github.com/react-native-web-community/react-native-web-lottie#getting-started), which is great if you're not ready to `expo eject`.

## 🚀 Installing

Using [`yarn`](https://yarnpkg.com) on `react-native init`:

```
yarn add react-native-lottie lottie-react-native
```

Using [`yarn`](https://yarnpkg.com) on `create-react-native-app`:

```
yarn add react-native-lottie ; expo install lottie-react-native
```

## 💭 Usage

```javascript
import React, { useState, useEffect } from "react";
import Animation from "react-native-lottie";
import { Animated, Platform, StyleSheet } from "react-native";

import SomeLottieAnimation from "./assets/some-lottie-animation.json";

const styles = StyleSheet.create({
  anim: { width: 200, height: 200, backgroundColor: "green" },
});

export default () => {
  const [progress] = useState(() => new Animated.Value(0));
  useEffect(
    () => {
      Animated.timing(
        progress,
        { toValue: 1, duration: 1000, useNativeDriver: Platform.OS !== "web" },
      ).start();
    },
    [progress],
  );
  return (
    <Animation
      style={styles.anim}
      source={SomeLottieAnimation}
      progress={progress}
    />
  );
};
```

## ✌️ License
[**MIT**](./LICENSE)
