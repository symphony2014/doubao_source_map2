// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'first'
// - Renamed export 'y' to 'second'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 222130
         */
module.exports = function (module, exports, require) {
  function i(t) {
    return t[0];
  }
  function r(t) {
    return t[1];
  }
  require.d(exports, {
    first: function () {
      return i;
    },
    second: function () {
      return r;
    }
  });
}