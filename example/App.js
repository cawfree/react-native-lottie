import React, { useState, useEffect } from "react";
import Animation from "react-native-lottie";
import { Animated, Platform, StyleSheet } from "react-native";

import Tick from "./assets/tick.json";

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
      source={Tick}
      progress={progress}
    />
  );
};

