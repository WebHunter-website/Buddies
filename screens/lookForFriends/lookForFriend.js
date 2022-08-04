import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Button,
  Image,
} from 'react-native';
import styles from '../../styles/globalStyle';
import RowFriend from './rowFriend';
import fetchFriendsList from '../../components/rowLookFriend/fetchUsers';
import getAge from '../../components/rowLookFriend/countAge';
import {getFilledArray} from '../../src/helpers';
import Filters from '../../src/img/filters';
import ModalFilter from '../../components/rowLookFriend/filters/modalFilter';
import filterFriendsList from '../../components/rowLookFriend/filters/filter';
import Waiter from '../../components/Waiter';
import Logo from '../../src/img/logo';
import setStatus from '../../components/register/fetchStatus';
import Nav from '../../components/nav';

export default function LookForFriend(props) {
  const [statusList, setStatusList] = useState([]);
  const [friendsData, setFriendsData] = useState([]);
  const [modal, setmodal] = useState(false);
  const [strangerCounter, setStrangerCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function loadUsers() {
    setIsLoading(true);
    props.socket.emit(
      'getAllUsersData',
      props.owner.userData.email,
      strangerCounter,
      5,
      data => {
        data = data.map(d => {
          d.age = getAge(d.age);
          return d;
        });
        setFriendsData(prev => [...prev, ...data]);
        setStrangerCounter(prev => prev + 5);
        setIsLoading(false);
      },
    );
  }

  useEffect(() => {
    loadUsers();
    setStatus().then(
      data => {
        setStatusList(
          data.result.map(e => {
            return {label: e.status, value: e.statusid};
          }),
        );
      },
      reject => {
        console.warn(reject);
      },
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Waiter visible={!friendsData[0]} />
      {/* <ScrollView> */}
      <Nav />
      <Text
        style={[
          {fontFamily: 'roboto', fontSize: 28, alignSelf: 'center'},
          styles.miniSection,
        ]}>
        Szukaj znajomych
      </Text>
      <TouchableOpacity style={{alignSelf: 'flex-start'}} onPress={setmodal}>
        <Filters style={{marginLeft: 10, marginVertical: 10}} />
      </TouchableOpacity>
      {modal && (
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => setmodal(false)}>
          <Text
            style={{
              fontSize: 30,
              color: '#BADA55',
              marginRight: 20,
              marginTop: -45,
            }}>
            X
          </Text>
        </TouchableOpacity>
      )}
      {modal && (
        <ModalFilter
          setFriendsData={setFriendsData}
          email={props.owner.userData.email}
          location={props.owner.userData.location}
          statusList={statusList}
          hideModal={() => setmodal(false)}
        />
      )}
      <View style={styles.container}>
        {/* {
          filterFriendsList(props.owner,friendsData, fromValueAge, toValueAge, sexFilter, distanceFilterTo, distanceFilterFrom, statusFilter).map((friendData, index) => {
            return (
              <RowFriend
                navigation={props.navigation}
                owner={props.owner}
                friendData={friendData}
                key={`RowFriend-${index}`}
              />
            )
          })
        } */}
        <FlatList
          data={friendsData.map(friendData => {
            return {
              friendData: friendData,
              navigation: props.navigation,
              owner: props.owner,
            };
          })}
          renderItem={RowFriend}
          onEndReachedThreshold={8}
          onEndReached={loadUsers}
        />
        <Waiter
          visible={isLoading}
          style={{position: 'relative', height: 20, paddingVertical: 25}}
        />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
