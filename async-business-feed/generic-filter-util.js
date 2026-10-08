// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'genericFilter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 159692
         */
module.exports = function (module, exports, require) {
  var arrayFilterUtil = require("array-filter-util") /*id: 68536*/;
  var objectFilterUtil = require("object-filter-util") /*id: 560369*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  exports.genericFilter = function (e, t) {
    return (arrayIsArrayUtil.isArray(e) ? arrayFilterUtil.arrayFilter : objectFilterUtil.objectFilter)(e, objectMatcherFactory.createMatcher(t, 3));
  };
}