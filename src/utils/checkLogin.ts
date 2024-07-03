export function checkLogin() {
  if (localStorage.getItem("token") === null) {
    return false;
  } else {
    return true;
  }
}
