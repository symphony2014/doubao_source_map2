// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'capacityLimits'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 1853
         */
module.exports = function (module, exports, require) {
  var o;
  (o = {})[o.TENANT_CAPACITY_LIMIT = 90008072] = "TENANT_CAPACITY_LIMIT";
  o[o.DRIVE_STORAGE_LIMIT = 11001] = "DRIVE_STORAGE_LIMIT";
  o[o.DEPARTMENT_CAPACITY_LIMIT = 90003083] = "DEPARTMENT_CAPACITY_LIMIT";
  o[o.USER_CAPACITY_LIMIT = 900011002] = "USER_CAPACITY_LIMIT";
  o[o.DOCS_COUNT_LIMIT = 90003086] = "DOCS_COUNT_LIMIT";
  o[o.CREATE_USER_LIMITATION_ERROR_A2 = 90003087] = "CREATE_USER_LIMITATION_ERROR_A2";
  let n = o;
  require.d(exports, {
    capacityLimits: function () {
      return n;
    }
  });
}