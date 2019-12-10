import * as Sentry from "@sentry/browser";

function initSentry() {
  Sentry.init({
    dsn: "https://200cb381dd054820a447115253fa9dc1@sentry.io/1848508"
  });
}

//No need for log function, SENTRY changed the way of capturing errors

export default { initSentry };
