import { url, port } from "../../../src/helpers";

export default function updateLocation(location) {

  return fetch(`${url}:${port.rest}/api/updateLocation`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      location: location,
    }),
  }).then((res) => res.json());
}
