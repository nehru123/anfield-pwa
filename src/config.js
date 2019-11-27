import firebaseConfigData from "./firebaseConfig";

export const DEVELOPMENT_URL = "http://127.0.0.1:3001";
export const PRODUCTION_URL = "http://127.0.0.1:3001";
export const APP_INSTALL_STATUS_URI = "sansAppInstallStatus";
export const CUSTOMER_DRAWER_STATUS_URI = "sansCustomerDrawerStatus";
export const COMPANY_DRAWER_STATUS_URI = "sansCompanyDrawerStatus";
export const DEV_IMAGE_URL = "https://api.sans.ngopi.men";
export const PROD_IMAGE_URL = "https://api.sans.ngopi.men";

export const IS_PRODUCTION =
  window.location.hostname !== "sans.ngopi.men" &&
  !Boolean(
    window.location.hostname === "localhost" ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === "[::1]" ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );

export const BASE_URL = IS_PRODUCTION ? PRODUCTION_URL : DEVELOPMENT_URL;
export const BASE_IMAGE_URL = IS_PRODUCTION ? PROD_IMAGE_URL : DEV_IMAGE_URL;
export const ACCESS_TOKEN_STORAGE_URI = "access_token_sans";
export const REFRESH_TOKEN_STORAGE_URI = "refresh_token_sans";
export const firebaseConfig = firebaseConfigData;
export const formatImageUrl = path => `${BASE_IMAGE_URL}${path}`;
export const formatMoney = num => {
  return `Rp ${num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`;
};

export default {
  BASE_URL,
  ACCESS_TOKEN_STORAGE_URI,
  REFRESH_TOKEN_STORAGE_URI,
  APP_INSTALL_STATUS_URI,
  CUSTOMER_DRAWER_STATUS_URI,
  firebaseConfig,
  formatImageUrl,
  formatMoney
};
