import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { SIZES } from '../src/Theme/Theme';
import { COLORS } from '../src/Theme/Theme';
import DATA from '../Data/data.json';
import Restaurent from '../src/Restaurent/Restaurent';

const Home = () => {
  const filterData = (price) => (DATA.restaurents).filter((result) => result.price === price);
  return (
    <View style={{flex: 1}}>
      <View >
      <View style={styles.backgroundSearch}> 
        <View style={styles.searchBox}>
        <FontAwesome name="search" size={24} color="black" />
        <TextInput placeholder="Bạn muốn ăn gì?" style={styles.search}/>
      </View>
      </View>   

      <ScrollView showsVerticalScrollIndicator={false}>
        <Restaurent title="Thịnh Hành" data={filterData('$')}/> 
        <Restaurent title="Nhà Hàng Gần Bạn" data={filterData('$$')}/>
        <Restaurent title="Đề Xuất Cho Bạn" data={filterData('$$$')}/>
        <View style={{ height: 100 }}/>
      </ScrollView>
    </View>  
    </View> 
  )
}

export default Home

const styles = StyleSheet.create({
  searchBox:{
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  search: {
    marginLeft: 10,
    fontSize: 16
  },
  backgroundSearch: {
    backgroundColor: COLORS.primary,
    height: 100,
  }
})