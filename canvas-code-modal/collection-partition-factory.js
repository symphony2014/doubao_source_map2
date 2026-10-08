// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'partitionCollection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 505294
         */
module.exports = function (module, exports, require) {
  var n = require("collection-transform-factory") /*id: 905142*/.collectionTransform(function (e, t, r) {
    e[+!r].push(t);
  }, function () {
    return [[], []];
  });
  exports.partitionCollection = n;
}