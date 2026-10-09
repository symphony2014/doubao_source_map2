// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CZ' to 'copilotSearch'
// - Renamed export 'Fq' to 'copilotBase'
// - Renamed export 'OE' to 'copilotContainer'
// - Renamed export 'Re' to 'copilotChat'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 753500
         */
module.exports = function (module, exports, require) {
  let o = "copilot-comp";
  let i = `${o}__container`;
  let l = `${i}_ai-chat`;
  let c = `${i}_ai-chat_search`;
  require.d(exports, {
    copilotSearch: function () {
      return c;
    },
    copilotBase: function () {
      return o;
    },
    copilotContainer: function () {
      return i;
    },
    copilotChat: function () {
      return l;
    }
  });
}