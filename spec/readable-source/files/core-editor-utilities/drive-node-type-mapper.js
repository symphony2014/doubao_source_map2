// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JC' to 'nodeTypeConstants'
// - Renamed export 'O3' to 'driveToNodeMap'
// - Renamed export 'hc' to 'nodeToDriveMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 522665
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var a;
  var i;
  var c;
  var s;
  var driveNodeTypeConstants = require("drive-node-type-constants") /*id: 667054*/;
  var i18nTranslateHelper = require("i18n-translate-helper") /*id: 366664*/;
  (n = i ||= {})[n.USER = 0] = "USER";
  n[n.DOC = 1] = "DOC";
  n[n.FILE = 1] = "FILE";
  n[n.FOLDER = 2] = "FOLDER";
  n[n.SHEET = 3] = "SHEET";
  n[n.SHEET_DOC = 4] = "SHEET_DOC";
  n[n.CHAT = 5] = "CHAT";
  n[n.GROUP = 6] = "GROUP";
  n[n.BLOCK = 7] = "BLOCK";
  n[n.BITABLE = 8] = "BITABLE";
  n[n.TABLE = 9] = "TABLE";
  n[n.INLINE_BLOCK = 10] = "INLINE_BLOCK";
  n[n.MINDNOTE = 11] = "MINDNOTE";
  n[n.BOX = 12] = "BOX";
  n[n.WIKI = 16] = "WIKI";
  n[n.GRID = 17] = "GRID";
  n[n.KANBAN = 18] = "KANBAN";
  n[n.JIRA_FILTER = 19] = "JIRA_FILTER";
  n[n.DOCX = 22] = "DOCX";
  n[n.CATALOG = 111] = "CATALOG";
  n[n.SLIDES = 30] = "SLIDES";
  n[n.WHITEBOARD = 38] = "WHITEBOARD";
  n[n.UNKNOWN = 112] = "UNKNOWN";
  let d = i;
  (o = c ||= {})[o.DOC = 0] = "DOC";
  o[o.DOC_COMMENT = 1] = "DOC_COMMENT";
  o[o.SHEET = 2] = "SHEET";
  o[o.SHEET_COMMENT = 3] = "SHEET_COMMENT";
  o[o.BITABLE = 4] = "BITABLE";
  o[o.OPEN_DOC = 6] = "OPEN_DOC";
  o[o.BOX_COMMENT = 9] = "BOX_COMMENT";
  o[o.MINDNOTE = 10] = "MINDNOTE";
  o[o.MINDNOTE_COMMENT = 11] = "MINDNOTE_COMMENT";
  o[o.DOCX = 22] = "DOCX";
  o[o.SLIDES = 30] = "SLIDES";
  o[o.WHITEBOARD = 38] = "WHITEBOARD";
  (a = s ||= {})[a.LARK = 0] = "LARK";
  d.DOC;
  d.SHEET;
  d.BITABLE;
  d.MINDNOTE;
  d.BOX;
  d.WIKI;
  d.DOCX;
  d.SLIDES;
  d.WHITEBOARD;
  let f = {
    [d.DOC]: driveNodeTypeConstants.NodeTypeCodes.DOC,
    [d.SHEET]: driveNodeTypeConstants.NodeTypeCodes.SHEET,
    [d.BITABLE]: driveNodeTypeConstants.NodeTypeCodes.BITABLE,
    [d.MINDNOTE]: driveNodeTypeConstants.NodeTypeCodes.MINDNOTE,
    [d.BOX]: driveNodeTypeConstants.NodeTypeCodes.FILE,
    [d.WIKI]: driveNodeTypeConstants.NodeTypeCodes.WIKI,
    [d.DOCX]: driveNodeTypeConstants.NodeTypeCodes.DOCX,
    [d.SLIDES]: driveNodeTypeConstants.NodeTypeCodes.SLIDES,
    [d.WHITEBOARD]: driveNodeTypeConstants.NodeTypeCodes.WHITEBOARD,
    [d.CATALOG]: driveNodeTypeConstants.NodeTypeCodes.CATALOG
  };
  let g = {
    [driveNodeTypeConstants.NodeTypeCodes.DOC]: d.DOC,
    [driveNodeTypeConstants.NodeTypeCodes.SHEET]: d.SHEET,
    [driveNodeTypeConstants.NodeTypeCodes.BITABLE]: d.BITABLE,
    [driveNodeTypeConstants.NodeTypeCodes.MINDNOTE]: d.MINDNOTE,
    [driveNodeTypeConstants.NodeTypeCodes.FILE]: d.BOX,
    [driveNodeTypeConstants.NodeTypeCodes.WIKI]: d.WIKI,
    [driveNodeTypeConstants.NodeTypeCodes.DOCX]: d.DOCX,
    [driveNodeTypeConstants.NodeTypeCodes.SLIDES]: d.SLIDES,
    [driveNodeTypeConstants.NodeTypeCodes.WHITEBOARD]: d.WHITEBOARD,
    [driveNodeTypeConstants.NodeTypeCodes.CATALOG]: d.CATALOG
  };
  driveNodeTypeConstants.NodeTypeCodes.DOC;
  c.DOC;
  driveNodeTypeConstants.NodeTypeCodes.SHEET;
  c.SHEET;
  driveNodeTypeConstants.NodeTypeCodes.BITABLE;
  c.BITABLE;
  driveNodeTypeConstants.NodeTypeCodes.MINDNOTE;
  c.MINDNOTE;
  driveNodeTypeConstants.NodeTypeCodes.DOCX;
  c.DOCX;
  driveNodeTypeConstants.NodeTypeCodes.SLIDES;
  c.SLIDES;
  driveNodeTypeConstants.NodeTypeCodes.WHITEBOARD;
  c.WHITEBOARD;
  i18nTranslateHelper.translate("etherpad.server_abnormal");
  i18nTranslateHelper.translate("error.args_error");
  i18nTranslateHelper.translate("error.object_not_found");
  i18nTranslateHelper.translate("error.no_permission");
  i18nTranslateHelper.translate("warn.login_required_tips");
  i18nTranslateHelper.translate("error.request_timeout");
  require.d(exports, {
    nodeTypeConstants: function () {
      return i;
    },
    driveToNodeMap: function () {
      return g;
    },
    nodeToDriveMap: function () {
      return f;
    }
  });
}