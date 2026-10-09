// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(337529) to 'string-iterator-implementation'
// - Renamed variable 'l' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'i' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'a' to 'urlSearchParamsPolyfillCheck'
// - Resolved require(677599) to 'url-search-params-polyfill-check'
// - Renamed variable 'd' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'r' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'B' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'R' to 'objectDefinePropertyPolyfill'
// - Resolved require(221009) to 'object-define-property-polyfill'
// - Renamed variable 'c' to 'validatePrototypeInvocation'
// - Resolved require(376282) to 'validate-prototype-invocation'
// - Renamed variable 's' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'V' to 'objectAssignPolyfill'
// - Resolved require(317258) to 'object-assign-polyfill'
// - Renamed variable 'Z' to 'iterableMapUtil'
// - Resolved require(893781) to 'iterable-map-util'
// - Renamed variable 'h' to 'arraySlicePolyfill_2'
// - Resolved require(763415) to 'array-slice-polyfill_2'
// - Resolved require(905844) to 'unicode-string-utils'
// - Renamed variable 'S' to 'punycodeEncodeUtil'
// - Resolved require(699002) to 'punycode-encode-util'
// - Renamed variable 'J' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'm' to 'setToStringTagUtil'
// - Resolved require(768336) to 'set-to-string-tag-util'
// - Renamed variable 'p' to 'argumentLengthValidator_1'
// - Resolved require(798037) to 'argument-length-validator_1'
// - Renamed variable 'W' to 'urlSearchParamsPolyfill_1'
// - Resolved require(330251) to 'url-search-params-polyfill_1'
// - Renamed variable 'E' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 290762
         */
module.exports = function (module, exports, require) {
  require("string-iterator-implementation") /*id: 337529*/;
  var Q;
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var urlSearchParamsPolyfillCheck = require("url-search-params-polyfill-check") /*id: 677599*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var objectDefinePropertyPolyfill = require("object-define-property-polyfill") /*id: 221009*/;
  var validatePrototypeInvocation = require("validate-prototype-invocation") /*id: 376282*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var objectAssignPolyfill = require("object-assign-polyfill") /*id: 317258*/;
  var iterableMapUtil = require("iterable-map-util") /*id: 893781*/;
  var arraySlicePolyfill_2 = require("array-slice-polyfill_2") /*id: 763415*/;
  var u = require("unicode-string-utils") /*id: 905844*/.codeAt;
  var punycodeEncodeUtil = require("punycode-encode-util") /*id: 699002*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var setToStringTagUtil = require("set-to-string-tag-util") /*id: 768336*/;
  var argumentLengthValidator_1 = require("argument-length-validator_1") /*id: 798037*/;
  var urlSearchParamsPolyfill_1 = require("url-search-params-polyfill_1") /*id: 330251*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var k = objectStateManager.set;
  var N = objectStateManager.getterFor("URL");
  var y = urlSearchParamsPolyfill_1.URLSearchParams;
  var b = urlSearchParamsPolyfill_1.getState;
  var f = globalObjectPolyfill.URL;
  var T = globalObjectPolyfill.TypeError;
  var v = globalObjectPolyfill.parseInt;
  var C = Math.floor;
  var X = Math.pow;
  var L = functionBindFallback("".charAt);
  var G = functionBindFallback(/./.exec);
  var g = functionBindFallback([].join);
  var D = functionBindFallback(1 .toString);
  var x = functionBindFallback([].pop);
  var I = functionBindFallback([].push);
  var M = functionBindFallback("".replace);
  var Y = functionBindFallback([].shift);
  var K = functionBindFallback("".split);
  var w = functionBindFallback("".slice);
  var H = functionBindFallback("".toLowerCase);
  var P = functionBindFallback([].unshift);
  var j = "Invalid scheme";
  var z = "Invalid host";
  var O = "Invalid port";
  var _ = /[a-z]/i;
  var A = /[\d+-.a-z]/i;
  var q = /\d/;
  var $ = /^0x/i;
  var ee = /^[0-7]+$/;
  var et = /^\d+$/;
  var eU = /^[\da-f]+$/i;
  var en = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
  var eF = /[\0\t\n\r #/:<>?@[\\\]^|]/;
  var eQ = /^[\u0000-\u0020]+/;
  var el = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
  var ei = /[\t\n\r]/g;
  function ea(U) {
    var n;
    var F;
    var Q;
    var l;
    var i;
    var a;
    var d;
    var r = K(U, ".");
    if (r.length && r[r.length - 1] === "") {
      r.length--;
    }
    if ((n = r.length) > 4) {
      return U;
    }
    Q = 0;
    F = [];
    for (; Q < n; Q++) {
      if ((l = r[Q]) === "") {
        return U;
      }
      i = 10;
      if (l.length > 1 && L(l, 0) === "0") {
        i = G($, l) ? 16 : 8;
        l = w(l, i === 8 ? 1 : 2);
      }
      if (l === "") {
        a = 0;
      } else {
        if (!G(i === 10 ? et : i === 8 ? ee : eU, l)) {
          return U;
        }
        a = v(l, i);
      }
      I(F, a);
    }
    for (Q = 0; Q < n; Q++) {
      a = F[Q];
      if (Q === n - 1) {
        if (a >= X(256, 5 - n)) {
          return null;
        }
      } else if (a > 255) {
        return null;
      }
    }
    Q = 0;
    d = x(F);
    for (; Q < F.length; Q++) {
      d += F[Q] * X(256, 3 - Q);
    }
    return d;
  }
  function ed(U) {
    var n;
    var F;
    var Q;
    var l;
    var i;
    var a;
    var d;
    var r = [0, 0, 0, 0, 0, 0, 0, 0];
    var o = 0;
    var B = null;
    var R = 0;
    function c() {
      return L(U, R);
    }
    if (c() === ":") {
      if (L(U, 1) !== ":") {
        return;
      }
      R += 2;
      B = ++o;
    }
    while (c()) {
      if (o === 8) {
        return;
      }
      if (c() === ":") {
        if (B !== null) {
          return;
        }
        R++;
        B = ++o;
        continue;
      }
      for (n = F = 0; F < 4 && G(eU, c());) {
        n = n * 16 + v(c(), 16);
        R++;
        F++;
      }
      if (c() === ".") {
        if (F === 0 || (R -= F, o > 6)) {
          return;
        }
        for (Q = 0; c();) {
          l = null;
          if (Q > 0) {
            if (c() !== "." || !(Q < 4)) {
              return;
            }
            R++;
          }
          if (!G(q, c())) {
            return;
          }
          while (G(q, c())) {
            i = v(c(), 10);
            if (l === null) {
              l = i;
            } else {
              if (l === 0) {
                return;
              }
              l = l * 10 + i;
            }
            if (l > 255) {
              return;
            }
            R++;
          }
          r[o] = r[o] * 256 + l;
          if (++Q == 2 || Q === 4) {
            o++;
          }
        }
        if (Q !== 4) {
          return;
        }
        break;
      }
      if (c() === ":") {
        R++;
        if (!c()) {
          return;
        }
      } else if (c()) {
        return;
      }
      r[o++] = n;
    }
    if (B !== null) {
      a = o - B;
      o = 7;
      while (o !== 0 && a > 0) {
        d = r[o];
        r[o--] = r[B + a - 1];
        r[B + --a] = d;
      }
    } else if (o !== 8) {
      return;
    }
    return r;
  }
  function er(U) {
    var n = null;
    var F = 1;
    var Q = null;
    var l = 0;
    var i = 0;
    for (; i < 8; i++) {
      if (U[i] !== 0) {
        if (l > F) {
          n = Q;
          F = l;
        }
        Q = null;
        l = 0;
      } else {
        if (Q === null) {
          Q = i;
        }
        ++l;
      }
    }
    if (l > F) {
      return Q;
    } else {
      return n;
    }
  }
  function eo(U) {
    var n;
    var F;
    var Q;
    var l;
    if (typeof U == "number") {
      F = 0;
      n = [];
      for (; F < 4; F++) {
        P(n, U % 256);
        U = C(U / 256);
      }
      return g(n, ".");
    }
    if (typeof U == "object") {
      F = 0;
      n = "";
      Q = er(U);
      for (; F < 8; F++) {
        if (!l || U[F] !== 0) {
          l &&= false;
          if (Q === F) {
            n += F ? ":" : "::";
            l = true;
          } else {
            n += D(U[F], 16);
            if (F < 7) {
              n += ":";
            }
          }
        }
      }
      return "[" + n + "]";
    }
    return U;
  }
  var eB = {};
  var eR = objectAssignPolyfill({}, eB, {
    " ": 1,
    "\"": 1,
    "<": 1,
    ">": 1,
    "`": 1
  });
  var ec = objectAssignPolyfill({}, eR, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1
  });
  var es = objectAssignPolyfill({}, ec, {
    "/": 1,
    ":": 1,
    ";": 1,
    "=": 1,
    "@": 1,
    "[": 1,
    "\\": 1,
    "]": 1,
    "^": 1,
    "|": 1
  });
  function eV(U, n) {
    var F = u(U, 0);
    if (F > 32 && F < 127 && !objectHasOwnPolyfill_1(n, U)) {
      return U;
    } else {
      return encodeURIComponent(U);
    }
  }
  var eZ = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  };
  function eh(U, n) {
    var F;
    return U.length === 2 && G(_, L(U, 0)) && ((F = L(U, 1)) === ":" || !n && F === "|");
  }
  function eu(U) {
    var n;
    return U.length > 1 && eh(w(U, 0, 2)) && (U.length === 2 || (n = L(U, 2)) === "/" || n === "\\" || n === "?" || n === "#");
  }
  var eS = {};
  var eJ = {};
  var em = {};
  var ep = {};
  var eW = {};
  var eE = {};
  var ek = {};
  var eN = {};
  var ey = {};
  var eb = {};
  var ef = {};
  var eT = {};
  var ev = {};
  var eC = {};
  var eX = {};
  var eL = {};
  var eG = {};
  var eg = {};
  var eD = {};
  var ex = {};
  var eI = {};
  function eM(U, n, F) {
    var Q;
    var l;
    var i;
    var a = symbolToStringConverter_1(U);
    if (n) {
      if (l = this.parse(a)) {
        throw new T(l);
      }
      this.searchParams = null;
    } else {
      if (F !== undefined) {
        Q = new eM(F, true);
      }
      if (l = this.parse(a, null, Q)) {
        throw new T(l);
      }
      (i = b(new y())).bindURL(this);
      this.searchParams = i;
    }
  }
  eM.prototype = {
    type: "URL",
    parse: function (U, n, F) {
      var l = n || eS;
      var i = 0;
      var a = "";
      var d = false;
      var r = false;
      var o = false;
      U = symbolToStringConverter_1(U);
      if (!n) {
        this.scheme = "";
        this.username = "";
        this.password = "";
        this.host = null;
        this.port = null;
        this.path = [];
        this.query = null;
        this.fragment = null;
        this.cannotBeABaseURL = false;
        U = M(U, eQ, "");
        U = M(U, el, "$1");
      }
      B = iterableMapUtil(U = M(U, ei, ""));
      while (i <= B.length) {
        R = B[i];
        switch (l) {
          case eS:
            if (R && G(_, R)) {
              a += H(R);
              l = eJ;
            } else {
              if (n) {
                return j;
              }
              l = em;
              continue;
            }
            break;
          case eJ:
            if (R && (G(A, R) || R === "+" || R === "-" || R === ".")) {
              a += H(R);
            } else if (R === ":") {
              if (n && (this.isSpecial() !== objectHasOwnPolyfill_1(eZ, a) || a === "file" && (this.includesCredentials() || this.port !== null) || this.scheme === "file" && !this.host)) {
                return;
              }
              this.scheme = a;
              if (n) {
                if (this.isSpecial() && eZ[this.scheme] === this.port) {
                  this.port = null;
                }
                return;
              }
              a = "";
              if (this.scheme === "file") {
                l = eC;
              } else if (this.isSpecial() && F && F.scheme === this.scheme) {
                l = ep;
              } else if (this.isSpecial()) {
                l = eN;
              } else if (B[i + 1] === "/") {
                l = eW;
                i++;
              } else {
                this.cannotBeABaseURL = true;
                I(this.path, "");
                l = eD;
              }
            } else {
              if (n) {
                return j;
              }
              a = "";
              l = em;
              i = 0;
              continue;
            }
            break;
          case em:
            if (!F || F.cannotBeABaseURL && R !== "#") {
              return j;
            }
            if (F.cannotBeABaseURL && R === "#") {
              this.scheme = F.scheme;
              this.path = arraySlicePolyfill_2(F.path);
              this.query = F.query;
              this.fragment = "";
              this.cannotBeABaseURL = true;
              l = eI;
              break;
            }
            l = F.scheme === "file" ? eC : eE;
            continue;
          case ep:
            if (R === "/" && B[i + 1] === "/") {
              l = ey;
              i++;
            } else {
              l = eE;
              continue;
            }
            break;
          case eW:
            if (R === "/") {
              l = eb;
              break;
            }
            l = eg;
            continue;
          case eE:
            this.scheme = F.scheme;
            if (R === Q) {
              this.username = F.username;
              this.password = F.password;
              this.host = F.host;
              this.port = F.port;
              this.path = arraySlicePolyfill_2(F.path);
              this.query = F.query;
            } else if (R === "/" || R === "\\" && this.isSpecial()) {
              l = ek;
            } else if (R === "?") {
              this.username = F.username;
              this.password = F.password;
              this.host = F.host;
              this.port = F.port;
              this.path = arraySlicePolyfill_2(F.path);
              this.query = "";
              l = ex;
            } else if (R === "#") {
              this.username = F.username;
              this.password = F.password;
              this.host = F.host;
              this.port = F.port;
              this.path = arraySlicePolyfill_2(F.path);
              this.query = F.query;
              this.fragment = "";
              l = eI;
            } else {
              this.username = F.username;
              this.password = F.password;
              this.host = F.host;
              this.port = F.port;
              this.path = arraySlicePolyfill_2(F.path);
              this.path.length--;
              l = eg;
              continue;
            }
            break;
          case ek:
            if (this.isSpecial() && (R === "/" || R === "\\")) {
              l = ey;
            } else if (R === "/") {
              l = eb;
            } else {
              this.username = F.username;
              this.password = F.password;
              this.host = F.host;
              this.port = F.port;
              l = eg;
              continue;
            }
            break;
          case eN:
            l = ey;
            if (R !== "/" || L(a, i + 1) !== "/") {
              continue;
            }
            i++;
            break;
          case ey:
            if (R !== "/" && R !== "\\") {
              l = eb;
              continue;
            }
            break;
          case eb:
            if (R === "@") {
              if (d) {
                a = "%40" + a;
              }
              d = true;
              c = iterableMapUtil(a);
              var B;
              var R;
              var c;
              var V;
              var u;
              var S;
              var m = 0;
              for (; m < c.length; m++) {
                var p = c[m];
                if (p === ":" && !o) {
                  o = true;
                  continue;
                }
                var W = eV(p, es);
                if (o) {
                  this.password += W;
                } else {
                  this.username += W;
                }
              }
              a = "";
            } else if (R === Q || R === "/" || R === "?" || R === "#" || R === "\\" && this.isSpecial()) {
              if (d && a === "") {
                return "Invalid authority";
              }
              i -= iterableMapUtil(a).length + 1;
              a = "";
              l = ef;
            } else {
              a += R;
            }
            break;
          case ef:
          case eT:
            if (n && this.scheme === "file") {
              l = eL;
              continue;
            }
            if (R !== ":" || r) {
              if (R === Q || R === "/" || R === "?" || R === "#" || R === "\\" && this.isSpecial()) {
                if (this.isSpecial() && a === "") {
                  return z;
                }
                if (n && a === "" && (this.includesCredentials() || this.port !== null)) {
                  return;
                }
                if (V = this.parseHost(a)) {
                  return V;
                }
                a = "";
                l = eG;
                if (n) {
                  return;
                }
                continue;
              }
              if (R === "[") {
                r = true;
              } else if (R === "]") {
                r = false;
              }
              a += R;
            } else {
              if (a === "") {
                return z;
              }
              if (V = this.parseHost(a)) {
                return V;
              }
              a = "";
              l = ev;
              if (n === eT) {
                return;
              }
            }
            break;
          case ev:
            if (G(q, R)) {
              a += R;
            } else {
              if (R !== Q && R !== "/" && R !== "?" && R !== "#" && (R !== "\\" || !this.isSpecial()) && !n) {
                return O;
              }
              if (a !== "") {
                var E = v(a, 10);
                if (E > 65535) {
                  return O;
                }
                this.port = this.isSpecial() && E === eZ[this.scheme] ? null : E;
                a = "";
              }
              if (n) {
                return;
              }
              l = eG;
              continue;
            }
            break;
          case eC:
            this.scheme = "file";
            if (R === "/" || R === "\\") {
              l = eX;
            } else if (F && F.scheme === "file") {
              switch (R) {
                case Q:
                  this.host = F.host;
                  this.path = arraySlicePolyfill_2(F.path);
                  this.query = F.query;
                  break;
                case "?":
                  this.host = F.host;
                  this.path = arraySlicePolyfill_2(F.path);
                  this.query = "";
                  l = ex;
                  break;
                case "#":
                  this.host = F.host;
                  this.path = arraySlicePolyfill_2(F.path);
                  this.query = F.query;
                  this.fragment = "";
                  l = eI;
                  break;
                default:
                  if (!eu(g(arraySlicePolyfill_2(B, i), ""))) {
                    this.host = F.host;
                    this.path = arraySlicePolyfill_2(F.path);
                    this.shortenPath();
                  }
                  l = eg;
                  continue;
              }
            } else {
              l = eg;
              continue;
            }
            break;
          case eX:
            if (R === "/" || R === "\\") {
              l = eL;
              break;
            }
            if (F && F.scheme === "file" && !eu(g(arraySlicePolyfill_2(B, i), ""))) {
              if (eh(F.path[0], true)) {
                I(this.path, F.path[0]);
              } else {
                this.host = F.host;
              }
            }
            l = eg;
            continue;
          case eL:
            if (R === Q || R === "/" || R === "\\" || R === "?" || R === "#") {
              if (!n && eh(a)) {
                l = eg;
              } else if (a === "") {
                this.host = "";
                if (n) {
                  return;
                }
                l = eG;
              } else {
                if (V = this.parseHost(a)) {
                  return V;
                }
                if (this.host === "localhost") {
                  this.host = "";
                }
                if (n) {
                  return;
                }
                a = "";
                l = eG;
              }
              continue;
            }
            a += R;
            break;
          case eG:
            if (this.isSpecial()) {
              l = eg;
              if (R !== "/" && R !== "\\") {
                continue;
              }
            } else if (n || R !== "?") {
              if (n || R !== "#") {
                if (R !== Q && (l = eg, R !== "/")) {
                  continue;
                }
              } else {
                this.fragment = "";
                l = eI;
              }
            } else {
              this.query = "";
              l = ex;
            }
            break;
          case eg:
            if (R === Q || R === "/" || R === "\\" && this.isSpecial() || !n && (R === "?" || R === "#")) {
              if ((u = H(u = a)) === ".." || u === "%2e." || u === ".%2e" || u === "%2e%2e") {
                this.shortenPath();
                if (R !== "/" && (R !== "\\" || !this.isSpecial())) {
                  I(this.path, "");
                }
              } else if ((S = a) === "." || H(S) === "%2e") {
                if (R !== "/" && (R !== "\\" || !this.isSpecial())) {
                  I(this.path, "");
                }
              } else {
                if (this.scheme === "file" && !this.path.length && eh(a)) {
                  this.host &&= "";
                  a = L(a, 0) + ":";
                }
                I(this.path, a);
              }
              a = "";
              if (this.scheme === "file" && (R === Q || R === "?" || R === "#")) {
                while (this.path.length > 1 && this.path[0] === "") {
                  Y(this.path);
                }
              }
              if (R === "?") {
                this.query = "";
                l = ex;
              } else if (R === "#") {
                this.fragment = "";
                l = eI;
              }
            } else {
              a += eV(R, ec);
            }
            break;
          case eD:
            if (R === "?") {
              this.query = "";
              l = ex;
            } else if (R === "#") {
              this.fragment = "";
              l = eI;
            } else if (R !== Q) {
              this.path[0] += eV(R, eB);
            }
            break;
          case ex:
            if (n || R !== "#") {
              if (R !== Q) {
                if (R === "'" && this.isSpecial()) {
                  this.query += "%27";
                } else if (R === "#") {
                  this.query += "%23";
                } else {
                  this.query += eV(R, eB);
                }
              }
            } else {
              this.fragment = "";
              l = eI;
            }
            break;
          case eI:
            if (R !== Q) {
              this.fragment += eV(R, eR);
            }
        }
        i++;
      }
    },
    parseHost: function (U) {
      var n;
      var F;
      var Q;
      if (L(U, 0) === "[") {
        if (L(U, U.length - 1) !== "]" || !(n = ed(w(U, 1, -1)))) {
          return z;
        }
        this.host = n;
      } else if (this.isSpecial()) {
        if (G(en, U = punycodeEncodeUtil(U)) || (n = ea(U)) === null) {
          return z;
        }
        this.host = n;
      } else {
        if (G(eF, U)) {
          return z;
        }
        Q = 0;
        n = "";
        F = iterableMapUtil(U);
        for (; Q < F.length; Q++) {
          n += eV(F[Q], eB);
        }
        this.host = n;
      }
    },
    cannotHaveUsernamePasswordPort: function () {
      return !this.host || this.cannotBeABaseURL || this.scheme === "file";
    },
    includesCredentials: function () {
      return this.username !== "" || this.password !== "";
    },
    isSpecial: function () {
      return objectHasOwnPolyfill_1(eZ, this.scheme);
    },
    shortenPath: function () {
      var U = this.path;
      var n = U.length;
      if (n && (this.scheme !== "file" || n !== 1 || !eh(U[0], true))) {
        U.length--;
      }
    },
    serialize: function () {
      var U = this.scheme;
      var n = this.username;
      var F = this.password;
      var Q = this.host;
      var l = this.port;
      var i = this.path;
      var a = this.query;
      var d = this.fragment;
      var r = U + ":";
      if (Q !== null) {
        r += "//";
        if (this.includesCredentials()) {
          r += n + (F ? ":" + F : "") + "@";
        }
        r += eo(Q);
        if (l !== null) {
          r += ":" + l;
        }
      } else if (U === "file") {
        r += "//";
      }
      r += this.cannotBeABaseURL ? i[0] : i.length ? "/" + g(i, "/") : "";
      if (a !== null) {
        r += "?" + a;
      }
      if (d !== null) {
        r += "#" + d;
      }
      return r;
    },
    setHref: function (U) {
      var n = this.parse(U);
      if (n) {
        throw new T(n);
      }
      this.searchParams.update();
    },
    getOrigin: function () {
      var U = this.scheme;
      var n = this.port;
      if (U === "blob") {
        try {
          return new eY(U.path[0]).origin;
        } catch (U) {
          return "null";
        }
      }
      if (U !== "file" && this.isSpecial()) {
        return U + "://" + eo(this.host) + (n !== null ? ":" + n : "");
      } else {
        return "null";
      }
    },
    getProtocol: function () {
      return this.scheme + ":";
    },
    setProtocol: function (U) {
      this.parse(symbolToStringConverter_1(U) + ":", eS);
    },
    getUsername: function () {
      return this.username;
    },
    setUsername: function (U) {
      var n = iterableMapUtil(symbolToStringConverter_1(U));
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.username = "";
        for (var F = 0; F < n.length; F++) {
          this.username += eV(n[F], es);
        }
      }
    },
    getPassword: function () {
      return this.password;
    },
    setPassword: function (U) {
      var n = iterableMapUtil(symbolToStringConverter_1(U));
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.password = "";
        for (var F = 0; F < n.length; F++) {
          this.password += eV(n[F], es);
        }
      }
    },
    getHost: function () {
      var U = this.host;
      var n = this.port;
      if (U === null) {
        return "";
      } else if (n === null) {
        return eo(U);
      } else {
        return eo(U) + ":" + n;
      }
    },
    setHost: function (U) {
      if (!this.cannotBeABaseURL) {
        this.parse(U, ef);
      }
    },
    getHostname: function () {
      var U = this.host;
      if (U === null) {
        return "";
      } else {
        return eo(U);
      }
    },
    setHostname: function (U) {
      if (!this.cannotBeABaseURL) {
        this.parse(U, eT);
      }
    },
    getPort: function () {
      var U = this.port;
      if (U === null) {
        return "";
      } else {
        return symbolToStringConverter_1(U);
      }
    },
    setPort: function (U) {
      if (!this.cannotHaveUsernamePasswordPort()) {
        if ((U = symbolToStringConverter_1(U)) === "") {
          this.port = null;
        } else {
          this.parse(U, ev);
        }
      }
    },
    getPathname: function () {
      var U = this.path;
      if (this.cannotBeABaseURL) {
        return U[0];
      } else if (U.length) {
        return "/" + g(U, "/");
      } else {
        return "";
      }
    },
    setPathname: function (U) {
      if (!this.cannotBeABaseURL) {
        this.path = [];
        this.parse(U, eG);
      }
    },
    getSearch: function () {
      var U = this.query;
      if (U) {
        return "?" + U;
      } else {
        return "";
      }
    },
    setSearch: function (U) {
      if ((U = symbolToStringConverter_1(U)) === "") {
        this.query = null;
      } else {
        if (L(U, 0) === "?") {
          U = w(U, 1);
        }
        this.query = "";
        this.parse(U, ex);
      }
      this.searchParams.update();
    },
    getSearchParams: function () {
      return this.searchParams.facade;
    },
    getHash: function () {
      var U = this.fragment;
      if (U) {
        return "#" + U;
      } else {
        return "";
      }
    },
    setHash: function (U) {
      if ((U = symbolToStringConverter_1(U)) === "") {
        this.fragment = null;
        return;
      }
      if (L(U, 0) === "#") {
        U = w(U, 1);
      }
      this.fragment = "";
      this.parse(U, eI);
    },
    update: function () {
      this.query = this.searchParams.serialize() || null;
    }
  };
  function eY(U) {
    var n = validatePrototypeInvocation(this, eK);
    var F = argumentLengthValidator_1(arguments.length, 1) > 1 ? arguments[1] : undefined;
    var Q = k(n, new eM(U, false, F));
    if (!es5PropertyDescriptorCheck) {
      n.href = Q.serialize();
      n.origin = Q.getOrigin();
      n.protocol = Q.getProtocol();
      n.username = Q.getUsername();
      n.password = Q.getPassword();
      n.host = Q.getHost();
      n.hostname = Q.getHostname();
      n.port = Q.getPort();
      n.pathname = Q.getPathname();
      n.search = Q.getSearch();
      n.searchParams = Q.getSearchParams();
      n.hash = Q.getHash();
    }
  }
  var eK = eY.prototype;
  function ew(U, n) {
    return {
      get: function () {
        return N(this)[U]();
      },
      set: n && function (U) {
        return N(this)[n](U);
      },
      configurable: true,
      enumerable: true
    };
  }
  if (es5PropertyDescriptorCheck) {
    objectDefinePropertyPolyfill(eK, "href", ew("serialize", "setHref"));
    objectDefinePropertyPolyfill(eK, "origin", ew("getOrigin"));
    objectDefinePropertyPolyfill(eK, "protocol", ew("getProtocol", "setProtocol"));
    objectDefinePropertyPolyfill(eK, "username", ew("getUsername", "setUsername"));
    objectDefinePropertyPolyfill(eK, "password", ew("getPassword", "setPassword"));
    objectDefinePropertyPolyfill(eK, "host", ew("getHost", "setHost"));
    objectDefinePropertyPolyfill(eK, "hostname", ew("getHostname", "setHostname"));
    objectDefinePropertyPolyfill(eK, "port", ew("getPort", "setPort"));
    objectDefinePropertyPolyfill(eK, "pathname", ew("getPathname", "setPathname"));
    objectDefinePropertyPolyfill(eK, "search", ew("getSearch", "setSearch"));
    objectDefinePropertyPolyfill(eK, "searchParams", ew("getSearchParams"));
    objectDefinePropertyPolyfill(eK, "hash", ew("getHash", "setHash"));
  }
  definePropertyHelper_1_1(eK, "toJSON", function () {
    return N(this).serialize();
  }, {
    enumerable: true
  });
  definePropertyHelper_1_1(eK, "toString", function () {
    return N(this).serialize();
  }, {
    enumerable: true
  });
  if (f) {
    var eH = f.createObjectURL;
    var eP = f.revokeObjectURL;
    if (eH) {
      definePropertyHelper_1_1(eY, "createObjectURL", safeFunctionBind(eH, f));
    }
    if (eP) {
      definePropertyHelper_1_1(eY, "revokeObjectURL", safeFunctionBind(eP, f));
    }
  }
  setToStringTagUtil(eY, "URL");
  polyfillPropertyDefiner({
    global: true,
    constructor: true,
    forced: !urlSearchParamsPolyfillCheck,
    sham: !es5PropertyDescriptorCheck
  }, {
    URL: eY
  });
}