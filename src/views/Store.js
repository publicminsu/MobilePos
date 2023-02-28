import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header} from 'react-native-elements';
import {Tab, TabView} from '@rneui/themed';
import MenuCard from '../MenuCard';
import ReviewCard from '../ReviewCard';
const menus = [
  {
    title: '돈까스',
    text: '육즙이 잘좔좔....겉바속촉 감동의 맛.... 손님 울었음\n가격 13,000원',
  },
  {
    title: '파스타',
    text: '이것이 마약 파스타\n대마 함유\n가격 12,000원',
  },
  {
    title: '치킨',
    text: '육즙이 잘좔좔....겉바속촉 감동의 맛.... 손님 울었음\n가격 13,000원',
  },
  {
    title: '토스트',
    text: '이것이 마약 파스타\n대마 함유\n가격 12,000원',
  },
  {
    title: '옥수수',
    text: '육즙이 잘좔좔....겉바속촉 감동의 맛.... 손님 울었음\n가격 13,000원',
  },
  {
    title: '햄버거',
    text: '이것이 마약 파스타\n대마 함유\n가격 12,000원',
  },
];
const reviews = [
  {
    title: '구름이',
    text: '너무 맛있었다',
    rating: 5,
  },
  {
    title: '구르니',
    text: '너무 맛있다',
    rating: 4,
  },
];
const Store = () => {
  const [index, setIndex] = React.useState(0);
  const menuList = menus.map(menu => (
    <MenuCard key={menu.title} title={menu.title} text={menu.text}></MenuCard>
  ));
  const reviewList = reviews.map(review => (
    <ReviewCard
      key={review.title}
      title={review.title}
      text={review.text}
      rating={review.rating}></ReviewCard>
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
          <ScrollView>
            <View>
              <Header
                centerComponent={{
                  text: '대표 메뉴',
                  style: {color: '#fff', fontSize: 20, flex: 1},
                }}></Header>
              {menuList}
            </View>
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}></TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          <ScrollView>{reviewList}</ScrollView>
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
export default Store;
