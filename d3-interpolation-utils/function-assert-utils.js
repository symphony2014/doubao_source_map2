// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'assertFunction'
// - Renamed export 'j' to 'nullableFunc'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 584013
         */
module.exports = function (module, exports, require) {
  function i(t) {
    if (t == null) {
      return null;
    } else {
      return r(t);
    }
  }
  function r(t) {
    if (typeof t != "function") {
      throw Error();
    }
    return t;
  }
  require.d(exports, {
    assertFunction: function () {
      return r;
    },
    nullableFunc: function () {
      return i;
    }
  });
}