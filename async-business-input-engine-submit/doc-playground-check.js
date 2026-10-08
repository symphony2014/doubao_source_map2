// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'isDocPlayground'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 993680
         */
module.exports = function (module, exports, require) {
  let i = () => typeof window != "undefined" && location.pathname.includes("/doc-playground");
  require.d(exports, {
    isDocPlayground: function () {
      return i;
    }
  });
}