// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$w' to 'attachmentStatus'
// - Renamed export 'f8' to 'themeMode'
// - Renamed export 'i4' to 'viewType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17043.439c2bd3.js
         * chunkId: 17043
         * moduleId: 211377
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var r;
  (n = {}).LIGHT = "light";
  n.DARK = "dark";
  let s = n;
  (o = {})[o.RECT = 1] = "RECT";
  o[o.OLD = 2] = "OLD";
  o[o.FULL = 3] = "FULL";
  o[o.TEXT = 4] = "TEXT";
  let l = o;
  (r = {}).DELETED = "attachment_deleted";
  r.CHECKING = "attachment_dlp_checking";
  r.SENSITIVE = "attachment_sensitive";
  r.NOT_SENSITIVE = "attachment_not_sensitive";
  r.UNKNOWN = "unknown";
  let a = r;
  require.d(exports, {
    attachmentStatus: function () {
      return a;
    },
    themeMode: function () {
      return s;
    },
    viewType: function () {
      return l;
    }
  });
}