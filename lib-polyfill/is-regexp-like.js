// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'o' to 'objectTypeDetector'
// - Resolved require(942172) to 'object-type-detector'
// - Resolved require(349338) to 'core-js-wks-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 164047
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var objectTypeDetector = require("object-type-detector") /*id: 942172*/;
  var i = require("core-js-wks-access") /*id: 349338*/("match");
  module.exports = function (t) {
    var r;
    return isObjectOrFunctionCheck(t) && ((r = t[i]) !== undefined ? !!r : objectTypeDetector(t) === "RegExp");
  };
}