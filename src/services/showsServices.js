import axios from 'axios';

const baseUrl = 'http://api.tvmaze.com';
/*
  Fetches one show from tvmaze api
*/
async function getAllShows() {
  let shows;
  await axios.get(`${baseUrl}/shows`)
    .then((response) => {
      shows = response.data;
    })
    .catch((error) => {
      console.log('Something went wrong ', error);
    });
  return shows;
}

export default { getAllShows };
