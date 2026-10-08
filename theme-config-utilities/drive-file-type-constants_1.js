// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AQ' to 'maxWidth'
// - Renamed export 'JC' to 'FileType'
// - Renamed export 'O3' to 'driveToFileTypeMap'
// - Renamed export 'V4' to 'supportedFileTypes'
// - Renamed export 'hc' to 'fileTypeToDriveMap'
// - Renamed export 'nM' to 'errorMessages'
// - Renamed export 'qD' to 'driveToCommentTypeMap'
// - Renamed export 'rq' to 'minWidth'
// - Renamed export 'wy' to 'PlatformType'
// - Renamed export 'zo' to 'CommentType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 944521
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var a;
  var i;
  var c;
  var u;
  var driveFileTypeConstants = require("drive-file-type-constants") /*id: 216771*/;
  var i18nTranslateUtil = require("i18n-translate-util") /*id: 38843*/;
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
  let f = i;
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
  (a = u ||= {})[a.LARK = 0] = "LARK";
  let d = [f.DOC, f.SHEET, f.BITABLE, f.MINDNOTE, f.BOX, f.WIKI, f.DOCX, f.SLIDES, f.WHITEBOARD];
  let g = {
    [f.DOC]: driveFileTypeConstants.fileTypeEnum.DOC,
    [f.SHEET]: driveFileTypeConstants.fileTypeEnum.SHEET,
    [f.BITABLE]: driveFileTypeConstants.fileTypeEnum.BITABLE,
    [f.MINDNOTE]: driveFileTypeConstants.fileTypeEnum.MINDNOTE,
    [f.BOX]: driveFileTypeConstants.fileTypeEnum.FILE,
    [f.WIKI]: driveFileTypeConstants.fileTypeEnum.WIKI,
    [f.DOCX]: driveFileTypeConstants.fileTypeEnum.DOCX,
    [f.SLIDES]: driveFileTypeConstants.fileTypeEnum.SLIDES,
    [f.WHITEBOARD]: driveFileTypeConstants.fileTypeEnum.WHITEBOARD,
    [f.CATALOG]: driveFileTypeConstants.fileTypeEnum.CATALOG
  };
  let b = {
    [driveFileTypeConstants.fileTypeEnum.DOC]: f.DOC,
    [driveFileTypeConstants.fileTypeEnum.SHEET]: f.SHEET,
    [driveFileTypeConstants.fileTypeEnum.BITABLE]: f.BITABLE,
    [driveFileTypeConstants.fileTypeEnum.MINDNOTE]: f.MINDNOTE,
    [driveFileTypeConstants.fileTypeEnum.FILE]: f.BOX,
    [driveFileTypeConstants.fileTypeEnum.WIKI]: f.WIKI,
    [driveFileTypeConstants.fileTypeEnum.DOCX]: f.DOCX,
    [driveFileTypeConstants.fileTypeEnum.SLIDES]: f.SLIDES,
    [driveFileTypeConstants.fileTypeEnum.WHITEBOARD]: f.WHITEBOARD,
    [driveFileTypeConstants.fileTypeEnum.CATALOG]: f.CATALOG
  };
  let h = {
    [driveFileTypeConstants.fileTypeEnum.DOC]: c.DOC,
    [driveFileTypeConstants.fileTypeEnum.SHEET]: c.SHEET,
    [driveFileTypeConstants.fileTypeEnum.BITABLE]: c.BITABLE,
    [driveFileTypeConstants.fileTypeEnum.MINDNOTE]: c.MINDNOTE,
    [driveFileTypeConstants.fileTypeEnum.DOCX]: c.DOCX,
    [driveFileTypeConstants.fileTypeEnum.SLIDES]: c.SLIDES,
    [driveFileTypeConstants.fileTypeEnum.WHITEBOARD]: c.WHITEBOARD
  };
  let p = {
    1: i18nTranslateUtil.t("etherpad.server_abnormal"),
    2: i18nTranslateUtil.t("error.args_error"),
    3: i18nTranslateUtil.t("error.object_not_found"),
    4: i18nTranslateUtil.t("error.no_permission"),
    5: i18nTranslateUtil.t("warn.login_required_tips"),
    6: i18nTranslateUtil.t("error.request_timeout")
  };
  let w = 420;
  let _ = 390;
  require.d(exports, {
    maxWidth: function () {
      return _;
    },
    FileType: function () {
      return i;
    },
    driveToFileTypeMap: function () {
      return b;
    },
    supportedFileTypes: function () {
      return d;
    },
    fileTypeToDriveMap: function () {
      return g;
    },
    errorMessages: function () {
      return p;
    },
    driveToCommentTypeMap: function () {
      return h;
    },
    minWidth: function () {
      return w;
    },
    PlatformType: function () {
      return u;
    },
    CommentType: function () {
      return c;
    }
  });
}