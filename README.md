# react-native-lottie
This is a simple wrapper around [`lottie-react-native`]() for Android and iOS runtimes, and [`react-native-web-lottie`]() on the Web.

## 🚀 Installing

Using [`yarn`](https://yarnpkg.com):

**Vanilla:**

```
yarn add react-native-lottie lottie-react-native
```

**Expo:**

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
