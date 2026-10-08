// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'getObjectTypeString'
// - Resolved require(32151) to 'get-object-type-string'
// - Renamed variable 'o' to 'stringToArrayFallback'
// - Resolved require(476143) to 'string-to-array-fallback'
// - Resolved require(572559) to 'get-own-property-names-util'
// - Renamed variable 'u' to 'arraySliceWrapper_1'
// - Resolved require(955975) to 'array-slice-wrapper_1'
// - Updated imported property 'f' to 'getOwnPropertyNames' (module 572559)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 868758
         */
module.exports = function (module, exports, require) {
  var getObjectTypeString = require("get-object-type-string") /*id: 32151*/;
  var stringToArrayFallback = require("string-to-array-fallback") /*id: 476143*/;
  var i = require("get-own-property-names-util") /*id: 572559*/.getOwnPropertyNames;
  var arraySliceWrapper_1 = require("array-slice-wrapper_1") /*id: 955975*/;
  var c = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  function s(t) {
    try {
      return i(t);
    } catch (t) {
      return arraySliceWrapper_1(c);
    }
  }
  module.exports.f = function (t) {
    if (c && getObjectTypeString(t) === "Window") {
      return s(t);
    } else {
      return i(stringToArrayFallback(t));
    }
  };
}