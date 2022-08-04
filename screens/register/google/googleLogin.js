import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  Image,
} from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import {Promisify} from '../../../src/helpers';
import GoogleButton from '../../../src/img/google';
import {User} from '../../../src/user';

WebBrowser.maybeCompleteAuthSession();

const GoogleLogin = ({navigation, socket, setOwner}) => {
  const [token, setToken] = useState();
  const [message, setMessage] = useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      '471595435186-e3t2gtd3711i3v1qrl9fum2tqiq18aoi.apps.googleusercontent.com',
    iosClientId:
      '471595435186-jo1n35g3iac0tn83fl8pfncmbetpdq7b.apps.googleusercontent.com',
    expoClientId:
      '471595435186-nkrl5dfofa9sqfcot68lf2vjgv9clc4q.apps.googleusercontent.com',
  });

  useEffect(() => {
    setMessage(JSON.stringify(response));
    if (response?.type == 'success') {
      setToken(response.authentication.accessToken);
      console.log(
        `Google authentication token obtained: ${response.authentication.accessToken}`,
      );
      getUserData(response.authentication.accessToken);
    }
  }, [response]);

  const getUserData = accessToken => {
    let userData;
    fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: {Authorization: `Bearer ${accessToken}`},
    })
      .then(response => response.json())
      .then(ud => {
        userData = ud;
        console.log('Google user data:');
        console.log(userData);
        return Promisify((resolve, _) => {
          socket.emit('Check user exists', userData.email, resolve);
        });
      })
      .then(userExists => {
        if (userExists) {
          socket.emit(
            'Get Google validated user',
            userData.email,
            fullUserData => {
              console.log('Full user data');
              console.log(fullUserData);
              setOwner(prev => {
                prev.userData = fullUserData;
                return prev;
              });
              console.log('Redirecting to profile');
              const user = new User();
              user.userData = fullUserData;
              navigation.navigate('BottomNAv', {owner: user});
            },
          );
        } else {
          navigation.navigate('Register', userData);
        }
      });
  };

  return (
    <View>
      {/* {message && <Text>{message}</Text>} */}
      <TouchableOpacity
        onPress={() => {
          token ? getUserData(token) : promptAsync({useProxy: false, showInResents: true});
        }}>
        {/* <Text>Login with Google</Text> */}
        <Image source={require('../../../src/img/google.png')} />
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({})

export default GoogleLogin;
