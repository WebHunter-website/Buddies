import { url, port } from "../../src/helpers";

function addPhotoFetch(ownerEmail, photo, date) {
  return fetch(`${url}:${port.rest}/api/addPhotoToWall`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userid: ownerEmail,
      photo: photo,
      date: date,
    }),
  }).then((res) => res.json());
}

module.exports = {
  addPhotoFetch: addPhotoFetch,
};
