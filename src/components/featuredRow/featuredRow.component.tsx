import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {ArrowRightIcon} from 'react-native-heroicons/outline';

import {ProductCart} from '../productCart';

interface FeaturedRowProps {
  title: string;
  description: string;
  data: Comp.FeaturedItemTypes[];
}

export const FeaturedRow = ({title, description, data}: FeaturedRowProps) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <ArrowRightIcon size={20} color={'#00CCBB'} strokeWidth={2} />
          </View>
          <Text>{description}</Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 3,
            paddingTop: 10,
            gap: 7,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {data?.map(item => {
            return <ProductCart productDetails={item} key={item?.id} />;
          })}
        </ScrollView>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    display: 'flex',
    gap: 2,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '800',
  },
  scrollViewContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});
