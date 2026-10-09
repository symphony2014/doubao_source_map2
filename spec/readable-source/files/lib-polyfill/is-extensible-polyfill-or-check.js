// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'o' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'i' to 'objectTypeDetector'
// - Resolved require(942172) to 'object-type-detector'
// - Renamed variable 'a' to 'arraybufferFeatureDetection'
// - Resolved require(152613) to 'arraybuffer-feature-detection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 765631
         */
module.exports = function (module, exports, require) {
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var objectTypeDetector = require("object-type-detector") /*id: 942172*/;
  var arraybufferFeatureDetection = require("arraybuffer-feature-detection") /*id: 152613*/;
  var u = Object.isExtensible;
  var c = tryCatchFunctionWrapper(function () {
    u(1);
  });
  module.exports = c || arraybufferFeatureDetection ? function (t) {
    return !!isObjectOrFunctionCheck(t) && (!arraybufferFeatureDetection || objectTypeDetector(t) !== "ArrayBuffer") && (!u || u(t));
  } : u;
}