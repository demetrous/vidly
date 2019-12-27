import http from "./httpService";

function getGenres() {
  return http.get("/genres");
}

export { getGenres };
