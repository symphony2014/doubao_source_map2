// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W4' to 'supportedTypeIds'
// - Renamed export 'kN' to 'ObjectType'
// - Renamed export 'rz' to 'BasicFileType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 276005
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  (i = {})[i.FOLDER = 0] = "FOLDER";
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
  let a = i;
  (o = {})[o.DOC = 2] = "DOC";
  o[o.SHEET = 3] = "SHEET";
  o[o.BITABLE = 8] = "BITABLE";
  o[o.MINDNOTE = 11] = "MINDNOTE";
  o[o.FILE = 12] = "FILE";
  o[o.WIKI = 16] = "WIKI";
  o[o.ISV = 20] = "ISV";
  o[o.DOCX = 22] = "DOCX";
  o[o.SLIDES = 30] = "SLIDES";
  let u = o;
  let c = [a.DOC, a.DOCX, a.SYNCED, a.SHEET, a.SLIDES, a.BITABLE, a.MINDNOTE, a.FILE, a.WIKI, a.ISV, a.CATALOG, a.BASE_ADD];
  require.d(exports, {
    supportedTypeIds: function () {
      return c;
    },
    ObjectType: function () {
      return a;
    },
    BasicFileType: function () {
      return u;
    }
  });
}