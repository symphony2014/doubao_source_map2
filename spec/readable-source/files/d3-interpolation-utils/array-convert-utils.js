// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'toArray'
// - Renamed export 't' to 'slice'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 30870
         */
module.exports = function (module, exports, require) {
  var i = Array.prototype.slice;
  function r(t) {
    if (typeof t == "object" && "length" in t) {
      return t;
    } else {
      return Array.from(t);
    }
  }
  require.d(exports, {
    toArray: function () {
      return r;
    },
    slice: function () {
      return i;
    }
  });
}