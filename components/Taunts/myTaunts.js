import React, {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, Text, Button, FlatList} from 'react-native';
import tauntSelectFetch from './tauntsSelectFetch';
import tauntersSelectFetch from './tauntersSelectFetch';
import TauntsComponent from './tauntsComponent';
import countDateTime from '../countDateTime';
import getAge from '../rowLookFriend/countAge';
import Waiter from '../Waiter';
import styles from '../../styles/globalStyle';

const Mytaunts = props => {
  const [listOfTaunts, setListOfTaunts] = useState([]);
  const [listOfTaunters, setlistOfTaunters] = useState([]);
  const [loadingTaunts, setLoadingTaunts] = useState(true);

  useEffect(() => {
    props.setShowNoficationDotTaunt(false);
    tauntSelectFetch(props.ownerEmail).then(
      data => {
        setListOfTaunts(data.result);
      },
      reject => {
        console.warn(reject);
      },
    );
    tauntersSelectFetch(props.ownerEmail).then(
      // props.ownerEmail
      data => {
        data.forEach(listOfTaunters => {
          listOfTaunters.age = getAge(listOfTaunters.age);
          console.log(listOfTaunters.age);
        });
        setlistOfTaunters(data);
        setLoadingTaunts(false);
      },
      reject => {
        console.warn(reject);
      },
    );
    props.socket.emit('update taunts isreaded', props.owner.userData.email);
    setLoadingTaunts(true);
    return () => {
      setListOfTaunts(prev =>
        prev.map(taunt => ({
          ...taunt,
          isreaded: 0,
        })),
      );
    };
  }, []);


  return (
    <View style={styles.container}>
      <Waiter visible={loadingTaunts} />
      <FlatList
        data={combineTauntsWithTaunters(listOfTaunts, listOfTaunters, props, setListOfTaunts)}
        renderItem={TauntsComponent}
        key={item => `tauntid-${item.taunt.tauntid}`}
      />
    </View>
  );
};

export default Mytaunts;

const combineTauntsWithTaunters = (listOfTaunts, listOfTaunters, props, setListOfTaunts) => {
  return listOfTaunts.map(taunt => {
    const taunter = listOfTaunters.filter(
      taunter => taunter.email === taunt.userid,
    )[0];
    return {
      taunt: taunt,
      taunter: taunter,
      tauntDate: countDateTime(taunt.date),
      navigation: props.navigation,
      owner: props.owner,
      socket: props.socket,
      setListOfTaunts: setListOfTaunts
    };
  });
};
