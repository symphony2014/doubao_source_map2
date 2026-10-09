// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'cC' to 'isLarkEnvironment'
// - Renamed export 'jS' to 'getAppEnvironment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 222336
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var a;
  var i;
  var c;
  var s;
  var l;
  var u;
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
  (o = s ||= {})[o.UNDEFINED = 0] = "UNDEFINED";
  o[o.FEED = 1] = "FEED";
  o[o.ANNOUNCE = 2] = "ANNOUNCE";
  o[o.MINUTE = 3] = "MINUTE";
  (a = l ||= {}).UNKNOW = "";
  a.DOCS_FEED = "docs_feed";
  a.OPEN_DOC = "open_doc";
  a.MEETING_NOTES = "meeting_notes";
  (i = u ||= {}).DEFUALT = "";
  i.COMMUNITY = "community";
  let g = browserEnvDetectionUtil.browserDetector.isLark && !browserEnvDetectionUtil.browserDetector.isLKP && !/electron/i.test(navigator.userAgent);
  function b(e) {
    if (g) {
      return objectPathGetDefault.getObjectPathDefault(window, ["ShellAPI", "app", "environment", ...(e ? [e] : [])]);
    } else {
      return objectPathGetDefault.getObjectPathDefault(window, ["LARKAPI", "env", ...(e ? [e] : [])]);
    }
  }
  /SpaceApp/i.test(navigator.userAgent);
  require.d(exports, {
    isLarkEnvironment: function () {
      return g;
    },
    getAppEnvironment: function () {
      return b;
    }
  });
}