// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectTypeDetector'
// - Resolved require(942172) to 'object-type-detector'
// - Renamed variable 'o' to 'stringToArrayPolyfillWrapper'
// - Resolved require(902400) to 'string-to-array-polyfill-wrapper'
// - Resolved require(667264) to 'get-own-property-names-polyfill'
// - Renamed variable 'a' to 'arraySlicePolyfill_2'
// - Resolved require(763415) to 'array-slice-polyfill_2'
// - Updated imported property 'f' to 'getOwnPropertyNames' (module 667264)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 809638
         */
module.exports = function (module, exports, require) {
  var objectTypeDetector = require("object-type-detector") /*id: 942172*/;
  var stringToArrayPolyfillWrapper = require("string-to-array-polyfill-wrapper") /*id: 902400*/;
  var i = require("get-own-property-names-polyfill") /*id: 667264*/.getOwnPropertyNames;
  var arraySlicePolyfill_2 = require("array-slice-polyfill_2") /*id: 763415*/;
  var u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  function c(t) {
    try {
      return i(t);
    } catch (t) {
      return arraySlicePolyfill_2(u);
    }
  }
  module.exports.f = function (t) {
    if (u && objectTypeDetector(t) === "Window") {
      return c(t);
    } else {
      return i(stringToArrayPolyfillWrapper(t));
    }
  };
}