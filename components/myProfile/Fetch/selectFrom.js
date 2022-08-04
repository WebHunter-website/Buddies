import { url, port } from "../../../src/helpers";

export default function select(name, email) {

  return fetch(`${url}:${port.rest}/api/selectDataFrom`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    }),
  }).then((res) => res.json());
}
