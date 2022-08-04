import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, Text, Dimensions} from 'react-native';
import Mytaunts from '../components/Taunts/myTaunts';
import Logo from '../src/img/logo';
import styles from '../styles/globalStyle';
import Nav from "../components/nav"

const Taunts = props => {
  return (
    <View style={styles.container}>
      <Nav />
      <Text
        style={[
          {fontFamily: 'roboto', fontSize: 28, alignSelf: 'center'},
          styles.miniSection,
        ]}>
        Osoby które Cię zaczepiły:{' '}
      </Text>
      <Mytaunts
        setShowNoficationDotTaunt={props.setShowNoficationDotTaunt}
        socket={props.socket}
        owner={props.owner}
        navigation={props.navigation}
        ownerEmail={props.owner.userData.email}
      />
    </View>
  );
};

export default Taunts;
