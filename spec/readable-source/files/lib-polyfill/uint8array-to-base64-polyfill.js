// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'a' to 'validateObjectOrFunction'
// - Resolved require(640181) to 'validate-object-or-function'
// - Renamed variable 'u' to 'uint8arrayValidator'
// - Resolved require(29516) to 'uint8array-validator'
// - Renamed variable 'c' to 'arraybufferDetachValidator'
// - Resolved require(203147) to 'arraybuffer-detach-validator'
// - Renamed variable 'f' to 'base64EncodingConstants'
// - Resolved require(153164) to 'base64-encoding-constants'
// - Renamed variable 's' to 'validateBase64Alphabet'
// - Resolved require(320946) to 'validate-base64-alphabet'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 721011
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var validateObjectOrFunction = require("validate-object-or-function") /*id: 640181*/;
  var uint8arrayValidator = require("uint8array-validator") /*id: 29516*/;
  var arraybufferDetachValidator = require("arraybuffer-detach-validator") /*id: 203147*/;
  var base64EncodingConstants = require("base64-encoding-constants") /*id: 153164*/;
  var validateBase64Alphabet = require("validate-base64-alphabet") /*id: 320946*/;
  var l = base64EncodingConstants.i2c;
  var v = base64EncodingConstants.i2cUrl;
  var p = functionBindFallback("".charAt);
  if (globalObjectPolyfill.Uint8Array) {
    polyfillPropertyDefiner({
      target: "Uint8Array",
      proto: true
    }, {
      toBase64: function () {
        var t;
        var r = uint8arrayValidator(this);
        var e = arguments.length ? validateObjectOrFunction(arguments[0]) : undefined;
        var n = validateBase64Alphabet(e) === "base64" ? l : v;
        var o = !!e && !!e.omitPadding;
        arraybufferDetachValidator(this.buffer);
        var i = "";
        var f = 0;
        var h = r.length;
        function d(r) {
          return p(n, t >> r * 6 & 63);
        }
        for (; f + 2 < h; f += 3) {
          t = (r[f] << 16) + (r[f + 1] << 8) + r[f + 2];
          i += d(3) + d(2) + d(1) + d(0);
        }
        if (f + 2 === h) {
          t = (r[f] << 16) + (r[f + 1] << 8);
          i += d(3) + d(2) + d(1) + (o ? "" : "=");
        } else if (f + 1 === h) {
          t = r[f] << 16;
          i += d(3) + d(2) + (o ? "" : "==");
        }
        return i;
      }
    });
  }
}