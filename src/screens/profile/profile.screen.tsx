import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';

export const ProfileScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, []);

  return (
    <React.Fragment>
      <ScrollView>
        <View>
          <Text>This is profile screen</Text>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};
