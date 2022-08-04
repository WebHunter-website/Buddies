import { url, port } from "../../../src/helpers";

export default function deletePhotoFetch( photoid) {

  return fetch(`${url}:${port.rest}/api/deletePhoto`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      photoid: photoid
    }),
  }).then((res) => res.json());
}
