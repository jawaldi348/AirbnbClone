/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/Home';
import SearchResultScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';
import Post from './src/components/Post';

import feed from './assets/data/feed';

const post1 = feed[0];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        {/* <SearchResultScreen /> */}
        {/* <DestinationSearchScreen /> */}
        <GuestsScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
