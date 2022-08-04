const loginUser = require('../components/register/loginUser').default;
const {toRad} = require('./helpers');
const {url, port} = require('./helpers');
const {addFriend} = require('../components/FriendList/addFriend');
const {updateNickFetch} = require('../components/FriendList/updateNick');
const {
  deleteFriendFetch,
} = require('../components/FriendList/deleteFriendFetch');
const {addPhotoFetch} = require('../components/Photos/addPhotoFetch');
const {photoGalleryFetch} = require('../components/Photos/photoFetch');
const {
  updateShortDescFetch,
} = require('../components/myProfile/Fetch/updateShortDesc');
const {
  updateLongDescFetch,
} = require('../components/myProfile/Fetch/updateLongDesc');
const {
  updateStatusFetch,
} = require('../components/myProfile/Fetch/updateStatus');
const {
  updateProfilePhotoFetch,
} = require('../components/myProfile/Fetch/updateProfilePhoto');

class User {
  constructor(userData = {}) {
    this.userData = userData;
    this.friendsList = [];
    this.status = '';
  }

  copy() {
    const newUser = new User();
    newUser.userData = {...this.userData};
    newUser.friendsList = [...this.friendsList];
    newUser.status = this.status;

    return newUser;
  }

  loginUser(email, password) {
    return loginUser(email, password).then(
      data => {
        // console.log("User Data after login");
        // console.log(data);
        this.userData = data;
        return Promise.resolve(data);
      },
      reject => {
        console.log(`Handling rejection in User::loginUser\nreject: ${reject}`);
        alert('Wrong loggin or password.');
        return Promise.resolve({});
      },
    );
  }

  getStatus() {
    return fetch(`${url}:${port.rest}/api/selectStatusFrom`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stat: this.userData.status,
      }),
    }).then(res => res.json());
  }

  getDistanceToPoint(lat2, lon2) {
    const deg2rad = deg => deg * (Math.PI / 180);

    const lat1 = this.userData.location.x;
    const lon1 = this.userData.location.y;

    var R = 6370.986; // km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  addFriend(friendData, nick = '') {
    addFriend(this.userData.email, friendData.email, nick).then(
      resultStauts => {
        if (resultStauts.result) {
          alert('dodano do znajomych');
        } else {
          alert('użytkownik jest już na liście znajomych')
        }
        // this.loadFriendsList();
      },
    );
  }

  fetchFriendsList() {
    console.log('_loadFriendsList - this.userData.email: ');
    console.log(this.userData.email);
    return fetch(`${url}:${port.rest}/api/showListFriends`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.userData.email,
      }),
    })
      .then(res => res.json())
      .then(data => {
        return Promise.resolve(data.result);
      });
  }

  updateNick(email, nick) {
    return updateNickFetch(this.userData.email, email, nick);
  }

  deleteFriend(email) {
    return deleteFriendFetch(this.userData.email, email);
  }

  addPhotoToWall(photo, date) {
    addPhotoFetch(this.userData.email, photo, date);
  }

  getPhotoGallery(photo) {
    photoGalleryFetch(this.userData.email);
  }

  updateShortDesc(shortDesc) {
    return updateShortDescFetch(this.userData.email, shortDesc);
  }

  updateLongDesc(longDesc) {
    return updateLongDescFetch(this.userData.email, longDesc);
  }

  updateStatus(status) {
    return updateStatusFetch(this.userData.email, status);
  }

  updateProfilePhoto(photo) {
    return updateProfilePhoto(this.userData.email, photo);
  }
}
module.exports = {
  User: User,
};
