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

async function getSingleShow(id) {
  let show;
  await axios.get(`${baseUrl}/shows/${id}`)
    .then((response) => {
      show = response.data;
    })
    .catch((error) => {
      console.log('Something went wrong ', error);
    });
  return show;
}

async function getSearchedShow(searchQuery) {
  let shows;
  await axios.get(`${baseUrl}/shows?q=${searchQuery}`)
    .then((response) => {
      shows = response.data;
    })
    .catch((error) => {
      console.log('Something went wrong ', error);
    });
  return shows;
}

export default { getAllShows, getSingleShow, getSearchedShow };
