// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'optionsMergeUtils'
// - Resolved require(625001) to 'options-merge-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 721035
         */
module.exports = function (module, exports, require) {
  exports.AbstractFindMath = undefined;
  var optionsMergeUtils = require("options-merge-utils") /*id: 625001*/;
  var T = function () {
    function t(t) {
      var e = this.constructor;
      this.options = optionsMergeUtils.userOptions(optionsMergeUtils.defaultOptions({}, e.OPTIONS), t);
    }
    t.OPTIONS = {};
    return t;
  }();
  exports.AbstractFindMath = T;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}