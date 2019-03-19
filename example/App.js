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
  NextButton,
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
  page: {
    width: deviceWidth,
    backgroundColor: 'transparent',
    flexDirection: 'column',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    borderRadius: 0,
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
  gradientBackground: {
    height: '56%',
  },
});

export default class App extends Component {
  state = {
    currentPageIndex: 0,
  };

  scrollX = new Animated.Value(0);

  lotties = new Map();

  componentDidMount() {
    this.playLottie(this.state.currentPageIndex);
  }

  onScroll = (event) => {
    const { currentPageIndex } = this.state;
    const { contentOffset } = event.nativeEvent;
    const nextPageIndex = Math.round(contentOffset.x / deviceWidth);
    if (currentPageIndex !== nextPageIndex) {
      this.setState({ currentPageIndex: nextPageIndex }, () => {
        this.resetLottie(currentPageIndex);
        this.playLottie(nextPageIndex);
      });
    }
  }

  scrollTo(index) {
    const horizontalContentOffset = (deviceWidth * index);
    // eslint-disable-next-line
    this.scrollView._component.scrollTo({
      x: horizontalContentOffset,
      animated: true,
    });
  }

  resetLottie(index) {
    this.lotties.get(index).reset();
  }

  playLottie(index) {
    this.lotties.get(index).play();
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
          style={styles.gradientBackground}
        />

        <Animated.ScrollView
          horizontal
          ref={(scrollView) => { this.scrollView = scrollView; }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
            {
              useNativeDriver: true,
              listener: this.onScroll,
            },
          )}
        >
          {pages.map((page, index) => (
            <View
              key={`page-${page.title}`}
              style={styles.page}
            >
              <Header>
                <Card
                  scrollX={this.scrollX}
                  index={index}
                  style={styles.card}
                >
                  <Lottie
                    ref={(lottie) => {
                      this.lotties.set(index, lottie);
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

              <NextButton
                title="Continue"
                style={{ color: page.backgroundColor }}
                onPress={() => {
                  const nextIndex = (index + 1 === pages.length) ? 0 : index + 1;
                  this.scrollTo(nextIndex);
                }}
              />
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}
