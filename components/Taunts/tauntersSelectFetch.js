import { url, port } from "../../src/helpers";

export default function tauntersSelectFetch(email) {

  return fetch(`${url}:${port.rest}/api/selectTaunters`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify({
        email: email
    })
  }).then((res) => res.json());
}