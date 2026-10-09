// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'a' to 'uint8arrayValidator'
// - Resolved require(29516) to 'uint8array-validator'
// - Renamed variable 'u' to 'arraybufferDetachValidator'
// - Resolved require(203147) to 'arraybuffer-detach-validator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 552195
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var uint8arrayValidator = require("uint8array-validator") /*id: 29516*/;
  var arraybufferDetachValidator = require("arraybuffer-detach-validator") /*id: 203147*/;
  var c = functionBindFallback(1 .toString);
  if (globalObjectPolyfill.Uint8Array) {
    polyfillPropertyDefiner({
      target: "Uint8Array",
      proto: true
    }, {
      toHex: function () {
        uint8arrayValidator(this);
        arraybufferDetachValidator(this.buffer);
        var t = "";
        var r = 0;
        var e = this.length;
        for (; r < e; r++) {
          var n = c(this[r], 16);
          t += n.length === 1 ? "0" + n : n;
        }
        return t;
      }
    });
  }
}