import React, {useState, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LookForFriend from './lookForFriends/lookForFriend';
import MyProfile from './Profile/profile';
import Message from './message';
import FriendsList from './FriendList.js/FriendsList';
import Taunts from './taunts';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomNAvigator(props) {
  const [showNoficationDot, setShowNoficationDot] = useState(false);
  const [showNoficationDotTaunts, setShowNoficationDotTaunts] = useState(false);

  useEffect(() => {
    props.socket.emit(
      'Show notification on message',
      props.route.params.owner.userData.email,
      setShowNoficationDot,
    );
    props.socket.emit(
      'Show notification on taunts',
      props.route.params.owner.userData.email,
      setShowNoficationDotTaunts,
    );
  }, []);

  return (
    <Tab.Navigator
      // tabBarOptions={{
      //   showLabel: false,
      //   activeTintColor: "#c5c5c5",
      //   tabStyle: styles.nav
      // }}
      // activeColor="#bada55"
      // inactiveColor="#c5c5c5"

      // screenOptions
      // tabBarOptions={{
      //   activeTintColor: '#BADA55',
      //   inactiveTintColor: '#c5c5c5',
      //   style: {
      //     backgroundColor: '#633689',
      //   },
      //   labelStyle: {
      //     textAlign: 'center',
      //   },
      //   indicatorStyle: {
      //     borderBottomColor: '#87B56A',
      //     borderBottomWidth: 2,
      //   },
      // }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#BADA55',
        tabBarInactiveTintColor: '#c5c5c5',
        tabBarLabelStyle: {
          textAlign: 'center',
        },
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}>
      <Tab.Screen
        name="Szukaj znajomych"
        children={() => (
          <LookForFriend
            navigation={props.navigation}
            owner={props.route.params.owner}
            socket={props.socket}
          />
        )}
        options={{
          title: 'Szukaj znajomych',
          headerStyle: {
            // backgroundColor: '#bada55',
            borderColor: '#bada55',
            borderBottomWidth: 2,
          },
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-multiple-plus-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Zaczepienia"
        children={() => (
          <Taunts
            navigation={props.navigation}
            owner={props.route.params.owner}
            setShowNoficationDotTaunt={setShowNoficationDotTaunts}
            socket={props.socket}
          />
        )}
        options={{
          tabBarIcon: ({color}) => (
            <View>
              <MaterialCommunityIcons
                // name="notifications-active=outlined"
                name="hand-okay"
                color={color}
                size={26}
              />
              {showNoficationDotTaunts && (
                <View
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 50,
                    backgroundColor: 'red',
                    position: 'absolute',
                    top: -2,
                    left: 26,
                  }}></View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="wiadomości"
        children={() => (
          <Message
            navigation={props.navigation}
            owner={props.route.params.owner}
            socket={props.socket}
            setShowNoficationDot={setShowNoficationDot}
          />
        )}
        options={{
          tabBarIcon: ({color}) => (
            <View>
              <MaterialCommunityIcons
                name="message-outline"
                color={color}
                size={26}></MaterialCommunityIcons>

              {showNoficationDot && (
                <View
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 50,
                    backgroundColor: 'red',
                    position: 'absolute',
                    top: -2,
                    left: 26,
                  }}></View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="znajomi"
        style={{color: 'bada55'}}
        children={() => (
          <FriendsList
            navigation={props.navigation}
            owner={props.route.params.owner}
          />
        )}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="format-list-checkbox"
              color={color}
              size={26}></MaterialCommunityIcons>
          ),
        }}
      />
      <Tab.Screen
        name="Mój profil"
        children={() => (
          <MyProfile
            user={props.route.params.owner}
            navigation={props.navigation}
            setAllowLocationUpdate={props.setAllowLocationUpdate}
            socket={props.socket}
            getCurrentLocation={props.getCurrentLocation}
          />
        )}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
