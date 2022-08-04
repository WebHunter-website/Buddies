import { url, port } from "../../../src/helpers";

function updateLongDesc(ownerEmail, longDesc){

   return fetch(`${url}:${port.rest}/api/updateshortDescription`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          description: longDesc,
          email: ownerEmail,
        })
      });
}

module.exports = {
  updateLongDescFetch: updateLongDesc
}
