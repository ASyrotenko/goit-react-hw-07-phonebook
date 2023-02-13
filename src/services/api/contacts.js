import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63e917a9b120461c6beaf36e.mockapi.io/api/v1/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');

  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data: result } = await instance.delete(`/${id}`);
  return result;
};
