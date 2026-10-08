// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Gk' to 'nodeTypeConstants'
// - Renamed export 'IX' to 'defaultDocExt'
// - Renamed export 'K4' to 'xlsxExt'
// - Renamed export 'OR' to 'enumToConstMap'
// - Renamed export 'PA' to 'csvExt'
// - Renamed export 'RW' to 'mindMapExt'
// - Renamed export '_j' to 'pluralToSingularMap'
// - Renamed export 'dA' to 'xmindExt'
// - Renamed export 'dB' to 'docxExt'
// - Renamed export 'jN' to 'mdExt'
// - Renamed export 'kN' to 'fileTypeEnum'
// - Renamed export 'mM' to 'xlsExt'
// - Renamed export 'zQ' to 'opmlExt'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 216771
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var s;
  (o = r ||= {}).FOLDER = "folder";
  o.DEFAULT = "default";
  o.SHARE_FOLDERS = "share-folders";
  o.SHARE_FILES = "share-files";
  o.DOC = "doc";
  o.DOCX = "docx";
  o.SYNCED = "sync";
  o.SHEET = "sheet";
  o.SLIDES = "slides";
  o.WHITEBOARD = "whiteboard";
  o.SPREADSHEET = "spreadsheet";
  o.BITABLE = "bitable";
  o.MINDNOTE = "mindnote";
  o.IMPORT = "import";
  o.FILE = "file";
  o.WIKI = "wiki";
  o.WIKI_HOME = "wiki_home";
  o.EXPLORER = "home";
  o.PERSONAL = "personal";
  o.SHARED = "shared";
  o.FAVORITES = "favorites";
  o.TRASH = "trash";
  o.DRIVE = "drive";
  o.CATALOG = "catalog";
  o.DOCS = "docs";
  o.SHEETS = "sheets";
  o.MINDNOTES = "mindnotes";
  o.BASE = "base";
  o.BASE_ADD = "base_add";
  o.RECORD = "record";
  o.ISV = "isv";
  let a = {
    [r.DOCS]: r.DOC,
    [r.DOCX]: r.DOCX,
    [r.SYNCED]: r.SYNCED,
    [r.WIKI]: r.WIKI,
    [r.SHEETS]: r.SHEET,
    [r.SLIDES]: r.SLIDES,
    [r.WHITEBOARD]: r.WHITEBOARD,
    [r.MINDNOTES]: r.MINDNOTE,
    [r.BASE]: r.BITABLE,
    [r.RECORD]: r.RECORD,
    [r.BASE_ADD]: r.BASE_ADD
  };
  (s = i ||= {})[s.FOLDER = 0] = "FOLDER";
  s[s.DOC = 2] = "DOC";
  s[s.SHEET = 3] = "SHEET";
  s[s.SHARE_FOLDER = 6] = "SHARE_FOLDER";
  s[s.SHARE_FOLDER_LINK = 7] = "SHARE_FOLDER_LINK";
  s[s.BITABLE = 8] = "BITABLE";
  s[s.RECORD = 81] = "RECORD";
  s[s.BASE_ADD = 84] = "BASE_ADD";
  s[s.MINDNOTE = 11] = "MINDNOTE";
  s[s.FILE = 12] = "FILE";
  s[s.WIKI = 16] = "WIKI";
  s[s.ISV = 20] = "ISV";
  s[s.DOCX = 22] = "DOCX";
  s[s.SYNCED = 44] = "SYNCED";
  s[s.SLIDES = 30] = "SLIDES";
  s[s.WHITEBOARD = 38] = "WHITEBOARD";
  s[s.BY_TEMPLATE = 101] = "BY_TEMPLATE";
  s[s.CATALOG = 111] = "CATALOG";
  let u = {
    [i.SHARE_FOLDER]: r.SHARE_FOLDERS,
    [i.FOLDER]: r.FOLDER,
    [i.DOC]: r.DOC,
    [i.DOCX]: r.DOCX,
    [i.SYNCED]: r.SYNCED,
    [i.SLIDES]: r.SLIDES,
    [i.WHITEBOARD]: r.WHITEBOARD,
    [i.SHEET]: r.SHEET,
    [i.BASE_ADD]: r.BASE_ADD,
    [i.BITABLE]: r.BITABLE,
    [i.RECORD]: r.RECORD,
    [i.MINDNOTE]: r.MINDNOTE,
    [i.FILE]: r.FILE,
    [i.WIKI]: r.WIKI,
    [i.ISV]: r.ISV,
    [i.CATALOG]: r.CATALOG
  };
  let c = "doc";
  let l = "docx";
  let p = "xlsx";
  let h = "xls";
  let f = "csv";
  let d = "xmind";
  let v = "mm";
  let y = "opml";
  let g = "md";
  require.d(exports, {
    nodeTypeConstants: function () {
      return r;
    },
    defaultDocExt: function () {
      return c;
    },
    xlsxExt: function () {
      return p;
    },
    enumToConstMap: function () {
      return u;
    },
    csvExt: function () {
      return f;
    },
    mindMapExt: function () {
      return v;
    },
    pluralToSingularMap: function () {
      return a;
    },
    xmindExt: function () {
      return d;
    },
    docxExt: function () {
      return l;
    },
    mdExt: function () {
      return g;
    },
    fileTypeEnum: function () {
      return i;
    },
    xlsExt: function () {
      return h;
    },
    opmlExt: function () {
      return y;
    }
  });
}