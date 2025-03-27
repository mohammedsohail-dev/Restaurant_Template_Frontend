import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:9090",
  realm: "Sohail",
  clientId: "sohail-rest-api"
});

export default keycloak;
