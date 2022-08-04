import { url, port } from "../../src/helpers";

export default function addReactionFetch(email, photo) {
  console.log("dochodzi");
   fetch(`${url}:${port.rest}/api/insertIntoReaction`, {
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