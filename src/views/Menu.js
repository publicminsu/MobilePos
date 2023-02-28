import React from 'react';
import {ScrollView} from 'react-native';
import FoodCard from '../FoodCard';
const Menu = () => {
  return (
    <>
      <ScrollView>
        <FoodCard
          title="돈까스"
          text="육즙이 잘좔좔....겉바속촉 감동의 맛.... 손님 울었음"></FoodCard>
        <FoodCard
          title="돈까스"
          text="육즙이 잘좔좔....겉바속촉 감동의 맛.... 손님 울었음"></FoodCard>
      </ScrollView>
    </>
  );
};
export default Menu;
