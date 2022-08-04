import { url, port } from "../../src/helpers";

function addFriend(ownerEmail, friendEmail, nick){
    return fetch(`${url}:${port.rest}/api/addToFriendList`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email1: ownerEmail,
          email2: friendEmail,
          nick: nick,
        })
      });
  }

module.exports = {
    addFriend: addFriend
}
