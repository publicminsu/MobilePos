import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {Header, PricingCard} from 'react-native-elements';
import FoodCard from './src/MenuCard';
import Menu from './src/views/Menu';

const App = () => {
  return (
    <>
      <Menu></Menu>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#343a40',
    justifyContent: 'space-around',
  },
});

export default App;
