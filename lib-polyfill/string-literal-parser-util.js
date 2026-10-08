// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 996811
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var i = SyntaxError;
  var a = parseInt;
  var u = String.fromCharCode;
  var c = functionBindFallback("".charAt);
  var f = functionBindFallback("".slice);
  var s = functionBindFallback(/./.exec);
  var l = {
    "\\\"": "\"",
    "\\\\": "\\",
    "\\/": "/",
    "\\b": "\b",
    "\\f": "\f",
    "\\n": "\n",
    "\\r": "\r",
    "\\t": "\t"
  };
  var v = /^[\da-f]{4}$/i;
  var p = /^[\u0000-\u001F]$/;
  module.exports = function (t, r) {
    var e = true;
    var n = "";
    while (r < t.length) {
      var h = c(t, r);
      if (h === "\\") {
        var d = f(t, r, r + 2);
        if (objectHasOwnPolyfill_1(l, d)) {
          n += l[d];
          r += 2;
        } else if (d === "\\u") {
          var y = f(t, r += 2, r + 4);
          if (!s(v, y)) {
            throw new i("Bad Unicode escape at: " + r);
          }
          n += u(a(y, 16));
          r += 4;
        } else {
          throw new i("Unknown escape sequence: \"" + d + "\"");
        }
      } else if (h === "\"") {
        e = false;
        r++;
        break;
      } else {
        if (s(p, h)) {
          throw new i("Bad control character in string literal at: " + r);
        }
        n += h;
        r++;
      }
    }
    if (e) {
      throw new i("Unterminated string at: " + r);
    }
    return {
      value: n,
      end: r
    };
  };
}