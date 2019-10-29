/* eslint-disable no-console */

export const getWordsApi = () => {
  // return fetch('https://cors-anywhere.herokuapp.com/https://yesno.wtf/api', {
  // headers: {
  //   origin: null
  // }
  return fetch('https://raw.githubusercontent.com/caripizza/redux-words/master/src/fixtures/words.json', {
    // test errors:
    // return fetch('https://httpstat.us/400', {
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) {
        console.error(new Error(json.message));
        throw new Error(json.message);
      }
      return json;
    });
};
