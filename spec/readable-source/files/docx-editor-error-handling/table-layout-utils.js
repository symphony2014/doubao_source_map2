// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'XZ' to 'mapCellIdsToMatrix'
// - Renamed export 'oe' to 'getTableRowConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 991719
         */
module.exports = function (module, exports, require) {
  var bearVirtualLayoutReconciler = require("bear-virtual-layout-reconciler") /*id: 247503*/;
  function o() {
    return {
      calculateModel: bearVirtualLayoutReconciler.CalculateModel.TABLE_ROW,
      childrenWithoutRenderUnit: true,
      onlyChildrenHeight: true
    };
  }
  function l(e) {
    let {
      rows_id: i,
      columns_id: r,
      cell_set: n
    } = e || {};
    let o = [];
    if (i) {
      for (let e = 0, l = i.length; e < l; ++e) {
        for (let l = 0, s = r.length; l < s; ++l) {
          o[e] ||= [];
          let s = `${i[e]}${r[l]}`;
          if (n[s]) {
            o[e][l] = n[s].block_id;
          }
        }
      }
    }
    return o;
  }
  require.d(exports, {
    mapCellIdsToMatrix: function () {
      return l;
    },
    getTableRowConfig: function () {
      return o;
    }
  });
}