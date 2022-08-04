import { url, port } from "../../../src/helpers";

export default function insertIntoChat(owner, user, message, data) {

  return fetch(`${url}:${port.rest}/api/insertIntoChat`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      owner: owner,
      user: user,
      message: message,
      data: data
    }),
  }).then((res) => res.json());
}
