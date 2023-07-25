import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import {
  ArrowUturnLeftIcon,
  MapPinIcon,
  StarIcon,
} from 'react-native-heroicons/outline';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {DishesRow} from '../../components';

export const ResturentScreen = () => {
  const {
    // @ts-ignore
    params: {productDetails},
  } = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <React.Fragment>
      <ScrollView>
        <View>
          <Image
            source={{uri: productDetails?.image}}
            style={{height: 200, width: '100%', position: 'relative'}}
          />

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              //   @ts-ignore
              navigation.navigate('Home');
            }}>
            <ArrowUturnLeftIcon size={20} color={'#00CCBB'} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            backgroundColor: 'white',
            gap: 5,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{fontSize: 22, fontWeight: '800', color: 'black'}}>
              {productDetails?.title}
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', gap: 8}}>
            <StarIcon size={15} color={'#00CCBB'} />
            <Text style={{}}>{productDetails?.rating}</Text>
            <Text style={{marginHorizontal: 3}}>
              - {productDetails?.subTitle}
            </Text>
            <View style={{display: 'flex', flexDirection: 'row', gap: 6}}>
              <MapPinIcon size={18} color={'#00CCBB'} />
              <Text>{productDetails?.location}</Text>
            </View>
          </View>
          <Text style={{marginTop: 8}}>{productDetails?.description}</Text>
        </View>
        <View>
          <Text style={{fontSize: 22, marginTop: 5, paddingHorizontal: 5}}>
            Menu
          </Text>
          <View>
            {dishes?.map((item, index: number) => {
              return <DishesRow key={index} itemDetails={item} />;
            })}
          </View>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
    left: 5,
  },
});

const dishes = [{id: 1, name: 'Tikaram', price: 23}];
