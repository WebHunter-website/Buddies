import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import AgeFilter from './ageFilter';
import SexFilters from './sexFilters';
import DistanceFilter from './distanceFilter';
import StatusFilter from './statusFilter';
import filterFriendsList from './filter';
import getAge from '../countAge';
import styles from '../../../styles/globalStyle';
import {getFilledArray} from '../../../src/helpers';

export default function ModalFilter(props) {
  const [ageFilter, setAgeFilter] = useState(true);
  const [sexFilter, setSexFilter] = useState(false);
  const [distanceFilter, setDistanceFilter] = useState(false);
  const [statusFilter, setStatusFilter] = useState(false);

  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);
  const [sex, setSex] = useState(null);
  const [distanceFrom, setDistanceFrom] = useState(0);
  const [distanceTo, setDistanceTo] = useState(40000);
  const [statusList, setStatusList] = useState(
    getFilledArray(false, props.statusList.length),
  );

  const resetAllFilters = () => {
    setAgeFilter(false);
    setSexFilter(false);
    setDistanceFilter(false);
    setStatusFilter(false);
  };

  const setFilter = setFilterHandler => {
    resetAllFilters();
    setFilterHandler(true);
  };

  const handleSubmit = () => {
    console.log(statusList);
    props.hideModal();
    filterFriendsList(
      props.email,
      sex,
      props.statusList
        .filter((_, index) => statusList[index])
        .map(statusElement => statusElement.value),
      parseInt(distanceFrom),
      parseInt(distanceTo),
      parseInt(minAge),
      parseInt(maxAge),
      props.location,
    ).then(data => {
      data.forEach(friendData => {
        friendData.age = getAge(friendData.age);
      });
      props.setFriendsData(data);
    });
  };

  return (
    <View style={{paddingBottom: 10}}>
      <View
        style={{
          minWidth: 200,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <TouchableOpacity
          style={{
            borderBottomColor: '#c5c5c5',
            borderBottomWidth: ageFilter ? 2 : 0,
          }}
          onPress={() => setFilter(setAgeFilter)}>
          <Text>Wiek</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderBottomColor: '#c5c5c5',
            borderBottomWidth: sexFilter ? 2 : 0,
          }}
          onPress={() => setFilter(setSexFilter)}>
          <Text>Płeć</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderBottomColor: '#c5c5c5',
            borderBottomWidth: statusFilter ? 2 : 0,
          }}
          onPress={() => setFilter(setStatusFilter)}>
          <Text>Status</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderBottomColor: '#c5c5c5',
            borderBottomWidth: distanceFilter ? 2 : 0,
          }}
          onPress={() => setFilter(setDistanceFilter)}>
          <Text>Odległość</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        {ageFilter && <AgeFilter setMinAge={setMinAge} setMaxAge={setMaxAge} />}
        {sexFilter && <SexFilters setSexFilter={setSex} sexFilter={sex} />}
        {distanceFilter && (
          <DistanceFilter
            setdistanceFilterTo={setDistanceTo}
            setdistanceFilterFrom={setDistanceFrom}
          />
        )}
        {statusFilter && (
          <StatusFilter
            setSelectedStatusList={setStatusList}
            selectedStatusList={statusList}
            statusList={props.statusList}
          />
        )}
      </View>
      <TouchableOpacity
        style={[styles.secondaryButton, {alignSelf: 'center', marginTop: 25}]}
        onPress={handleSubmit}>
        <Text>Filtruj</Text>
      </TouchableOpacity>
    </View>
  );
}
