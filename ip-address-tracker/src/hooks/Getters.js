import axios from 'axios';

function isIP(test) {
  const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipRegex.test(test);
}

export function getIpData(input) {
  const paramType = isIP(input) ? 'ipAddress' : 'domain';
  const uri = `https://geo.ipify.org/api/v1?apiKey=at_62Zr6fPyrhqz3MAbM3OkrcfGiiVxy&${paramType}=${input}`;

  return axios.get(uri)
    .then((res) => res.data)
    .catch((err) => {
      const res = {};
      res.message = err.response.data.messages;
      res.error = true;
      return res;
    });
}
