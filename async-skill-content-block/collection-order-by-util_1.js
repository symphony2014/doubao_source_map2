// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'orderBy'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 848677
         */
module.exports = function (module, exports, require) {
  var collectionOrderByUtil = require("collection-order-by-util") /*id: 86613*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  exports.orderBy = function (e, t, n, o) {
    if (e == null) {
      return [];
    } else {
      if (!arrayIsArrayUtil.isArray(t)) {
        t = t == null ? [] : [t];
      }
      n = o ? undefined : n;
      if (!arrayIsArrayUtil.isArray(n)) {
        n = n == null ? [] : [n];
      }
      return collectionOrderByUtil.orderBy(e, t, n);
    }
  };
}