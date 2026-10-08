// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'isCellEditor'
// - Renamed export 'x' to 'isDiagramSimple'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 690975
         */
module.exports = function (module, exports, require) {
  var pageElementUtils = require("page-element-utils") /*id: 117264*/;
  function o(e) {
    return !!e && pageElementUtils.hasElementClass(e, "mxCellEditor");
  }
  let l = e => e.diagram.data.mxCellList.length <= 2;
  require.d(exports, {
    isCellEditor: function () {
      return o;
    },
    isDiagramSimple: function () {
      return l;
    }
  });
}