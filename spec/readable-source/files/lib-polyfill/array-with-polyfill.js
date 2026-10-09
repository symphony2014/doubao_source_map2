// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'typedArrayWithPolyfill'
// - Resolved require(552432) to 'typed-array-with-polyfill'
// - Renamed variable 'i' to 'stringToArrayPolyfillWrapper'
// - Resolved require(902400) to 'string-to-array-polyfill-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 129184
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var typedArrayWithPolyfill = require("typed-array-with-polyfill") /*id: 552432*/;
  var stringToArrayPolyfillWrapper = require("string-to-array-polyfill-wrapper") /*id: 902400*/;
  var a = Array;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true
  }, {
    with: function (t, r) {
      return typedArrayWithPolyfill(stringToArrayPolyfillWrapper(this), a, t, r);
    }
  });
}