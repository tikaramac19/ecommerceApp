import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Image} from 'react-native';

interface CategoryCardProps {
  title: string;
  image: string;
}

export const CategoryCard = ({title, image: imageUrl}: CategoryCardProps) => {
  return (
    <React.Fragment>
      <TouchableOpacity style={styles.categoryContainer}>
        <Image source={{uri: imageUrl}} style={{height: 50, width: 50}} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    position: 'relative',
    borderRadius: 4,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    color: 'white',
    textAlign: 'center',
  },
});
