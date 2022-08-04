import { url, port } from "../../src/helpers";

export default function setSettingsFetch(email, policy){

    return fetch(`${url}:${port.rest}/api/insertIntoSettings`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          policy: policy
        }),
      })
}
