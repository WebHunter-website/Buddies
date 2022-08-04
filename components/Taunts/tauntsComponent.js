import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import countDateTime from '../countDateTime';
import styles from '../../styles/globalStyle';

const TauntsComponent = props => {
  const item = props.item;

  const handleSubmit = () => {
    item.socket.emit('delete taunts', item.taunt.tauntid);
    item.setListOfTaunts(prev =>
      prev.filter(taunt => taunt.tauntid != item.taunt.tauntid),
    );
  };

  return (
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        marginTop: 20,
        borderColor: '#c5c5c5',
        borderWidth: 1,
        backgroundColor: item.taunt.isreaded === 1 ? '#e5e5e5' : 'white',
      }}
      onPress={() =>
        item.navigation.navigate('StrangerProfile', {
          user: item.taunter,
          owner: item.owner,
        })
      }>
      {item.taunter && (
        <View style={styles.row}>
          <Image
            style={{height: 100, width: 100, marginRight: 20}}
            source={{uri: item.taunter.photo}}
          />
          <View style={styles.column}>
            <Text style={[styles.secondaryText, {fontSize: 20}]}>
              {item.taunter.name}
            </Text>
            {item.tauntDate.useMinutes && (
              <Text>Zaczepił/a Cię {item.tauntDate.minutes} minut temu </Text>
            )}
            {item.tauntDate.useHours && (
              <Text>Zaczepił/a Cię {item.tauntDate.hours} godzin(y) temu</Text>
            )}
            {item.tauntDate.useDays && (
              <Text>Zaczepił/a Cię {item.tauntDate.days} dni temu</Text>
            )}
          </View>
        </View>
      )}
      <TouchableOpacity
        onPress={handleSubmit}
        style={{marginLeft: 'auto', alignSelf: 'center', marginRight: 15}}>
        <Image
          style={{
            width: 25,
            height: 25,
          }}
          source={require('../../src/img/delete.png')}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TauntsComponent;
