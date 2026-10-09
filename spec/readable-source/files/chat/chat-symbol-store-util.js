// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'il' to 'getSymbol'
// - Renamed export 'pQ' to 'setSymbols'
// - Renamed export 'qE' to 'hasSymbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 96494
         */
module.exports = function (module, exports, require) {
  let i = {};
  function r(e) {
    for (let t of Object.keys(e)) {
      i[t] = e[t];
    }
  }
  function o(e) {
    return i[e];
  }
  function a(e) {
    return !!i[e];
  }
  require.d(exports, {
    getSymbol: function () {
      return o;
    },
    setSymbols: function () {
      return r;
    },
    hasSymbol: function () {
      return a;
    }
  });
}