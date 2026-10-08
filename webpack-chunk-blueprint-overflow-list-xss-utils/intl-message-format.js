// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'IntlMessageFormat'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 646430
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var a;
  var s;
  var u;
  var c;
  var l;
  var h;
  var d;
  var p;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  function v(e) {
    return e.type === c.literal;
  }
  function m(e) {
    return e.type === c.number;
  }
  function y(e) {
    return e.type === c.date;
  }
  function b(e) {
    return e.type === c.time;
  }
  function _(e) {
    return e.type === c.select;
  }
  function w(e) {
    return e.type === c.plural;
  }
  function E(e) {
    return e.type === c.tag;
  }
  function S(e) {
    return !!e && typeof e == "object" && e.type === l.number;
  }
  function x(e) {
    return !!e && typeof e == "object" && e.type === l.dateTime;
  }
  (r = u ||= {})[r.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
  r[r.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT";
  r[r.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT";
  r[r.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE";
  r[r.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE";
  r[r.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE";
  r[r.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON";
  r[r.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON";
  r[r.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON";
  r[r.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON";
  r[r.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
  r[r.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
  r[r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
  r[r.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
  r[r.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
  r[r.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
  r[r.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
  r[r.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
  r[r.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
  r[r.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
  r[r.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
  r[r.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE";
  r[r.INVALID_TAG = 23] = "INVALID_TAG";
  r[r.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME";
  r[r.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG";
  r[r.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
  (i = c ||= {})[i.literal = 0] = "literal";
  i[i.argument = 1] = "argument";
  i[i.number = 2] = "number";
  i[i.date = 3] = "date";
  i[i.time = 4] = "time";
  i[i.select = 5] = "select";
  i[i.plural = 6] = "plural";
  i[i.pound = 7] = "pound";
  i[i.tag = 8] = "tag";
  (o = l ||= {})[o.number = 0] = "number";
  o[o.dateTime = 1] = "dateTime";
  var k = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
  var O = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  var A = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
  var T = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
  var R = /^(@+)?(\+|#+)?[rs]?$/g;
  var C = /(\*)(0+)|(#+)(0+)|(0+)/g;
  var M = /^(0+)$/;
  function P(e) {
    var t = {};
    if (e[e.length - 1] === "r") {
      t.roundingPriority = "morePrecision";
    } else if (e[e.length - 1] === "s") {
      t.roundingPriority = "lessPrecision";
    }
    e.replace(R, function (e, n, r) {
      if (typeof r != "string") {
        t.minimumSignificantDigits = n.length;
        t.maximumSignificantDigits = n.length;
      } else if (r === "+") {
        t.minimumSignificantDigits = n.length;
      } else if (n[0] === "#") {
        t.maximumSignificantDigits = n.length;
      } else {
        t.minimumSignificantDigits = n.length;
        t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0);
      }
      return "";
    });
    return t;
  }
  function D(e) {
    switch (e) {
      case "sign-auto":
        return {
          signDisplay: "auto"
        };
      case "sign-accounting":
      case "()":
        return {
          currencySign: "accounting"
        };
      case "sign-always":
      case "+!":
        return {
          signDisplay: "always"
        };
      case "sign-accounting-always":
      case "()!":
        return {
          signDisplay: "always",
          currencySign: "accounting"
        };
      case "sign-except-zero":
      case "+?":
        return {
          signDisplay: "exceptZero"
        };
      case "sign-accounting-except-zero":
      case "()?":
        return {
          signDisplay: "exceptZero",
          currencySign: "accounting"
        };
      case "sign-never":
      case "+_":
        return {
          signDisplay: "never"
        };
    }
  }
  function j(e) {
    var t = D(e);
    return t || {};
  }
  var I = {
    AX: ["H"],
    BQ: ["H"],
    CP: ["H"],
    CZ: ["H"],
    DK: ["H"],
    FI: ["H"],
    ID: ["H"],
    IS: ["H"],
    ML: ["H"],
    NE: ["H"],
    RU: ["H"],
    SE: ["H"],
    SJ: ["H"],
    SK: ["H"],
    AS: ["h", "H"],
    BT: ["h", "H"],
    DJ: ["h", "H"],
    ER: ["h", "H"],
    GH: ["h", "H"],
    IN: ["h", "H"],
    LS: ["h", "H"],
    PG: ["h", "H"],
    PW: ["h", "H"],
    SO: ["h", "H"],
    TO: ["h", "H"],
    VU: ["h", "H"],
    WS: ["h", "H"],
    "001": ["H", "h"],
    AL: ["h", "H", "hB"],
    TD: ["h", "H", "hB"],
    "ca-ES": ["H", "h", "hB"],
    CF: ["H", "h", "hB"],
    CM: ["H", "h", "hB"],
    "fr-CA": ["H", "h", "hB"],
    "gl-ES": ["H", "h", "hB"],
    "it-CH": ["H", "h", "hB"],
    "it-IT": ["H", "h", "hB"],
    LU: ["H", "h", "hB"],
    NP: ["H", "h", "hB"],
    PF: ["H", "h", "hB"],
    SC: ["H", "h", "hB"],
    SM: ["H", "h", "hB"],
    SN: ["H", "h", "hB"],
    TF: ["H", "h", "hB"],
    VA: ["H", "h", "hB"],
    CY: ["h", "H", "hb", "hB"],
    GR: ["h", "H", "hb", "hB"],
    CO: ["h", "H", "hB", "hb"],
    DO: ["h", "H", "hB", "hb"],
    KP: ["h", "H", "hB", "hb"],
    KR: ["h", "H", "hB", "hb"],
    NA: ["h", "H", "hB", "hb"],
    PA: ["h", "H", "hB", "hb"],
    PR: ["h", "H", "hB", "hb"],
    VE: ["h", "H", "hB", "hb"],
    AC: ["H", "h", "hb", "hB"],
    AI: ["H", "h", "hb", "hB"],
    BW: ["H", "h", "hb", "hB"],
    BZ: ["H", "h", "hb", "hB"],
    CC: ["H", "h", "hb", "hB"],
    CK: ["H", "h", "hb", "hB"],
    CX: ["H", "h", "hb", "hB"],
    DG: ["H", "h", "hb", "hB"],
    FK: ["H", "h", "hb", "hB"],
    GB: ["H", "h", "hb", "hB"],
    GG: ["H", "h", "hb", "hB"],
    GI: ["H", "h", "hb", "hB"],
    IE: ["H", "h", "hb", "hB"],
    IM: ["H", "h", "hb", "hB"],
    IO: ["H", "h", "hb", "hB"],
    JE: ["H", "h", "hb", "hB"],
    LT: ["H", "h", "hb", "hB"],
    MK: ["H", "h", "hb", "hB"],
    MN: ["H", "h", "hb", "hB"],
    MS: ["H", "h", "hb", "hB"],
    NF: ["H", "h", "hb", "hB"],
    NG: ["H", "h", "hb", "hB"],
    NR: ["H", "h", "hb", "hB"],
    NU: ["H", "h", "hb", "hB"],
    PN: ["H", "h", "hb", "hB"],
    SH: ["H", "h", "hb", "hB"],
    SX: ["H", "h", "hb", "hB"],
    TA: ["H", "h", "hb", "hB"],
    ZA: ["H", "h", "hb", "hB"],
    "af-ZA": ["H", "h", "hB", "hb"],
    AR: ["H", "h", "hB", "hb"],
    CL: ["H", "h", "hB", "hb"],
    CR: ["H", "h", "hB", "hb"],
    CU: ["H", "h", "hB", "hb"],
    EA: ["H", "h", "hB", "hb"],
    "es-BO": ["H", "h", "hB", "hb"],
    "es-BR": ["H", "h", "hB", "hb"],
    "es-EC": ["H", "h", "hB", "hb"],
    "es-ES": ["H", "h", "hB", "hb"],
    "es-GQ": ["H", "h", "hB", "hb"],
    "es-PE": ["H", "h", "hB", "hb"],
    GT: ["H", "h", "hB", "hb"],
    HN: ["H", "h", "hB", "hb"],
    IC: ["H", "h", "hB", "hb"],
    KG: ["H", "h", "hB", "hb"],
    KM: ["H", "h", "hB", "hb"],
    LK: ["H", "h", "hB", "hb"],
    MA: ["H", "h", "hB", "hb"],
    MX: ["H", "h", "hB", "hb"],
    NI: ["H", "h", "hB", "hb"],
    PY: ["H", "h", "hB", "hb"],
    SV: ["H", "h", "hB", "hb"],
    UY: ["H", "h", "hB", "hb"],
    JP: ["H", "h", "K"],
    AD: ["H", "hB"],
    AM: ["H", "hB"],
    AO: ["H", "hB"],
    AT: ["H", "hB"],
    AW: ["H", "hB"],
    BE: ["H", "hB"],
    BF: ["H", "hB"],
    BJ: ["H", "hB"],
    BL: ["H", "hB"],
    BR: ["H", "hB"],
    CG: ["H", "hB"],
    CI: ["H", "hB"],
    CV: ["H", "hB"],
    DE: ["H", "hB"],
    EE: ["H", "hB"],
    FR: ["H", "hB"],
    GA: ["H", "hB"],
    GF: ["H", "hB"],
    GN: ["H", "hB"],
    GP: ["H", "hB"],
    GW: ["H", "hB"],
    HR: ["H", "hB"],
    IL: ["H", "hB"],
    IT: ["H", "hB"],
    KZ: ["H", "hB"],
    MC: ["H", "hB"],
    MD: ["H", "hB"],
    MF: ["H", "hB"],
    MQ: ["H", "hB"],
    MZ: ["H", "hB"],
    NC: ["H", "hB"],
    NL: ["H", "hB"],
    PM: ["H", "hB"],
    PT: ["H", "hB"],
    RE: ["H", "hB"],
    RO: ["H", "hB"],
    SI: ["H", "hB"],
    SR: ["H", "hB"],
    ST: ["H", "hB"],
    TG: ["H", "hB"],
    TR: ["H", "hB"],
    WF: ["H", "hB"],
    YT: ["H", "hB"],
    BD: ["h", "hB", "H"],
    PK: ["h", "hB", "H"],
    AZ: ["H", "hB", "h"],
    BA: ["H", "hB", "h"],
    BG: ["H", "hB", "h"],
    CH: ["H", "hB", "h"],
    GE: ["H", "hB", "h"],
    LI: ["H", "hB", "h"],
    ME: ["H", "hB", "h"],
    RS: ["H", "hB", "h"],
    UA: ["H", "hB", "h"],
    UZ: ["H", "hB", "h"],
    XK: ["H", "hB", "h"],
    AG: ["h", "hb", "H", "hB"],
    AU: ["h", "hb", "H", "hB"],
    BB: ["h", "hb", "H", "hB"],
    BM: ["h", "hb", "H", "hB"],
    BS: ["h", "hb", "H", "hB"],
    CA: ["h", "hb", "H", "hB"],
    DM: ["h", "hb", "H", "hB"],
    "en-001": ["h", "hb", "H", "hB"],
    FJ: ["h", "hb", "H", "hB"],
    FM: ["h", "hb", "H", "hB"],
    GD: ["h", "hb", "H", "hB"],
    GM: ["h", "hb", "H", "hB"],
    GU: ["h", "hb", "H", "hB"],
    GY: ["h", "hb", "H", "hB"],
    JM: ["h", "hb", "H", "hB"],
    KI: ["h", "hb", "H", "hB"],
    KN: ["h", "hb", "H", "hB"],
    KY: ["h", "hb", "H", "hB"],
    LC: ["h", "hb", "H", "hB"],
    LR: ["h", "hb", "H", "hB"],
    MH: ["h", "hb", "H", "hB"],
    MP: ["h", "hb", "H", "hB"],
    MW: ["h", "hb", "H", "hB"],
    NZ: ["h", "hb", "H", "hB"],
    SB: ["h", "hb", "H", "hB"],
    SG: ["h", "hb", "H", "hB"],
    SL: ["h", "hb", "H", "hB"],
    SS: ["h", "hb", "H", "hB"],
    SZ: ["h", "hb", "H", "hB"],
    TC: ["h", "hb", "H", "hB"],
    TT: ["h", "hb", "H", "hB"],
    UM: ["h", "hb", "H", "hB"],
    US: ["h", "hb", "H", "hB"],
    VC: ["h", "hb", "H", "hB"],
    VG: ["h", "hb", "H", "hB"],
    VI: ["h", "hb", "H", "hB"],
    ZM: ["h", "hb", "H", "hB"],
    BO: ["H", "hB", "h", "hb"],
    EC: ["H", "hB", "h", "hb"],
    ES: ["H", "hB", "h", "hb"],
    GQ: ["H", "hB", "h", "hb"],
    PE: ["H", "hB", "h", "hb"],
    AE: ["h", "hB", "hb", "H"],
    "ar-001": ["h", "hB", "hb", "H"],
    BH: ["h", "hB", "hb", "H"],
    DZ: ["h", "hB", "hb", "H"],
    EG: ["h", "hB", "hb", "H"],
    EH: ["h", "hB", "hb", "H"],
    HK: ["h", "hB", "hb", "H"],
    IQ: ["h", "hB", "hb", "H"],
    JO: ["h", "hB", "hb", "H"],
    KW: ["h", "hB", "hb", "H"],
    LB: ["h", "hB", "hb", "H"],
    LY: ["h", "hB", "hb", "H"],
    MO: ["h", "hB", "hb", "H"],
    MR: ["h", "hB", "hb", "H"],
    OM: ["h", "hB", "hb", "H"],
    PH: ["h", "hB", "hb", "H"],
    PS: ["h", "hB", "hb", "H"],
    QA: ["h", "hB", "hb", "H"],
    SA: ["h", "hB", "hb", "H"],
    SD: ["h", "hB", "hb", "H"],
    SY: ["h", "hB", "hb", "H"],
    TN: ["h", "hB", "hb", "H"],
    YE: ["h", "hB", "hb", "H"],
    AF: ["H", "hb", "hB", "h"],
    LA: ["H", "hb", "hB", "h"],
    CN: ["H", "hB", "hb", "h"],
    LV: ["H", "hB", "hb", "h"],
    TL: ["H", "hB", "hb", "h"],
    "zu-ZA": ["H", "hB", "hb", "h"],
    CD: ["hB", "H"],
    IR: ["hB", "H"],
    "hi-IN": ["hB", "h", "H"],
    "kn-IN": ["hB", "h", "H"],
    "ml-IN": ["hB", "h", "H"],
    "te-IN": ["hB", "h", "H"],
    KH: ["hB", "h", "H", "hb"],
    "ta-IN": ["hB", "h", "hb", "H"],
    BN: ["hb", "hB", "h", "H"],
    MY: ["hb", "hB", "h", "H"],
    ET: ["hB", "hb", "h", "H"],
    "gu-IN": ["hB", "hb", "h", "H"],
    "mr-IN": ["hB", "hb", "h", "H"],
    "pa-IN": ["hB", "hb", "h", "H"],
    TW: ["hB", "hb", "h", "H"],
    KE: ["hB", "hb", "H", "h"],
    MM: ["hB", "hb", "H", "h"],
    TZ: ["hB", "hb", "H", "h"],
    UG: ["hB", "hb", "H", "h"]
  };
  var N = new RegExp(`^${k.source}*`);
  var L = new RegExp(`${k.source}*\$`);
  function B(e, t) {
    return {
      start: e,
      end: t
    };
  }
  var Z = !!String.prototype.startsWith;
  var U = !!String.fromCodePoint;
  var z = !!Object.fromEntries;
  var F = !!String.prototype.codePointAt;
  var H = !!String.prototype.trimStart;
  var G = !!String.prototype.trimEnd;
  var V = Number.isSafeInteger ? Number.isSafeInteger : function (e) {
    return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
  };
  var $ = true;
  try {
    var W = ee("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    $ = W.exec("a")?.[0] === "a";
  } catch (e) {
    $ = false;
  }
  var q = Z ? function (e, t, n) {
    return e.startsWith(t, n);
  } : function (e, t, n) {
    return e.slice(n, n + t.length) === t;
  };
  var K = U ? String.fromCodePoint : function () {
    var e;
    var t = [];
    var n = 0;
    for (; n < arguments.length; n++) {
      t[n] = arguments[n];
    }
    var r = "";
    var i = t.length;
    var o = 0;
    while (i > o) {
      if ((e = t[o++]) > 1114111) {
        throw RangeError(e + " is not a valid code point");
      }
      r += e < 65536 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10) + 55296, e % 1024 + 56320);
    }
    return r;
  };
  var J = z ? Object.fromEntries : function (e) {
    var t = {};
    var n = 0;
    for (; n < e.length; n++) {
      var r = e[n];
      var i = r[0];
      var o = r[1];
      t[i] = o;
    }
    return t;
  };
  var X = F ? function (e, t) {
    return e.codePointAt(t);
  } : function (e, t) {
    var n;
    var r = e.length;
    if (!(t < 0) && !(t >= r)) {
      var i = e.charCodeAt(t);
      if (i < 55296 || i > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343) {
        return i;
      } else {
        return (i - 55296 << 10) + (n - 56320) + 65536;
      }
    }
  };
  var Y = H ? function (e) {
    return e.trimStart();
  } : function (e) {
    return e.replace(N, "");
  };
  var Q = G ? function (e) {
    return e.trimEnd();
  } : function (e) {
    return e.replace(L, "");
  };
  function ee(e, t) {
    return new RegExp(e, t);
  }
  if ($) {
    var et = ee("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    h = function (e, t) {
      et.lastIndex = t;
      return et.exec(e)[1] ?? "";
    };
  } else {
    h = function (e, t) {
      var n = [];
      for (;;) {
        var r;
        var i = X(e, t);
        if (i === undefined || ei(i) || (r = i) >= 33 && r <= 35 || r === 36 || r >= 37 && r <= 39 || r === 40 || r === 41 || r === 42 || r === 43 || r === 44 || r === 45 || r >= 46 && r <= 47 || r >= 58 && r <= 59 || r >= 60 && r <= 62 || r >= 63 && r <= 64 || r === 91 || r === 92 || r === 93 || r === 94 || r === 96 || r === 123 || r === 124 || r === 125 || r === 126 || r === 161 || r >= 162 && r <= 165 || r === 166 || r === 167 || r === 169 || r === 171 || r === 172 || r === 174 || r === 176 || r === 177 || r === 182 || r === 187 || r === 191 || r === 215 || r === 247 || r >= 8208 && r <= 8213 || r >= 8214 && r <= 8215 || r === 8216 || r === 8217 || r === 8218 || r >= 8219 && r <= 8220 || r === 8221 || r === 8222 || r === 8223 || r >= 8224 && r <= 8231 || r >= 8240 && r <= 8248 || r === 8249 || r === 8250 || r >= 8251 && r <= 8254 || r >= 8257 && r <= 8259 || r === 8260 || r === 8261 || r === 8262 || r >= 8263 && r <= 8273 || r === 8274 || r === 8275 || r >= 8277 && r <= 8286 || r >= 8592 && r <= 8596 || r >= 8597 && r <= 8601 || r >= 8602 && r <= 8603 || r >= 8604 && r <= 8607 || r === 8608 || r >= 8609 && r <= 8610 || r === 8611 || r >= 8612 && r <= 8613 || r === 8614 || r >= 8615 && r <= 8621 || r === 8622 || r >= 8623 && r <= 8653 || r >= 8654 && r <= 8655 || r >= 8656 && r <= 8657 || r === 8658 || r === 8659 || r === 8660 || r >= 8661 && r <= 8691 || r >= 8692 && r <= 8959 || r >= 8960 && r <= 8967 || r === 8968 || r === 8969 || r === 8970 || r === 8971 || r >= 8972 && r <= 8991 || r >= 8992 && r <= 8993 || r >= 8994 && r <= 9000 || r === 9001 || r === 9002 || r >= 9003 && r <= 9083 || r === 9084 || r >= 9085 && r <= 9114 || r >= 9115 && r <= 9139 || r >= 9140 && r <= 9179 || r >= 9180 && r <= 9185 || r >= 9186 && r <= 9254 || r >= 9255 && r <= 9279 || r >= 9280 && r <= 9290 || r >= 9291 && r <= 9311 || r >= 9472 && r <= 9654 || r === 9655 || r >= 9656 && r <= 9664 || r === 9665 || r >= 9666 && r <= 9719 || r >= 9720 && r <= 9727 || r >= 9728 && r <= 9838 || r === 9839 || r >= 9840 && r <= 10087 || r === 10088 || r === 10089 || r === 10090 || r === 10091 || r === 10092 || r === 10093 || r === 10094 || r === 10095 || r === 10096 || r === 10097 || r === 10098 || r === 10099 || r === 10100 || r === 10101 || r >= 10132 && r <= 10175 || r >= 10176 && r <= 10180 || r === 10181 || r === 10182 || r >= 10183 && r <= 10213 || r === 10214 || r === 10215 || r === 10216 || r === 10217 || r === 10218 || r === 10219 || r === 10220 || r === 10221 || r === 10222 || r === 10223 || r >= 10224 && r <= 10239 || r >= 10240 && r <= 10495 || r >= 10496 && r <= 10626 || r === 10627 || r === 10628 || r === 10629 || r === 10630 || r === 10631 || r === 10632 || r === 10633 || r === 10634 || r === 10635 || r === 10636 || r === 10637 || r === 10638 || r === 10639 || r === 10640 || r === 10641 || r === 10642 || r === 10643 || r === 10644 || r === 10645 || r === 10646 || r === 10647 || r === 10648 || r >= 10649 && r <= 10711 || r === 10712 || r === 10713 || r === 10714 || r === 10715 || r >= 10716 && r <= 10747 || r === 10748 || r === 10749 || r >= 10750 && r <= 11007 || r >= 11008 && r <= 11055 || r >= 11056 && r <= 11076 || r >= 11077 && r <= 11078 || r >= 11079 && r <= 11084 || r >= 11085 && r <= 11123 || r >= 11124 && r <= 11125 || r >= 11126 && r <= 11157 || r === 11158 || r >= 11159 && r <= 11263 || r >= 11776 && r <= 11777 || r === 11778 || r === 11779 || r === 11780 || r === 11781 || r >= 11782 && r <= 11784 || r === 11785 || r === 11786 || r === 11787 || r === 11788 || r === 11789 || r >= 11790 && r <= 11798 || r === 11799 || r >= 11800 && r <= 11801 || r === 11802 || r === 11803 || r === 11804 || r === 11805 || r >= 11806 && r <= 11807 || r === 11808 || r === 11809 || r === 11810 || r === 11811 || r === 11812 || r === 11813 || r === 11814 || r === 11815 || r === 11816 || r === 11817 || r >= 11818 && r <= 11822 || r === 11823 || r >= 11824 && r <= 11833 || r >= 11834 && r <= 11835 || r >= 11836 && r <= 11839 || r === 11840 || r === 11841 || r === 11842 || r >= 11843 && r <= 11855 || r >= 11856 && r <= 11857 || r === 11858 || r >= 11859 && r <= 11903 || r >= 12289 && r <= 12291 || r === 12296 || r === 12297 || r === 12298 || r === 12299 || r === 12300 || r === 12301 || r === 12302 || r === 12303 || r === 12304 || r === 12305 || r >= 12306 && r <= 12307 || r === 12308 || r === 12309 || r === 12310 || r === 12311 || r === 12312 || r === 12313 || r === 12314 || r === 12315 || r === 12316 || r === 12317 || r >= 12318 && r <= 12319 || r === 12320 || r === 12336 || r === 64830 || r === 64831 || r >= 65093 && r <= 65094) {
          break;
        }
        n.push(i);
        t += i >= 65536 ? 2 : 1;
      }
      return K.apply(undefined, n);
    };
  }
  var en = function () {
    function e(e, t = {}) {
      this.message = e;
      this.position = {
        offset: 0,
        line: 1,
        column: 1
      };
      this.ignoreTag = !!t.ignoreTag;
      this.locale = t.locale;
      this.requiresOtherClause = !!t.requiresOtherClause;
      this.shouldParseSkeletons = !!t.shouldParseSkeletons;
    }
    e.prototype.parse = function () {
      if (this.offset() !== 0) {
        throw Error("parser can only be used once");
      }
      return this.parseMessage(0, "", false);
    };
    e.prototype.parseMessage = function (e, t, n) {
      var r = [];
      for (; !this.isEOF();) {
        var i = this.char();
        if (i === 123) {
          var o = this.parseArgument(e, n);
          if (o.err) {
            return o;
          }
          r.push(o.val);
        } else if (i === 125 && e > 0) {
          break;
        } else if (i === 35 && (t === "plural" || t === "selectordinal")) {
          var a = this.clonePosition();
          this.bump();
          r.push({
            type: c.pound,
            location: B(a, this.clonePosition())
          });
        } else if (i !== 60 || this.ignoreTag || this.peek() !== 47) {
          if (i === 60 && !this.ignoreTag && er(this.peek() || 0)) {
            var o = this.parseTag(e, t);
            if (o.err) {
              return o;
            }
            r.push(o.val);
          } else {
            var o = this.parseLiteral(e, t);
            if (o.err) {
              return o;
            }
            r.push(o.val);
          }
        } else {
          if (!n) {
            return this.error(u.UNMATCHED_CLOSING_TAG, B(this.clonePosition(), this.clonePosition()));
          }
          break;
        }
      }
      return {
        val: r,
        err: null
      };
    };
    e.prototype.parseTag = function (e, t) {
      var n = this.clonePosition();
      this.bump();
      var r = this.parseTagName();
      this.bumpSpace();
      if (this.bumpIf("/>")) {
        return {
          val: {
            type: c.literal,
            value: `<${r}/>`,
            location: B(n, this.clonePosition())
          },
          err: null
        };
      }
      if (!this.bumpIf(">")) {
        return this.error(u.INVALID_TAG, B(n, this.clonePosition()));
      }
      var i = this.parseMessage(e + 1, t, true);
      if (i.err) {
        return i;
      }
      var o = i.val;
      var a = this.clonePosition();
      if (!this.bumpIf("</")) {
        return this.error(u.UNCLOSED_TAG, B(n, this.clonePosition()));
      }
      if (this.isEOF() || !er(this.char())) {
        return this.error(u.INVALID_TAG, B(a, this.clonePosition()));
      }
      var s = this.clonePosition();
      if (r !== this.parseTagName()) {
        return this.error(u.UNMATCHED_CLOSING_TAG, B(s, this.clonePosition()));
      } else {
        this.bumpSpace();
        if (this.bumpIf(">")) {
          return {
            val: {
              type: c.tag,
              value: r,
              children: o,
              location: B(n, this.clonePosition())
            },
            err: null
          };
        } else {
          return this.error(u.INVALID_TAG, B(a, this.clonePosition()));
        }
      }
    };
    e.prototype.parseTagName = function () {
      var e;
      var t = this.offset();
      for (this.bump(); !this.isEOF() && ((e = this.char()) === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) {
        this.bump();
      }
      return this.message.slice(t, this.offset());
    };
    e.prototype.parseLiteral = function (e, t) {
      var n = this.clonePosition();
      var r = "";
      while (true) {
        var i = this.tryParseQuote(t);
        if (i) {
          r += i;
          continue;
        }
        var o = this.tryParseUnquoted(e, t);
        if (o) {
          r += o;
          continue;
        }
        var a = this.tryParseLeftAngleBracket();
        if (a) {
          r += a;
          continue;
        }
        break;
      }
      var s = B(n, this.clonePosition());
      return {
        val: {
          type: c.literal,
          value: r,
          location: s
        },
        err: null
      };
    };
    e.prototype.tryParseLeftAngleBracket = function () {
      var e;
      if (this.isEOF() || this.char() !== 60 || !this.ignoreTag && (er(e = this.peek() || 0) || e === 47)) {
        return null;
      } else {
        this.bump();
        return "<";
      }
    };
    e.prototype.tryParseQuote = function (e) {
      if (this.isEOF() || this.char() !== 39) {
        return null;
      }
      switch (this.peek()) {
        case 39:
          this.bump();
          this.bump();
          return "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (e === "plural" || e === "selectordinal") {
            break;
          }
          return null;
        default:
          return null;
      }
      this.bump();
      var t = [this.char()];
      for (this.bump(); !this.isEOF();) {
        var n = this.char();
        if (n === 39) {
          if (this.peek() === 39) {
            t.push(39);
            this.bump();
          } else {
            this.bump();
            break;
          }
        } else {
          t.push(n);
        }
        this.bump();
      }
      return K.apply(undefined, t);
    };
    e.prototype.tryParseUnquoted = function (e, t) {
      if (this.isEOF()) {
        return null;
      }
      var n = this.char();
      if (n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0) {
        return null;
      } else {
        this.bump();
        return K(n);
      }
    };
    e.prototype.parseArgument = function (e, t) {
      var n = this.clonePosition();
      this.bump();
      this.bumpSpace();
      if (this.isEOF()) {
        return this.error(u.EXPECT_ARGUMENT_CLOSING_BRACE, B(n, this.clonePosition()));
      }
      if (this.char() === 125) {
        this.bump();
        return this.error(u.EMPTY_ARGUMENT, B(n, this.clonePosition()));
      }
      var r = this.parseIdentifierIfPossible().value;
      if (!r) {
        return this.error(u.MALFORMED_ARGUMENT, B(n, this.clonePosition()));
      }
      this.bumpSpace();
      if (this.isEOF()) {
        return this.error(u.EXPECT_ARGUMENT_CLOSING_BRACE, B(n, this.clonePosition()));
      }
      switch (this.char()) {
        case 125:
          this.bump();
          return {
            val: {
              type: c.argument,
              value: r,
              location: B(n, this.clonePosition())
            },
            err: null
          };
        case 44:
          this.bump();
          this.bumpSpace();
          if (this.isEOF()) {
            return this.error(u.EXPECT_ARGUMENT_CLOSING_BRACE, B(n, this.clonePosition()));
          }
          return this.parseArgumentOptions(e, t, r, n);
        default:
          return this.error(u.MALFORMED_ARGUMENT, B(n, this.clonePosition()));
      }
    };
    e.prototype.parseIdentifierIfPossible = function () {
      var e = this.clonePosition();
      var t = this.offset();
      var n = h(this.message, t);
      var r = t + n.length;
      this.bumpTo(r);
      return {
        value: n,
        location: B(e, this.clonePosition())
      };
    };
    e.prototype.parseArgumentOptions = function (e, t, n, r) {
      var o = this.clonePosition();
      var a = this.parseIdentifierIfPossible().value;
      var s = this.clonePosition();
      switch (a) {
        case "":
          return this.error(u.EXPECT_ARGUMENT_TYPE, B(o, s));
        case "number":
        case "date":
        case "time":
          this.bumpSpace();
          var f = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var h = this.clonePosition();
            var d = this.parseSimpleArgStyleIfPossible();
            if (d.err) {
              return d;
            }
            var p = Q(d.val);
            if (p.length === 0) {
              return this.error(u.EXPECT_ARGUMENT_STYLE, B(this.clonePosition(), this.clonePosition()));
            }
            f = {
              style: p,
              styleLocation: B(h, this.clonePosition())
            };
          }
          var v = this.tryParseArgumentClose(r);
          if (v.err) {
            return v;
          }
          var m = B(r, this.clonePosition());
          if (f && q(f == null ? undefined : f.style, "::", 0)) {
            var y;
            var b = Y(f.style.slice(2));
            if (a === "number") {
              var d = this.parseNumberSkeletonFromString(b, f.styleLocation);
              if (d.err) {
                return d;
              }
              return {
                val: {
                  type: c.number,
                  value: n,
                  location: m,
                  style: d.val
                },
                err: null
              };
            }
            if (b.length === 0) {
              return this.error(u.EXPECT_DATE_TIME_SKELETON, m);
            }
            var _ = b;
            if (this.locale) {
              _ = function (e, t) {
                var n = "";
                var r = 0;
                for (; r < e.length; r++) {
                  var i = e.charAt(r);
                  if (i === "j") {
                    var o = 0;
                    while (r + 1 < e.length && e.charAt(r + 1) === i) {
                      o++;
                      r++;
                    }
                    var a = 1 + (o & 1);
                    var s = o < 2 ? 1 : 3 + (o >> 1);
                    var u = function (e) {
                      var t;
                      var n = e.hourCycle;
                      if (n === undefined && e.hourCycles && e.hourCycles.length) {
                        n = e.hourCycles[0];
                      }
                      if (n) {
                        switch (n) {
                          case "h24":
                            return "k";
                          case "h23":
                            return "H";
                          case "h12":
                            return "h";
                          case "h11":
                            return "K";
                          default:
                            throw Error("Invalid hourCycle");
                        }
                      }
                      var r = e.language;
                      if (r !== "root") {
                        t = e.maximize().region;
                      }
                      return (I[t || ""] || I[r || ""] || I[`${r}-001`] || I["001"])[0];
                    }(t);
                    for ((u == "H" || u == "k") && (s = 0); s-- > 0;) {
                      n += "a";
                    }
                    while (a-- > 0) {
                      n = u + n;
                    }
                  } else if (i === "J") {
                    n += "H";
                  } else {
                    n += i;
                  }
                }
                return n;
              }(b, this.locale);
            }
            var p = {
              type: l.dateTime,
              pattern: _,
              location: f.styleLocation,
              parsedOptions: this.shouldParseSkeletons ? (y = {}, _.replace(O, function (e) {
                var t = e.length;
                switch (e[0]) {
                  case "G":
                    y.era = t === 4 ? "long" : t === 5 ? "narrow" : "short";
                    break;
                  case "y":
                    y.year = t === 2 ? "2-digit" : "numeric";
                    break;
                  case "Y":
                  case "u":
                  case "U":
                  case "r":
                    throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                  case "q":
                  case "Q":
                    throw RangeError("`q/Q` (quarter) patterns are not supported");
                  case "M":
                  case "L":
                    y.month = ["numeric", "2-digit", "short", "long", "narrow"][t - 1];
                    break;
                  case "w":
                  case "W":
                    throw RangeError("`w/W` (week) patterns are not supported");
                  case "d":
                    y.day = ["numeric", "2-digit"][t - 1];
                    break;
                  case "D":
                  case "F":
                  case "g":
                    throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                  case "E":
                    y.weekday = t === 4 ? "short" : t === 5 ? "narrow" : "short";
                    break;
                  case "e":
                    if (t < 4) {
                      throw RangeError("`e..eee` (weekday) patterns are not supported");
                    }
                    y.weekday = ["short", "long", "narrow", "short"][t - 4];
                    break;
                  case "c":
                    if (t < 4) {
                      throw RangeError("`c..ccc` (weekday) patterns are not supported");
                    }
                    y.weekday = ["short", "long", "narrow", "short"][t - 4];
                    break;
                  case "a":
                    y.hour12 = true;
                    break;
                  case "b":
                  case "B":
                    throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                  case "h":
                    y.hourCycle = "h12";
                    y.hour = ["numeric", "2-digit"][t - 1];
                    break;
                  case "H":
                    y.hourCycle = "h23";
                    y.hour = ["numeric", "2-digit"][t - 1];
                    break;
                  case "K":
                    y.hourCycle = "h11";
                    y.hour = ["numeric", "2-digit"][t - 1];
                    break;
                  case "k":
                    y.hourCycle = "h24";
                    y.hour = ["numeric", "2-digit"][t - 1];
                    break;
                  case "j":
                  case "J":
                  case "C":
                    throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                  case "m":
                    y.minute = ["numeric", "2-digit"][t - 1];
                    break;
                  case "s":
                    y.second = ["numeric", "2-digit"][t - 1];
                    break;
                  case "S":
                  case "A":
                    throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                  case "z":
                    y.timeZoneName = t < 4 ? "short" : "long";
                    break;
                  case "Z":
                  case "O":
                  case "v":
                  case "V":
                  case "X":
                  case "x":
                    throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
                }
                return "";
              }), y) : {}
            };
            return {
              val: {
                type: a === "date" ? c.date : c.time,
                value: n,
                location: m,
                style: p
              },
              err: null
            };
          }
          return {
            val: {
              type: a === "number" ? c.number : a === "date" ? c.date : c.time,
              value: n,
              location: m,
              style: (f == null ? undefined : f.style) ?? null
            },
            err: null
          };
        case "plural":
        case "selectordinal":
        case "select":
          var w = this.clonePosition();
          this.bumpSpace();
          if (!this.bumpIf(",")) {
            return this.error(u.EXPECT_SELECT_ARGUMENT_OPTIONS, B(w, typescriptRuntimeHelpers.objectAssign({}, w)));
          }
          this.bumpSpace();
          var E = this.parseIdentifierIfPossible();
          var S = 0;
          if (a !== "select" && E.value === "offset") {
            if (!this.bumpIf(":")) {
              return this.error(u.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, B(this.clonePosition(), this.clonePosition()));
            }
            this.bumpSpace();
            var d = this.tryParseDecimalInteger(u.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, u.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (d.err) {
              return d;
            }
            this.bumpSpace();
            E = this.parseIdentifierIfPossible();
            S = d.val;
          }
          var x = this.tryParsePluralOrSelectOptions(e, a, t, E);
          if (x.err) {
            return x;
          }
          var v = this.tryParseArgumentClose(r);
          if (v.err) {
            return v;
          }
          var k = B(r, this.clonePosition());
          if (a === "select") {
            return {
              val: {
                type: c.select,
                value: n,
                options: J(x.val),
                location: k
              },
              err: null
            };
          }
          return {
            val: {
              type: c.plural,
              value: n,
              options: J(x.val),
              offset: S,
              pluralType: a === "plural" ? "cardinal" : "ordinal",
              location: k
            },
            err: null
          };
        default:
          return this.error(u.INVALID_ARGUMENT_TYPE, B(o, s));
      }
    };
    e.prototype.tryParseArgumentClose = function (e) {
      if (this.isEOF() || this.char() !== 125) {
        return this.error(u.EXPECT_ARGUMENT_CLOSING_BRACE, B(e, this.clonePosition()));
      } else {
        this.bump();
        return {
          val: true,
          err: null
        };
      }
    };
    e.prototype.parseSimpleArgStyleIfPossible = function () {
      var e = 0;
      var t = this.clonePosition();
      while (!this.isEOF()) {
        switch (this.char()) {
          case 39:
            this.bump();
            var n = this.clonePosition();
            if (!this.bumpUntil("'")) {
              return this.error(u.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, B(n, this.clonePosition()));
            }
            this.bump();
            break;
          case 123:
            e += 1;
            this.bump();
            break;
          case 125:
            if (!(e > 0)) {
              return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
              };
            }
            e -= 1;
            break;
          default:
            this.bump();
        }
      }
      return {
        val: this.message.slice(t.offset, this.offset()),
        err: null
      };
    };
    e.prototype.parseNumberSkeletonFromString = function (e, t) {
      var n = [];
      try {
        n = function (e) {
          if (e.length === 0) {
            throw Error("Number skeleton cannot be empty");
          }
          var t = e.split(A).filter(function (e) {
            return e.length > 0;
          });
          var n = [];
          var r = 0;
          for (; r < t.length; r++) {
            var i = t[r].split("/");
            if (i.length === 0) {
              throw Error("Invalid number skeleton");
            }
            var o = i[0];
            var a = i.slice(1);
            var s = 0;
            for (; s < a.length; s++) {
              if (a[s].length === 0) {
                throw Error("Invalid number skeleton");
              }
            }
            n.push({
              stem: o,
              options: a
            });
          }
          return n;
        }(e);
      } catch (e) {
        return this.error(u.INVALID_NUMBER_SKELETON, t);
      }
      return {
        val: {
          type: l.number,
          tokens: n,
          location: t,
          parsedOptions: this.shouldParseSkeletons ? function (e) {
            var t = {};
            var n = 0;
            for (; n < e.length; n++) {
              var r = e[n];
              switch (r.stem) {
                case "percent":
                case "%":
                  t.style = "percent";
                  continue;
                case "%x100":
                  t.style = "percent";
                  t.scale = 100;
                  continue;
                case "currency":
                  t.style = "currency";
                  t.currency = r.options[0];
                  continue;
                case "group-off":
                case ",_":
                  t.useGrouping = false;
                  continue;
                case "precision-integer":
                case ".":
                  t.maximumFractionDigits = 0;
                  continue;
                case "measure-unit":
                case "unit":
                  t.style = "unit";
                  t.unit = r.options[0].replace(/^(.*?)-/, "");
                  continue;
                case "compact-short":
                case "K":
                  t.notation = "compact";
                  t.compactDisplay = "short";
                  continue;
                case "compact-long":
                case "KK":
                  t.notation = "compact";
                  t.compactDisplay = "long";
                  continue;
                case "scientific":
                  t = typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, t), {
                    notation: "scientific"
                  }), r.options.reduce(function (e, t) {
                    return typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, e), j(t));
                  }, {}));
                  continue;
                case "engineering":
                  t = typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, t), {
                    notation: "engineering"
                  }), r.options.reduce(function (e, t) {
                    return typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, e), j(t));
                  }, {}));
                  continue;
                case "notation-simple":
                  t.notation = "standard";
                  continue;
                case "unit-width-narrow":
                  t.currencyDisplay = "narrowSymbol";
                  t.unitDisplay = "narrow";
                  continue;
                case "unit-width-short":
                  t.currencyDisplay = "code";
                  t.unitDisplay = "short";
                  continue;
                case "unit-width-full-name":
                  t.currencyDisplay = "name";
                  t.unitDisplay = "long";
                  continue;
                case "unit-width-iso-code":
                  t.currencyDisplay = "symbol";
                  continue;
                case "scale":
                  t.scale = parseFloat(r.options[0]);
                  continue;
                case "integer-width":
                  if (r.options.length > 1) {
                    throw RangeError("integer-width stems only accept a single optional option");
                  }
                  r.options[0].replace(C, function (e, n, r, i, o, a) {
                    if (n) {
                      t.minimumIntegerDigits = r.length;
                    } else if (i && o) {
                      throw Error("We currently do not support maximum integer digits");
                    } else if (a) {
                      throw Error("We currently do not support exact integer digits");
                    }
                    return "";
                  });
                  continue;
              }
              if (M.test(r.stem)) {
                t.minimumIntegerDigits = r.stem.length;
                continue;
              }
              if (T.test(r.stem)) {
                if (r.options.length > 1) {
                  throw RangeError("Fraction-precision stems only accept a single optional option");
                }
                r.stem.replace(T, function (e, n, r, i, o, a) {
                  if (r === "*") {
                    t.minimumFractionDigits = n.length;
                  } else if (i && i[0] === "#") {
                    t.maximumFractionDigits = i.length;
                  } else if (o && a) {
                    t.minimumFractionDigits = o.length;
                    t.maximumFractionDigits = o.length + a.length;
                  } else {
                    t.minimumFractionDigits = n.length;
                    t.maximumFractionDigits = n.length;
                  }
                  return "";
                });
                var i = r.options[0];
                if (i === "w") {
                  t = typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, t), {
                    trailingZeroDisplay: "stripIfInteger"
                  });
                } else if (i) {
                  t = typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, t), P(i));
                }
                continue;
              }
              if (R.test(r.stem)) {
                t = typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, t), P(r.stem));
                continue;
              }
              var o = D(r.stem);
              if (o) {
                t = typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, t), o);
              }
              var a = function (e) {
                var t;
                if (e[0] === "E" && e[1] === "E") {
                  t = {
                    notation: "engineering"
                  };
                  e = e.slice(2);
                } else if (e[0] === "E") {
                  t = {
                    notation: "scientific"
                  };
                  e = e.slice(1);
                }
                if (t) {
                  var n = e.slice(0, 2);
                  if (n === "+!") {
                    t.signDisplay = "always";
                    e = e.slice(2);
                  } else if (n === "+?") {
                    t.signDisplay = "exceptZero";
                    e = e.slice(2);
                  }
                  if (!M.test(e)) {
                    throw Error("Malformed concise eng/scientific notation");
                  }
                  t.minimumIntegerDigits = e.length;
                }
                return t;
              }(r.stem);
              if (a) {
                t = typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, t), a);
              }
            }
            return t;
          }(n) : {}
        },
        err: null
      };
    };
    e.prototype.tryParsePluralOrSelectOptions = function (e, t, n, r) {
      var i;
      var o = false;
      var a = [];
      var s = new Set();
      var c = r.value;
      var l = r.location;
      while (true) {
        if (c.length === 0) {
          var f = this.clonePosition();
          if (t !== "select" && this.bumpIf("=")) {
            var h = this.tryParseDecimalInteger(u.EXPECT_PLURAL_ARGUMENT_SELECTOR, u.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (h.err) {
              return h;
            }
            l = B(f, this.clonePosition());
            c = this.message.slice(f.offset, this.offset());
          } else {
            break;
          }
        }
        if (s.has(c)) {
          return this.error(t === "select" ? u.DUPLICATE_SELECT_ARGUMENT_SELECTOR : u.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
        }
        if (c === "other") {
          o = true;
        }
        this.bumpSpace();
        var d = this.clonePosition();
        if (!this.bumpIf("{")) {
          return this.error(t === "select" ? u.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : u.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, B(this.clonePosition(), this.clonePosition()));
        }
        var p = this.parseMessage(e + 1, t, n);
        if (p.err) {
          return p;
        }
        var g = this.tryParseArgumentClose(d);
        if (g.err) {
          return g;
        }
        a.push([c, {
          value: p.val,
          location: B(d, this.clonePosition())
        }]);
        s.add(c);
        this.bumpSpace();
        c = (i = this.parseIdentifierIfPossible()).value;
        l = i.location;
      }
      if (a.length === 0) {
        return this.error(t === "select" ? u.EXPECT_SELECT_ARGUMENT_SELECTOR : u.EXPECT_PLURAL_ARGUMENT_SELECTOR, B(this.clonePosition(), this.clonePosition()));
      } else if (this.requiresOtherClause && !o) {
        return this.error(u.MISSING_OTHER_CLAUSE, B(this.clonePosition(), this.clonePosition()));
      } else {
        return {
          val: a,
          err: null
        };
      }
    };
    e.prototype.tryParseDecimalInteger = function (e, t) {
      var n = 1;
      var r = this.clonePosition();
      if (!this.bumpIf("+")) {
        if (this.bumpIf("-")) {
          n = -1;
        }
      }
      var i = false;
      var o = 0;
      while (!this.isEOF()) {
        var a = this.char();
        if (a >= 48 && a <= 57) {
          i = true;
          o = o * 10 + (a - 48);
          this.bump();
        } else {
          break;
        }
      }
      var s = B(r, this.clonePosition());
      if (i) {
        if (V(o *= n)) {
          return {
            val: o,
            err: null
          };
        } else {
          return this.error(t, s);
        }
      } else {
        return this.error(e, s);
      }
    };
    e.prototype.offset = function () {
      return this.position.offset;
    };
    e.prototype.isEOF = function () {
      return this.offset() === this.message.length;
    };
    e.prototype.clonePosition = function () {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    };
    e.prototype.char = function () {
      var e = this.position.offset;
      if (e >= this.message.length) {
        throw Error("out of bound");
      }
      var t = X(this.message, e);
      if (t === undefined) {
        throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
      }
      return t;
    };
    e.prototype.error = function (e, t) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: t
        }
      };
    };
    e.prototype.bump = function () {
      if (!this.isEOF()) {
        var e = this.char();
        if (e === 10) {
          this.position.line += 1;
          this.position.column = 1;
          this.position.offset += 1;
        } else {
          this.position.column += 1;
          this.position.offset += e < 65536 ? 1 : 2;
        }
      }
    };
    e.prototype.bumpIf = function (e) {
      if (q(this.message, e, this.offset())) {
        for (var t = 0; t < e.length; t++) {
          this.bump();
        }
        return true;
      }
      return false;
    };
    e.prototype.bumpUntil = function (e) {
      var t = this.offset();
      var n = this.message.indexOf(e, t);
      if (n >= 0) {
        this.bumpTo(n);
        return true;
      } else {
        this.bumpTo(this.message.length);
        return false;
      }
    };
    e.prototype.bumpTo = function (e) {
      if (this.offset() > e) {
        throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
      }
      for (e = Math.min(e, this.message.length);;) {
        var t = this.offset();
        if (t === e) {
          break;
        }
        if (t > e) {
          throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
        }
        this.bump();
        if (this.isEOF()) {
          break;
        }
      }
    };
    e.prototype.bumpSpace = function () {
      while (!this.isEOF() && ei(this.char())) {
        this.bump();
      }
    };
    e.prototype.peek = function () {
      if (this.isEOF()) {
        return null;
      }
      var e = this.char();
      var t = this.offset();
      var n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
      return n ?? null;
    };
    return e;
  }();
  function er(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90;
  }
  function ei(e) {
    return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
  }
  function eo(e, t = {}) {
    var n = new en(e, t = typescriptRuntimeHelpers.objectAssign({
      shouldParseSkeletons: true,
      requiresOtherClause: true
    }, t)).parse();
    if (n.err) {
      var r = SyntaxError(u[n.err.kind]);
      r.location = n.err.location;
      r.originalMessage = n.err.message;
      throw r;
    }
    if (!(t == null ? undefined : t.captureLocation)) {
      (function e(t) {
        t.forEach(function (t) {
          delete t.location;
          if (_(t) || w(t)) {
            for (var n in t.options) {
              delete t.options[n].location;
              e(t.options[n].value);
            }
          } else if (m(t) && S(t.style)) {
            delete t.style.location;
          } else if ((y(t) || b(t)) && x(t.style)) {
            delete t.style.location;
          } else if (E(t)) {
            e(t.children);
          }
        });
      })(n.val);
    }
    return n.val;
  }
  function ea(e, t) {
    var n = t && t.cache ? t.cache : ef;
    var r = t && t.serializer ? t.serializer : ec;
    return (t && t.strategy ? t.strategy : function (e, t) {
      var n;
      var r;
      var i;
      var o;
      var a;
      var s = e.length === 1 ? es : eu;
      o = t.cache.create();
      a = t.serializer;
      return s.bind(this, e, o, a);
    })(e, {
      cache: n,
      serializer: r
    });
  }
  function es(e, t, n, r) {
    var i = r == null || typeof r == "number" || typeof r == "boolean" ? r : n(r);
    var o = t.get(i);
    if (o === undefined) {
      o = e.call(this, r);
      t.set(i, o);
    }
    return o;
  }
  function eu(e, t, n) {
    var r = Array.prototype.slice.call(arguments, 3);
    var i = n(r);
    var o = t.get(i);
    if (o === undefined) {
      o = e.apply(this, r);
      t.set(i, o);
    }
    return o;
  }
  function ec() {
    return JSON.stringify(arguments);
  }
  function el() {
    this.cache = Object.create(null);
  }
  el.prototype.get = function (e) {
    return this.cache[e];
  };
  el.prototype.set = function (e, t) {
    this.cache[e] = t;
  };
  var ef = {
    create: function () {
      return new el();
    }
  };
  var eh = {
    variadic: function (e, t) {
      var n;
      var r;
      n = t.cache.create();
      r = t.serializer;
      return eu.bind(this, e, n, r);
    },
    monadic: function (e, t) {
      var n;
      var r;
      n = t.cache.create();
      r = t.serializer;
      return es.bind(this, e, n, r);
    }
  };
  (a = d ||= {}).MISSING_VALUE = "MISSING_VALUE";
  a.INVALID_VALUE = "INVALID_VALUE";
  a.MISSING_INTL_API = "MISSING_INTL_API";
  var ed = function (e) {
    function t(t, n, r) {
      var i = e.call(this, t) || this;
      i.code = n;
      i.originalMessage = r;
      return i;
    }
    typescriptRuntimeHelpers.classExtends(t, e);
    t.prototype.toString = function () {
      return `[formatjs Error: ${this.code}] ${this.message}`;
    };
    return t;
  }(Error);
  var ep = function (e) {
    function t(t, n, r, i) {
      return e.call(this, `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join("\", \"")}"`, d.INVALID_VALUE, i) || this;
    }
    typescriptRuntimeHelpers.classExtends(t, e);
    return t;
  }(ed);
  var eg = function (e) {
    function t(t, n, r) {
      return e.call(this, `Value for "${t}" must be of type ${n}`, d.INVALID_VALUE, r) || this;
    }
    typescriptRuntimeHelpers.classExtends(t, e);
    return t;
  }(ed);
  var ev = function (e) {
    function t(t, n) {
      return e.call(this, `The intl string context variable "${t}" was not provided to the string "${n}"`, d.MISSING_VALUE, n) || this;
    }
    typescriptRuntimeHelpers.classExtends(t, e);
    return t;
  }(ed);
  function em(e) {
    return {
      create: function () {
        return {
          get: function (t) {
            return e[t];
          },
          set: function (t, n) {
            e[t] = n;
          }
        };
      }
    };
  }
  (s = p ||= {})[s.literal = 0] = "literal";
  s[s.object = 1] = "object";
  var ey = function () {
    function e(t, n, r, i) {
      var o;
      var a;
      var s = this;
      if (n === undefined) {
        n = e.defaultLocale;
      }
      this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      };
      this.format = function (e) {
        var t = s.formatToParts(e);
        if (t.length === 1) {
          return t[0].value;
        }
        var n = t.reduce(function (e, t) {
          if (e.length && t.type === p.literal && typeof e[e.length - 1] == "string") {
            e[e.length - 1] += t.value;
          } else {
            e.push(t.value);
          }
          return e;
        }, []);
        if (n.length <= 1) {
          return n[0] || "";
        } else {
          return n;
        }
      };
      this.formatToParts = function (e) {
        return function e(t, n, r, i, o, a, s) {
          if (t.length === 1 && v(t[0])) {
            return [{
              type: p.literal,
              value: t[0].value
            }];
          }
          var u = [];
          var l = 0;
          for (; l < t.length; l++) {
            var f = t[l];
            if (v(f)) {
              u.push({
                type: p.literal,
                value: f.value
              });
              continue;
            }
            if (f.type === c.pound) {
              if (typeof a == "number") {
                u.push({
                  type: p.literal,
                  value: r.getNumberFormat(n).format(a)
                });
              }
              continue;
            }
            var h = f.value;
            if (!o || !(h in o)) {
              throw new ev(h, s);
            }
            var g = o[h];
            if (f.type === c.argument) {
              if (!g || typeof g == "string" || typeof g == "number") {
                g = typeof g == "string" || typeof g == "number" ? String(g) : "";
              }
              u.push({
                type: typeof g == "string" ? p.literal : p.object,
                value: g
              });
              continue;
            }
            if (y(f)) {
              var k = typeof f.style == "string" ? i.date[f.style] : x(f.style) ? f.style.parsedOptions : undefined;
              u.push({
                type: p.literal,
                value: r.getDateTimeFormat(n, k).format(g)
              });
              continue;
            }
            if (b(f)) {
              var k = typeof f.style == "string" ? i.time[f.style] : x(f.style) ? f.style.parsedOptions : i.time.medium;
              u.push({
                type: p.literal,
                value: r.getDateTimeFormat(n, k).format(g)
              });
              continue;
            }
            if (m(f)) {
              var k = typeof f.style == "string" ? i.number[f.style] : S(f.style) ? f.style.parsedOptions : undefined;
              if (k && k.scale) {
                g *= k.scale || 1;
              }
              u.push({
                type: p.literal,
                value: r.getNumberFormat(n, k).format(g)
              });
              continue;
            }
            if (E(f)) {
              var O = f.children;
              var A = f.value;
              var T = o[A];
              if (typeof T != "function") {
                throw new eg(A, "function", s);
              }
              var R = T(e(O, n, r, i, o, a).map(function (e) {
                return e.value;
              }));
              if (!Array.isArray(R)) {
                R = [R];
              }
              u.push.apply(u, R.map(function (e) {
                return {
                  type: typeof e == "string" ? p.literal : p.object,
                  value: e
                };
              }));
            }
            if (_(f)) {
              var C = f.options[g] || f.options.other;
              if (!C) {
                throw new ep(f.value, g, Object.keys(f.options), s);
              }
              u.push.apply(u, e(C.value, n, r, i, o));
              continue;
            }
            if (w(f)) {
              var C = f.options[`=${g}`];
              if (!C) {
                if (!Intl.PluralRules) {
                  throw new ed("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", d.MISSING_INTL_API, s);
                }
                var M = r.getPluralRules(n, {
                  type: f.pluralType
                }).select(g - (f.offset || 0));
                C = f.options[M] || f.options.other;
              }
              if (!C) {
                throw new ep(f.value, g, Object.keys(f.options), s);
              }
              u.push.apply(u, e(C.value, n, r, i, o, g - (f.offset || 0)));
              continue;
            }
          }
          if (u.length < 2) {
            return u;
          } else {
            return u.reduce(function (e, t) {
              var n = e[e.length - 1];
              if (n && n.type === p.literal && t.type === p.literal) {
                n.value += t.value;
              } else {
                e.push(t);
              }
              return e;
            }, []);
          }
        }(s.ast, s.locales, s.formatters, s.formats, e, undefined, s.message);
      };
      this.resolvedOptions = function () {
        return {
          locale: s.resolvedLocale.toString()
        };
      };
      this.getAst = function () {
        return s.ast;
      };
      this.locales = n;
      this.resolvedLocale = e.resolveLocale(n);
      if (typeof t == "string") {
        this.message = t;
        if (!e.__parse) {
          throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        }
        this.ast = e.__parse(t, {
          ignoreTag: i == null ? undefined : i.ignoreTag,
          locale: this.resolvedLocale
        });
      } else {
        this.ast = t;
      }
      if (!Array.isArray(this.ast)) {
        throw TypeError("A message must be provided as a String or AST.");
      }
      this.formats = (o = e.formats, r ? Object.keys(o).reduce(function (e, t) {
        var n;
        var i;
        n = o[t];
        e[t] = (i = r[t]) ? typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, n || {}), i || {}), Object.keys(n).reduce(function (e, t) {
          e[t] = typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, n[t]), i[t] || {});
          return e;
        }, {})) : n;
        return e;
      }, typescriptRuntimeHelpers.objectAssign({}, o)) : o);
      this.formatters = i && i.formatters || ((a = this.formatterCache) === undefined && (a = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }), {
        getNumberFormat: ea(function () {
          var e;
          var t = [];
          var n = 0;
          for (; n < arguments.length; n++) {
            t[n] = arguments[n];
          }
          return new ((e = Intl.NumberFormat).bind.apply(e, typescriptRuntimeHelpers.arraySpread([undefined], t, false)))();
        }, {
          cache: em(a.number),
          strategy: eh.variadic
        }),
        getDateTimeFormat: ea(function () {
          var e;
          var t = [];
          var n = 0;
          for (; n < arguments.length; n++) {
            t[n] = arguments[n];
          }
          return new ((e = Intl.DateTimeFormat).bind.apply(e, typescriptRuntimeHelpers.arraySpread([undefined], t, false)))();
        }, {
          cache: em(a.dateTime),
          strategy: eh.variadic
        }),
        getPluralRules: ea(function () {
          var e;
          var t = [];
          var n = 0;
          for (; n < arguments.length; n++) {
            t[n] = arguments[n];
          }
          return new ((e = Intl.PluralRules).bind.apply(e, typescriptRuntimeHelpers.arraySpread([undefined], t, false)))();
        }, {
          cache: em(a.pluralRules),
          strategy: eh.variadic
        })
      });
    }
    Object.defineProperty(e, "defaultLocale", {
      get: function () {
        e.memoizedDefaultLocale ||= new Intl.NumberFormat().resolvedOptions().locale;
        return e.memoizedDefaultLocale;
      },
      enumerable: false,
      configurable: true
    });
    e.memoizedDefaultLocale = null;
    e.resolveLocale = function (e) {
      var t = Intl.NumberFormat.supportedLocalesOf(e);
      return new Intl.Locale(t.length > 0 ? t[0] : typeof e == "string" ? e : e[0]);
    };
    e.__parse = eo;
    e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    };
    return e;
  }();
  require.d(exports, {
    IntlMessageFormat: function () {
      return ey;
    }
  });
}