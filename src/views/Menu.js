import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Tab, TabView} from '@rneui/themed';
import MenuCard from '../MenuCard';
const menus = [
  {
    title: '돈까스',
    text: '육즙이 잘좔좔....겉바속촉 감동의 맛.... 손님 울었음\n가격 13,000원',
  },
  {
    title: '파스타',
    text: '이것이 마약 파스타\n대마 함유\n가격 12,000원',
  },
];
const Menu = () => {
  const [index, setIndex] = React.useState(0);
  const menuList = menus.map(menu => (
    <MenuCard key={menu.title} title={menu.title} text={menu.text}></MenuCard>
  ));
  return (
    <>
      <Tab value={index} onChange={e => setIndex(e)}>
        <Tab.Item title="메뉴"></Tab.Item>
        <Tab.Item title="정보"></Tab.Item>
        <Tab.Item title="리뷰"></Tab.Item>
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.tabViewItem}>
          <ScrollView>{menuList}</ScrollView>
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
