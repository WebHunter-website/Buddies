import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tauntInsertFetch from './tauntsInsertFetch';
import Zaczep from '../../src/img/zaczep';
import styles from '../../styles/globalStyle';

const Tauntcomponent = (props) => {
  const date = new Date(Date.now());


    const handlePress = () => {
        tauntInsertFetch(props.email, props.owner, `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${date.getMilliseconds()}`).then(({result}) => {
            if(!result) {alert("użytkownik zablokował dodawanie zaczepień")}
        })
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Zaczep />
        </TouchableOpacity>
    );
}

export default Tauntcomponent;
