import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

const Carousal = () => {
  const carousalData = [
    {
      id: 0,
      name: 'Banner 1',
      img: 'Image',
    },
    {
      id: 1,
      name: 'Banner 2',
      img: 'Image',
    },
    {
      id: 2,
      name: 'Banner 3',
      img: 'Image',
    },
    {
      id: 3,
      name: 'Banner 4',
      img: 'Image',
    },
    {
      id: 4,
      name: 'Banner 5',
      img: 'Image',
    },
    {
      id: 5,
      name: 'Banner 6',
      img: 'Image',
    },
  ];

  const [current, setCurrent] = useState(0);
  const flatListRef = useRef(); // a reference of flatList to call its scrollToIndex function

  const carousalItem = (item: any) => {
    return (
      <View style={styles.carousalItem}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemText}>{item.img}</Text>
      </View>
    );
  };
  useEffect(() => {
    carousalHandler();
  }, []);

  const carousalHandler = () => {
    setInterval(() => {
      setCurrent(prev => (prev + 1) % 6);
    }, 3000);
  };

  useEffect(() => {

    flatListRef.current?.scrollToIndex({
      animated: true,
      index: (current)
    });
  }, [current]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal={true}
        data={carousalData}
        keyExtractor={item => item.name}
        renderItem={({ index, item }) => carousalItem(item)}

      />
      <View
        style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        {carousalData.map(item => {

          return <View key={item.name} style={[styles.indicatorStyle, { backgroundColor: item.id == current ? "#000" : "#ddd" }]} />
        })}
      </View>
    </View>
  );
};

export default Carousal;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  carousalItem: {
    width: width,
    padding: 20,
    height: 200,
    marginHorizontal: 5,
    borderWidth: 1,
    backgroundColor: '#ccc',
  },
  itemText: {
    fontSize: 50,
    fontWeight: '700',
    color: '#000',
  },
  indicatorStyle: {
    padding: 2,
    width: 30,
    height: 10,
    backgroundColor: '#000',
    margin: 10,
  },
  activeIndicator: {
    backgroundColor: '#000',
  },
  inactiveIndicator: {
    backgroundColor: '#ddd',
  },
});
