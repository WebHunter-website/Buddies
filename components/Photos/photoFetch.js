import { url, port } from "../../src/helpers";

export default function photoGalleryFetch(email) {
  console.log("user: " + email);
  return fetch(`${url}:${port.rest}/api/selectPhotosOnWall`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userid: email,
    }),
  }).then((res) => res.json());
}
