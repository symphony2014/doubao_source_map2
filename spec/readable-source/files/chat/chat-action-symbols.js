// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'fetchAnswerSymbol'
// - Renamed export 'X' to 'queryBroadcastSym'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 696389
         */
module.exports = function (module, exports, require) {
  let i = Symbol("FetchAnwser");
  let r = Symbol("QueryBroadcast");
  require.d(exports, {
    fetchAnswerSymbol: function () {
      return i;
    },
    queryBroadcastSym: function () {
      return r;
    }
  });
}