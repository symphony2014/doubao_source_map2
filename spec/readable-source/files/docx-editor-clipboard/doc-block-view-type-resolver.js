// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'getViewType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 117628
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  let a = {
    [viewTypeConstants.viewTypes.Card]: "card",
    [viewTypeConstants.viewTypes.Preview]: "preview",
    [viewTypeConstants.viewTypes.Inline]: viewTypeConstants.viewTypes.Inline
  };
  function l(e, o) {
    let {
      snapshot: r
    } = e;
    let {
      type: l,
      parent_id: s
    } = r;
    if (l !== docBlockTypeConstants.blockTypeConstants.FILE || !s) {
      return "";
    }
    let c = o.editorAPI.modelService.getRecordByRecordId(s);
    let {
      type: d
    } = c.snapshot;
    if (d === docBlockTypeConstants.blockTypeConstants.VIEW) {
      return a[c.snapshot.view_type];
    } else {
      return a[viewTypeConstants.viewTypes.Inline];
    }
  }
  require.d(exports, {
    getViewType: function () {
      return l;
    }
  });
}