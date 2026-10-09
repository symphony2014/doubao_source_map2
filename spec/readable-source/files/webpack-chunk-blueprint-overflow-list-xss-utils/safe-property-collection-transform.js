// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'safePropTransform'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 539057
         */
module.exports = function (module, exports, require) {
  var safePropertySet = require("safe-property-set") /*id: 252243*/;
  var i = require("collection-transform-factory") /*id: 905142*/.collectionTransform(function (e, t, n) {
    safePropertySet.safeSetProperty(e, n, t);
  });
  exports.safePropTransform = i;
}