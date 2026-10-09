// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 415792
         */
module.exports = function (module, exports, require) {
  var n;
  var a;
  var r;
  (n = {})[n.AISpace = 1] = "AISpace";
  let o = n;
  (a = {})[a.Init = 0] = "Init";
  a[a.Processing = 1] = "Processing";
  a[a.Enable = 2] = "Enable";
  a[a.Disable = 3] = "Disable";
  let s = a;
  (r = {})[r.Pdf = 1] = "Pdf";
  r[r.LinearPdf = 2] = "LinearPdf";
  r[r.ExcelHtml = 3] = "ExcelHtml";
  r[r.Cover = 4] = "Cover";
  r[r.Image = 5] = "Image";
  r[r.Text = 6] = "Text";
  r[r.Archive = 7] = "Archive";
  let l = r;
  require.r(exports);
  require.d(exports, {
    PreviewScene: function () {
      return o;
    },
    PreviewStatus: function () {
      return s;
    },
    PreviewType: function () {
      return l;
    }
  });
}