// @flow

import React, { PureComponent } from 'react';
import { Animated, Platform, Dimensions, StyleSheet } from 'react-native';

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
  style?: any;
  children: any;
}

export default class Card extends PureComponent {
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
    const { children, style, index } = this.props;

    return (
      <Animated.View
        style={[
          styles.container,
          style,
          {
            transform: [{
              translateX: this.state.scrollX.interpolate({
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
}
