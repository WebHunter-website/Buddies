import {url, port} from '../../src/helpers';

export default function select(status, statusid) {
  return Promise.resolve({
    result: [
      {statusid: 1, status: 'spacer', type: 1},
      {statusid: 2, status: 'spacer z psem', type: 1},
      {statusid: 3, status: 'wypad za miasto', type: 1},
      {statusid: 4, status: 'wakacje', type: 0},
      {statusid: 5, status: 'shopping', type: 0},
      {statusid: 6, status: 'plac zabaw z dziećmi', type: 1},
      {statusid: 7, status: 'kawa/herbata', type: 0},
      {statusid: 8, status: 'na piwo', type: 0},
      {statusid: 9, status: 'kino/teatr', type: 1},
      {statusid: 10, status: 'impreza', type: 0},
      {statusid: 11, status: 'osoba toważysząca na ślub', type: 0},
      {statusid: 12, status: 'grill', type: 0},
      {statusid: 13, status: 'kręgle', type: 0},
      {statusid: 14, status: 'bilard', type: 1},
      {statusid: 15, status: 'rower', type: 0},
      {statusid: 16, status: 'siłownia', type: 0},
      {statusid: 17, status: 'bieganie', type: 0},
      {statusid: 18, status: 'rolki', type: 0},
      {statusid: 19, status: 'basen', type: 1},
      {statusid: 20, status: 'piłka nożna', type: 0},
      {statusid: 21, status: 'narty/snowboard', type: 0},
      {statusid: 22, status: 'nordic walking', type: 0},
      {statusid: 23, status: 'lodowisko', type: 0},
      {statusid: 24, status: 'spadochron', type: 0},
      {statusid: 25, status: 'aquapark z dzieckiem', type: 1},
    ],
  });
  // return fetch(`${url}:${port.rest}/api/selectStatustoRegister`, {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json"
  //   }
  // }).then((res) => res.json());
}
