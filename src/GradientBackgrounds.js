// @flow

import React, { PureComponent } from 'react';
import { View, Animated, StyleSheet, Dimensions, Platform } from 'react-native';

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
  style?: any;
  scrollX: Object;
  colors: Array<string>;
}

export default class GradientBackgrounds extends PureComponent {
  static defaultProps = {
    style: null,
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      scrollX: props.scrollX,
    };
  }

  props: Props

  render() {
    const { style, colors } = this.props;
    return (
      <View style={[styles.container, style]}>
        {colors.map((color, index) => (
          <Animated.View
            key={`gb-${index}`}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: color,
              zIndex: -index,
              opacity: this.state.scrollX.interpolate({
                inputRange: [deviceWidth * index, deviceWidth * (index + 1)],
                outputRange: isAdroid ? [1, 2] : [1, 0],
              }),
            }}
          />
        ))}
      </View>
    );
  }
}
