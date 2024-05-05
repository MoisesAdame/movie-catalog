import { httpInstance } from '../httpinstance';

export const getDetails = async (movieId: string) => {
  let res: any;
  const endpoint = `${movieId}?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
  await httpInstance
    .get(endpoint)
    .then((response) => {
      res = response.data;
    })
    .catch((error) => {
      res = error.message;
    });
  return res;
}