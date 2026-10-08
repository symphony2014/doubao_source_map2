// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dh' to 'linkEventTypes'
// - Renamed export 'SP' to 'panelFeatureTypes'
// - Renamed export 'Yh' to 'featureTypeMap'
// - Renamed export 'ZR' to 'blockFeatureTypes'
// - Renamed export 'iX' to 'panelBlockTypes'
// - Renamed export 'kl' to 'panelActionTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_link-transform-queue.7e909584.js
         * chunkId: 1321
         * moduleId: 129678
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var r;
  var l;
  var a;
  var s;
  (o = {}).preProcessLink = "preProcessLink";
  o.postProcessLink = "postProcessLink";
  o.linkToViewHandler = "linkToViewHandler";
  let c = o;
  (i = {}).preProcessLinkPanel = "preProcessLinkPanel";
  i.getMenuConfig = "getMenuConfig";
  i.handleMenuItemClick = "handleMenuItemClick";
  let d = i;
  (r = {})[r.TASK = 10] = "TASK";
  r[r.OKRX = 20] = "OKRX";
  r[r.TASK_LIST = 30] = "TASK_LIST";
  r[r.CALENDAR = 40] = "CALENDAR";
  r[r.ISV = 50] = "ISV";
  r[r.TEXTUAL = 60] = "TEXTUAL";
  r[r.MESSAGE = 70] = "MESSAGE";
  r[r.BOOKMARK = 80] = "BOOKMARK";
  r[r.IFRAME = 90] = "IFRAME";
  r[r.JIRA_ISSUE = 100] = "JIRA_ISSUE";
  r[r.JIRA_FILTER = 110] = "JIRA_FILTER";
  r[r.URL_PREVIEW = 120] = "URL_PREVIEW";
  r[r.SYNCED_REFERENCE = 130] = "SYNCED_REFERENCE";
  let u = r;
  (l = {})[l.CALENDAR = 10] = "CALENDAR";
  l[l.ISV = 20] = "ISV";
  l[l.BOOKMARK = 30] = "BOOKMARK";
  l[l.IFRAME = 40] = "IFRAME";
  l[l.BITABLE = 50] = "BITABLE";
  let h = l;
  (a = {})[a.TASK = 10] = "TASK";
  a[a.TASK_LIST = 20] = "TASK_LIST";
  a[a.BITABLE = 21] = "BITABLE";
  a[a.TEXTUAL = 30] = "TEXTUAL";
  a[a.SYNCED_REFERENCE = 40] = "SYNCED_REFERENCE";
  a[a.JIRA_ISSUE = 50] = "JIRA_ISSUE";
  a[a.URL_PREVIEW = 60] = "URL_PREVIEW";
  a[a.MESSAGE = 70] = "MESSAGE";
  a[a.OKRX = 80] = "OKRX";
  a[a.BOOKMARK = 90] = "BOOKMARK";
  a[a.IFRAME = 100] = "IFRAME";
  a[a.ISV = 110] = "ISV";
  a[a.JIRA_FILTER = 120] = "JIRA_FILTER";
  a[a.CALENDAR = 130] = "CALENDAR";
  let p = a;
  (s = {})[s.IFRAME = 10] = "IFRAME";
  s[s.BOOKMARK = 20] = "BOOKMARK";
  s[s.ISV = 30] = "ISV";
  s[s.MEEGO = 40] = "MEEGO";
  s[s.BITABLE = 50] = "BITABLE";
  s[s.CALENDAR = 60] = "CALENDAR";
  s[s.JIRA_FILTER = 70] = "JIRA_FILTER";
  s[s.SYNCED_REFERENCE = 80] = "SYNCED_REFERENCE";
  let k = s;
  require.d(exports, {
    linkEventTypes: function () {
      return c;
    },
    panelFeatureTypes: function () {
      return h;
    },
    featureTypeMap: function () {
      return p;
    },
    blockFeatureTypes: function () {
      return u;
    },
    panelBlockTypes: function () {
      return k;
    },
    panelActionTypes: function () {
      return d;
    }
  });
}