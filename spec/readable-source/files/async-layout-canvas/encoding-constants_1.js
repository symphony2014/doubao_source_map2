// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Kn' to 'getDefaultEncoding'
// - Renamed export 'xf' to 'getEncodingList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 486263
         */
module.exports = function (module, exports, require) {
  let i = "UTF-8";
  let r = ["UTF-8", "GBK", "GB2312", "ISO-8859-1", "ASCII", "UTF-16"];
  require.d(exports, {
    getDefaultEncoding: function () {
      return i;
    },
    getEncodingList: function () {
      return r;
    }
  });
}