import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import fetchToken from './fetchUserByToken';

const storeLocalData = (key, value) => {
  AsyncStorage.setItem(`@${key}`, value).then(
    resolve => console.log('Data saved to local storage'),
    reject => {
      alert('Could not save data to local storage');
      console.log('Could not save data to local storage');
      console.log(reject);
    },
  );
};

const getLocalData = key => {
  return AsyncStorage.getItem(`@${key}`).then(
    value => {
      return Promise.resolve(value != null ? value : null);
    },
    reject => {
      alert('Cannot load local data.');
      console.log('Cannot load local data');
      console.log(reject);
      return Promise.resolve(null);
    },
  );
};

module.exports = {
  storeLocalData: storeLocalData,
  getLocalData: getLocalData,
};
