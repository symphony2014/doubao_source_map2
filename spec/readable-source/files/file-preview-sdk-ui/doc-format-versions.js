// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'gf' to 'formatVersions'
// - Renamed export 'uk' to 'pdfVersion'
// - Renamed export 'w' to 'excelVersion'
// - Renamed export 'xt' to 'libVersion'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17043.439c2bd3.js
         * chunkId: 17043
         * moduleId: 226762
         */
module.exports = function (module, exports, require) {
  var n = "v0-2";
  var o = "v2-6-15";
  var r = "v4-7-3";
  var s = {
    md: "v2-0-2",
    csv: "v2-0-2",
    code: "v2-0-2",
    txt: "v2-0-2",
    excel: r,
    pdf: o,
    lib: n
  };
  require.d(exports, {
    formatVersions: function () {
      return s;
    },
    pdfVersion: function () {
      return o;
    },
    excelVersion: function () {
      return r;
    },
    libVersion: function () {
      return n;
    }
  });
}