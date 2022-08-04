// import { url, port } from "../../src/helpers";
import { url, port } from "../../../src/helpers"

export default function photoGalleryFetch(photo) {
  return fetch(`${url}:${port.rest}/api/selectCommentsToPhoto`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      photoid: photo,
    }),
  }).then((res) => res.json());
}