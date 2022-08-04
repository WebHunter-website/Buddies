import * as Location from 'expo-location';
import updateLocation from './myProfile/Fetch/updateLocationFetch';

// useEffect(() => {
//   console.log(values);
//   requestPermission()
//   .then((permission) => {
//     getCurrentLocation(permission);
//   })
// }, []);

class LocationManager {
  constructor(setOwner) {
    this.distanceThreshold = 0.1;
    this.owner = null;
    this.setOwner = setOwner;
    this.socket = false;
    const [_, requestPermission] = Location.useForegroundPermissions();
    this.requestPermission = requestPermission;
    this.requestPermission().then(permission => (this.permission = permission));
  }

  getCurrentLocation = (owner, socket, setLocationManager) => {
    console.log(
      `Location permission is ${this.permission.status} (expecting "${Location.PermissionStatus.GRANTED}")`,
    );
    if (this.permission.status == Location.PermissionStatus.GRANTED) {
      Location.getCurrentPositionAsync({}).then(location => {
        setLocationManager(prev => {
          prev.owner = owner;
          prev.socket = socket;
          prev.currentLocation = location;
          return prev;
        });
        console.log(
          `[LocationManager] Updated current location for user ${this.owner.userData.email}`,
        );
        // console.log(location);
        if (this.isUpdateNeeded() || true) {
          this.sendLocationUpdate();
          this.setOwner(prev => {
            prev.userData.location.x = location.coords.latitude;
            prev.userData.location.y = location.coords.longitude;
            return prev;
          });
        }
      });
    }
  };

  getCurrentLocationEveryInterval = (
    timeMs,
    owner,
    socket,
    setLocationManager,
  ) => {
    clearInterval(this.interval);
    setLocationManager(prev => {
      prev.owner = owner;
      prev.socket = socket;
      prev.interval = setInterval(() => {
        prev.getCurrentLocation(owner, socket, setLocationManager);
      }, timeMs);
      return prev;
    });
  };

  isUpdateNeeded = () => {
    console.log(`Current location is: ${this.owner.userData.location.x}, ${this.owner.userData.location.y}`);
    console.log(`New location is    : ${this.currentLocation.coords.latitude}, ${this.currentLocation.coords.longitude}`);
    const distance = this.owner.getDistanceToPoint(
      this.currentLocation.coords.latitude,
      this.currentLocation.coords.longitude,
    );
    return distance >= this.distanceThreshold;
  };

  sendLocationUpdate = () => {
    if (!this.socket) {
      console.log('Cannot send location update to server, no socket available');
      return;
    }

    this.socket.emit(
      'Update location',
      this.owner.userData.email,
      this.currentLocation,
      isOk => {
        if (isOk) {
          console.log('lat' + this.currentLocation.coords.latitude);
          console.log('lon' + this.currentLocation.coords.longitude);
          console.log('Location updated successfully');
        } else {
          console.log('Location could not be updated, check logs');
        }
      },
    );
  };
}

export default LocationManager;
