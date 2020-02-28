// production
const prod = {
  API_URL: "https://mosh-api.herokuapp.com"
};

const dev = {
  API_URL: "https://mosh-api.herokuapp.com"
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;
