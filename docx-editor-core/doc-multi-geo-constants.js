// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ff' to 'multiGeoDocId'
// - Renamed export 'Hz' to 'multiGeoStatusMap'
// - Renamed export 'l1' to 'multiGeoModeId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 254280
         */
module.exports = function (module, exports, require) {
  var docApiConstants = require("doc-api-constants") /*id: 499049*/;
  let o = new Map([[docApiConstants.operationStatus.CROSS_BRAND, t("CreationDoc_MultiGeo_900004511")], [docApiConstants.operationStatus.CROSS_TENANT, t("CreationDoc_MultiGeo_900004510")]]);
  let l = 2004;
  let a = 3;
  require.d(exports, {
    multiGeoDocId: function () {
      return l;
    },
    multiGeoStatusMap: function () {
      return o;
    },
    multiGeoModeId: function () {
      return a;
    }
  });
}