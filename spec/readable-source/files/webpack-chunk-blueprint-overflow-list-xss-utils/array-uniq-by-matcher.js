// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'uniqByMatcher'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 898750
         */
module.exports = function (module, exports, require) {
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var arrayUniqByUtil = require("array-uniq-by-util") /*id: 235198*/;
  exports.uniqByMatcher = function (e, t) {
    if (e && e.length) {
      return arrayUniqByUtil.uniqBy(e, objectMatcherFactory.createMatcher(t, 2));
    } else {
      return [];
    }
  };
}