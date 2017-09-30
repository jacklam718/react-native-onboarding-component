import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Platform,
  Animated,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  Card,
  Header,
  Actions,
  ContentContainer,
  GradientBackgrounds,
} from 'react-native-onboarding-component';

// import ViewPager from './src/ViewPager';
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

const pages = [{
  title: 'Cheap Travel',
  description: 'Save money on your trip by finding the best priced flight tickets available.',
  backgroundColor: '#111ED5',
  image: require('./cheap_travel.png'),
}, {
  title: 'Amazing hotels',
  description: 'Make sure you stay in the best hotels for the best prices that are available.',
  backgroundColor: '#1468FF',
  image: require('./amazing_hotels.png'),
}, {
  title: 'Go everywhere',
  description: 'See everywhere without having to worry about planning and transportation.',
  backgroundColor: '#F14C2B',
  image: require('./go_everywhere.png'),
}, {
  title: 'Stay warm',
  description: "Don't like the cold wheather? We guarantee you a sunny and warm vacation.",
  backgroundColor: '#FFA11C',
  image: require('./stay_warm.png'),
}];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'transparent',
  },
});

export default class App extends Component {
  scrollX = new Animated.Value(0);

  scrollTo = (x) => {
    this.scrollView._component.scrollTo({
      x,
      animated: true,
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <GradientBackgrounds
          colors={pages.map(page => page.backgroundColor)}
          scrollX={this.scrollX}
          style={{ height: '56%' }}
        />
        <Animated.ScrollView
          horizontal
          ref={(scrollView) => { this.scrollView = scrollView; }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
            { useNativeDriver: true },
          )}
        >
          {pages.map((page, index) => (
            <View style={[styles.card, { width: deviceWidth, flexDirection: 'column' }]} key={`pages-${index}`}>
              <Header>
                <Card
                  scrollX={this.scrollX}
                  index={index}
                >
                  <Image source={page.image} style={{ flex: 1, borderRadius: 5 }} resizeMode={Image.resizeMode.contain} />
                </Card>
              </Header>
              <ContentContainer>
                <Text style={{ fontSize: 26, fontWeight: '300', marginBottom: 30, color: 'black' }}>
                  {page.title}
                </Text>
                <Text style={{ fontWeight: '300', color: 'black', textAlign: 'center' }}>
                  {page.description}
                </Text>
              </ContentContainer>
              <Actions
                actions={[{
                  style: { color: page.backgroundColor },
                  title: 'Continue',
                  onPress: () => {
                    const x = (index + 1 === pages.length) ? 0 : deviceWidth * (index + 1);
                    this.scrollTo(x);
                  },
                }]}
              />
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}
