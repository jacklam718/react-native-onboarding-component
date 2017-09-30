// @flow

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  inlineRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  action: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

type Props = {
  style?: any;
  children?: any;
  actions?: Array<Object>;
}

export default function Actions({ children, style, actions }: Props) {
  const content = children || actions.map((action, index) => (
    <TouchableOpacity
      key={`action-${index}`}
      onPress={action.onPress}
      style={styles.action}
    >
      <Text style={[action.style]}>
        {action.title}
      </Text>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      <View style={[styles.inlineRow, style]}>
        {content}
      </View>
    </View>
  );
}

Actions.defaultProps = {
  style: null,
  children: null,
  actions: null,
};
