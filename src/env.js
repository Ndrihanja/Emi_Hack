const env = "dev";
const environment = {
  env: env,
  apiURL: env === "dev" ? "http://172.20.10.4:8000/" : "",
};
export default environment;
