import { httpInstance } from '../httpinstance';

export const getPopularMovies = async () => {
  let res: any;
  const endpoint = `popular?api_key=${process.env.REACT_APP_MDB_API_KEY}`;
  await httpInstance
    .get(endpoint)
    .then((response) => {
      res = response.data.results;
    })
    .catch((error) => {
      res = error.message;
    });
  return res;
};
