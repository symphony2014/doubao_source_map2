// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'resolveMultiGeoId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 193223
         */
module.exports = function (module, exports, require) {
  var docMultiGeoConstants = require("doc-multi-geo-constants") /*id: 254280*/;
  function o(e, i) {
    if (i === docMultiGeoConstants.multiGeoDocId || i === docMultiGeoConstants.multiGeoModeId) {
      return "1";
    } else {
      return e;
    }
  }
  require.d(exports, {
    resolveMultiGeoId: function () {
      return o;
    }
  });
}