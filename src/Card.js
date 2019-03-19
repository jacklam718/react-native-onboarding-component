// @flow

import React from 'react';
import {
  Animated,
  Platform,
  Dimensions,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    width: '75%',
    backgroundColor: 'white',
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const { width: deviceWidth } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

type Props = {
  scrollX: Object;
  index: number;
  children: any;
  style?: any;
}

export default function Card({
  scrollX,
  children,
  style,
  index,
}: Props) {
  return (
    <Animated.View
      style={[
        styles.container,
        style,
        {
          transform: [{
            translateX: scrollX.interpolate({
              inputRange: [
                deviceWidth * index,
                deviceWidth * (index + 1),
              ],
              outputRange: [0, isAndroid ? -deviceWidth * 1 : -deviceWidth * 2],
            }),
          }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}

Card.defaultProps = {
  style: null,
};
