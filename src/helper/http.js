import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:8000/v1',
  baseURL: 'https://meetup-go-demo.herokuapp.com/',
  // headers: {
  //   Authorization: 'Bearer {token}',
  // },
});
