import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';
import { DangerZone } from 'expo';

import {
  Card,
  Header,
  Actions,
  ContentContainer,
  GradientBackgrounds,
} from 'react-native-onboarding-component';

const { Lottie } = DangerZone;

const { width: deviceWidth } = Dimensions.get('window');

const pages = [{
  title: 'Cheap Travel',
  description: 'Save money on your trip by finding the best priced flight tickets available.',
  backgroundColor: '#111ED5',
  source: require('./motorcycle.json'),
}, {
  title: 'Amazing hotels',
  description: 'Make sure you stay in the best hotels for the best prices that are available.',
  backgroundColor: '#1468FF',
  source: require('./happy_birthday.json'),
}, {
  title: 'Go everywhere',
  description: 'See everywhere without having to worry about planning and transportation.',
  backgroundColor: '#F14C2B',
  source: require('./moving_bus.json'),
}, {
  title: 'Stay warm',
  description: "Don't like the cold wheather? We guarantee you a sunny and warm vacation.",
  backgroundColor: '#FFA11C',
  source: require('./mailsent.json'),
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
  lottie: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 26,
    fontWeight: '300',
    marginBottom: 30,
    color: 'black',
  },
  description: {
    fontWeight: '300',
    color: 'black',
    textAlign: 'center',
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
    this.scrollX = new Animated.Value(0);
    this.animations = new Map();
  }

  componentDidMount() {
    this.animations.get(this.state.currentIndex).play();
  }

  onScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const currentIndex = Math.round(contentOffset.x / deviceWidth);
    if (this.state.currentIndex !== currentIndex) {
      this.animations.forEach((animation) => {
        animation.reset();
      });
      this.animations.get(currentIndex).play();
      this.setState({ currentIndex });
    }
  }

  scrollTo = (index) => {
    this.scrollView._component.scrollTo({
      x: (deviceWidth * index),
      animated: true,
    });
  }

  render() {
    return (
      <View style={styles.container}>
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
            { useNativeDriver: true,
              listener: this.onScroll,
            },
          )}
        >
          {pages.map((page, index) => (
            <View
              key={`pages-${index}`}
              style={[styles.card, { width: deviceWidth, flexDirection: 'column' }]}
            >
              <Header>
                <Card
                  scrollX={this.scrollX}
                  index={index}
                  style={{ borderRadius: 0 }}
                >
                  <Lottie
                    ref={(animation) => {
                      if (animation) {
                        this.animations.set(index, animation);
                      }
                    }}
                    loop={false}
                    style={styles.lottie}
                    source={page.source}
                  />
                </Card>
              </Header>
              <ContentContainer>
                <Text style={styles.title}>
                  {page.title}
                </Text>
                <Text style={styles.description}>
                  {page.description}
                </Text>
              </ContentContainer>
              <Actions
                actions={[{
                  style: { color: page.backgroundColor },
                  title: 'Continue',
                  onPress: () => {
                    const next = (index + 1 === pages.length) ? 0 : index + 1;
                    this.scrollTo(next);
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
