import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/globalStyle';
import Nav from "../../components/nav"

const PageInformation = (props) => {
  return (
    <View style={styles.container}>
      <Nav />
      <Text>Informacje o stronie</Text>
      <View>
        <Text style={styles.settings}>Wersja 1.0</Text>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('TermsOfUse')}>
        <Text style={styles.settings}>Regulamin Aplikacji</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Privacy')}>
        <Text style={styles.settings}>Polityka prywatności</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Rodo')}>
        <Text style={styles.settings}>RODO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PageInformation;
