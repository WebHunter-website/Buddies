import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styles/globalStyle';

const RowCorespond = props => {
  const {item} = props;
  // const date = new Date(item.latest_message_date)

  const handlePress = () => {
    // console.log(item.message);
    item.navigation.navigate('Chat', {
      owner: item.owner.userData,
      userWithProps: item.message,
    });
    props.setListOfMessages(prev => {
      prev[item.index].isreaded = 0;
      return prev;
    });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.row,
        {
          backgroundColor:
            item.message.isreaded === 1 &&
            item.message.user1id != item.owner.userData.email
              ? '#e5e5e5'
              : 'white',
          fontFamily: item.message.isreaded === 1 ? 'robotoMedium' : 'roboto',
          // item.message.isreaded === 1 ?
          width: Dimensions.get('window').width,
          alignSelf: 'flex-start',
          justifyContent: 'flex-start',
        },
      ]}>
      <Image
        style={{
          width: 90,
          height: 90,
          alignSelf: 'flex-start',
          marginRight: 20,
        }}
        source={{uri: item.message.photo}}
      />
      <View style={styles.column}>
        <Text style={{fontSize: 20}}>{item.message.name}</Text>
        <Text>{item.message.message}</Text>
        {/* <Text>{`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}</Text> */}
        {/* <Text>{item.latest_message_date}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default RowCorespond;
