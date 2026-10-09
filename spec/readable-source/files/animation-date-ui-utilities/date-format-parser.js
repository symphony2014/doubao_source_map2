// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'parseDate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 637973
         */
module.exports = function (module, exports, require) {
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var iteratorAdapterUtil = require("iterator-adapter-util") /*id: 528920*/;
  var dateLocaleEnUs = require("date-locale-en-us") /*id: 817703*/;
  var dateSubtractUtil = require("date-subtract-util") /*id: 975722*/;
  var dateNormalizer = require("date-normalizer") /*id: 414214*/;
  var dateFormatUtils = require("date-format-utils") /*id: 898315*/;
  var timezoneOffsetMs = require("timezone-offset-ms") /*id: 142313*/;
  var dateUnicodeTokenValidator = require("date-unicode-token-validator") /*id: 579287*/;
  var numberToIntegerConverter = require("number-to-integer-converter") /*id: 156285*/;
  var validateArgumentCount = require("validate-argument-count") /*id: 131411*/;
  var assertThisInitialized = require("assert-this-initialized") /*id: 876127*/;
  var setPrototypeInheritance = require("set-prototype-inheritance") /*id: 805158*/;
  var wrapNativeSuperHelper = require("wrap-native-super-helper") /*id: 694678*/;
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var T = function () {
    function e() {
      classCallCheckUtil.classCallCheck(this, e);
      objectPropertySetter.setObjectProperty(this, "priority", undefined);
      objectPropertySetter.setObjectProperty(this, "subPriority", 0);
    }
    classPropertyUtil.defineClassProps(e, [{
      key: "validate",
      value: function (e, t) {
        return true;
      }
    }]);
    return e;
  }();
  var b = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n(e, a, r, i, o) {
      var s;
      classCallCheckUtil.classCallCheck(this, n);
      (s = t.call(this)).value = e;
      s.validateValue = a;
      s.setValue = r;
      s.priority = i;
      if (o) {
        s.subPriority = o;
      }
      return s;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "validate",
      value: function (e, t) {
        return this.validateValue(e, this.value, t);
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        return this.setValue(e, t, this.value, n);
      }
    }]);
    return n;
  }(T);
  var w = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 10);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "subPriority", -1);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "set",
      value: function (e, t) {
        if (t.timestampIsSet) {
          return e;
        }
        var n = new Date(0);
        n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate());
        n.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds());
        return n;
      }
    }]);
    return n;
  }(T);
  var _ = function () {
    function e() {
      classCallCheckUtil.classCallCheck(this, e);
      objectPropertySetter.setObjectProperty(this, "incompatibleTokens", undefined);
      objectPropertySetter.setObjectProperty(this, "priority", undefined);
      objectPropertySetter.setObjectProperty(this, "subPriority", undefined);
    }
    classPropertyUtil.defineClassProps(e, [{
      key: "run",
      value: function (e, t, n, a) {
        var r = this.parse(e, t, n, a);
        if (r) {
          return {
            setter: new b(r.value, this.validate, this.set, this.priority, this.subPriority),
            rest: r.rest
          };
        } else {
          return null;
        }
      }
    }, {
      key: "validate",
      value: function (e, t, n) {
        return true;
      }
    }]);
    return e;
  }();
  var C = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 140);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["R", "u", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "G":
          case "GG":
          case "GGG":
            return n.era(e, {
              width: "abbreviated"
            }) || n.era(e, {
              width: "narrow"
            });
          case "GGGGG":
            return n.era(e, {
              width: "narrow"
            });
          default:
            return n.era(e, {
              width: "wide"
            }) || n.era(e, {
              width: "abbreviated"
            }) || n.era(e, {
              width: "narrow"
            });
        }
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        t.era = n;
        e.setUTCFullYear(n, 0, 1);
        e.setUTCHours(0, 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var timeConstantsMs = require("time-constants-ms") /*id: 52003*/;
  var D = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/
  };
  var Z = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
  };
  function P(e, t) {
    if (e) {
      return {
        value: t(e.value),
        rest: e.rest
      };
    } else {
      return e;
    }
  }
  function S(e, t) {
    var n = t.match(e);
    if (n) {
      return {
        value: parseInt(n[0], 10),
        rest: t.slice(n[0].length)
      };
    } else {
      return null;
    }
  }
  function R(e, t) {
    var n = t.match(e);
    if (!n) {
      return null;
    }
    if (n[0] === "Z") {
      return {
        value: 0,
        rest: t.slice(1)
      };
    }
    var a = n[1] === "+" ? 1 : -1;
    var r = n[2] ? parseInt(n[2], 10) : 0;
    var i = n[3] ? parseInt(n[3], 10) : 0;
    var o = n[5] ? parseInt(n[5], 10) : 0;
    return {
      value: a * (r * timeConstantsMs.msPerHour + i * timeConstantsMs.msPerMinute + o * timeConstantsMs.msPerSecond),
      rest: t.slice(n[0].length)
    };
  }
  function M(e) {
    return S(D.anyDigitsSigned, e);
  }
  function I(e, t) {
    switch (e) {
      case 1:
        return S(D.singleDigit, t);
      case 2:
        return S(D.twoDigits, t);
      case 3:
        return S(D.threeDigits, t);
      case 4:
        return S(D.fourDigits, t);
      default:
        return S(RegExp("^\\d{1," + e + "}"), t);
    }
  }
  function k(e, t) {
    switch (e) {
      case 1:
        return S(D.singleDigitSigned, t);
      case 2:
        return S(D.twoDigitsSigned, t);
      case 3:
        return S(D.threeDigitsSigned, t);
      case 4:
        return S(D.fourDigitsSigned, t);
      default:
        return S(RegExp("^-?\\d{1," + e + "}"), t);
    }
  }
  function O(e) {
    switch (e) {
      case "morning":
        return 4;
      case "evening":
        return 17;
      case "pm":
      case "noon":
      case "afternoon":
        return 12;
      default:
        return 0;
    }
  }
  function A(e, t) {
    var n;
    var a = t > 0;
    var r = a ? t : 1 - t;
    if (r <= 50) {
      n = e || 100;
    } else {
      var i = r + 50;
      n = e + Math.floor(i / 100) * 100 - (e >= i % 100) * 100;
    }
    if (a) {
      return n;
    } else {
      return 1 - n;
    }
  }
  function N(e) {
    return e % 400 == 0 || e % 4 == 0 && e % 100 != 0;
  }
  var x = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 130);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        function a(e) {
          return {
            year: e,
            isTwoDigitYear: t === "yy"
          };
        }
        switch (t) {
          case "y":
            return P(I(4, e), a);
          case "yo":
            return P(n.ordinalNumber(e, {
              unit: "year"
            }), a);
          default:
            return P(I(t.length, e), a);
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t.isTwoDigitYear || t.year > 0;
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        var a = e.getUTCFullYear();
        if (n.isTwoDigitYear) {
          var r = A(n.year, a);
          e.setUTCFullYear(r, 0, 1);
          e.setUTCHours(0, 0, 0, 0);
          return e;
        }
        var i = "era" in t && t.era !== 1 ? 1 - n.year : n.year;
        e.setUTCFullYear(i, 0, 1);
        e.setUTCHours(0, 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var weekYearCalculator = require("week-year-calculator") /*id: 157430*/;
  var dateStartOfWeek = require("date-start-of-week") /*id: 511858*/;
  var L = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 130);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        function a(e) {
          return {
            year: e,
            isTwoDigitYear: t === "YY"
          };
        }
        switch (t) {
          case "Y":
            return P(I(4, e), a);
          case "Yo":
            return P(n.ordinalNumber(e, {
              unit: "year"
            }), a);
          default:
            return P(I(t.length, e), a);
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t.isTwoDigitYear || t.year > 0;
      }
    }, {
      key: "set",
      value: function (e, t, n, a) {
        var r = weekYearCalculator.getWeekYear(e, a);
        if (n.isTwoDigitYear) {
          var i = A(n.year, r);
          e.setUTCFullYear(i, 0, a.firstWeekContainsDate);
          e.setUTCHours(0, 0, 0, 0);
          return dateStartOfWeek.startOfWeek(e, a);
        }
        var o = "era" in t && t.era !== 1 ? 1 - n.year : n.year;
        e.setUTCFullYear(o, 0, a.firstWeekContainsDate);
        e.setUTCHours(0, 0, 0, 0);
        return dateStartOfWeek.startOfWeek(e, a);
      }
    }]);
    return n;
  }(_);
  var dateStartOfWeekUtil = require("date-start-of-week-util") /*id: 133980*/;
  var U = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 130);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t) {
        if (t === "R") {
          return k(4, e);
        } else {
          return k(t.length, e);
        }
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        var a = new Date(0);
        a.setUTCFullYear(n, 0, 4);
        a.setUTCHours(0, 0, 0, 0);
        return dateStartOfWeekUtil.getStartOfWeek(a);
      }
    }]);
    return n;
  }(_);
  var H = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 130);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t) {
        if (t === "u") {
          return k(4, e);
        } else {
          return k(t.length, e);
        }
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        e.setUTCFullYear(n, 0, 1);
        e.setUTCHours(0, 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var $ = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 120);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "Q":
          case "QQ":
            return I(t.length, e);
          case "Qo":
            return n.ordinalNumber(e, {
              unit: "quarter"
            });
          case "QQQ":
            return n.quarter(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.quarter(e, {
              width: "narrow",
              context: "formatting"
            });
          case "QQQQQ":
            return n.quarter(e, {
              width: "narrow",
              context: "formatting"
            });
          default:
            return n.quarter(e, {
              width: "wide",
              context: "formatting"
            }) || n.quarter(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.quarter(e, {
              width: "narrow",
              context: "formatting"
            });
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 1 && t <= 4;
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        e.setUTCMonth((n - 1) * 3, 1);
        e.setUTCHours(0, 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var V = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 120);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "q":
          case "qq":
            return I(t.length, e);
          case "qo":
            return n.ordinalNumber(e, {
              unit: "quarter"
            });
          case "qqq":
            return n.quarter(e, {
              width: "abbreviated",
              context: "standalone"
            }) || n.quarter(e, {
              width: "narrow",
              context: "standalone"
            });
          case "qqqqq":
            return n.quarter(e, {
              width: "narrow",
              context: "standalone"
            });
          default:
            return n.quarter(e, {
              width: "wide",
              context: "standalone"
            }) || n.quarter(e, {
              width: "abbreviated",
              context: "standalone"
            }) || n.quarter(e, {
              width: "narrow",
              context: "standalone"
            });
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 1 && t <= 4;
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        e.setUTCMonth((n - 1) * 3, 1);
        e.setUTCHours(0, 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var W = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 110);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        function a(e) {
          return e - 1;
        }
        switch (t) {
          case "M":
            return P(S(D.month, e), a);
          case "MM":
            return P(I(2, e), a);
          case "Mo":
            return P(n.ordinalNumber(e, {
              unit: "month"
            }), a);
          case "MMM":
            return n.month(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.month(e, {
              width: "narrow",
              context: "formatting"
            });
          case "MMMMM":
            return n.month(e, {
              width: "narrow",
              context: "formatting"
            });
          default:
            return n.month(e, {
              width: "wide",
              context: "formatting"
            }) || n.month(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.month(e, {
              width: "narrow",
              context: "formatting"
            });
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 0 && t <= 11;
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        e.setUTCMonth(n, 1);
        e.setUTCHours(0, 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var G = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 110);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        function a(e) {
          return e - 1;
        }
        switch (t) {
          case "L":
            return P(S(D.month, e), a);
          case "LL":
            return P(I(2, e), a);
          case "Lo":
            return P(n.ordinalNumber(e, {
              unit: "month"
            }), a);
          case "LLL":
            return n.month(e, {
              width: "abbreviated",
              context: "standalone"
            }) || n.month(e, {
              width: "narrow",
              context: "standalone"
            });
          case "LLLLL":
            return n.month(e, {
              width: "narrow",
              context: "standalone"
            });
          default:
            return n.month(e, {
              width: "wide",
              context: "standalone"
            }) || n.month(e, {
              width: "abbreviated",
              context: "standalone"
            }) || n.month(e, {
              width: "narrow",
              context: "standalone"
            });
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 0 && t <= 11;
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        e.setUTCMonth(n, 1);
        e.setUTCHours(0, 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var getWeekNumber = require("get-week-number") /*id: 181103*/;
  var q = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 100);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "w":
            return S(D.week, e);
          case "wo":
            return n.ordinalNumber(e, {
              unit: "week"
            });
          default:
            return I(t.length, e);
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 1 && t <= 53;
      }
    }, {
      key: "set",
      value: function (e, t, n, a) {
        return dateStartOfWeek.startOfWeek(function (e, t, n) {
          validateArgumentCount.validateArgCount(2, arguments);
          var a = dateNormalizer.normalizeDate(e);
          var r = numberToIntegerConverter.toInteger(t);
          var i = getWeekNumber.getWeekNumber(a, n) - r;
          a.setUTCDate(a.getUTCDate() - i * 7);
          return a;
        }(e, n, a), a);
      }
    }]);
    return n;
  }(_);
  var dateWeekNumberCalculator = require("date-week-number-calculator") /*id: 937742*/;
  var X = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 100);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "I":
            return S(D.week, e);
          case "Io":
            return n.ordinalNumber(e, {
              unit: "week"
            });
          default:
            return I(t.length, e);
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 1 && t <= 53;
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        return dateStartOfWeekUtil.getStartOfWeek(function (e, t) {
          validateArgumentCount.validateArgCount(2, arguments);
          var n = dateNormalizer.normalizeDate(e);
          var a = numberToIntegerConverter.toInteger(t);
          var r = dateWeekNumberCalculator.getWeekNumber(n) - a;
          n.setUTCDate(n.getUTCDate() - r * 7);
          return n;
        }(e, n));
      }
    }]);
    return n;
  }(_);
  var Q = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var K = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var J = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 90);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "subPriority", 1);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "d":
            return S(D.date, e);
          case "do":
            return n.ordinalNumber(e, {
              unit: "date"
            });
          default:
            return I(t.length, e);
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        var n = N(e.getUTCFullYear());
        var a = e.getUTCMonth();
        if (n) {
          return t >= 1 && t <= K[a];
        } else {
          return t >= 1 && t <= Q[a];
        }
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        e.setUTCDate(n);
        e.setUTCHours(0, 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var ee = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 90);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "subpriority", 1);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "D":
          case "DD":
            return S(D.dayOfYear, e);
          case "Do":
            return n.ordinalNumber(e, {
              unit: "date"
            });
          default:
            return I(t.length, e);
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        if (N(e.getUTCFullYear())) {
          return t >= 1 && t <= 366;
        } else {
          return t >= 1 && t <= 365;
        }
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        e.setUTCMonth(0, n);
        e.setUTCHours(0, 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var asyncAiCreationGuidance = require("async-ai-creation-guidance") /*id: 960862*/;
  function en(e, t, n) {
    validateArgumentCount.validateArgCount(2, arguments);
    var l;
    var d;
    var p = asyncAiCreationGuidance.getAiGuidance();
    var g = numberToIntegerConverter.toInteger((n == null ? undefined : n.weekStartsOn) ?? (n == null ? undefined : (l = n.locale) === null || l === undefined ? undefined : l.options?.weekStartsOn) ?? p.weekStartsOn ?? ((d = p.locale) === null || d === undefined ? undefined : d.options?.weekStartsOn) ?? 0);
    if (!(g >= 0) || !(g <= 6)) {
      throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var m = dateNormalizer.normalizeDate(e);
    var v = numberToIntegerConverter.toInteger(t);
    var y = ((v % 7 + 7) % 7 < g) * 7 + v - m.getUTCDay();
    m.setUTCDate(m.getUTCDate() + y);
    return m;
  }
  var ea = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 90);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "E":
          case "EE":
          case "EEE":
            return n.day(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.day(e, {
              width: "short",
              context: "formatting"
            }) || n.day(e, {
              width: "narrow",
              context: "formatting"
            });
          case "EEEEE":
            return n.day(e, {
              width: "narrow",
              context: "formatting"
            });
          case "EEEEEE":
            return n.day(e, {
              width: "short",
              context: "formatting"
            }) || n.day(e, {
              width: "narrow",
              context: "formatting"
            });
          default:
            return n.day(e, {
              width: "wide",
              context: "formatting"
            }) || n.day(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.day(e, {
              width: "short",
              context: "formatting"
            }) || n.day(e, {
              width: "narrow",
              context: "formatting"
            });
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 0 && t <= 6;
      }
    }, {
      key: "set",
      value: function (e, t, n, a) {
        (e = en(e, n, a)).setUTCHours(0, 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var er = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 90);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n, a) {
        function r(e) {
          var t = Math.floor((e - 1) / 7) * 7;
          return (e + a.weekStartsOn + 6) % 7 + t;
        }
        switch (t) {
          case "e":
          case "ee":
            return P(I(t.length, e), r);
          case "eo":
            return P(n.ordinalNumber(e, {
              unit: "day"
            }), r);
          case "eee":
            return n.day(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.day(e, {
              width: "short",
              context: "formatting"
            }) || n.day(e, {
              width: "narrow",
              context: "formatting"
            });
          case "eeeee":
            return n.day(e, {
              width: "narrow",
              context: "formatting"
            });
          case "eeeeee":
            return n.day(e, {
              width: "short",
              context: "formatting"
            }) || n.day(e, {
              width: "narrow",
              context: "formatting"
            });
          default:
            return n.day(e, {
              width: "wide",
              context: "formatting"
            }) || n.day(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.day(e, {
              width: "short",
              context: "formatting"
            }) || n.day(e, {
              width: "narrow",
              context: "formatting"
            });
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 0 && t <= 6;
      }
    }, {
      key: "set",
      value: function (e, t, n, a) {
        (e = en(e, n, a)).setUTCHours(0, 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var ei = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 90);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n, a) {
        function r(e) {
          var t = Math.floor((e - 1) / 7) * 7;
          return (e + a.weekStartsOn + 6) % 7 + t;
        }
        switch (t) {
          case "c":
          case "cc":
            return P(I(t.length, e), r);
          case "co":
            return P(n.ordinalNumber(e, {
              unit: "day"
            }), r);
          case "ccc":
            return n.day(e, {
              width: "abbreviated",
              context: "standalone"
            }) || n.day(e, {
              width: "short",
              context: "standalone"
            }) || n.day(e, {
              width: "narrow",
              context: "standalone"
            });
          case "ccccc":
            return n.day(e, {
              width: "narrow",
              context: "standalone"
            });
          case "cccccc":
            return n.day(e, {
              width: "short",
              context: "standalone"
            }) || n.day(e, {
              width: "narrow",
              context: "standalone"
            });
          default:
            return n.day(e, {
              width: "wide",
              context: "standalone"
            }) || n.day(e, {
              width: "abbreviated",
              context: "standalone"
            }) || n.day(e, {
              width: "short",
              context: "standalone"
            }) || n.day(e, {
              width: "narrow",
              context: "standalone"
            });
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 0 && t <= 6;
      }
    }, {
      key: "set",
      value: function (e, t, n, a) {
        (e = en(e, n, a)).setUTCHours(0, 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var eo = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 90);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        function a(e) {
          if (e === 0) {
            return 7;
          } else {
            return e;
          }
        }
        switch (t) {
          case "i":
          case "ii":
            return I(t.length, e);
          case "io":
            return n.ordinalNumber(e, {
              unit: "day"
            });
          case "iii":
            return P(n.day(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.day(e, {
              width: "short",
              context: "formatting"
            }) || n.day(e, {
              width: "narrow",
              context: "formatting"
            }), a);
          case "iiiii":
            return P(n.day(e, {
              width: "narrow",
              context: "formatting"
            }), a);
          case "iiiiii":
            return P(n.day(e, {
              width: "short",
              context: "formatting"
            }) || n.day(e, {
              width: "narrow",
              context: "formatting"
            }), a);
          default:
            return P(n.day(e, {
              width: "wide",
              context: "formatting"
            }) || n.day(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.day(e, {
              width: "short",
              context: "formatting"
            }) || n.day(e, {
              width: "narrow",
              context: "formatting"
            }), a);
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 1 && t <= 7;
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        (e = function (e, t) {
          validateArgumentCount.validateArgCount(2, arguments);
          var n = numberToIntegerConverter.toInteger(t);
          if (n % 7 == 0) {
            n -= 7;
          }
          var a = dateNormalizer.normalizeDate(e);
          var r = ((n % 7 + 7) % 7 < 1) * 7 + n - a.getUTCDay();
          a.setUTCDate(a.getUTCDate() + r);
          return a;
        }(e, n)).setUTCHours(0, 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var es = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 80);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "a":
          case "aa":
          case "aaa":
            return n.dayPeriod(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.dayPeriod(e, {
              width: "narrow",
              context: "formatting"
            });
          case "aaaaa":
            return n.dayPeriod(e, {
              width: "narrow",
              context: "formatting"
            });
          default:
            return n.dayPeriod(e, {
              width: "wide",
              context: "formatting"
            }) || n.dayPeriod(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.dayPeriod(e, {
              width: "narrow",
              context: "formatting"
            });
        }
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        e.setUTCHours(O(n), 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var el = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 80);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "b":
          case "bb":
          case "bbb":
            return n.dayPeriod(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.dayPeriod(e, {
              width: "narrow",
              context: "formatting"
            });
          case "bbbbb":
            return n.dayPeriod(e, {
              width: "narrow",
              context: "formatting"
            });
          default:
            return n.dayPeriod(e, {
              width: "wide",
              context: "formatting"
            }) || n.dayPeriod(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.dayPeriod(e, {
              width: "narrow",
              context: "formatting"
            });
        }
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        e.setUTCHours(O(n), 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var eu = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 80);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["a", "b", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "B":
          case "BB":
          case "BBB":
            return n.dayPeriod(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.dayPeriod(e, {
              width: "narrow",
              context: "formatting"
            });
          case "BBBBB":
            return n.dayPeriod(e, {
              width: "narrow",
              context: "formatting"
            });
          default:
            return n.dayPeriod(e, {
              width: "wide",
              context: "formatting"
            }) || n.dayPeriod(e, {
              width: "abbreviated",
              context: "formatting"
            }) || n.dayPeriod(e, {
              width: "narrow",
              context: "formatting"
            });
        }
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        e.setUTCHours(O(n), 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var ed = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 70);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["H", "K", "k", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "h":
            return S(D.hour12h, e);
          case "ho":
            return n.ordinalNumber(e, {
              unit: "hour"
            });
          default:
            return I(t.length, e);
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 1 && t <= 12;
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        var a = e.getUTCHours() >= 12;
        if (a && n < 12) {
          e.setUTCHours(n + 12, 0, 0, 0);
        } else if (a || n !== 12) {
          e.setUTCHours(n, 0, 0, 0);
        } else {
          e.setUTCHours(0, 0, 0, 0);
        }
        return e;
      }
    }]);
    return n;
  }(_);
  var ec = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 70);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "H":
            return S(D.hour23h, e);
          case "Ho":
            return n.ordinalNumber(e, {
              unit: "hour"
            });
          default:
            return I(t.length, e);
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 0 && t <= 23;
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        e.setUTCHours(n, 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var eh = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 70);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["h", "H", "k", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "K":
            return S(D.hour11h, e);
          case "Ko":
            return n.ordinalNumber(e, {
              unit: "hour"
            });
          default:
            return I(t.length, e);
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 0 && t <= 11;
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        if (e.getUTCHours() >= 12 && n < 12) {
          e.setUTCHours(n + 12, 0, 0, 0);
        } else {
          e.setUTCHours(n, 0, 0, 0);
        }
        return e;
      }
    }]);
    return n;
  }(_);
  var ef = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 70);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "k":
            return S(D.hour24h, e);
          case "ko":
            return n.ordinalNumber(e, {
              unit: "hour"
            });
          default:
            return I(t.length, e);
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 1 && t <= 24;
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        e.setUTCHours(n <= 24 ? n % 24 : n, 0, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var ep = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 60);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "m":
            return S(D.minute, e);
          case "mo":
            return n.ordinalNumber(e, {
              unit: "minute"
            });
          default:
            return I(t.length, e);
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 0 && t <= 59;
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        e.setUTCMinutes(n, 0, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var eg = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 50);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t, n) {
        switch (t) {
          case "s":
            return S(D.second, e);
          case "so":
            return n.ordinalNumber(e, {
              unit: "second"
            });
          default:
            return I(t.length, e);
        }
      }
    }, {
      key: "validate",
      value: function (e, t) {
        return t >= 0 && t <= 59;
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        e.setUTCSeconds(n, 0);
        return e;
      }
    }]);
    return n;
  }(_);
  var em = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 30);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["t", "T"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t) {
        return P(I(t.length, e), function (e) {
          return Math.floor(e * Math.pow(10, -t.length + 3));
        });
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        e.setUTCMilliseconds(n);
        return e;
      }
    }]);
    return n;
  }(_);
  var ev = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 10);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["t", "T", "x"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t) {
        switch (t) {
          case "X":
            return R(Z.basicOptionalMinutes, e);
          case "XX":
            return R(Z.basic, e);
          case "XXXX":
            return R(Z.basicOptionalSeconds, e);
          case "XXXXX":
            return R(Z.extendedOptionalSeconds, e);
          default:
            return R(Z.extended, e);
        }
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        if (t.timestampIsSet) {
          return e;
        } else {
          return new Date(e.getTime() - n);
        }
      }
    }]);
    return n;
  }(_);
  var ey = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 10);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", ["t", "T", "X"]);
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e, t) {
        switch (t) {
          case "x":
            return R(Z.basicOptionalMinutes, e);
          case "xx":
            return R(Z.basic, e);
          case "xxxx":
            return R(Z.basicOptionalSeconds, e);
          case "xxxxx":
            return R(Z.extendedOptionalSeconds, e);
          default:
            return R(Z.extended, e);
        }
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        if (t.timestampIsSet) {
          return e;
        } else {
          return new Date(e.getTime() - n);
        }
      }
    }]);
    return n;
  }(_);
  var eT = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 40);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", "*");
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e) {
        return M(e);
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        return [new Date(n * 1000), {
          timestampIsSet: true
        }];
      }
    }]);
    return n;
  }(_);
  var eb = function (e) {
    setPrototypeInheritance.setInheritance(n, e);
    var t = wrapNativeSuperHelper.wrapNativeSuper(n);
    function n() {
      var e;
      classCallCheckUtil.classCallCheck(this, n);
      var a = arguments.length;
      var r = Array(a);
      var i = 0;
      for (; i < a; i++) {
        r[i] = arguments[i];
      }
      e = t.call.apply(t, [this].concat(r));
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "priority", 20);
      objectPropertySetter.setObjectProperty(assertThisInitialized.assertThisInit(e), "incompatibleTokens", "*");
      return e;
    }
    classPropertyUtil.defineClassProps(n, [{
      key: "parse",
      value: function (e) {
        return M(e);
      }
    }, {
      key: "set",
      value: function (e, t, n) {
        return [new Date(n), {
          timestampIsSet: true
        }];
      }
    }]);
    return n;
  }(_);
  var ew = {
    G: new C(),
    y: new x(),
    Y: new L(),
    R: new U(),
    u: new H(),
    Q: new $(),
    q: new V(),
    M: new W(),
    L: new G(),
    w: new q(),
    I: new X(),
    d: new J(),
    D: new ee(),
    E: new ea(),
    e: new er(),
    c: new ei(),
    i: new eo(),
    a: new es(),
    b: new el(),
    B: new eu(),
    h: new ed(),
    H: new ec(),
    K: new eh(),
    k: new ef(),
    m: new ep(),
    s: new eg(),
    S: new em(),
    X: new ev(),
    x: new ey(),
    t: new eT(),
    T: new eb()
  };
  var e_ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
  var eC = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
  var eE = /^'([^]*?)'?$/;
  var eD = /''/g;
  var eZ = /\S/;
  var eP = /[a-zA-Z]/;
  function eS(e, t, n, f) {
    validateArgumentCount.validateArgCount(3, arguments);
    var p = String(e);
    var g = String(t);
    var m = asyncAiCreationGuidance.getAiGuidance();
    var v = (f == null ? undefined : f.locale) ?? m.locale ?? dateLocaleEnUs.enUsLocale;
    if (!v.match) {
      throw RangeError("locale must contain match property");
    }
    var y = numberToIntegerConverter.toInteger((f == null ? undefined : f.firstWeekContainsDate) ?? (f == null ? undefined : (P = f.locale) === null || P === undefined ? undefined : P.options?.firstWeekContainsDate) ?? m.firstWeekContainsDate ?? ((R = m.locale) === null || R === undefined ? undefined : R.options?.firstWeekContainsDate) ?? 1);
    if (!(y >= 1) || !(y <= 7)) {
      throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var T = numberToIntegerConverter.toInteger((f == null ? undefined : f.weekStartsOn) ?? (f == null ? undefined : (N = f.locale) === null || N === undefined ? undefined : N.options?.weekStartsOn) ?? m.weekStartsOn ?? ((F = m.locale) === null || F === undefined ? undefined : F.options?.weekStartsOn) ?? 0);
    if (!(T >= 0) || !(T <= 6)) {
      throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    if (g === "") {
      if (p === "") {
        return dateNormalizer.normalizeDate(n);
      } else {
        return new Date(NaN);
      }
    }
    var P;
    var R;
    var N;
    var F;
    var L;
    var j = {
      firstWeekContainsDate: y,
      weekStartsOn: T,
      locale: v
    };
    var U = [new w()];
    var H = g.match(eC).map(function (e) {
      var t = e[0];
      if (t in dateFormatUtils.dateFormatUtils) {
        return dateFormatUtils.dateFormatUtils[t](e, v.formatLong);
      } else {
        return e;
      }
    }).join("").match(e_);
    var $ = [];
    var V = iteratorAdapterUtil.createIterator(H);
    try {
      for (V.s(); !(L = V.n()).done;) {
        var W = function () {
          var t = L.value;
          if ((f == null || !f.useAdditionalWeekYearTokens) && dateUnicodeTokenValidator.isYearToken(t)) {
            dateUnicodeTokenValidator.validateDateTokens(t, g, e);
          }
          if ((f == null || !f.useAdditionalDayOfYearTokens) && dateUnicodeTokenValidator.isDayToken(t)) {
            dateUnicodeTokenValidator.validateDateTokens(t, g, e);
          }
          var n = t[0];
          var a = ew[n];
          if (a) {
            var r = a.incompatibleTokens;
            if (Array.isArray(r)) {
              var i = $.find(function (e) {
                return r.includes(e.token) || e.token === n;
              });
              if (i) {
                throw RangeError(`The format string mustn't contain \`${i.fullToken}\` and \`${t}\` at the same time`);
              }
            } else if (a.incompatibleTokens === "*" && $.length > 0) {
              throw RangeError(`The format string mustn't contain \`${t}\` and any other token at the same time`);
            }
            $.push({
              token: n,
              fullToken: t
            });
            var o = a.run(p, t, v.match, j);
            if (!o) {
              return {
                v: new Date(NaN)
              };
            }
            U.push(o.setter);
            p = o.rest;
          } else {
            if (n.match(eP)) {
              throw RangeError("Format string contains an unescaped latin alphabet character `" + n + "`");
            }
            if (t === "''") {
              t = "'";
            } else if (n === "'") {
              t = t.match(eE)[1].replace(eD, "'");
            }
            if (p.indexOf(t) !== 0) {
              return {
                v: new Date(NaN)
              };
            }
            p = p.slice(t.length);
          }
        }();
        if (typeofHelper.getType(W) === "object") {
          return W.v;
        }
      }
    } catch (e) {
      V.e(e);
    } finally {
      V.f();
    }
    if (p.length > 0 && eZ.test(p)) {
      return new Date(NaN);
    }
    var G = U.map(function (e) {
      return e.priority;
    }).sort(function (e, t) {
      return t - e;
    }).filter(function (e, t, n) {
      return n.indexOf(e) === t;
    }).map(function (e) {
      return U.filter(function (t) {
        return t.priority === e;
      }).sort(function (e, t) {
        return t.subPriority - e.subPriority;
      });
    }).map(function (e) {
      return e[0];
    });
    var B = dateNormalizer.normalizeDate(n);
    if (isNaN(B.getTime())) {
      return new Date(NaN);
    }
    var q;
    var z = dateSubtractUtil.subtractDateOffset(B, timezoneOffsetMs.getTimezoneOffsetMs(B));
    var X = {};
    var Q = iteratorAdapterUtil.createIterator(G);
    try {
      for (Q.s(); !(q = Q.n()).done;) {
        var K = q.value;
        if (!K.validate(z, j)) {
          return new Date(NaN);
        }
        var J = K.set(z, X, j);
        if (Array.isArray(J)) {
          z = J[0];
          (function (e, t) {
            if (e == null) {
              throw TypeError("assign requires that input parameter not be null or undefined");
            }
            for (var n in t) {
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                e[n] = t[n];
              }
            }
            return e;
          })(X, J[1]);
        } else {
          z = J;
        }
      }
    } catch (e) {
      Q.e(e);
    } finally {
      Q.f();
    }
    return z;
  }
  require.d(exports, {
    parseDate: function () {
      return eS;
    }
  });
}