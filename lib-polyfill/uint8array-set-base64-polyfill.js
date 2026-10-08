// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'base64DecoderUtil'
// - Resolved require(688950) to 'base64-decoder-util'
// - Renamed variable 'a' to 'uint8arrayValidator'
// - Resolved require(29516) to 'uint8array-validator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 843422
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var base64DecoderUtil = require("base64-decoder-util") /*id: 688950*/;
  var uint8arrayValidator = require("uint8array-validator") /*id: 29516*/;
  if (globalObjectPolyfill.Uint8Array) {
    polyfillPropertyDefiner({
      target: "Uint8Array",
      proto: true
    }, {
      setFromBase64: function (t) {
        uint8arrayValidator(this);
        var r = base64DecoderUtil(t, arguments.length > 1 ? arguments[1] : undefined, this, this.length);
        return {
          read: r.read,
          written: r.written
        };
      }
    });
  }
}