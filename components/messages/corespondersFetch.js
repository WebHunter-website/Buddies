import { url, port } from "../../src/helpers";

export default function coresponders(email) {

  return fetch(`${url}:${port.rest}/api/selectPeopleWithMessages`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email: email
    }),
  }).then((res) => res.json());
}