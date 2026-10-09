// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'stringArgumentValidator'
// - Resolved require(177477) to 'string-argument-validator'
// - Renamed variable 'a' to 'hexStringToBytesUtil'
// - Resolved require(615450) to 'hex-string-to-bytes-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 730305
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var stringArgumentValidator = require("string-argument-validator") /*id: 177477*/;
  var hexStringToBytesUtil = require("hex-string-to-bytes-util") /*id: 615450*/;
  if (globalObjectPolyfill.Uint8Array) {
    polyfillPropertyDefiner({
      target: "Uint8Array",
      stat: true
    }, {
      fromHex: function (t) {
        return hexStringToBytesUtil(stringArgumentValidator(t)).bytes;
      }
    });
  }
}