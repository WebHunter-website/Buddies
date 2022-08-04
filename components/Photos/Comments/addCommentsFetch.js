import { url, port } from "../../../src/helpers"

export default function addCommentFetch(email, photoid, comment, date) {
    return fetch(`${url}:${port.rest}/api/insertCommentToPhoto`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          userid: email,
          photoid: photoid,
          comment: comment,
          date: date
      })
    }).then((res) => res.json());
  }