import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  Button,
} from 'react-native';

import {styles} from './login.style';

interface LoginProps {
  navigation?: any;
}

export const Login = ({navigation}: LoginProps) => {
  const [credentials, setCredentials] = useState<{
    username: string;
    password: string;
  }>({
    username: '',
    password: '',
  });

  const handleLogin = (e: any) => {
    e.preventDefault();

    console.log({credentials});
  };

  return (
    <ScrollView style={styles?.loginContainer}>
      <View style={styles?.imageContainer}>
        <Image
          source={require('./../../assets/images/wallpaper.png')}
          style={{width: 100, height: 280}}
        />
      </View>
      <Text style={styles?.heading}>Welcome Back</Text>
      <View style={styles?.usernameContainer}>
        <TextInput
          value={credentials?.username}
          style={styles.input}
          onChangeText={e => setCredentials({...credentials, username: e})}
          placeholder="Enter username"
        />
      </View>
      <View style={styles?.paswordContainer}>
        <TextInput
          value={credentials?.password}
          style={styles.input}
          onChangeText={e => setCredentials({...credentials, password: e})}
          placeholder="Enter password"
        />
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('forgetPassword');
        }}>
        <Text style={styles?.forgetPassword}>Forget Password ? </Text>
      </Pressable>

      <Pressable
        onPress={e => {
          handleLogin(e);
        }}>
        <Text style={styles?.loginBtn}>LOG IN</Text>
      </Pressable>
      <Text style={{textAlign: 'center', marginTop: 40, color: 'black'}}>
        Or connect with social
      </Text>
      <View style={styles?.socialContainer}>
        <Text style={styles?.facebook}>Facebook</Text>
        <Text style={styles?.google}>Google</Text>
      </View>
    </ScrollView>
  );
};
