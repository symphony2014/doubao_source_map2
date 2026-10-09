// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Hh' to 'isWordDoc'
// - Renamed export 'Qu' to 'isTextFile'
// - Renamed export 'RJ' to 'isCsvFile'
// - Renamed export 'gq' to 'isAppleDoc'
// - Renamed export 'ht' to 'isPptFile'
// - Renamed export 'oi' to 'isPdfFile'
// - Renamed export 'pp' to 'isArchive'
// - Renamed export 'v4' to 'isMdFile'
// - Renamed export 'wL' to 'isExcelFile'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 165880
         */
module.exports = function (module, exports, require) {
  let i = ["pdf"];
  let n = ["xlsx", "xls", "xlsm"];
  let r = ["doc", "docx", "dot", "dotx"];
  let o = ["ppt", "pptx", "pps", "ppsx", "pot"];
  let s = ["csv"];
  let l = ["txt"];
  let c = ["md"];
  let d = e => i.includes(e);
  let _ = e => n.includes(e);
  let u = e => r.includes(e);
  let p = e => o.includes(e);
  let m = e => s.includes(e);
  let f = e => l.includes(e);
  let h = e => c.includes(e);
  let v = e => ["zip", "rar", "7z", "tar", "gz", "bz2"].includes(e);
  let y = e => ["key", "keynote", "pages", "numbers", "rtf"].includes(e);
  require.d(exports, {
    isWordDoc: function () {
      return u;
    },
    isTextFile: function () {
      return f;
    },
    isCsvFile: function () {
      return m;
    },
    isAppleDoc: function () {
      return y;
    },
    isPptFile: function () {
      return p;
    },
    isPdfFile: function () {
      return d;
    },
    isArchive: function () {
      return v;
    },
    isMdFile: function () {
      return h;
    },
    isExcelFile: function () {
      return _;
    }
  });
}