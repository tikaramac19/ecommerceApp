import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';

import {Categories, FeaturedRow} from '../../components';

interface HomeScreenProps {
  navigation?: any;
}

const defaultContext = {
  navigation: {},
};

export const HomeScreenContext = createContext(defaultContext);

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [search, setSearch] = useState<any>();

  const navigationC = useNavigation();

  useLayoutEffect(() => {
    navigationC.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <React.Fragment>
      <HomeScreenContext.Provider value={{navigation: navigation}}>
        <SafeAreaView style={{height: '100%'}}>
          <View style={styles?.container}>
            {/* header */}
            <View style={styles.headerConti}>
              <View style={styles.headerContainer}>
                <Image
                  source={{uri: 'https://links.papareact.com/wru'}}
                  style={styles.image}
                />
                <View>
                  <Text>Deliver Now !</Text>
                  <View style={styles.locationContainer}>
                    <Text style={styles.location}>Current Location</Text>
                    <ChevronDownIcon size={20} color={'#00CCBB'} />
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  // @ts-ignore
                  navigationC.navigate('Profile');
                }}>
                <UserIcon size={26} color={'#00CCBB'} />
              </TouchableOpacity>
            </View>
            {/* search */}
            <View style={styles.searchContainer}>
              <View style={styles.searchSection}>
                <MagnifyingGlassIcon size={20} color={'#00CCBB'} />
                <TextInput
                  value={search}
                  onChangeText={search => {
                    setSearch(search);
                  }}
                  keyboardType="default"
                  placeholder="Resturents and customers"
                />
              </View>
              <AdjustmentsVerticalIcon size={26} color={'#00CCBB'} />
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{backgroundColor: 'white', marginTop: 8}}>
              {/* category */}
              <Categories />
              {/* featured */}
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 16,
                  display: 'flex',
                  gap: 20,
                }}>
                <FeaturedRow
                  title="Featured"
                  description="Paid Placements from our partners !"
                  data={featuredDummyData}
                />

                <FeaturedRow
                  title="Tasty Discounts !"
                  description="Everyone's been enjoying there juicy discounts !"
                  data={featuredDummyData}
                />
                <FeaturedRow
                  title="Offers near you !"
                  description="why not support your local resturant tonight !"
                  data={featuredDummyData}
                />
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </HomeScreenContext.Provider>
    </React.Fragment>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 100,
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 100,
    objectFit: 'cover',
  },
  headerConti: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    paddingHorizontal: 5,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    fontSize: 24,
  },
  location: {
    fontSize: 18,
    color: 'black',
    fontWeight: '800',
  },
  searchContainer: {
    paddingHorizontal: 5,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchSection: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    paddingHorizontal: 5,
    borderRadius: 4,
  },
});

const featuredDummyData = [
  {
    id: 1,
    image:
      'https://media.istockphoto.com/id/459007317/photo/japanese-fake-food-dishes.jpg?s=2048x2048&w=is&k=20&c=81BmnlDuujva05MpPK_-2cSyIQFBDTYBJnBT_GdYqok=',
    title: "Nando's",
    subTitle: 'Offers',
    rating: 4.5,
    location: 'Nearby-Clink Street',
    description:
      'This is a South African multinational fast casual chain that specialities in flame grilled peri-peri style chicken.',
  },
  {
    id: 2,
    image:
      'https://media.istockphoto.com/id/1136188210/photo/food-apple-fruit-banana-basket-fruit.jpg?s=612x612&w=0&k=20&c=WPhL9QfHOkO6SHHLGDK3en0Dux6ABmSZpLYpE7xe2AE=',
    title: "Yo! Sushi's",
    subTitle: 'Sishi',
    rating: 4.5,
    location: 'Nearby-Stamford Bridge',
    description:
      'This is a South African multinational fast casual chain that specialities in flame grilled peri-peri style chicken.',
  },
  {
    id: 3,
    image:
      'https://media.istockphoto.com/id/1199425492/photo/udon-food-model.jpg?s=612x612&w=0&k=20&c=-kjXJZViAhfOj30_hU27Pv3E6PMpaHqJsDgfC_9J2uw=',
    title: "Yo! Sushi's",
    subTitle: 'Sishi',
    rating: 4.5,
    location: 'Nearby-Stamford Bridge',
    description:
      'This is a South African multinational fast casual chain that specialities in flame grilled peri-peri style chicken.',
  },
];
