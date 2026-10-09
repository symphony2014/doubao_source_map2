// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'updateCoverHeight'
// - Renamed export 'Q' to 'notifyHeightChange'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 584038
         */
module.exports = function (module, exports, require) {
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docCoverConstantsSelector = require("doc-cover-constants-selector") /*id: 870484*/;
  var statusModeTypes = require("status-mode-types") /*id: 811669*/;
  function s(e) {
    return e === statusModeTypes.StatusModes.NORMAL;
  }
  function a(e, i, r) {
    if (s(i) && r) {
      r.coverIntersectionChangeSignal.next({
        scene: i,
        height: Math.floor(e)
      });
    }
  }
  function c() {
    var e;
    let c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let d = arguments.length > 1 ? arguments[1] : undefined;
    let u = c.coverScene ?? statusModeTypes.StatusModes.NORMAL;
    if (!s(u)) {
      return;
    }
    let h = (e = document.querySelector(docCoverConstantsSelector.docCoverSelector)) === null || e === undefined ? undefined : e.getBoundingClientRect();
    if (h && !((h == null ? undefined : h.bottom) < 0)) {
      a(Math.max(c.viewportHeight ?? h.bottom - docxEditorConstantsConfig.borderRadiusBase, 0), u, d);
    }
  }
  require.d(exports, {
    updateCoverHeight: function () {
      return c;
    },
    notifyHeightChange: function () {
      return a;
    }
  });
}