import { url, port } from "../../src/helpers";

function deleteFriendFetch(ownerEmail, friendEmail){
  return fetch(`${url}:${port.rest}/api/deleteFriend`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email1: ownerEmail,
      email2: friendEmail,
      
    })
  });
}

module.exports = {
    deleteFriendFetch: deleteFriendFetch
}