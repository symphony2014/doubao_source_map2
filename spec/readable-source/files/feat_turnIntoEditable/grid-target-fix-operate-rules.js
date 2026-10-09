// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'gridDocumentNodeUtils'
// - Resolved require(431709) to 'grid-document-node-utils'
// - Updated imported property 'NM' to 'isGrid' (module 431709)
// - Updated imported property 'Fg' to 'isGridColumn' (module 431709)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_turnIntoEditable.3eb83575.js
         * chunkId: 72034
         * moduleId: 685645
         */
module.exports = function (module, exports, require) {
  var gridDocumentNodeUtils = require("grid-document-node-utils") /*id: 431709*/;
  let l = [function () {
    return {
      fixOperateTargetsRule: {
        cond: e => gridDocumentNodeUtils.isGrid(e) || gridDocumentNodeUtils.isGridColumn(e),
        h: e => gridDocumentNodeUtils.isGridColumn(e) ? e.children : e.children.reduce((e, t) => e.concat(t.children), [])
      }
    };
  }];
  exports.default = l;
  require.r(exports);
}