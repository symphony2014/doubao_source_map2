// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'findMinByMatcher'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 65435
         */
module.exports = function (module, exports, require) {
  var arrayMaxByUtil = require("array-max-by-util") /*id: 997256*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var isLessThanUtil = require("is-less-than-util") /*id: 866322*/;
  exports.findMinByMatcher = function (t, e) {
    if (t && t.length) {
      return arrayMaxByUtil.maxBy(t, objectMatcherFactory.createMatcher(e, 2), isLessThanUtil.isLessThan);
    } else {
      return undefined;
    }
  };
}