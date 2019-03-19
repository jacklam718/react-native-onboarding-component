// @flow

import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');
const isIphoneX = Platform.OS === 'ios' && (WINDOW_HEIGHT === 812 || WINDOW_WIDTH === 812);

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
    paddingBottom: isIphoneX ? 30 : 20,
  },
});

type Props = {
  style?: any;
  onPress: () => void;
  title: string;
}

export default function NextButton({ title, style, onPress }: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.inlineRow]}>
        <TouchableOpacity onPress={onPress} style={styles.action}>
          <Text style={style}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

NextButton.defaultProps = {
  style: null,
};
