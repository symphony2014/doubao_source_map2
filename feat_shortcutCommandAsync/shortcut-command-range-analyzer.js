// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'analyzeSelectionState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 401210
         */
module.exports = function (module, exports, require) {
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  let r = e => i => {
    let {
      currentTargetViewFilterEmpty: l,
      selectionAPI: r,
      collector: d
    } = i;
    let c = {};
    if (r.getSelection().filter(e => e.type === docxBlockSelectionHandler_1.blockTypes.BLOCK).length > 0) {
      c.value1 = "true";
      c.value4 = "unknow";
    } else {
      let e = l[0];
      if (!e) {
        return;
      }
      c.value1 = "false";
      c.value3 = e.record.snapshot.seq !== undefined ? "order" : "none";
      c.value2 = e.record.snapshot.folded !== undefined ? `${!e.record.snapshot.folded}` : "true";
      let {
        editor: i,
        model: o
      } = e;
      let r = o.getSelection();
      if (i && r) {
        let e = editorRangeUtilities.isAtStart(r);
        let i = editorRangeUtilities.isAtZoneEnd(r);
        if (o.isSelectingAll()) {
          c.value1 = "true";
          delete c.value2;
          delete c.value3;
          c.value4 = "unknow";
        } else {
          let l = "unknow";
          l = e ? "start" : i ? "end" : "mid";
          c.value4 = l;
        }
      } else {
        c.value4 = "unknow";
      }
    }
    if (d) {
      d.setExtraData({
        action_value: c
      });
    }
    return e(i);
  };
  require.d(exports, {
    analyzeSelectionState: function () {
      return r;
    }
  });
}