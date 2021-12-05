import axios from "axios";

const baseDomain = 'http://142.93.152.229/pss/api';

export async function login(email, password) {
  return axios({
    method: 'post',
    url: `${baseDomain}/auth/login`,
    data: {
      email,
      password
    }})
    .then(response => {
      console.log(response)
      if (response) {
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}