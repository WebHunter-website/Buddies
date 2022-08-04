const { url } = require("../../../src/helpers");

function facebookAuthentication() {
  return fetch(`${url}:${port.rest}/auth/facebook`, {
    method: "GET",
  }).then((res) => res.text());
}

function authenticateByFacebook(setFacebookModalVisible, setFacebookModalContent) {
  facebookAuthentication().then((text) => {
    console.log(text);
    setFacebookModalContent(text);
    setFacebookModalVisible(true);
  });
}

module.exports = {
  authenticateByFacebook: authenticateByFacebook,
};
