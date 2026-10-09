// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Gk' to 'NodeTypeNames'
// - Renamed export 'OR' to 'NodeTypeMap'
// - Renamed export 'kN' to 'NodeTypeCodes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 667054
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var a;
  var i;
  (a = n ||= {}).FOLDER = "folder";
  a.DEFAULT = "default";
  a.SHARE_FOLDERS = "share-folders";
  a.SHARE_FILES = "share-files";
  a.DOC = "doc";
  a.DOCX = "docx";
  a.SYNCED = "sync";
  a.SHEET = "sheet";
  a.SLIDES = "slides";
  a.WHITEBOARD = "whiteboard";
  a.SPREADSHEET = "spreadsheet";
  a.BITABLE = "bitable";
  a.MINDNOTE = "mindnote";
  a.IMPORT = "import";
  a.FILE = "file";
  a.WIKI = "wiki";
  a.WIKI_HOME = "wiki_home";
  a.EXPLORER = "home";
  a.PERSONAL = "personal";
  a.SHARED = "shared";
  a.FAVORITES = "favorites";
  a.TRASH = "trash";
  a.DRIVE = "drive";
  a.CATALOG = "catalog";
  a.DOCS = "docs";
  a.SHEETS = "sheets";
  a.MINDNOTES = "mindnotes";
  a.BASE = "base";
  a.BASE_ADD = "base_add";
  a.RECORD = "record";
  a.ISV = "isv";
  n.DOCS;
  n.DOC;
  n.DOCX;
  n.DOCX;
  n.SYNCED;
  n.SYNCED;
  n.WIKI;
  n.WIKI;
  n.SHEETS;
  n.SHEET;
  n.SLIDES;
  n.SLIDES;
  n.WHITEBOARD;
  n.WHITEBOARD;
  n.MINDNOTES;
  n.MINDNOTE;
  n.BASE;
  n.BITABLE;
  n.RECORD;
  n.RECORD;
  n.BASE_ADD;
  n.BASE_ADD;
  (i = o ||= {})[i.FOLDER = 0] = "FOLDER";
  i[i.DOC = 2] = "DOC";
  i[i.SHEET = 3] = "SHEET";
  i[i.SHARE_FOLDER = 6] = "SHARE_FOLDER";
  i[i.SHARE_FOLDER_LINK = 7] = "SHARE_FOLDER_LINK";
  i[i.BITABLE = 8] = "BITABLE";
  i[i.RECORD = 81] = "RECORD";
  i[i.BASE_ADD = 84] = "BASE_ADD";
  i[i.MINDNOTE = 11] = "MINDNOTE";
  i[i.FILE = 12] = "FILE";
  i[i.WIKI = 16] = "WIKI";
  i[i.ISV = 20] = "ISV";
  i[i.DOCX = 22] = "DOCX";
  i[i.SYNCED = 44] = "SYNCED";
  i[i.SLIDES = 30] = "SLIDES";
  i[i.WHITEBOARD = 38] = "WHITEBOARD";
  i[i.BY_TEMPLATE = 101] = "BY_TEMPLATE";
  i[i.CATALOG = 111] = "CATALOG";
  let c = {
    [o.SHARE_FOLDER]: n.SHARE_FOLDERS,
    [o.FOLDER]: n.FOLDER,
    [o.DOC]: n.DOC,
    [o.DOCX]: n.DOCX,
    [o.SYNCED]: n.SYNCED,
    [o.SLIDES]: n.SLIDES,
    [o.WHITEBOARD]: n.WHITEBOARD,
    [o.SHEET]: n.SHEET,
    [o.BASE_ADD]: n.BASE_ADD,
    [o.BITABLE]: n.BITABLE,
    [o.RECORD]: n.RECORD,
    [o.MINDNOTE]: n.MINDNOTE,
    [o.FILE]: n.FILE,
    [o.WIKI]: n.WIKI,
    [o.ISV]: n.ISV,
    [o.CATALOG]: n.CATALOG
  };
  require.d(exports, {
    NodeTypeNames: function () {
      return n;
    },
    NodeTypeMap: function () {
      return c;
    },
    NodeTypeCodes: function () {
      return o;
    }
  });
}