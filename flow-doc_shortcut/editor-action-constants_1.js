// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KZ' to 'updateUndoHeader'
// - Renamed export 'Oj' to 'eventLockTitle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 659752
         */
module.exports = function (module, exports, require) {
  var r;
  var l;
  var browserThemeManager = require("browser-theme-manager") /*id: 542418*/;
  (r = {}).COMMENT = "COMMENT";
  r.SHARE = "SHARE";
  r.MORE_OPERATE = "MORE_OPERATE";
  r.MESSAGE = "MESSAGE";
  r.UNDO = "UNDO";
  r.UNDO_DISABLE = "UNDO_DISABLE";
  r.REDO = "REDO";
  r.REDO_DISABLE = "REDO_DISABLE";
  r.SCREEN_ORIENTATION_OPERATE = "SCREEN_ORIENTATION_OPERATE";
  r.SYNCED_BLOCK_REFERENCES = "SYNCED_BLOCK_REFERENCES";
  r.COPY = "COPY";
  r.FORWARD = "FORWARD";
  r.VC_SHARE = "VC_SHARE";
  r.SEND_TO_CHAT = "SEND_TO_CHAT";
  r.ANNOUNCE_PUBLISH = "ANNOUNCE_PUBLISH";
  r.ANNOUNCE_HISTORY_RECORD = "ANNOUNCE_HISTORY_RECORD";
  r.COMPLETE = "COMPLETE";
  let s = r;
  (l = {}).COMMENT = "COMMENT";
  l.SHARE = "SHARE";
  l.MORE_OPERATE = "MORE_OPERATE";
  l.MESSAGE = "MESSAGE";
  l.UNDO = "UNDO";
  l.REDO = "REDO";
  l.SCREEN_ORIENTATION_OPERATE = "SCREEN_ORIENTATION_OPERATE";
  l.SYNCED_BLOCK_REFERENCES = "SYNCED_BLOCK_REFERENCES";
  l.COPY = "COPY";
  l.FORWARD = "FORWARD";
  l.VC_SHARE = "VC_SHARE";
  l.SEND_TO_CHAT = "SEND_TO_CHAT";
  l.ANNOUNCE_PUBLISH = "PUBLISH_ANNOUNCEMENT";
  l.ANNOUNCE_HISTORY_RECORD = "HISTORY_RECORD";
  l.COMPLETE = "COMPLETE";
  l.PODCAST = "PODCAST";
  l.EDIT = "EDIT";
  l.EXPORT = "EXPORT";
  let a = l;
  let c = function (e, i = false) {
    return {
      id: e,
      disabled: i
    };
  };
  s.COMMENT;
  c(a.COMMENT, false);
  s.MESSAGE;
  c(a.MESSAGE, false);
  s.MORE_OPERATE;
  c(a.MORE_OPERATE, false);
  s.SHARE;
  c(a.SHARE, false);
  s.UNDO;
  c(a.UNDO);
  s.UNDO_DISABLE;
  c(a.UNDO, true);
  s.REDO;
  c(a.REDO);
  s.REDO_DISABLE;
  c(a.REDO, true);
  s.SCREEN_ORIENTATION_OPERATE;
  c(a.SCREEN_ORIENTATION_OPERATE, false);
  s.VC_SHARE;
  c(a.VC_SHARE, false);
  s.SYNCED_BLOCK_REFERENCES;
  c(a.SYNCED_BLOCK_REFERENCES, false);
  s.COPY;
  c(a.COPY, false);
  s.FORWARD;
  c(a.FORWARD, false);
  s.SEND_TO_CHAT;
  c(a.SEND_TO_CHAT, false);
  s.ANNOUNCE_PUBLISH;
  c(a.ANNOUNCE_PUBLISH, false);
  s.ANNOUNCE_HISTORY_RECORD;
  c(a.ANNOUNCE_HISTORY_RECORD, false);
  s.COMPLETE;
  c(a.COMPLETE, false);
  let d = "UPDATE_UNDO_HEADER";
  let h = "EVENT_LOCK_TITLE";
  browserThemeManager.ThemeMode.DARK;
  s.SEND_TO_CHAT;
  browserThemeManager.ThemeMode.LIGHT;
  s.SEND_TO_CHAT;
  require.d(exports, {
    updateUndoHeader: function () {
      return d;
    },
    eventLockTitle: function () {
      return h;
    }
  });
}