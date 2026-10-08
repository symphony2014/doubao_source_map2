// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'isDocPage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 912796
         */
module.exports = function (module, exports, require) {
  let i = () => {
    var e;
    var t;
    var n;
    return !!((e = location.pathname) === null || e === undefined ? undefined : e.startsWith("/doc/")) || !!((t = location.pathname) === null || t === undefined ? undefined : t.startsWith("/docx/")) || !!((n = location.pathname) === null || n === undefined ? undefined : n.startsWith("/doc-playground/"));
  };
  require.d(exports, {
    isDocPage: function () {
      return i;
    }
  });
}