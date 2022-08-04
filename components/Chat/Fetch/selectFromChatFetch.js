import { url, port } from "../../../src/helpers";

export default function selectFromChat(owner, user) {

  return fetch(`${url}:${port.rest}/api/selectFromChat`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user1id: owner,
      user2id: user
    }),
  }).then((res) => res.json());
}