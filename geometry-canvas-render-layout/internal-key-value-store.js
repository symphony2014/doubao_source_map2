// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'getItem'
// - Renamed export 'l' to 'setItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 989433
         */
module.exports = function (module, exports, require) {
  var i = {};
  function r(t, e) {
    i[t] = e;
  }
  function o(t) {
    return i[t];
  }
  require.d(exports, {
    getItem: function () {
      return o;
    },
    setItem: function () {
      return r;
    }
  });
}