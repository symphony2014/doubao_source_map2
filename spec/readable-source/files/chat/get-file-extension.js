// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'getFileExtension'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 256745
         */
module.exports = function (module, exports, require) {
  let i = e => {
    var t;
    var n;
    var i;
    return ((i = (e || "").match(/\.([^.]+)$/)) === null || i === undefined ? undefined : (n = i[1]) === null || n === undefined ? undefined : (t = n.toLowerCase()) === null || t === undefined ? undefined : t.trim()) || "";
  };
  require.d(exports, {
    getFileExtension: function () {
      return i;
    }
  });
}