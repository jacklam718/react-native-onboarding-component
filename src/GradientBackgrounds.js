// @flow

import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');
const isAdroid = Platform.OS === 'android';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: deviceWidth,
    height: deviceHeight,
  },
});

type Props = {
  scrollX: Object;
  colors: Array<string>;
  style?: any;
}

export default function GradientBackgrounds({ scrollX, style, colors }: Props) {
  return (
    <View style={[styles.container, style]}>
      {colors.map((color, index) => (
        <Animated.View
          key={`gb-${index}`}
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: color,
            zIndex: -index,
            opacity: scrollX.interpolate({
              inputRange: [deviceWidth * index, deviceWidth * (index + 1)],
              outputRange: isAdroid ? [1, 2] : [1, 0],
            }),
          }}
        />
      ))}
    </View>
  );
}

GradientBackgrounds.defaultProps = {
  style: null,
}