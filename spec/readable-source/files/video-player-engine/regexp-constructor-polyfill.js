// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'l' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'a' to 'functionFeatureDetectHelper'
// - Resolved require(948260) to 'function-feature-detect-helper'
// - Renamed variable 'd' to 'setPrototypeOfPolyfill_1'
// - Resolved require(579783) to 'set-prototype-of-polyfill_1'
// - Renamed variable 'r' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// - Renamed variable 'o' to 'objectCreatePolyfill_1'
// - Resolved require(557677) to 'object-create-polyfill_1'
// - Resolved require(667264) to 'get-own-property-names-polyfill'
// - Renamed variable 'R' to 'isPrototypeOfPolyfill'
// - Resolved require(28472) to 'is-prototype-of-polyfill'
// - Renamed variable 'c' to 'isRegexpLike'
// - Resolved require(164047) to 'is-regexp-like'
// - Renamed variable 's' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'V' to 'getRegexpFlags'
// - Resolved require(350472) to 'get-regexp-flags'
// - Renamed variable 'Z' to 'regexpPolyfillDetect'
// - Resolved require(764642) to 'regexp-polyfill-detect'
// - Renamed variable 'h' to 'definePropertyProxy'
// - Resolved require(868602) to 'define-property-proxy'
// - Renamed variable 'u' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// - Renamed variable 'S' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'J' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Resolved require(488732) to 'object-state-manager'
// - Renamed variable 'p' to 'speciesAccessorPolyfill'
// - Resolved require(56192) to 'species-accessor-polyfill'
// - Renamed variable 'W' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'E' to 'regexpDotallPolyfillCheck'
// - Resolved require(9447) to 'regexp-dotall-polyfill-check'
// - Renamed variable 'k' to 'regexpNamedCaptureDetect'
// - Resolved require(956631) to 'regexp-named-capture-detect'
// - Updated imported property 'f' to 'getOwnPropertyNames' (module 667264)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 744139
         */
module.exports = function (module, exports, require) {
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var functionFeatureDetectHelper = require("function-feature-detect-helper") /*id: 948260*/;
  var setPrototypeOfPolyfill_1 = require("set-prototype-of-polyfill_1") /*id: 579783*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var objectCreatePolyfill_1 = require("object-create-polyfill_1") /*id: 557677*/;
  var B = require("get-own-property-names-polyfill") /*id: 667264*/.getOwnPropertyNames;
  var isPrototypeOfPolyfill = require("is-prototype-of-polyfill") /*id: 28472*/;
  var isRegexpLike = require("is-regexp-like") /*id: 164047*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var getRegexpFlags = require("get-regexp-flags") /*id: 350472*/;
  var regexpPolyfillDetect = require("regexp-polyfill-detect") /*id: 764642*/;
  var definePropertyProxy = require("define-property-proxy") /*id: 868602*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var m = require("object-state-manager") /*id: 488732*/.enforce;
  var speciesAccessorPolyfill = require("species-accessor-polyfill") /*id: 56192*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var regexpDotallPolyfillCheck = require("regexp-dotall-polyfill-check") /*id: 9447*/;
  var regexpNamedCaptureDetect = require("regexp-named-capture-detect") /*id: 956631*/;
  var N = coreJsWksAccess("match");
  var y = globalObjectPolyfill.RegExp;
  var b = y.prototype;
  var f = globalObjectPolyfill.SyntaxError;
  var T = functionBindFallback(b.exec);
  var v = functionBindFallback("".charAt);
  var C = functionBindFallback("".replace);
  var X = functionBindFallback("".indexOf);
  var L = functionBindFallback("".slice);
  var G = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var g = /a/g;
  var D = /a/g;
  var x = new y(g) !== g;
  var I = regexpPolyfillDetect.MISSED_STICKY;
  var M = regexpPolyfillDetect.UNSUPPORTED_Y;
  var Y = es5PropertyDescriptorCheck && (!x || I || regexpDotallPolyfillCheck || regexpNamedCaptureDetect || tryCatchFunctionWrapper(function () {
    D[N] = false;
    return y(g) !== g || y(D) === D || String(y(g, "i")) !== "/a/i";
  }));
  function K(U) {
    var n;
    var F = U.length;
    var Q = 0;
    var l = "";
    var i = false;
    for (; Q <= F; Q++) {
      if ((n = v(U, Q)) === "\\") {
        l += n + v(U, ++Q);
        continue;
      }
      if (i || n !== ".") {
        if (n === "[") {
          i = true;
        } else if (n === "]") {
          i = false;
        }
        l += n;
      } else {
        l += "[\\s\\S]";
      }
    }
    return l;
  }
  function w(U) {
    var n;
    var F = U.length;
    var Q = 0;
    var l = "";
    var i = [];
    var a = objectCreatePolyfill_1(null);
    var d = false;
    var r = false;
    var B = 0;
    var R = "";
    for (; Q <= F; Q++) {
      if ((n = v(U, Q)) === "\\") {
        n += v(U, ++Q);
      } else if (n === "]") {
        d = false;
      } else if (!d) {
        switch (true) {
          case n === "[":
            d = true;
            break;
          case n === "(":
            l += n;
            if (L(U, Q + 1, Q + 3) === "?:") {
              continue;
            }
            if (T(G, L(U, Q + 1))) {
              Q += 2;
              r = true;
            }
            B++;
            continue;
          case n === ">" && r:
            if (R === "" || objectHasOwnPolyfill_1(a, R)) {
              throw new f("Invalid capture group name");
            }
            a[R] = true;
            i[i.length] = [R, B];
            r = false;
            R = "";
            continue;
        }
      }
      if (r) {
        R += n;
      } else {
        l += n;
      }
    }
    return [l, i];
  }
  if (functionFeatureDetectHelper("RegExp", Y)) {
    function H(U, n) {
      var F;
      var Q;
      var l;
      var i;
      var a;
      var o;
      var B = isPrototypeOfPolyfill(b, this);
      var Z = isRegexpLike(U);
      var h = n === undefined;
      var u = [];
      var S = U;
      if (!B && Z && h && U.constructor === H) {
        return U;
      }
      if (Z || isPrototypeOfPolyfill(b, U)) {
        U = U.source;
        if (h) {
          n = getRegexpFlags(S);
        }
      }
      U = U === undefined ? "" : symbolToStringConverter_1(U);
      n = n === undefined ? "" : symbolToStringConverter_1(n);
      S = U;
      if (regexpDotallPolyfillCheck && "dotAll" in g && (Q = !!n && X(n, "s") > -1)) {
        n = C(n, /s/g, "");
      }
      F = n;
      if (I && "sticky" in g && (l = !!n && X(n, "y") > -1) && M) {
        n = C(n, /y/g, "");
      }
      if (regexpNamedCaptureDetect) {
        U = (i = w(U))[0];
        u = i[1];
      }
      a = setPrototypeOfPolyfill_1(y(U, n), B ? this : b, H);
      if (Q || l || u.length) {
        o = m(a);
        if (Q) {
          o.dotAll = true;
          o.raw = H(K(U), F);
        }
        if (l) {
          o.sticky = true;
        }
        if (u.length) {
          o.groups = u;
        }
      }
      if (U !== S) {
        try {
          definePropertyHelper_1(a, "source", S === "" ? "(?:)" : S);
        } catch (U) {}
      }
      return a;
    }
    var P = B(y);
    var j = 0;
    while (P.length > j) {
      definePropertyProxy(H, y, P[j++]);
    }
    b.constructor = H;
    H.prototype = b;
    definePropertyHelper_1_1(globalObjectPolyfill, "RegExp", H, {
      constructor: true
    });
  }
  speciesAccessorPolyfill("RegExp");
}