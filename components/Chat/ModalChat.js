import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import insertIntoReport from '../Reporting/insertReport';
import getAge from '../rowLookFriend/countAge';
import styles from '../../styles/globalStyle';

const Modalchat = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [report, setReport] = useState('');

  const handleSubmit = () => {
    insertIntoReport(props.socket, props.reporter, props.profile, report, 3);
    setReport('');
    setModalOpen(false);
  };

  const handleBlockSubmit = () => {
    props.socket.emit(
      'insert to black list',
      props.profile,
      props.reporter,
      status => {
        if (status) {
          alert(
            'użytkownik został poprawnie dodany do czarnej listy (podgląd listy znajduje się w profilu)',
          );
        } else {
          alert('wystąpił błąd, spróbuj ponownie');
        }
      },
    );
  };

  return (
    <View
      style={{
        borderColor: 'black',
        borderWidth: 1,
        padding: 20,
        position: 'absolute',
        top: 10,
        right: 50,
        backgroundColor: 'white',
        zIndex: 3,
      }}>
      <TouchableOpacity onPress={setModalOpen} style={styles.secondaryButton}>
        <Text>Zgłoś użytkownika</Text>
      </TouchableOpacity>
      {modalOpen && (
        <View
          style={[
            styles.column,
            {
              borderColor: 'black',
              borderWidth: 1,
              padding: 10,
              zIndex: 10,
              backgroundColor: 'white',
              position: 'absolute',
              top: 0,
              left: 0,
            },
          ]}>
          <Text>Z jakiego powodu zgłaszasz użytkownika?</Text>
          <TextInput
            onChangeText={setReport}
            placeholder="podaj powód"
            style={{
              width: 200,
              height: 60,
              borderWidth: 1,
              borderColor: '#c5c5c5',
              alignSelf: 'center',
              paddingLeft: 10,
            }}
          />
          <TouchableOpacity
            onPress={handleSubmit}
            style={[
              styles.secondaryButton,
              {
                width: 120,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <Text>Zgłoś</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalOpen(false)}
            style={[
              styles.secondaryButton,
              {
                width: 120,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <Text>Zamknij</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        onPress={handleBlockSubmit}
        style={styles.secondaryButton}>
        <Text>Dodaj do czarnej listy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.user.age = getAge(props.user.age);
          props.navigation.navigate('StrangerProfile', {
            user:  props.user,
            owner: props.owner,
          });
        }}
        style={styles.secondaryButton}>
        <Text>Przejdź do profilu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.setModalOpen(false)}
        style={styles.secondaryButton}>
        <Text>zamknij</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Modalchat;
