import { url, port } from "../../src/helpers";

function updateNickFetch(ownerEmail, friendEmail, nick) {
  return fetch(`${url}:${port.rest}/api/updateNick`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email1: ownerEmail,
      email2: friendEmail,
      nick: nick,
    }),
  }).then(
    (_) => Promise.resolve(true),
    (_) => Promise.resolve(false)
  );
}

module.exports = {
  updateNickFetch: updateNickFetch,
};
