import { httpInstance } from '../httpinstance';

export const getNowPlaying = async () => {
  let res: any;
  const endpoint = `now_playing?api_key=${process.env.REACT_APP_MDB_API_KEY}`;
  await httpInstance
    .get(endpoint)
    .then((response: { data: any; }) => {
      res = response.data.results;
    })
    .catch((error: { message: any; }) => {
      res = error.message;
    });
  return res;
};
