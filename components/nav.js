import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import Logo from '../src/img/logo';
import Constants from 'expo-constants';

const Nav = () => {
  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        height: 40,
        marginTop: Constants.statusBarHeight,
        borderBottomColor: '#c5c5c5',
        borderBottomWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Logo />
      <Text style={{color: 'black', fontFamily: 'roboto', fontSize: 20}}>
        Buddies
      </Text>
    </View>
  );
};

export default Nav;
