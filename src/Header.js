// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: '56%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {
  children: any;
  style?: any ;
}

export default function Header({ children, style }: Props) {
  return (
    <View style={[styles.header, style]}>
      {children}
    </View>
  );
}

Header.defaultProps = {
  style: null,
};
