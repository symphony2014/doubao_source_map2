// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Vi' to 'ViewMode'
// - Renamed export 'o9' to 'UiActions'
// - Renamed export 'qN' to 'ZoomMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 636769
         */
module.exports = function (module, exports, require) {
  var n;
  var r;
  var i;
  (n = {}).crop = "crop";
  n.translate = "translate";
  n.downloadTranslation = "downloadTranslation";
  n.toolbar = "toolbar";
  let l = n;
  (r = {})[r.Hidden = 0] = "Hidden";
  r[r.Page = 1] = "Page";
  r[r.TextOutline = 2] = "TextOutline";
  r[r.ImageOutline = 3] = "ImageOutline";
  let o = r;
  (i = {}).Auto = "auto";
  i.PageHeight = "page-height";
  i.PageWidth = "page-width";
  i.PageActual = "page-actual";
  let s = i;
  require.d(exports, {
    ViewMode: function () {
      return o;
    },
    UiActions: function () {
      return l;
    },
    ZoomMode: function () {
      return s;
    }
  });
}