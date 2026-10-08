// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$U' to 'nodeTypeToCodeMap'
// - Renamed export 'Gk' to 'nodeTypeStrings'
// - Renamed export 'HA' to 'nodeTypeCodes'
// - Renamed export '_j' to 'pluralToSingularMap'
// - Renamed export 'bU' to 'whiteboardResourceTypes'
// - Renamed export 'ii' to 'nodeTypeToNumericMap'
// - Renamed export 'ps' to 'apiServiceNames'
// - Renamed export 'ul' to 'validPathPrefixes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 702441
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
  var driveNodeTypeConstants = require("drive-node-type-constants") /*id: 667054*/;
  var resourceTypeEnum = require("resource-type-enum") /*id: 342261*/;
  (n = c ||= {}).FOLDER = "folder";
  n.DEFAULT = "default";
  n.SHARE_FOLDERS = "share-folders";
  n.SHARE_FILES = "share-files";
  n.DOC = "doc";
  n.SHEET = "sheet";
  n.SPREADSHEET = "spreadsheet";
  n.BITABLE = "bitable";
  n.MINDNOTE = "mindnote";
  n.IMPORT = "import";
  n.FILE = "file";
  n.WIKI = "wiki";
  n.WIKI_HOME = "wiki_home";
  n.EXPLORER = "home";
  n.DRIVE = "drive";
  n.DOCS = "docs";
  n.DOCX = "docx";
  n.SLIDES = "slides";
  n.WHITEBOARD = "whiteboard";
  n.SHEETS = "sheets";
  n.MINDNOTES = "mindnotes";
  n.BASE = "base";
  n.ISV = "isv";
  (o = s ||= {})[o.DOC = 1] = "DOC";
  o[o.SUITE_DOC = 2] = "SUITE_DOC";
  o[o.SHEET = 3] = "SHEET";
  o[o.BITABLE = 8] = "BITABLE";
  o[o.MINDNOTE = 11] = "MINDNOTE";
  o[o.FILE = 12] = "FILE";
  o[o.WIKI = 16] = "WIKI";
  o[o.DOCX = 22] = "DOCX";
  o[o.SLIDES = 30] = "SLIDES";
  o[o.WHITEBOARD = 38] = "WHITEBOARD";
  (a = l ||= {})[a.ALL = 101] = "ALL";
  a[a.DOC = 102] = "DOC";
  a[a.SHEET = 103] = "SHEET";
  (i = u ||= {})[i.FOLDER = 0] = "FOLDER";
  i[i.SHARE_FOLDER = 6] = "SHARE_FOLDER";
  i[i.SHARE_FOLDER_LINK = 7] = "SHARE_FOLDER_LINK";
  let g = {
    [c.FOLDER]: driveNodeTypeConstants.NodeTypeCodes.FOLDER,
    [c.DOC]: driveNodeTypeConstants.NodeTypeCodes.DOC,
    [c.DOCS]: driveNodeTypeConstants.NodeTypeCodes.DOC,
    [c.SHEET]: driveNodeTypeConstants.NodeTypeCodes.SHEET,
    [c.SHEETS]: driveNodeTypeConstants.NodeTypeCodes.SHEET,
    [c.SLIDES]: driveNodeTypeConstants.NodeTypeCodes.SLIDES,
    [c.WHITEBOARD]: driveNodeTypeConstants.NodeTypeCodes.WHITEBOARD,
    [c.SPREADSHEET]: driveNodeTypeConstants.NodeTypeCodes.SHEET,
    [c.BITABLE]: driveNodeTypeConstants.NodeTypeCodes.BITABLE,
    [c.BASE]: driveNodeTypeConstants.NodeTypeCodes.BITABLE,
    [c.MINDNOTE]: driveNodeTypeConstants.NodeTypeCodes.MINDNOTE,
    [c.MINDNOTES]: driveNodeTypeConstants.NodeTypeCodes.MINDNOTE,
    [c.FILE]: driveNodeTypeConstants.NodeTypeCodes.FILE,
    [c.WIKI]: driveNodeTypeConstants.NodeTypeCodes.WIKI,
    [c.ISV]: driveNodeTypeConstants.NodeTypeCodes.ISV,
    [c.DOCX]: driveNodeTypeConstants.NodeTypeCodes.DOCX
  };
  let b = {
    [c.DOC]: s.DOC,
    [c.DOCS]: s.DOC,
    [c.SHEET]: s.SHEET,
    [c.SHEETS]: s.SHEET,
    [c.SLIDES]: s.SLIDES,
    [c.WHITEBOARD]: s.WHITEBOARD,
    [c.SPREADSHEET]: s.SHEET,
    [c.BITABLE]: s.BITABLE,
    [c.BASE]: s.BITABLE,
    [c.MINDNOTE]: s.MINDNOTE,
    [c.MINDNOTES]: s.MINDNOTE,
    [c.WIKI]: s.WIKI,
    [c.DOCX]: s.DOCX,
    [c.FILE]: s.FILE
  };
  let p = Object.values(Object.assign({
    DOCX: "docx",
    FILE: "file",
    WIKI: "wiki",
    FOLDER: "folder",
    TRASH: "trash",
    SHARE_FILES: "share-files",
    SHARE_FOLDERS: "share-folder",
    DRIVE_PREFIX: "drive",
    SPACE_PREFIX: "space",
    WORK_SPACE: "workspace"
  }, {
    DOC: "docs",
    SHEET: "sheets",
    SLIDES: "slides",
    WHITEBOARD: "whiteboard",
    MINDNOTE: "mindnotes",
    BITABLE: "base",
    DOC_OLD: "doc",
    SHEET_OLD: "sheet",
    MINDNOTE_OLD: "mindnote",
    BITABLE_OLD: "bitable"
  }));
  let h = [resourceTypeEnum.ResourceType.WHITEBOARD];
  let m = {
    [c.DOCS]: c.DOC,
    [c.SHEETS]: c.SHEET,
    [c.SLIDES]: c.SLIDES,
    [c.WHITEBOARD]: c.WHITEBOARD,
    [c.MINDNOTES]: c.MINDNOTE,
    [c.BASE]: c.BITABLE
  };
  let w = {
    GET_ICON: "ccm_suite_url_parser_get_icon_dev",
    GET_METAS: "ccm_suite_url_parser_get_metas_dev",
    PARSE_TEXT: "ccm_suite_url_parser_parse_text_dev",
    PARSE_URL: "ccm_suite_url_parser_parse_url_dev",
    REQUEST_BATCH: "ccm_suite_url_parser_request_batch_dev",
    REQUEST_META: "ccm_suite_url_parser_request_meta_dev"
  };
  require.d(exports, {
    nodeTypeToCodeMap: function () {
      return g;
    },
    nodeTypeStrings: function () {
      return c;
    },
    nodeTypeCodes: function () {
      return s;
    },
    pluralToSingularMap: function () {
      return m;
    },
    whiteboardResourceTypes: function () {
      return h;
    },
    nodeTypeToNumericMap: function () {
      return b;
    },
    apiServiceNames: function () {
      return w;
    },
    validPathPrefixes: function () {
      return p;
    }
  });
}