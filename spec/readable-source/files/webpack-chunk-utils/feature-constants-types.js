// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D6' to 'PlatformTypes'
// - Renamed export 'UZ' to 'UiSources'
// - Renamed export 'h$' to 'InfestActions'
// - Renamed export 'kk' to 'EditorModes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 882886
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var a;
  var u;
  (i = {}).READING = "READING";
  i.EDITING = "EDITING";
  i.REVISING = "REVISING";
  i.NONE = "NONE";
  i.UNKNOWN = "UNKNOWN";
  let c = i;
  (o = {})[o.webPC = 1] = "webPC";
  o[o.LarkFeed = 2] = "LarkFeed";
  o[o.MagicShare = 3] = "MagicShare";
  let _ = o;
  (a = {}).INIT_INFESTED = "init_infested";
  a.CHANGE_INFESTED = "change_infested";
  a.NONE = "none";
  let l = a;
  (u = {}).HEADER = "HEADER";
  u.TOOLBAR = "TOOLBAR";
  u.TOAST = "TOAST";
  u.HISTORY = "HISTORY";
  u.KEYEVENT = "KEYEVENT";
  u.MAGIC_SHARE = "MAGIC_SHARE";
  u.DEFAULT_POLICY = "DEFAULT_POLICY";
  u.PERMISSI_CHANGE = "PERMISSI_CHANGE";
  u.FLOW_PERMISSION_CHANGE = "FLOW_PERMISSION_CHANGE";
  u.WHITEBOARD = "WHITEBOARD";
  let s = u;
  require.d(exports, {
    PlatformTypes: function () {
      return _;
    },
    UiSources: function () {
      return s;
    },
    InfestActions: function () {
      return l;
    },
    EditorModes: function () {
      return c;
    }
  });
}