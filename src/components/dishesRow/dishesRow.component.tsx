import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

interface DishesRowProps {
  itemDetails: any;
}

export const DishesRow = ({itemDetails}: DishesRowProps) => {
  return (
    <React.Fragment>
      <View>{/* <ActivityIndicator size={'large'} /> */}</View>
    </React.Fragment>
  );
};
