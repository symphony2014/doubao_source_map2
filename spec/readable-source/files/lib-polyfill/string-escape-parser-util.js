// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 537500
         */
module.exports = function (module, exports, require) {
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var i = String.fromCharCode;
  var a = globalPolyfillAccess("String", "fromCodePoint");
  var u = functionBindFallback("".charAt);
  var c = functionBindFallback("".charCodeAt);
  var f = functionBindFallback("".indexOf);
  var s = functionBindFallback("".slice);
  function l(t, r) {
    var e = c(t, r);
    return e >= 48 && e <= 57;
  }
  function v(t, r, e) {
    if (e >= t.length) {
      return -1;
    }
    var n = 0;
    for (; r < e; r++) {
      var o = p(c(t, r));
      if (o === -1) {
        return -1;
      }
      n = n * 16 + o;
    }
    return n;
  }
  function p(t) {
    if (t >= 48 && t <= 57) {
      return t - 48;
    } else if (t >= 97 && t <= 102) {
      return t - 97 + 10;
    } else if (t >= 65 && t <= 70) {
      return t - 65 + 10;
    } else {
      return -1;
    }
  }
  module.exports = function (t) {
    var r;
    var e = "";
    var n = 0;
    var o = 0;
    while ((o = f(t, "\\", o)) > -1) {
      e += s(t, n, o);
      if (++o === t.length) {
        return;
      }
      var c = u(t, o++);
      switch (c) {
        case "b":
          e += "\b";
          break;
        case "t":
          e += "\t";
          break;
        case "n":
          e += "\n";
          break;
        case "v":
          e += "";
          break;
        case "f":
          e += "\f";
          break;
        case "r":
          e += "\r";
          break;
        case "\r":
          if (o < t.length && u(t, o) === "\n") {
            ++o;
          }
        case "\n":
        case "\u2028":
        case "\u2029":
          break;
        case "0":
          if (l(t, o)) {
            return;
          }
          e += "\0";
          break;
        case "x":
          if ((r = v(t, o, o + 2)) === -1) {
            return;
          }
          o += 2;
          e += i(r);
          break;
        case "u":
          if (o < t.length && u(t, o) === "{") {
            var p = f(t, "}", ++o);
            if (p === -1) {
              return;
            }
            r = v(t, o, p);
            o = p + 1;
          } else {
            r = v(t, o, o + 4);
            o += 4;
          }
          if (r === -1 || r > 1114111) {
            return;
          }
          e += a(r);
          break;
        default:
          if (l(c, 0)) {
            return;
          }
          e += c;
      }
      n = o;
    }
    return e + s(t, n);
  };
}