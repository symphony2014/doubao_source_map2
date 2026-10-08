// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'transformObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 389700
         */
module.exports = function (module, exports, require) {
  var safePropertySet = require("safe-property-set") /*id: 252243*/;
  var objectForeachHelper = require("object-foreach-helper") /*id: 629345*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  exports.transformObject = function (e, n) {
    var i = {};
    n = objectMatcherFactory.createMatcher(n, 3);
    objectForeachHelper.createObjectForEach(e, function (e, o, a) {
      safePropertySet.safeSetProperty(i, n(e, o, a), e);
    });
    return i;
  };
}