// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'formatDate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 251899
         */
module.exports = function (module, exports, require) {
  var dateValidationUtil_1 = require("date-validation-util_1") /*id: 152056*/;
  var dateSubtractUtil = require("date-subtract-util") /*id: 975722*/;
  var dateNormalizer = require("date-normalizer") /*id: 414214*/;
  var validateArgumentCount = require("validate-argument-count") /*id: 131411*/;
  var dateWeekNumberCalculator = require("date-week-number-calculator") /*id: 937742*/;
  var dateWeekYearUtil = require("date-week-year-util") /*id: 950593*/;
  var getWeekNumber = require("get-week-number") /*id: 181103*/;
  var weekYearCalculator = require("week-year-calculator") /*id: 157430*/;
  function c(e, t) {
    for (var n = Math.abs(e).toString(); n.length < t;) {
      n = "0" + n;
    }
    return (e < 0 ? "-" : "") + n;
  }
  var h = {
    y: function (e, t) {
      var n = e.getUTCFullYear();
      var a = n > 0 ? n : 1 - n;
      return c(t === "yy" ? a % 100 : a, t.length);
    },
    M: function (e, t) {
      var n = e.getUTCMonth();
      if (t === "M") {
        return String(n + 1);
      } else {
        return c(n + 1, 2);
      }
    },
    d: function (e, t) {
      return c(e.getUTCDate(), t.length);
    },
    h: function (e, t) {
      return c(e.getUTCHours() % 12 || 12, t.length);
    },
    H: function (e, t) {
      return c(e.getUTCHours(), t.length);
    },
    m: function (e, t) {
      return c(e.getUTCMinutes(), t.length);
    },
    s: function (e, t) {
      return c(e.getUTCSeconds(), t.length);
    },
    S: function (e, t) {
      var n = t.length;
      return c(Math.floor(e.getUTCMilliseconds() * Math.pow(10, n - 3)), t.length);
    }
  };
  var f = {
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  };
  function p(e, t) {
    var n = e > 0 ? "-" : "+";
    var a = Math.abs(e);
    var r = Math.floor(a / 60);
    var i = a % 60;
    if (i === 0) {
      return n + String(r);
    } else {
      return n + String(r) + (t || "") + c(i, 2);
    }
  }
  function g(e, t) {
    if (e % 60 == 0) {
      return (e > 0 ? "-" : "+") + c(Math.abs(e) / 60, 2);
    } else {
      return m(e, t);
    }
  }
  function m(e, t) {
    var n = Math.abs(e);
    return (e > 0 ? "-" : "+") + c(Math.floor(n / 60), 2) + (t || "") + c(n % 60, 2);
  }
  var v = {
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
      return h.y(e, t);
    },
    Y: function (e, t, n, a) {
      var r = weekYearCalculator.getWeekYear(e, a);
      var i = r > 0 ? r : 1 - r;
      if (t === "YY") {
        return c(i % 100, 2);
      } else if (t === "Yo") {
        return n.ordinalNumber(i, {
          unit: "year"
        });
      } else {
        return c(i, t.length);
      }
    },
    R: function (e, t) {
      return c(dateWeekYearUtil.getWeekYear(e), t.length);
    },
    u: function (e, t) {
      return c(e.getUTCFullYear(), t.length);
    },
    Q: function (e, t, n) {
      var a = Math.ceil((e.getUTCMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(a);
        case "QQ":
          return c(a, 2);
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
          return c(a, 2);
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
          return h.M(e, t);
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
          return c(a + 1, 2);
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
      var r = getWeekNumber.getWeekNumber(e, a);
      if (t === "wo") {
        return n.ordinalNumber(r, {
          unit: "week"
        });
      } else {
        return c(r, t.length);
      }
    },
    I: function (e, t, n) {
      var a = dateWeekNumberCalculator.getWeekNumber(e);
      if (t === "Io") {
        return n.ordinalNumber(a, {
          unit: "week"
        });
      } else {
        return c(a, t.length);
      }
    },
    d: function (e, t, n) {
      if (t === "do") {
        return n.ordinalNumber(e.getUTCDate(), {
          unit: "date"
        });
      } else {
        return h.d(e, t);
      }
    },
    D: function (e, t, n) {
      var a = function (e) {
        validateArgumentCount.validateArgCount(1, arguments);
        var t = dateNormalizer.normalizeDate(e);
        var n = t.getTime();
        t.setUTCMonth(0, 1);
        t.setUTCHours(0, 0, 0, 0);
        return Math.floor((n - t.getTime()) / 86400000) + 1;
      }(e);
      if (t === "Do") {
        return n.ordinalNumber(a, {
          unit: "dayOfYear"
        });
      } else {
        return c(a, t.length);
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
          return c(i, 2);
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
          return c(i, t.length);
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
          return c(r, t.length);
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
      a = r === 12 ? f.noon : r === 0 ? f.midnight : r / 12 >= 1 ? "pm" : "am";
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
      a = r >= 17 ? f.evening : r >= 12 ? f.afternoon : r >= 4 ? f.morning : f.night;
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
      return h.h(e, t);
    },
    H: function (e, t, n) {
      if (t === "Ho") {
        return n.ordinalNumber(e.getUTCHours(), {
          unit: "hour"
        });
      } else {
        return h.H(e, t);
      }
    },
    K: function (e, t, n) {
      var a = e.getUTCHours() % 12;
      if (t === "Ko") {
        return n.ordinalNumber(a, {
          unit: "hour"
        });
      } else {
        return c(a, t.length);
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
        return c(a, t.length);
      }
    },
    m: function (e, t, n) {
      if (t === "mo") {
        return n.ordinalNumber(e.getUTCMinutes(), {
          unit: "minute"
        });
      } else {
        return h.m(e, t);
      }
    },
    s: function (e, t, n) {
      if (t === "so") {
        return n.ordinalNumber(e.getUTCSeconds(), {
          unit: "second"
        });
      } else {
        return h.s(e, t);
      }
    },
    S: function (e, t) {
      return h.S(e, t);
    },
    X: function (e, t, n, a) {
      var r = (a._originalDate || e).getTimezoneOffset();
      if (r === 0) {
        return "Z";
      }
      switch (t) {
        case "X":
          return g(r);
        case "XXXX":
        case "XX":
          return m(r);
        default:
          return m(r, ":");
      }
    },
    x: function (e, t, n, a) {
      var r = (a._originalDate || e).getTimezoneOffset();
      switch (t) {
        case "x":
          return g(r);
        case "xxxx":
        case "xx":
          return m(r);
        default:
          return m(r, ":");
      }
    },
    O: function (e, t, n, a) {
      var r = (a._originalDate || e).getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + p(r, ":");
        default:
          return "GMT" + m(r, ":");
      }
    },
    z: function (e, t, n, a) {
      var r = (a._originalDate || e).getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + p(r, ":");
        default:
          return "GMT" + m(r, ":");
      }
    },
    t: function (e, t, n, a) {
      return c(Math.floor((a._originalDate || e).getTime() / 1000), t.length);
    },
    T: function (e, t, n, a) {
      return c((a._originalDate || e).getTime(), t.length);
    }
  };
  var dateFormatUtils = require("date-format-utils") /*id: 898315*/;
  var timezoneOffsetMs = require("timezone-offset-ms") /*id: 142313*/;
  var dateUnicodeTokenValidator = require("date-unicode-token-validator") /*id: 579287*/;
  var numberToIntegerConverter = require("number-to-integer-converter") /*id: 156285*/;
  var asyncAiCreationGuidance = require("async-ai-creation-guidance") /*id: 960862*/;
  var dateLocaleEnUs = require("date-locale-en-us") /*id: 817703*/;
  var E = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
  var D = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
  var Z = /^'([^]*?)'?$/;
  var P = /''/g;
  var S = /[a-zA-Z]/;
  function R(e, t, n) {
    validateArgumentCount.validateArgCount(2, arguments);
    var f;
    var g;
    var O;
    var N;
    var F = String(t);
    var Y = asyncAiCreationGuidance.getAiGuidance();
    var L = (n == null ? undefined : n.locale) ?? Y.locale ?? dateLocaleEnUs.enUsLocale;
    var j = numberToIntegerConverter.toInteger((n == null ? undefined : n.firstWeekContainsDate) ?? (n == null ? undefined : (f = n.locale) === null || f === undefined ? undefined : f.options?.firstWeekContainsDate) ?? Y.firstWeekContainsDate ?? ((g = Y.locale) === null || g === undefined ? undefined : g.options?.firstWeekContainsDate) ?? 1);
    if (!(j >= 1) || !(j <= 7)) {
      throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var U = numberToIntegerConverter.toInteger((n == null ? undefined : n.weekStartsOn) ?? (n == null ? undefined : (O = n.locale) === null || O === undefined ? undefined : O.options?.weekStartsOn) ?? Y.weekStartsOn ?? ((N = Y.locale) === null || N === undefined ? undefined : N.options?.weekStartsOn) ?? 0);
    if (!(U >= 0) || !(U <= 6)) {
      throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    if (!L.localize) {
      throw RangeError("locale must contain localize property");
    }
    if (!L.formatLong) {
      throw RangeError("locale must contain formatLong property");
    }
    var H = dateNormalizer.normalizeDate(e);
    if (!dateValidationUtil_1.isValidDate(H)) {
      throw RangeError("Invalid time value");
    }
    var $ = timezoneOffsetMs.getTimezoneOffsetMs(H);
    var V = dateSubtractUtil.subtractDateOffset(H, $);
    var W = {
      firstWeekContainsDate: j,
      weekStartsOn: U,
      locale: L,
      _originalDate: H
    };
    return F.match(D).map(function (e) {
      var t = e[0];
      if (t === "p" || t === "P") {
        return dateFormatUtils.dateFormatUtils[t](e, L.formatLong);
      } else {
        return e;
      }
    }).join("").match(E).map(function (a) {
      if (a === "''") {
        return "'";
      }
      var r;
      var i;
      var o = a[0];
      if (o === "'") {
        if (i = (r = a).match(Z)) {
          return i[1].replace(P, "'");
        } else {
          return r;
        }
      }
      var s = v[o];
      if (s) {
        if ((n == null || !n.useAdditionalWeekYearTokens) && dateUnicodeTokenValidator.isYearToken(a)) {
          dateUnicodeTokenValidator.validateDateTokens(a, t, String(e));
        }
        if ((n == null || !n.useAdditionalDayOfYearTokens) && dateUnicodeTokenValidator.isDayToken(a)) {
          dateUnicodeTokenValidator.validateDateTokens(a, t, String(e));
        }
        return s(V, a, L.localize, W);
      }
      if (o.match(S)) {
        throw RangeError("Format string contains an unescaped latin alphabet character `" + o + "`");
      }
      return a;
    }).join("");
  }
  require.d(exports, {
    formatDate: function () {
      return R;
    }
  });
}