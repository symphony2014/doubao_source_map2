// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I2' to 'resourceNodeTypes'
// - Renamed export 'NV' to 'permissionLevels'
// - Renamed export 'qB' to 'fileCategories'
// - Renamed export 'xe' to 'sortTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 602816
         */
module.exports = function (module, exports, require) {
  var n;
  var a;
  var r;
  var o;
  (n = {})[n.private = 1] = "private";
  n[n.public = 4] = "public";
  n[n.publicEditable = 5] = "publicEditable";
  let s = n;
  (a = {})[a.All = 0] = "All";
  a[a.Doc = 1] = "Doc";
  a[a.Pic = 2] = "Pic";
  a[a.Media = 3] = "Media";
  a[a.Sheet = 4] = "Sheet";
  a[a.PPT = 5] = "PPT";
  a[a.Archive = 8] = "Archive";
  a[a.Other = 100] = "Other";
  let l = a;
  (r = {})[r.Dir = 0] = "Dir";
  r[r.Docx = 22] = "Docx";
  r[r.Slides = 30] = "Slides";
  r[r.File = 12] = "File";
  r[r.Url = 123] = "Url";
  r[r.CodeDir = 124] = "CodeDir";
  let c = r;
  (o = {})[o.VisitTime = 6] = "VisitTime";
  o[o.EditTime = 7] = "EditTime";
  let d = o;
  require.d(exports, {
    resourceNodeTypes: function () {
      return c;
    },
    permissionLevels: function () {
      return s;
    },
    fileCategories: function () {
      return l;
    },
    sortTypes: function () {
      return d;
    }
  });
}