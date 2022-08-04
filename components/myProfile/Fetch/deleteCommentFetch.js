import { url, port } from "../../../src/helpers";

export default function deleteCommentFetch(commentid) {

  return fetch(`${url}:${port.rest}/api/deleteComment`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      commentid: commentid
    }),
  }).then((res) => res.json());
}
