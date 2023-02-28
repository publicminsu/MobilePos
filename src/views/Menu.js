import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Tab, TabView} from '@rneui/themed';
import FoodCard from '../FoodCard';
const Menu = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <Tab value={index} onChange={e => setIndex(e)}>
        <Tab.Item title="메뉴"></Tab.Item>
        <Tab.Item title="정보"></Tab.Item>
        <Tab.Item title="리뷰"></Tab.Item>
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.tabViewItem}>
          <ScrollView>
            <FoodCard
              title="돈까스"
              text="육즙이 잘좔좔....겉바속촉 감동의 맛.... 손님 울었음"></FoodCard>
            <FoodCard
              title="돈까스"
              text="육즙이 잘좔좔....겉바속촉 감동의 맛.... 손님 울었음"></FoodCard>
          </ScrollView>
        </TabView.Item>
      </TabView>
    </>
  );
};
const styles = StyleSheet.create({
  tabViewItem: {
    width: '100%',
  },
});
export default Menu;
