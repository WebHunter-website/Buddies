import { url, port } from "../../src/helpers";

export default function deleteReactionFetch(email, photo) {
   fetch(`${url}:${port.rest}/api/deleteReaction`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: email,
      photo: photo

    }),
  }).then((res) => res.json());
}