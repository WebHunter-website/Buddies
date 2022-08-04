import React, {useState, useEffect} from 'react';
import {Text, View, Pressable, TouchableOpacity} from 'react-native';
import styles from '../styles/globalStyle';
import {authenticateByFacebook} from '../components/register/Facebook/facebookAuthentication';
import FacebookLoginModal from './register/facebookLogin';
import {getLocalData} from '../src/LocalStorageManagment';
import fetchUserByToken from '../src/fetchUserByToken';
import {User} from '../src/user';
import Waiter from '../components/Waiter';
import GoogleLogin from './register/google/googleLogin';

export default function Home({navigation, socket, setOwner, onLayout}) {
  const [facebookModalVisible, setFacebookModalVisible] = useState(false);
  const [facebookModalContent, setFacebookModalContent] = useState('');
  const [whait, setWhait] = useState(true);

  useEffect(() => {
    console.log('Trying to login using token...');
    getLocalData('loginToken')
      .then(token => {
        if (token != null) {
          console.log('Token found, validating...');
          return fetchUserByToken(token);
        }
        return Promise.resolve({
          result: [],
        });
      })
      .then(userData => {
        setWhait(false);
        if (userData.email != undefined) {
          console.log('User data loaded');
          const owner = new User();
          owner.userData = userData;
          setOwner(prev => {
            prev.userData = userData;
            return prev;
          });
          socket.emit('introduce', owner.userData.email, status => {
            console.log(status);
          });
          navigation.navigate('BottomNAv', {
            owner: owner,
          });
        } else {
          console.log('User could not be logged in using token');
        }
      });
  }, []);

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Waiter visible={whait} />
      <Pressable
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.secondaryText}>ZALOGUJ SIĘ</Text>
      </Pressable>
      {/* <GoogleLogin navigation={navigation} socket={socket} setOwner={setOwner} /> */}
      <Text style={{fontSize: 12, color: "#c5c5c5", paddingVertical: 15}}>LUB</Text>
      <Pressable
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Register', {})}>
        <Text>Zarejestruj się</Text>
      </Pressable>
      {/* <Text>Zarejestruj się przez:</Text>
      <TouchableOpacity
        style={{ padding: 5, borderColor: "black", borderWidth: 1 }}
        onPress={() =>
          authenticateByFacebook(
            setFacebookModalVisible,
            setFacebookModalContent
          )
        }
      >
        <Text> Facebook </Text>
      </TouchableOpacity>
      <FacebookLoginModal
        visible={facebookModalVisible}
        setVisible={setFacebookModalVisible}
        content={facebookModalContent}
      /> */}
    </View>
  );
}
