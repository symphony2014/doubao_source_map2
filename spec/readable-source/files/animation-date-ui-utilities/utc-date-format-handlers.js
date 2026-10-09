// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(643481) to 'date-day-of-year-util'
// - Resolved require(201443) to 'get-utc-week-number'
// - Resolved require(991408) to 'date-utc-week-year'
// - Resolved require(170899) to 'week-of-year-calculator'
// - Resolved require(214639) to 'date-get-week-year'
// - Resolved require(872797) to 'zero-pad-number-util'
// - Resolved require(965377) to 'date-utc-formatters'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 260316
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = undefined;
  var r = a(require("date-day-of-year-util") /*id: 643481*/);
  var i = a(require("get-utc-week-number") /*id: 201443*/);
  var o = a(require("date-utc-week-year") /*id: 991408*/);
  var s = a(require("week-of-year-calculator") /*id: 170899*/);
  var l = a(require("date-get-week-year") /*id: 214639*/);
  var u = a(require("zero-pad-number-util") /*id: 872797*/);
  var d = a(require("date-utc-formatters") /*id: 965377*/);
  var c = {
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  };
  function h(e, t) {
    var n = e > 0 ? "-" : "+";
    var a = Math.abs(e);
    var r = Math.floor(a / 60);
    var i = a % 60;
    if (i === 0) {
      return n + String(r);
    } else {
      return n + String(r) + (t || "") + u.default(i, 2);
    }
  }
  function f(e, t) {
    if (e % 60 == 0) {
      return (e > 0 ? "-" : "+") + u.default(Math.abs(e) / 60, 2);
    } else {
      return p(e, t);
    }
  }
  function p(e, t) {
    var n = Math.abs(e);
    return (e > 0 ? "-" : "+") + u.default(Math.floor(n / 60), 2) + (t || "") + u.default(n % 60, 2);
  }
  exports.default = {
    G: function (e, t, n) {
      var a = +(e.getUTCFullYear() > 0);
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(a, {
            width: "abbreviated"
          });
        case "GGGGG":
          return n.era(a, {
            width: "narrow"
          });
        default:
          return n.era(a, {
            width: "wide"
          });
      }
    },
    y: function (e, t, n) {
      if (t === "yo") {
        var a = e.getUTCFullYear();
        return n.ordinalNumber(a > 0 ? a : 1 - a, {
          unit: "year"
        });
      }
      return d.default.y(e, t);
    },
    Y: function (e, t, n, a) {
      var r = l.default(e, a);
      var i = r > 0 ? r : 1 - r;
      if (t === "YY") {
        var o = i % 100;
        return u.default(o, 2);
      }
      if (t === "Yo") {
        return n.ordinalNumber(i, {
          unit: "year"
        });
      } else {
        return u.default(i, t.length);
      }
    },
    R: function (e, t) {
      var n = o.default(e);
      return u.default(n, t.length);
    },
    u: function (e, t) {
      var n = e.getUTCFullYear();
      return u.default(n, t.length);
    },
    Q: function (e, t, n) {
      var a = Math.ceil((e.getUTCMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(a);
        case "QQ":
          return u.default(a, 2);
        case "Qo":
          return n.ordinalNumber(a, {
            unit: "quarter"
          });
        case "QQQ":
          return n.quarter(a, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return n.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return n.quarter(a, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    q: function (e, t, n) {
      var a = Math.ceil((e.getUTCMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(a);
        case "qq":
          return u.default(a, 2);
        case "qo":
          return n.ordinalNumber(a, {
            unit: "quarter"
          });
        case "qqq":
          return n.quarter(a, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return n.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
        default:
          return n.quarter(a, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    M: function (e, t, n) {
      var a = e.getUTCMonth();
      switch (t) {
        case "M":
        case "MM":
          return d.default.M(e, t);
        case "Mo":
          return n.ordinalNumber(a + 1, {
            unit: "month"
          });
        case "MMM":
          return n.month(a, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return n.month(a, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return n.month(a, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    L: function (e, t, n) {
      var a = e.getUTCMonth();
      switch (t) {
        case "L":
          return String(a + 1);
        case "LL":
          return u.default(a + 1, 2);
        case "Lo":
          return n.ordinalNumber(a + 1, {
            unit: "month"
          });
        case "LLL":
          return n.month(a, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return n.month(a, {
            width: "narrow",
            context: "standalone"
          });
        default:
          return n.month(a, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    w: function (e, t, n, a) {
      var r = s.default(e, a);
      if (t === "wo") {
        return n.ordinalNumber(r, {
          unit: "week"
        });
      } else {
        return u.default(r, t.length);
      }
    },
    I: function (e, t, n) {
      var a = i.default(e);
      if (t === "Io") {
        return n.ordinalNumber(a, {
          unit: "week"
        });
      } else {
        return u.default(a, t.length);
      }
    },
    d: function (e, t, n) {
      if (t === "do") {
        return n.ordinalNumber(e.getUTCDate(), {
          unit: "date"
        });
      } else {
        return d.default.d(e, t);
      }
    },
    D: function (e, t, n) {
      var a = r.default(e);
      if (t === "Do") {
        return n.ordinalNumber(a, {
          unit: "dayOfYear"
        });
      } else {
        return u.default(a, t.length);
      }
    },
    E: function (e, t, n) {
      var a = e.getUTCDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(a, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return n.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return n.day(a, {
            width: "short",
            context: "formatting"
          });
        default:
          return n.day(a, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    e: function (e, t, n, a) {
      var r = e.getUTCDay();
      var i = (r - a.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(i);
        case "ee":
          return u.default(i, 2);
        case "eo":
          return n.ordinalNumber(i, {
            unit: "day"
          });
        case "eee":
          return n.day(r, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return n.day(r, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return n.day(r, {
            width: "short",
            context: "formatting"
          });
        default:
          return n.day(r, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    c: function (e, t, n, a) {
      var r = e.getUTCDay();
      var i = (r - a.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(i);
        case "cc":
          return u.default(i, t.length);
        case "co":
          return n.ordinalNumber(i, {
            unit: "day"
          });
        case "ccc":
          return n.day(r, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return n.day(r, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return n.day(r, {
            width: "short",
            context: "standalone"
          });
        default:
          return n.day(r, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    i: function (e, t, n) {
      var a = e.getUTCDay();
      var r = a === 0 ? 7 : a;
      switch (t) {
        case "i":
          return String(r);
        case "ii":
          return u.default(r, t.length);
        case "io":
          return n.ordinalNumber(r, {
            unit: "day"
          });
        case "iii":
          return n.day(a, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return n.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return n.day(a, {
            width: "short",
            context: "formatting"
          });
        default:
          return n.day(a, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    a: function (e, t, n) {
      var a = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return n.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return n.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return n.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    b: function (e, t, n) {
      var a;
      var r = e.getUTCHours();
      a = r === 12 ? c.noon : r === 0 ? c.midnight : r / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "b":
        case "bb":
          return n.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return n.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return n.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return n.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    B: function (e, t, n) {
      var a;
      var r = e.getUTCHours();
      a = r >= 17 ? c.evening : r >= 12 ? c.afternoon : r >= 4 ? c.morning : c.night;
      switch (t) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return n.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return n.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    h: function (e, t, n) {
      if (t === "ho") {
        var a = e.getUTCHours() % 12;
        if (a === 0) {
          a = 12;
        }
        return n.ordinalNumber(a, {
          unit: "hour"
        });
      }
      return d.default.h(e, t);
    },
    H: function (e, t, n) {
      if (t === "Ho") {
        return n.ordinalNumber(e.getUTCHours(), {
          unit: "hour"
        });
      } else {
        return d.default.H(e, t);
      }
    },
    K: function (e, t, n) {
      var a = e.getUTCHours() % 12;
      if (t === "Ko") {
        return n.ordinalNumber(a, {
          unit: "hour"
        });
      } else {
        return u.default(a, t.length);
      }
    },
    k: function (e, t, n) {
      var a = e.getUTCHours();
      if (a === 0) {
        a = 24;
      }
      if (t === "ko") {
        return n.ordinalNumber(a, {
          unit: "hour"
        });
      } else {
        return u.default(a, t.length);
      }
    },
    m: function (e, t, n) {
      if (t === "mo") {
        return n.ordinalNumber(e.getUTCMinutes(), {
          unit: "minute"
        });
      } else {
        return d.default.m(e, t);
      }
    },
    s: function (e, t, n) {
      if (t === "so") {
        return n.ordinalNumber(e.getUTCSeconds(), {
          unit: "second"
        });
      } else {
        return d.default.s(e, t);
      }
    },
    S: function (e, t) {
      return d.default.S(e, t);
    },
    X: function (e, t, n, a) {
      var r = (a._originalDate || e).getTimezoneOffset();
      if (r === 0) {
        return "Z";
      }
      switch (t) {
        case "X":
          return f(r);
        case "XXXX":
        case "XX":
          return p(r);
        default:
          return p(r, ":");
      }
    },
    x: function (e, t, n, a) {
      var r = (a._originalDate || e).getTimezoneOffset();
      switch (t) {
        case "x":
          return f(r);
        case "xxxx":
        case "xx":
          return p(r);
        default:
          return p(r, ":");
      }
    },
    O: function (e, t, n, a) {
      var r = (a._originalDate || e).getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + h(r, ":");
        default:
          return "GMT" + p(r, ":");
      }
    },
    z: function (e, t, n, a) {
      var r = (a._originalDate || e).getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + h(r, ":");
        default:
          return "GMT" + p(r, ":");
      }
    },
    t: function (e, t, n, a) {
      var r = Math.floor((a._originalDate || e).getTime() / 1000);
      return u.default(r, t.length);
    },
    T: function (e, t, n, a) {
      var r = (a._originalDate || e).getTime();
      return u.default(r, t.length);
    }
  };
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}