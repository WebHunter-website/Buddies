import { url, port } from "./helpers";

export default function fetchUserByToken(token) {
  return fetch(`${url}:${port.rest}/api/loginUserByToken`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token,
    }),
  }).then((res) => res.json());
}