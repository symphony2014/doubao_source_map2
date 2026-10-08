// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(546552) to 'utils-to-integer'
// - Resolved require(116169) to 'date-timezone-offset-util'
// - Resolved require(877320) to 'timezone-offset-util'
// - Resolved require(326615) to 'timezone-suffix-regex'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 43322
         */
module.exports = function (module, exports, require) {
  exports.default = function (e, t) {
    if (arguments.length < 1) {
      throw TypeError("1 argument required, but only " + arguments.length + " present");
    }
    if (e === null) {
      return new Date(NaN);
    }
    var n = t || {};
    var o = n.additionalDigits == null ? 2 : a.default(n.additionalDigits);
    if (o !== 2 && o !== 1 && o !== 0) {
      throw RangeError("additionalDigits must be 0, 1 or 2");
    }
    if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]") {
      return new Date(e.getTime());
    }
    if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]") {
      return new Date(e);
    }
    if (typeof e != "string" && Object.prototype.toString.call(e) !== "[object String]") {
      return new Date(NaN);
    }
    var u = function (e) {
      var t;
      var n = {};
      var a = s.dateTimePattern.exec(e);
      if (a) {
        n.date = a[1];
        t = a[3];
      } else if (a = s.datePattern.exec(e)) {
        n.date = a[1];
        t = a[2];
      } else {
        n.date = null;
        t = e;
      }
      if (t) {
        var r = s.timeZone.exec(t);
        if (r) {
          n.time = t.replace(r[1], "");
          n.timeZone = r[1].trim();
        } else {
          n.time = t;
        }
      }
      return n;
    }(e);
    var d = function (e, t) {
      var n;
      var a = s.YYY[t];
      var r = s.YYYYY[t];
      if (n = s.YYYY.exec(e) || r.exec(e)) {
        var i = n[1];
        return {
          year: parseInt(i, 10),
          restDateString: e.slice(i.length)
        };
      }
      if (n = s.YY.exec(e) || a.exec(e)) {
        var o = n[1];
        return {
          year: parseInt(o, 10) * 100,
          restDateString: e.slice(o.length)
        };
      }
      return {
        year: null
      };
    }(u.date, o);
    var g = d.year;
    var m = function (e, t) {
      if (t === null) {
        return null;
      }
      if (e.length === 0) {
        (a = new Date(0)).setUTCFullYear(t);
        return a;
      }
      if (n = s.MM.exec(e)) {
        a = new Date(0);
        if (h(t, r = parseInt(n[1], 10) - 1)) {
          a.setUTCFullYear(t, r);
          return a;
        } else {
          return new Date(NaN);
        }
      }
      if (n = s.DDD.exec(e)) {
        a = new Date(0);
        var n;
        var a;
        var r;
        var i;
        var o = parseInt(n[1], 10);
        if (!function (e, t) {
          if (t < 1) {
            return false;
          }
          var n = c(e);
          return (!n || !(t > 366)) && (!!n || !(t > 365));
        }(t, o)) {
          return new Date(NaN);
        } else {
          a.setUTCFullYear(t, 0, o);
          return a;
        }
      }
      if (n = s.MMDD.exec(e)) {
        a = new Date(0);
        r = parseInt(n[1], 10) - 1;
        var u = parseInt(n[2], 10);
        if (h(t, r, u)) {
          a.setUTCFullYear(t, r, u);
          return a;
        } else {
          return new Date(NaN);
        }
      }
      if (n = s.Www.exec(e)) {
        if (f(t, i = parseInt(n[1], 10) - 1)) {
          return l(t, i);
        } else {
          return new Date(NaN);
        }
      }
      if (n = s.WwwD.exec(e)) {
        i = parseInt(n[1], 10) - 1;
        var d = parseInt(n[2], 10) - 1;
        if (f(t, i, d)) {
          return l(t, i, d);
        } else {
          return new Date(NaN);
        }
      }
      return null;
    }(d.restDateString, g);
    if (isNaN(m) || !m) {
      return new Date(NaN);
    }
    var v;
    var y = m.getTime();
    var T = 0;
    if (u.time && isNaN(T = function (e) {
      if (t = s.HH.exec(e)) {
        if (p(n = parseFloat(t[1].replace(",", ".")))) {
          return n % 24 * 3600000;
        } else {
          return NaN;
        }
      }
      if (t = s.HHMM.exec(e)) {
        if (p(n = parseInt(t[1], 10), a = parseFloat(t[2].replace(",", ".")))) {
          return n % 24 * 3600000 + a * 60000;
        } else {
          return NaN;
        }
      }
      if (t = s.HHMMSS.exec(e)) {
        n = parseInt(t[1], 10);
        a = parseInt(t[2], 10);
        var t;
        var n;
        var a;
        var r = parseFloat(t[3].replace(",", "."));
        if (p(n, a, r)) {
          return n % 24 * 3600000 + a * 60000 + r * 1000;
        } else {
          return NaN;
        }
      }
      return null;
    }(u.time))) {
      return new Date(NaN);
    }
    if (u.timeZone || n.timeZone) {
      if (isNaN(v = i.default(u.timeZone || n.timeZone, new Date(y + T)))) {
        return new Date(NaN);
      }
    } else {
      v = r.default(new Date(y + T));
      v = r.default(new Date(y + T + v));
    }
    return new Date(y + T + v);
  };
  var a = o(require("utils-to-integer") /*id: 546552*/);
  var r = o(require("date-timezone-offset-util") /*id: 116169*/);
  var i = o(require("timezone-offset-util") /*id: 877320*/);
  function o(e) {
    if (e && e.__esModule) {
      return e;
    } else {
      return {
        default: e
      };
    }
  }
  var s = {
    dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
    datePattern: /^([0-9W+-]+)(.*)/,
    plainTime: /:/,
    YY: /^(\d{2})$/,
    YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
    YYYY: /^(\d{4})/,
    YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    timeZone: o(require("timezone-suffix-regex") /*id: 326615*/).default
  };
  function l(e, t, n) {
    t = t || 0;
    n = n || 0;
    var a = new Date(0);
    a.setUTCFullYear(e, 0, 4);
    var r = t * 7 + n + 1 - (a.getUTCDay() || 7);
    a.setUTCDate(a.getUTCDate() + r);
    return a;
  }
  var u = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var d = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function c(e) {
    return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
  }
  function h(e, t, n) {
    if (t < 0 || t > 11) {
      return false;
    }
    if (n != null) {
      if (n < 1) {
        return false;
      }
      var a = c(e);
      if (a && n > d[t] || !a && n > u[t]) {
        return false;
      }
    }
    return true;
  }
  function f(e, t, n) {
    return !(t < 0) && !(t > 52) && (n == null || !(n < 0) && !(n > 6));
  }
  function p(e, t, n) {
    return (e == null || !(e < 0) && !(e >= 25)) && (t == null || !(t < 0) && !(t >= 60)) && (n == null || !(n < 0) && !(n >= 60));
  }
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}