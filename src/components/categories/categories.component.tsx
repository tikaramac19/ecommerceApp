import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {CategoryCard} from './categoryCard.component';
export const Categories = () => {
  return (
    <React.Fragment>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: 10,
          display: 'flex',
          flexDirection: 'row',
          gap: 7,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {Array(13)
          .fill('0')
          .map((_, index: number) => {
            return (
              <CategoryCard
                key={index}
                image={'https://links.papareact.com/gn7'}
                title={'Testing'}
              />
            );
          })}
      </ScrollView>
    </React.Fragment>
  );
};
