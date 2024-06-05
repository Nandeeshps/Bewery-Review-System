import axios from 'axios';

const apiUrl = 'https://api.openbrewerydb.org/breweries';

export const searchByCity = (city) => {
  return axios.get(`${apiUrl}?by_city=${city}`);
};

export const searchByName = (name) => {
  return axios.get(`${apiUrl}?by_name=${name}`);
};

export const searchByType = (type) => {
  return axios.get(`${apiUrl}?by_type=${type}`);
};

export const getBrewery = (id) => {
  return axios.get(`${apiUrl}/${id}`);
};
