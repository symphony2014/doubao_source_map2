// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'stringArgumentValidator'
// - Resolved require(177477) to 'string-argument-validator'
// - Renamed variable 'a' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Resolved require(382872) to 'string-pad-polyfill'
// - Renamed variable 'c' to 'unicodeWhitespaceChars'
// - Resolved require(683193) to 'unicode-whitespace-chars'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 545086
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var stringArgumentValidator = require("string-argument-validator") /*id: 177477*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var u = require("string-pad-polyfill") /*id: 382872*/.start;
  var unicodeWhitespaceChars = require("unicode-whitespace-chars") /*id: 683193*/;
  var f = Array;
  var s = RegExp.escape;
  var l = functionBindFallback("".charAt);
  var v = functionBindFallback("".charCodeAt);
  var p = functionBindFallback(1.1.toString);
  var h = functionBindFallback([].join);
  var d = /^[0-9a-z]/i;
  var y = /^[$()*+./?[\\\]^{|}]/;
  var g = RegExp("^[!\"#%&',\\-:;<=>@`~" + unicodeWhitespaceChars + "]");
  var b = functionBindFallback(d.exec);
  var w = {
    "\t": "t",
    "\n": "n",
    "": "v",
    "\f": "f",
    "\r": "r"
  };
  function m(t) {
    var r = p(v(t, 0), 16);
    if (r.length < 3) {
      return "\\x" + u(r, 2, "0");
    } else {
      return "\\u" + u(r, 4, "0");
    }
  }
  polyfillPropertyDefiner({
    target: "RegExp",
    stat: true,
    forced: !s || s("ab") !== "\\x61b"
  }, {
    escape: function (t) {
      stringArgumentValidator(t);
      var r = t.length;
      var e = f(r);
      var n = 0;
      for (; n < r; n++) {
        var o = l(t, n);
        if (n === 0 && b(d, o)) {
          e[n] = m(o);
        } else if (objectHasOwnPolyfill_1(w, o)) {
          e[n] = "\\" + w[o];
        } else if (b(y, o)) {
          e[n] = "\\" + o;
        } else if (b(g, o)) {
          e[n] = m(o);
        } else {
          var u = v(o, 0);
          if ((u & 63488) != 55296) {
            e[n] = o;
          } else if (u >= 56320 || n + 1 >= r || (v(t, n + 1) & 64512) != 56320) {
            e[n] = m(o);
          } else {
            e[n] = o;
            e[++n] = l(t, n);
          }
        }
      }
      return h(e, "");
    }
  });
}