// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'handleEditorClickSelection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 13387
         */
module.exports = function (module, exports, require) {
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  let s = (e, i) => {
    var r;
    if (i.target !== i.currentTarget) {
      return;
    }
    let {
      model: s
    } = e;
    let a = s.getSelection();
    if (e.isFocus() && !(a == null ? undefined : a.isCollapsed())) {
      return;
    }
    let c = s.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey).getSelection();
    if (c.length === 1 && c[0].type === docxBlockSelectionHandler_1.blockTypes.TEXT && c[0].id === s.id) {
      e.focus();
      return;
    }
    let d = (r = s.zoneState.getContainer()) === null || r === undefined ? undefined : r.getBoundingClientRect();
    if (d) {
      if (i.pageX < d.left) {
        editorRangeUtilities.selectToStart(e, true);
      } else if (i.pageX > d.left + d.width) {
        editorRangeUtilities.selectToEnd(e);
      }
    }
  };
  require.d(exports, {
    handleEditorClickSelection: function () {
      return s;
    }
  });
}