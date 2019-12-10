import http from "./httpService";
import { apiUrl } from "../config.json";

function getGenres() {
  return http.get(apiUrl + "/genres");
}

export { getGenres };
