// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'inherits'
// - Renamed export 'l' to 'createObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 801036
         */
module.exports = function (module, exports, require) {
  function i(t, n, e) {
    t.prototype = n.prototype = e;
    e.constructor = t;
  }
  function r(t, n) {
    var e = Object.create(t.prototype);
    for (var i in n) {
      e[i] = n[i];
    }
    return e;
  }
  require.d(exports, {
    inherits: function () {
      return i;
    },
    createObject: function () {
      return r;
    }
  });
}