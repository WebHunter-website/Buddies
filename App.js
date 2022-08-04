import {useState, useEffect, useCallback} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/home';
import Register from './screens/register/register';
import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';
// import lookForFriends from './screens/lookForFriends';
import BottomNAvigator from './screens/bottomNavigator';
import AddFirstPhoto from './screens/register/addFirstPhoto';
import AddLocation from './screens/register/addLocation';
import Login from './screens/register/login';
import Register2 from './screens/register/register2';
import StrangerProfile from './screens/lookForFriends/strangerProfile';
import AddPhoto from './screens/addPhoto';
import ProfileImagePicker from './components/profileImagePicker';
import Chat from './components/Chat/chat';
import {Logout} from './components/register/Logout';
import LocationManager from './components/location';
import updateLocationFetch from './components/myProfile/Fetch/updateLocationFetch';
import initSocket from './src/socket';
import user, {User} from './src/user';
import BlackList from './components/myProfile/blackList';
import PageInformation from './screens/Profile/pageInformation';
import Termsofuse from './components/myProfile/TermsOfUse';
import Privacy from './screens/Profile/privacy';
import Rodo from './components/myProfile/rodo';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

// const getFonts = () => {
//   return Font.loadAsync({
//     barlow: require('./assets/fonts/Barlow-Medium.ttf'),
//     roboto: require('./assets/fonts/Roboto-Regular.ttf'),
//     zilla: require('./assets/fonts/ZillaSlab-SemiBold.ttf'),
//     robotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
//   });
// };

export default function App() {
  const [isLoaded, setisLoaded] = useState(false);
  const [allowLocationUpdate, setAllowLocationUpdate] = useState(false);
  const [socket, setSocket] = useState(false);
  const [owner, setOwner] = useState(new User());
  const [locationManager, setLocationManager] = useState(
    new LocationManager(setOwner),
  );

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          barlow: require('./assets/fonts/Barlow-Medium.ttf'),
          roboto: require('./assets/fonts/Roboto-Regular.ttf'),
          zilla: require('./assets/fonts/ZillaSlab-SemiBold.ttf'),
          robotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setisLoaded(true);
      }
    }

    if (!isLoaded) {
      prepare();
    }

    if (!socket) {
      setSocket(initSocket());
    }

    setAllowLocationUpdate(owner.userData.location_setting);

    if (allowLocationUpdate) {
      locationManager.getCurrentLocationEveryInterval(
        2000,
        owner,
        socket,
        setLocationManager,
      );
      locationManager.getCurrentLocation(owner, socket, setLocationManager);
      return () => clearInterval(locationManager.interval);
    } else {
      clearInterval(locationManager.interval);
    }
  }, [allowLocationUpdate, owner]);

  const onLayoutRootView = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  function getCurrentLocation() {
    locationManager.getCurrentLocation(owner, socket, setLocationManager);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home">
          {props => (
            <Home
              {...props}
              socket={socket}
              owner={owner}
              setOwner={setOwner}
              onLayout={onLayoutRootView}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Login">
          {props => (
            <Login
              {...props}
              socket={socket}
              owner={owner}
              setOwner={setOwner}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Register2" component={Register2} />
        <Stack.Screen name="AddFirstPhoto" component={AddFirstPhoto} />
        <Stack.Screen name="AddLocation">
          {props => <AddLocation {...props} socket={socket} />}
        </Stack.Screen>
        <Stack.Screen name="BottomNAv">
          {props => (
            <BottomNAvigator
              {...props}
              setAllowLocationUpdate={setAllowLocationUpdate}
              socket={socket}
              getCurrentLocation={getCurrentLocation}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="StrangerProfile">
          {props => <StrangerProfile {...props} socket={socket} />}
        </Stack.Screen>
        <Stack.Screen name="AddPhoto" component={AddPhoto} />
        <Stack.Screen
          name="ProfileImagePicker"
          component={ProfileImagePicker}
        />
        <Stack.Screen name="Chat">
          {props => <Chat {...props} socket={socket} owner={owner} />}
        </Stack.Screen>
        <Stack.Screen name="BlackList">
          {props => <BlackList {...props} socket={socket} owner={owner} />}
        </Stack.Screen>
        <Stack.Screen name="Logout">
          {props => <Logout {...props} setOwner={setOwner} />}
        </Stack.Screen>
        <Stack.Screen name="Information" component={PageInformation} />
        <Stack.Screen name="TermsOfUse" component={Termsofuse} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="Rodo" component={Rodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
