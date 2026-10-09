// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J7' to 'activeSuggestion'
// - Renamed export 'iH' to 'suggestionConfig'
// - Renamed export 'lS' to 'suggestionType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 72959
         */
module.exports = function (module, exports, require) {
  let o = "clientside-ai-suggestion";
  let i = `${o}-active`;
  let l = {
    mark: true,
    tailInherit: false,
    lineStartInherit: false
  };
  require.d(exports, {
    activeSuggestion: function () {
      return i;
    },
    suggestionConfig: function () {
      return l;
    },
    suggestionType: function () {
      return o;
    }
  });
}