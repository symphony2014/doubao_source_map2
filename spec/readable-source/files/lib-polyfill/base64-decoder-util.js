// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'validateObjectOrFunction'
// - Resolved require(640181) to 'validate-object-or-function'
// - Renamed variable 'a' to 'stringArgumentValidator'
// - Resolved require(177477) to 'string-argument-validator'
// - Renamed variable 'u' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'c' to 'base64EncodingConstants'
// - Resolved require(153164) to 'base64-encoding-constants'
// - Renamed variable 'f' to 'validateBase64Alphabet'
// - Resolved require(320946) to 'validate-base64-alphabet'
// - Renamed variable 's' to 'arraybufferDetachValidator'
// - Resolved require(203147) to 'arraybuffer-detach-validator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 688950
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var validateObjectOrFunction = require("validate-object-or-function") /*id: 640181*/;
  var stringArgumentValidator = require("string-argument-validator") /*id: 177477*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var base64EncodingConstants = require("base64-encoding-constants") /*id: 153164*/;
  var validateBase64Alphabet = require("validate-base64-alphabet") /*id: 320946*/;
  var arraybufferDetachValidator = require("arraybuffer-detach-validator") /*id: 203147*/;
  var l = base64EncodingConstants.c2i;
  var v = base64EncodingConstants.c2iUrl;
  var p = globalObjectPolyfill.SyntaxError;
  var h = globalObjectPolyfill.TypeError;
  var d = functionBindFallback("".charAt);
  function y(t, r) {
    for (var e = t.length; r < e; r++) {
      var n = d(t, r);
      if (n !== " " && n !== "\t" && n !== "\n" && n !== "\f" && n !== "\r") {
        break;
      }
    }
    return r;
  }
  function g(t, r, e) {
    var n = t.length;
    if (n < 4) {
      t += n === 2 ? "AA" : "A";
    }
    var o = (r[d(t, 0)] << 18) + (r[d(t, 1)] << 12) + (r[d(t, 2)] << 6) + r[d(t, 3)];
    var i = [o >> 16 & 255, o >> 8 & 255, o & 255];
    if (n === 2) {
      if (e && i[1] !== 0) {
        throw new p("Extra bits");
      }
      return [i[0]];
    }
    if (n === 3) {
      if (e && i[2] !== 0) {
        throw new p("Extra bits");
      }
      return [i[0], i[1]];
    }
    return i;
  }
  function b(t, r, e) {
    var n = r.length;
    var o = 0;
    for (; o < n; o++) {
      t[e + o] = r[o];
    }
    return e + n;
  }
  module.exports = function (t, r, e, n) {
    stringArgumentValidator(t);
    validateObjectOrFunction(r);
    var o = validateBase64Alphabet(r) === "base64" ? l : v;
    var c = r ? r.lastChunkHandling : undefined;
    if (c === undefined) {
      c = "loose";
    }
    if (c !== "loose" && c !== "strict" && c !== "stop-before-partial") {
      throw new h("Incorrect `lastChunkHandling` option");
    }
    if (e) {
      arraybufferDetachValidator(e.buffer);
    }
    var w = e || [];
    var m = 0;
    var x = 0;
    var A = "";
    var E = 0;
    if (n) {
      while (true) {
        if ((E = y(t, E)) === t.length) {
          if (A.length > 0) {
            if (c === "stop-before-partial") {
              break;
            }
            if (c === "loose") {
              if (A.length === 1) {
                throw new p("Malformed padding: exactly one additional character");
              }
              m = b(w, g(A, o, false), m);
            } else {
              throw new p("Missing padding");
            }
          }
          x = t.length;
          break;
        }
        var S = d(t, E);
        ++E;
        if (S === "=") {
          if (A.length < 2) {
            throw new p("Padding is too early");
          }
          E = y(t, E);
          if (A.length === 2) {
            if (E === t.length) {
              if (c === "stop-before-partial") {
                break;
              }
              throw new p("Malformed padding: only one =");
            }
            if (d(t, E) === "=") {
              E = y(t, ++E);
            }
          }
          if (E < t.length) {
            throw new p("Unexpected character after padding");
          }
          m = b(w, g(A, o, c === "strict"), m);
          x = t.length;
          break;
        }
        if (!objectHasOwnPolyfill_1(o, S)) {
          throw new p("Unexpected character");
        }
        var O = n - m;
        if (O === 1 && A.length === 2 || O === 2 && A.length === 3 || (A += S).length === 4 && (m = b(w, g(A, o, false), m), A = "", x = E, m === n)) {
          break;
        }
      }
    }
    return {
      bytes: w,
      read: x,
      written: m
    };
  };
}