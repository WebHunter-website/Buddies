const {func} = require('prop-types');

function Promisify(f) {
  if (typeof f != 'function') {
    return Promise.reject({
      type: 'error',
      msg: 'Promisify argument is not a function',
    });
  }

  return new Promise((resolve, reject) => {
    f(resolve, reject);
  });
}

function cssDispalyIf(condition) {
  if (condition) {
    return {
      display: 'block',
    };
  } else {
    return {
      display: 'none',
    };
  }
}

function toRad(Value) {
  return (Value * Math.PI) / 180;
}

function getFilledArray(filler, count) {
  let x = [];
  x.length = count;
  x.fill(filler);
  return [...x];
}

function formatDate(date) {
  return `${('0' + date.getDate()).substr(-2, 2)}-${(
    '0' +
    (date.getMonth() + 1)
  ).substr(-2, 2)}-${date.getFullYear()}`;
}

// const url = "http://host716050.xce.pl";
// const url = "http://192.168.1.3:3000"
// const url = "http://192.168.0.3:3000";
// const url = "http://192.168.43.163:3000"

const URLS = {
  PROD: 'http://host716050.xce.pl',
  DEV1: 'http://192.168.0.3',
  DEV2: 'http://192.168.1.3',
  DEV3: 'http://192.168.43.163',
};

const url = URLS.PROD;
const port = {
  rest: 1025,
  socket: 1026,
};

module.exports = {
  Promisify: Promisify,
  cssDispalyIf: cssDispalyIf,
  toRad: toRad,
  getFilledArray: getFilledArray,
  url: url,
  port: port,
  formatDate: formatDate,
};
