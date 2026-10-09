// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'setContent'
// - Renamed export 'I' to 'getContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 524020
         */
module.exports = function (module, exports, require) {
  let i = "";
  let r = e => {
    i = e;
  };
  let o = e => e && i.length > 300 ? i.slice(0, 300) : i;
  require.d(exports, {
    setContent: function () {
      return r;
    },
    getContent: function () {
      return o;
    }
  });
}