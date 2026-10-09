// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'numberPrecisionHandler'
// - Resolved require(52657) to 'number-precision-handler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 634182
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var numberPrecisionHandler = require("number-precision-handler") /*id: 52657*/;
  polyfillPropertyDefiner({
    target: "Math",
    stat: true
  }, {
    f16round: function (t) {
      return numberPrecisionHandler(t, 0.0009765625, 65504, 0.00006103515625);
    }
  });
}