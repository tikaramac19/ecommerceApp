import {View, Image, Text, TouchableOpacity} from 'react-native';
import {StarIcon, MapPinIcon} from 'react-native-heroicons/outline';

import {styles} from './productCart.styles';
import {useNavigation} from '@react-navigation/native';

interface ProductCartProps {
  productDetails: Comp.FeaturedItemTypes;
}

export const ProductCart = ({productDetails}: ProductCartProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.productCartContainer}
      onPress={() => {
        // @ts-ignore
        navigation.navigate('ResturentScreen', {
          productDetails: productDetails,
        });
      }}>
      <Image
        source={{uri: productDetails?.image}}
        style={{height: 160, width: 220, borderRadius: 3}}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{productDetails?.title}</Text>
        <View>
          <Text
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <StarIcon size={15} color={'#00CCBB'} />
            <Text style={styles.nameBold}>{productDetails?.rating}-</Text>
            <Text style={{marginHorizontal: 3}}>
              {productDetails?.subTitle}
            </Text>
          </Text>
          <View style={{display: 'flex', flexDirection: 'row', gap: 6}}>
            <MapPinIcon size={18} color={'#00CCBB'} />
            <Text>{productDetails?.location}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
