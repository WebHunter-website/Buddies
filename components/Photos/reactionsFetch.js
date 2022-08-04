import { url, port } from "../../src/helpers";

export default function reactionsFetch(userid, photoid) {
  return fetch(`${url}:${port.rest}/api/selectReactionsToPhoto`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userid: userid,
      photoid: photoid
    }),
  }).then((res) => res.json());
}
