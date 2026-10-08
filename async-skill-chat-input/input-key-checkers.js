// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'isEnterKey'
// - Renamed export 'T' to 'isBackspaceKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 415984
         */
module.exports = function (module, exports, require) {
  let i = e => e.keyCode === 13 && !e.shiftKey && !e.altKey;
  let r = e => (e.key === "Backspace" || e.keyCode === 8) && !e.altKey && !e.shiftKey;
  require.d(exports, {
    isEnterKey: function () {
      return i;
    },
    isBackspaceKey: function () {
      return r;
    }
  });
}