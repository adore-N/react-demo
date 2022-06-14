const ENV = process.env.REACT_APP_ENV || 'sit';
const baseUrl = process.env.REACT_APP_BASEURL;

const config = {
  ENV,
  baseUrl,
}

export default config;
