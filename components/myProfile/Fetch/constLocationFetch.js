import { url, port } from "../../../src/helpers";

function updateLocationPermission(ownerEmail, location){

        fetch(`${url}:${port.rest}/api/updateLocationPermission`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: ownerEmail,
          location: location,
        })
      });
}

module.exports = {
  updateLocationPermissionFetch: updateLocationPermission
}