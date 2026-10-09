// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$2' to 'isSpaceApp'
// - Renamed export 'B8' to 'EntrySource'
// - Renamed export 'Ob' to 'DocEntryType'
// - Renamed export 'cC' to 'isLarkWeb'
// - Renamed export 'fK' to 'EntryChannel'
// - Renamed export 'jS' to 'getShellEnv'
// - Renamed export 'pp' to 'AppCommunity'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 59234
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var a;
  var i;
  var c;
  var u;
  var l;
  var s;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  (n = c ||= {}).UNKNOW = "";
  n.QUICK = "quick";
  n.IN_FEED = "in_feed";
  n.OPEN_DOC = "open_doc";
  n.MEETING_NOTES = "meeting_notes";
  n.FROM_FEED = "from_feed";
  n.LARK_CREATE = "lark_create";
  n.LARK_SEARCH = "lark_search";
  n.MESSAGE = "message";
  n.PAGES = "pages";
  n.DOC = "doc";
  n.HOME = "home";
  n.APP_CENTER = "app_center";
  n.BREAD_CRUMBS = "bread_crumbs";
  (o = u ||= {})[o.UNDEFINED = 0] = "UNDEFINED";
  o[o.FEED = 1] = "FEED";
  o[o.ANNOUNCE = 2] = "ANNOUNCE";
  o[o.MINUTE = 3] = "MINUTE";
  (a = l ||= {}).UNKNOW = "";
  a.DOCS_FEED = "docs_feed";
  a.OPEN_DOC = "open_doc";
  a.MEETING_NOTES = "meeting_notes";
  (i = s ||= {}).DEFUALT = "";
  i.COMMUNITY = "community";
  let g = browserEnvDetectionUtil.browserDetector.isLark && !browserEnvDetectionUtil.browserDetector.isLKP && !/electron/i.test(navigator.userAgent);
  let b = /SpaceApp/i.test(navigator.userAgent);
  function h(t) {
    if (g) {
      return objectPathGetDefault.getObjectPathDefault(window, ["ShellAPI", "app", "environment", ...(t ? [t] : [])]);
    } else {
      return objectPathGetDefault.getObjectPathDefault(window, ["LARKAPI", "env", ...(t ? [t] : [])]);
    }
  }
  require.d(exports, {
    isSpaceApp: function () {
      return b;
    },
    EntrySource: function () {
      return u;
    },
    DocEntryType: function () {
      return l;
    },
    isLarkWeb: function () {
      return g;
    },
    EntryChannel: function () {
      return c;
    },
    getShellEnv: function () {
      return h;
    },
    AppCommunity: function () {
      return s;
    }
  });
}