import React, {useState} from 'react';
import {View, Text, Button, Pressable, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import styles from '../../styles/globalStyle';
import {User} from '../../src/user';
import Waiter from '../../components/Waiter';
import {storeLocalData} from '../../src/LocalStorageManagment';
const loginUser = require('../../components/register/loginUser').default;

function Login({navigation, socket}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalDimensions, setModalDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handleSubmit = () => {
    // setOwner(loginUser(email, password));
    setLoginInProgress(true);
    const owner = new User();

    owner.loginUser(email, password).then(ownerData => {
      if (Object.keys(ownerData).length === 0) {
        console.log('navigation back to login');
        setLoginInProgress(false);
        return;
      }
      storeLocalData('loginToken', ownerData.token);
      setLoginInProgress(false);
      socket.emit('introduce', owner.userData.email, status => {
        console.log(status);
      });
      navigation.navigate('BottomNAv', {owner: owner});
    });
  };

  return (
    <View style={styles.container}>
      <Waiter visible={loginInProgress} />
      <Text style={styles.secondaryText}>Zaloguj się</Text>
      <TextInput
        placeholder="e-mail"
        style={[styles.register_input, {backgroundColor: 'white'}]}
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        placeholder="hasło"
        style={[styles.register_input, {backgroundColor: 'white'}]}
        value={password}
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={[styles.secondaryButton, {marginTop: 25}]}>
        <Text>Zaloguj</Text>
      </TouchableOpacity>
      {/* <Text>{JSON.stringify(user).substring(0,500)}</Text> */}
      <TouchableOpacity
        style={{marginTop: 10}}
        onPress={() => setOpenModal(true)}>
        <Text style={{color: '#8AB4F8'}}>Zapomiałe/aś hasła? Odzyskaj je</Text>
      </TouchableOpacity>
      {openModal && (
        <View
          onLayout={event => {
            const {x, y, width, height} = event.nativeEvent.layout;
            setModalDimensions({
              width: width,
              height: height,
            });
          }}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            width: 280,
            padding: 10,
            backgroundColor: 'white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: [
              {translateX: -modalDimensions.width / 2},
              {translateY: -modalDimensions.height / 2},
            ],
            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'center'}}>
            Podaj adres e-mail na który zarejestrowane jest konto, przyślemy
            nowe hasło na które będziesz mógł/mogła się zalogować
          </Text>
          <TextInput
            style={{
              borderBottomColor: '#c5c5c5',
              borderBottomWidth: 1,
              width: 260,
            }}
            placeholder="e-mail"
            onChangeText={setEmail}
          />
          <TouchableOpacity
            style={[
              styles.secondaryButton,
              {justifyContent: 'center', alignItems: 'center', width: 150},
            ]}
            onPress={() => {
              socket.emit('Reset password for email', email);
              setOpenModal(false);
            }}>
            <Text>Potwierdź</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
export default Login;
