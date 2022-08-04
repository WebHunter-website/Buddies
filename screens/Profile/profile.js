import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../../styles/globalStyle';
// import select from "../../components/myProfile/selectFrom";
import PhotoGallery from '../../components/myProfile/photoGallery';
import ShortDescModal from '../../components/myProfile/shortDescModal';
import photoGalleryFetch from '../../components/Photos/photoFetch';
import Settings from '../../components/myProfile/settings';
import ChangeStatus from '../../components/myProfile/changeStatus';
import Logo from '../../src/img/logo';
import {LogoutButton} from '../../components/register/Logout';
import Constants from 'expo-constants';

export default function MyProfile(props) {
  // const edit = require('../src/img/edit.png')
  // const settingsImage = require('../../src/img/settings.png')

  const [modal, setmodal] = useState(false);
  const [photoData, setphotoData] = useState([]);
  const [settings, setsettings] = useState(false);
  const [shortDesc, setShortDesc] = useState(props.user.userData.shortdesc);
  const [setNewStatus, setsetNewStatus] = useState(
    props.user.userData.status_lable,
  );
  const [userData, setUserData] = useState(props.user.userData);
  const [userPhoto, setUserPhoto] = useState(props.user.userData.photo);

  const statusIcon = require('../../src/img/online.png');
  const redIcon = require('../../src/img/online(2).png');

  const handleClick = () => {
    setmodal(true);
  };

  const handleSettings = () => {
    setsettings(prev => !prev);
  };

  useEffect(() => {
    photoGalleryFetch(props.user.userData.email).then(
      data => {
        setphotoData(data.result);
      },
      reject => {
        console.warn(reject);
      },
    );
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={
          {
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center"
          }
        }>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: 40,
            borderBottomColor: '#c5c5c5',
            borderBottomWidth: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: Constants.statusBarHeight,
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: '50%',
              transform: [{translateX: -50}],
            }}>
            <Logo />
            <Text
              style={{
                color: 'black',
                fontFamily: 'roboto',
                fontSize: 20,
              }}>
              Buddies
            </Text>
          </View>
          <LogoutButton navigation={props.navigation} />
        </View>
        <View style={{display: 'flex', alignItems: 'center'}}>
          <View style={[styles.row, {marginBottom: -20}]}>
            {props.user.userData.status_type === 1 ? (
              <Image
                style={{width: 20, height: 20, marginRight: 10}}
                source={statusIcon}
              />
            ) : (
              <Image
                style={{width: 20, height: 20, marginRight: 10}}
                source={redIcon}
              />
            )}
            {/* <Text style={[styles.thirdText, { fontSize: 20, marginTop: 20, paddingBottom: 30}]}>{props.user.userData.status_lable}</Text> */}
            <Text
              style={[
                styles.thirdText,
                {fontSize: 20, marginTop: 20, paddingBottom: 30},
              ]}>
              {setNewStatus}
            </Text>
          </View>
          <ChangeStatus owner={props.user} setsetNewStatus={setsetNewStatus} />
          <Image source={{uri: userPhoto}} style={{width: 200, height: 200}} />
          <Text style={[styles.secondaryText, {marginTop: 20}]}>
            {props.user.userData.name}
          </Text>

          <Text
            style={{
              fontFamily: 'roboto',
              color: '#616161',
              paddingVertical: 15,
              fontSize: 20,
            }}>
            {shortDesc}
          </Text>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleClick}>
            {shortDesc.length < 1 ? (
              <Text>Dodaj opis</Text>
            ) : (
              <Text>Edytuj opis</Text>
            )}
          </TouchableOpacity>
          <ShortDescModal
            owner={props.user}
            visible={modal}
            setVisible={setmodal}
            setShortDesc={setShortDesc}
          />

          <TouchableOpacity
            style={[styles.secondaryButton, styles.row, {marginTop: 30}]}
            onPress={handleSettings}>
            {/* <Image source={settingsImage}/> */}
            <Text>Ustawienia</Text>
          </TouchableOpacity>
          {settings && (
            <Settings
              owner={props.user}
              navigation={props.navigation}
              setUserPhoto={setUserPhoto}
              setAllowLocationUpdate={props.setAllowLocationUpdate}
              getCurrentLocation={props.getCurrentLocation}
              socket={props.socket}
            />
          )}
          <Text style={[styles.thirdText, {marginTop: 10}]}>Zdjęcia</Text>
          <TouchableOpacity
            style={styles.secondaryButton}
            navigation={props.navigation}
            onPress={() => {
              console.log();
              props.navigation.navigate('AddPhoto', {
                owner: props.user.userData.email,
                setphotoData: setphotoData,
              });
            }}>
            <Text>Dodaj zdjęcie</Text>
          </TouchableOpacity>
          {photoData.map((photo, index) => {
            return (
              <PhotoGallery
                key={`PhotoGalleryImage-${index}`}
                photo={photo}
                index={index}
                owner={props.user}
                setphotoData={setphotoData}
                navigation={props.navigation}
                socket={props.socket}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
