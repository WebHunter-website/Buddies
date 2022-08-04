import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableOpacityBase,
  TextInput,
} from 'react-native';
import styles from '../../styles/globalStyle';
import LongDesc from './longDescModal';
import SwitchLocation from './switchLocation';
import updateProfilePhoto from './Fetch/updateProfilePhoto';
import SwitchComment from './switchComment';
import Waiter from '../Waiter';

export default function Settings(props) {
  const [longDescModal, setLongDescModal] = useState(false);
  const [longDesc, setLongDesc] = useState(props.owner.userData.description);
  const [modalPassword, setModalPassword] = useState(false);
  const [modalRemoveAccount, setModalRemoveAccount] = useState(false);
  const [passwordOld, setPasswordOld] = useState('');
  const [passwordNew1, setPasswordNew1] = useState('');
  const [passwordNew2, setPasswordNew2] = useState('');
  const [waiter, setWaiter] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  const handleLongDesc = () => {
    setLongDescModal(true);
  };

  const handleUpdate = photo => {
    updateProfilePhoto(props.owner.userData.email, photo);
  };
  
  const handleEmailChange = () => {
    setModalEmail(true);
  };
  
  const changePasswordModal = () => {
    setModalPassword(prev => !prev);
  };
  
  const changeRemoveAccountModal = () => {
    setModalRemoveAccount(prev => !prev);
  };
  
  return (
    <View style={{width: Dimensions.get('window').width}}>
      <Waiter visible={waiter} />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={styles.settings}>Bieżąca lokalizacja: </Text>
        <SwitchLocation
          style={[styles.settings]}
          email={props.email}
          setAllowLocationUpdate={props.setAllowLocationUpdate}
          // setInfoModal={setInfoModal}
        />
      </View>
      <TouchableOpacity onPress={props.getCurrentLocation, () => alert("Twoja przybliżona lokalizacja jest udostępniana innym użytkownikom w postaci przybliżonej odległości. Dokładne dane geolokalizacyjne nie są usdostępniane")}>
        <Text style={styles.settings}>Ustal nową lokalizację</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('ProfileImagePicker', {
            handleSubmit: handleUpdate,
            setUserPhoto: props.setUserPhoto,
            navigation: props.navigation,
          })
        }>
        <Text style={styles.settings}>Zmień zdjęcie profilowe</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLongDesc}>
        <Text style={styles.settings}>Zmień opis profilu</Text>
      </TouchableOpacity>
      {longDescModal && (
        <LongDesc
          owner={props.owner}
          setVisible={setLongDescModal}
          longDesc={longDesc}
          setLongDesc={setLongDesc}
        />
      )}
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={styles.settings}>
          Zablokuj możliwość dodawania komentarzy
        </Text>
        <SwitchComment socket={props.socket} owner={props.owner} />
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('BlackList')}>
        <Text style={styles.settings}>Pokaż czarną listę</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Information', {
            navigation: props.navigation,
          })
        }>
        <Text style={styles.settings}>Informacje o stronie</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changePasswordModal}>
        <Text style={styles.settings}>Zmień hasło</Text>
      </TouchableOpacity>
      {modalPassword && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#c5c5c5',
            borderWidth: 1,
            padding: 10,
          }}>
          <TextInput
            style={[styles.register_input, {width: 150}]}
            placeholder="wpisz stare hasło"
            onChangeText={setPasswordOld}
            secureTextEntry={true}
          />
          <TextInput
            style={[styles.register_input, {width: 150}]}
            placeholder="wpisz nowe hasło"
            onChangeText={setPasswordNew1}
            secureTextEntry={true}
          />
          <TextInput
            style={[styles.register_input, {width: 150}]}
            placeholder="powtórz nowe hasło"
            onChangeText={setPasswordNew2}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => {
              if (passwordNew1 != passwordNew2) {
                alert('Podane nowe hasło podane podwójnie nie jest identyczne');
                return;
              }
              props.socket.emit(
                'Change password',
                props.owner.userData.email,
                passwordOld,
                passwordNew1,
                passwordChanged => {
                  if (passwordChanged) {
                    alert('Hasło zostało zmienione');
                  } else {
                    alert('Błąd: hasło nie zostało zmienione');
                  }
                },
              );
            }}>
            <Text>Potwierdź</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={changeRemoveAccountModal}>
        <Text style={styles.settings}>Usuń konto</Text>
      </TouchableOpacity>
      {modalRemoveAccount && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#c5c5c5',
            borderWidth: 1,
            padding: 10,
          }}>
          <TextInput
            style={[styles.register_input, {width: 250}]}
            placeholder="wpisz hasło, żeby potwierdzić usunięcie konta"
            onChangeText={setPasswordOld}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => {
              setWaiter(true)
              props.socket.emit(
                'Remove account',
                props.owner.userData.email,
                passwordOld,
                accountRemoved => {
                  if (accountRemoved) {
                    setWaiter(false)
                    alert('Konto zostało usunięte');
                    props.navigation.navigate('Home');
                  } else {
                    setWaiter(false)
                    alert('Błąd: Konto nie zostało usunięte');
                  }
                },
              );
            }}>
            <Text>Potwierdź</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
