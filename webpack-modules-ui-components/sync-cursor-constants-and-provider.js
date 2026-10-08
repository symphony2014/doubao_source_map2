// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$1' to 'textFormattingKeys'
// - Renamed export 'BO' to 'syncCursorTimeoutMs'
// - Renamed export 'Bn' to 'syncCursorIntervalMs'
// - Renamed export 'F6' to 'syncCursorLongIntervalMs'
// - Renamed export 'Io' to 'syncCursorSelectEvent'
// - Renamed export 'MT' to 'syncCursorProviderName'
// - Renamed export 'Mf' to 'syncCursorMode'
// - Renamed export 'r_' to 'syncCursorOpacity'
// - Renamed export 'zu' to 'syncCursorContainerClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 88389
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  let o = 2;
  let a = 48;
  let l = 2000;
  let c = 60000;
  let s = ["text_indent", "align", "seq_level", "text"];
  let u = "sync-cursor-container";
  let d = 0.75;
  let f = docxEditorCore.getProviderName("sync-cursor");
  let h = "SYNC_CURSOR_SELECT_STATE_UPDATE_EVENT";
  require.d(exports, {
    textFormattingKeys: function () {
      return s;
    },
    syncCursorTimeoutMs: function () {
      return a;
    },
    syncCursorIntervalMs: function () {
      return l;
    },
    syncCursorLongIntervalMs: function () {
      return c;
    },
    syncCursorSelectEvent: function () {
      return h;
    },
    syncCursorProviderName: function () {
      return f;
    },
    syncCursorMode: function () {
      return o;
    },
    syncCursorOpacity: function () {
      return d;
    },
    syncCursorContainerClass: function () {
      return u;
    }
  });
}