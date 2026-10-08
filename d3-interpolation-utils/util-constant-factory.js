// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'returnZero'
// - Renamed export 'Z' to 'createConstant'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 790932
         */
module.exports = function (module, exports, require) {
  function i() {
    return 0;
  }
  function r(t) {
    return function () {
      return t;
    };
  }
  require.d(exports, {
    returnZero: function () {
      return i;
    },
    createConstant: function () {
      return r;
    }
  });
}