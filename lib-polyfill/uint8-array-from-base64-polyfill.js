// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'safeArrayCreateUtil'
// - Resolved require(311252) to 'safe-array-create-util'
// - Renamed variable 'a' to 'base64DecoderUtil'
// - Resolved require(688950) to 'base64-decoder-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 708596
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var safeArrayCreateUtil = require("safe-array-create-util") /*id: 311252*/;
  var base64DecoderUtil = require("base64-decoder-util") /*id: 688950*/;
  var u = globalObjectPolyfill.Uint8Array;
  if (u) {
    polyfillPropertyDefiner({
      target: "Uint8Array",
      stat: true
    }, {
      fromBase64: function (t) {
        var r = base64DecoderUtil(t, arguments.length > 1 ? arguments[1] : undefined, null, 9007199254740991);
        return safeArrayCreateUtil(u, r.bytes);
      }
    });
  }
}