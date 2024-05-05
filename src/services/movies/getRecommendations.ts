import { httpInstance } from '../httpinstance';

export const getRecommendations = async (movieId: string) => {
  let res: any;
  const endpoint = `${movieId}/recommendations?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
  await httpInstance
    .get(endpoint)
    .then((response: { data: any; }) => {
      res = response.data;
    })
    .catch((error: { message: any; }) => {
      res = error.message;
    });
  return res;
}