// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'SL' to 'loadingEventEmitter'
// - Renamed export 'ae' to 'globalEventEmitter'
// - Renamed export 'lg' to 'uiEventConstants'
// - Renamed export 'nM' to 'externalHistoryEventConstants'
// - Renamed export 'pP' to 'historyDiffTextHighlightEvent'
// - Renamed export 'u4' to 'focusEventConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 851701
         */
module.exports = function (module, exports, require) {
  var o;
  var n;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  let s = new docxEditorEventConstantsAndManager.EventEmitter();
  let a = new docxEditorEventConstantsAndManager.EventEmitter();
  let c = {
    SHOW_LOADING: "SHOW_LOADING",
    HIDE_LOADING: "HIDE_LOADING",
    SHOW_ERROR: "SHOW_ERROR",
    SHOW_SNAPSHOT: "SHOW_SNAPSHOT",
    RELOAD: "RELOAD",
    SHOW_FOLD: "SHOW_FOLD",
    SEND_COVER_INFO: "SEND_COVER_INFO",
    HIDE_MOBILE_HISTORY: "HIDE_MOBILE_HISTORY",
    RESET_HISTORY_ITEM: "RESET_HISTORY_ITEM",
    SHOW_HISTORY: "SHOW_HISTORY"
  };
  (o = {}).FOCUS = "FOCUS";
  o.UNFOCUS = "UNFOCUS";
  let d = o;
  let u = "HISTORY_DIFF_TEXT_HIGHLIGHT_TO_EXTENSION";
  (n = {}).EXTERNAL_HISTORY_RESULT_READY = "EXTERNAL_HISTORY_RESULT_READY";
  n.EXTERNAL_HISTORY_ALL_READY = "EXTERNAL_HISTORY_ALL_READY,";
  let h = n;
  require.d(exports, {
    loadingEventEmitter: function () {
      return a;
    },
    globalEventEmitter: function () {
      return s;
    },
    uiEventConstants: function () {
      return c;
    },
    externalHistoryEventConstants: function () {
      return h;
    },
    historyDiffTextHighlightEvent: function () {
      return u;
    },
    focusEventConstants: function () {
      return d;
    }
  });
}