// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$A' to 'historyTypeFlag'
// - Renamed export 'A4' to 'loadingStateKey'
// - Renamed export 'ES' to 'historyVisibleChange'
// - Renamed export 'Fb' to 'HistorySourceType'
// - Renamed export 'Jc' to 'HistoryViewMode'
// - Renamed export 'OZ' to 'historyEpochTime'
// - Renamed export 'PZ' to 'showUndoHistoryTip'
// - Renamed export 'SQ' to 'HistoryDragConsts'
// - Renamed export 'Tg' to 'historyDebounceTime'
// - Renamed export 'XL' to 'historyRestoreAction'
// - Renamed export 'b$' to 'HistoryStatusCodes'
// - Renamed export 'b7' to 'historySidebarWidth'
// - Renamed export 'bP' to 'historyContentClass'
// - Renamed export 'h' to 'historyStorageKey'
// - Renamed export 'mY' to 'HistorySyncStatus'
// - Renamed export 'r5' to 'timezoneOffsetMs'
// - Renamed export 's2' to 'oneDayInMs'
// - Renamed export 'tl' to 'HistoryResultStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 995012
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var a;
  var s;
  let l = new Date().getTimezoneOffset() * 60000;
  let c = 86400000;
  let u = {
    RUNNING: 0,
    SUCCESSES: 1,
    FAILED: 2
  };
  let d = "docx-history-content";
  let h = 500;
  let p = "docx-history-loading";
  let f = 1622433600;
  (r = {}).UN_KNOW = "UN_KNOW";
  r.NORMAL = "NORMAL";
  r.OFFLINE_HISTORY = "OFFLINE_HISTORY";
  r.NO_DATA = "NO_DATA";
  r.OFFLINE = "OFFLINE";
  r.FAILED = "FAILED";
  r.NO_SECRET = "NO_SECRET";
  let g = r;
  (o = {})[o.CREATED = 1] = "CREATED";
  o[o.FROM_DOC_UPGRADE = 4] = "FROM_DOC_UPGRADE";
  o[o.FROM_DOC_UPGRADE_SYSTEM = 5] = "FROM_DOC_UPGRADE_SYSTEM";
  let m = o;
  let v = {
    SUCCESS: "SUCCESS",
    PARTIAL_SUCCESS: "PARTIAL_SUCCESS",
    FAIL: "FAIL"
  };
  let b = "history-key";
  let _ = "is-show-undo-history-entry-tip";
  let y = "HISTORY_VISIBLE_CHANGE";
  let w = 3;
  (a = {}).TILED = "TILED";
  a.STACKED = "STACKED";
  let E = a;
  let k = 630;
  (s = {}).HISTROY_DRAG_PLACEHOLDER = "historyDragPlaceholder";
  let T = s;
  let S = "HISTORY_RESTORE";
  require.d(exports, {
    historyTypeFlag: function () {
      return w;
    },
    loadingStateKey: function () {
      return p;
    },
    historyVisibleChange: function () {
      return y;
    },
    HistorySourceType: function () {
      return m;
    },
    HistoryViewMode: function () {
      return E;
    },
    historyEpochTime: function () {
      return f;
    },
    showUndoHistoryTip: function () {
      return _;
    },
    HistoryDragConsts: function () {
      return T;
    },
    historyDebounceTime: function () {
      return h;
    },
    historyRestoreAction: function () {
      return S;
    },
    HistoryStatusCodes: function () {
      return u;
    },
    historySidebarWidth: function () {
      return k;
    },
    historyContentClass: function () {
      return d;
    },
    historyStorageKey: function () {
      return b;
    },
    HistorySyncStatus: function () {
      return g;
    },
    timezoneOffsetMs: function () {
      return l;
    },
    oneDayInMs: function () {
      return c;
    },
    HistoryResultStatus: function () {
      return v;
    }
  });
}