import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {storeLocalData} from '../../src/LocalStorageManagment';

const Logout = props => {
  useEffect(() => {
    props.setOwner(prev => {
      prev.userData = {};
      return prev;
    });
    storeLocalData('loginToken', '');
    props.navigation.navigate('Home');
  }, []);

  return <View></View>;
};

const LogoutButton = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Logout')}
      style={{
        marginLeft: 'auto',
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{transform: [{scale: 0.7}]}}
        source={require('../../src/img/logout.png')}
      />
      <Text style={{color: '#BADA55'}}>Wyloguj się</Text>
    </TouchableOpacity>
  );
};

module.exports = {
  Logout: Logout,
  LogoutButton: LogoutButton,
};
