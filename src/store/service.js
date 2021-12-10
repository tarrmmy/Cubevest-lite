import axios from "axios";

const baseDomain = 'http://142.93.152.229/test/api';

export async function apiCalls(data, url, method) {
    return axios({
      method,
      url: `${baseDomain}/${url}`,
      data
    })
      .then(response => {
        console.log(response)
        if (response) {
          return response.data
        }
        return false
      })
      .catch(err => console.log(err))
}