// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'getValue'
// - Renamed export 'Z' to 'setValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 749482
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
    getValue: function () {
      return o;
    },
    setValue: function () {
      return r;
    }
  });
}