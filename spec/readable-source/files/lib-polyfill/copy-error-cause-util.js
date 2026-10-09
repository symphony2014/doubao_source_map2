// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'o' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 487958
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  module.exports = function (t, r) {
    if (isObjectOrFunctionCheck(r) && "cause" in r) {
      definePropertyHelper_1(t, "cause", r.cause);
    }
  };
}