// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'stripExtension'
// - Renamed export 'l' to 'getFileExt'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 717701
         */
module.exports = function (module, exports, require) {
  function n(t) {
    let e = String(t).split(".");
    if (e.length > 1) {
      e.pop();
    }
    return e.join(".");
  }
  function o(t) {
    let e = String(t).split(".").pop();
    if (e && e !== t) {
      return e.toLowerCase();
    } else {
      return "";
    }
  }
  require.d(exports, {
    stripExtension: function () {
      return n;
    },
    getFileExt: function () {
      return o;
    }
  });
}