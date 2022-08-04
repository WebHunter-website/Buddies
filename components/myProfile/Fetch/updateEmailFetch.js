import { url, port } from "../../../src/helpers";

export default function updateEmail(newEmail, email) {

  return fetch(`${url}:${port.rest}/api/updateEmail`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      newEmail: newEmail,
      email: email
    }),
  }).then((res) => res.json());
}
