import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
const CircularProgressTracker = () => {
  return (
    <AnimatedCircularProgress
      size={120}
      width={15}
      fill={100}
      duration={1000}
      tintColor="#00e0ff"
      backgroundColor="#3d5875"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "rgba(255,255,255,0.7)",
      }}
    />
  );
};

export default CircularProgressTracker;
