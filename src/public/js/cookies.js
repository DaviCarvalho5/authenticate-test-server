export default {
  setCookie(name, value, durationDays) {
    let today = new Date();
    let expiresIn = new Date();

    expiresIn.setDate(today.getDate() + durationDays);

    var cookie = name + "=" + escape(value) +
      ((durationDays) ? "; duration=" + expiresIn.toUTCString() : "");

    document.cookie = cookie;

    window.location.replace("/");
  },


  getCookie(name) {
    var cookies = document.cookie;
    var prefix = name + "=";
    var begin = cookies.indexOf("; " + prefix);

    if (begin == -1) {

      begin = cookies.indexOf(prefix);

      if (begin != 0) {
        return null;
      }

    } else {
      begin += 2;
    }

    var end = cookies.indexOf(";", begin);

    if (end == -1) {
      end = cookies.length;
    }

    return unescape(cookies.substring(begin + prefix.length, end));
  },
  

  deleteCookie(name) {
    if (this.getCookie(name)) {
      document.cookie = name + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
  },
}