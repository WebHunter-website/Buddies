import { url, port } from "../../src/helpers";

export default function tauntInsertFetch(ownerid, userid, date) {

  return fetch(`${url}:${port.rest}/api/insertIntoTaunts`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        ownerid: ownerid,
        userid: userid,
        date: date
    }),
  }).then((res) => res.json());
}