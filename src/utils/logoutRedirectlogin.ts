import { ROUTER_PATH } from "../constants/constants";
import { checkLogin } from "./checkLogin";

export function logoutRedirectlogin() {
  if (!checkLogin()) {
    window.location.href = ROUTER_PATH.login;
  }
}
