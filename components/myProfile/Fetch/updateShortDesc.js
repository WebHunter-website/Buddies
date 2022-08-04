import { url, port } from "../../../src/helpers";

function updateshortDesc(ownerEmail, shortDesc){
  return fetch(`${url}:${port.rest}/api/updateshortDescription`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          shortdesc: shortDesc,
          email: ownerEmail,
        })
      });
}

module.exports = {
  updateShortDescFetch: updateshortDesc
}
