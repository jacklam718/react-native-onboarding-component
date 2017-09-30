// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {
  children: any;
  style?: any;
}

export default function ContentContainer({ children, style }: Props) {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
}

ContentContainer.defaultProps = {
  style: null,
};
