// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'safeObjectMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 740962
         */
module.exports = function (module, exports, require) {
  var safePropertySet = require("safe-property-set") /*id: 252243*/;
  var objectForeachHelper = require("object-foreach-helper") /*id: 629345*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  exports.safeObjectMap = function (e, t) {
    var n = {};
    t = objectMatcherFactory.createMatcher(t, 3);
    objectForeachHelper.createObjectForEach(e, function (e, i, o) {
      safePropertySet.safeSetProperty(n, i, t(e, i, o));
    });
    return n;
  };
}