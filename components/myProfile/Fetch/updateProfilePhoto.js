import { url, port } from "../../../src/helpers";

export default function updateProfilePhoto(email, photo){
   return fetch(`${url}:${port.rest}/api/updateProfilePhoto`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          photo: photo
        })
      });
}

// module.exports = {
//   updateProfilePhotoFetch: updateProfilePhoto
// }
