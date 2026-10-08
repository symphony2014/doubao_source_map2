// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'HookPhase'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52853.7f831412.js
         * chunkId: 52853
         * moduleId: 385853
         */
module.exports = function (module, exports, require) {
  var i = {
    BeforeAll: -2,
    Before: -1,
    Normal: 0,
    After: 1,
    AfterAll: 2
  };
  require.d(exports, {
    HookPhase: function () {
      return i;
    }
  });
}