import { url, port } from "../../src/helpers";

export default function loginUser(email, password) {


  return fetch(`${url}:${port.rest}/api/loginUser`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => {
    if(res === undefined) {
      return Promise.reject();
    }
    return (res.json());
  });
}
