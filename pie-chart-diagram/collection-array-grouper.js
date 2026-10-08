// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'groupValuesToArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 177883
         */
module.exports = function (module, exports, require) {
  var safePropertySet = require("safe-property-set") /*id: 252243*/;
  var collectionTransformFactory = require("collection-transform-factory") /*id: 905142*/;
  var o = Object.prototype.hasOwnProperty;
  var a = collectionTransformFactory.collectionTransform(function (e, t, n) {
    if (o.call(e, n)) {
      e[n].push(t);
    } else {
      safePropertySet.safeSetProperty(e, n, [t]);
    }
  });
  exports.groupValuesToArray = a;
}