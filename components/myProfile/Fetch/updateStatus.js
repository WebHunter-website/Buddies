import { url, port } from "../../../src/helpers";

function updateStatus(ownerEmail, status){

   return fetch(`${url}:${port.rest}/api/updateStatus`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: status,
          email: ownerEmail,
        })
      });
}

module.exports = {
  updateStatusFetch: updateStatus
}