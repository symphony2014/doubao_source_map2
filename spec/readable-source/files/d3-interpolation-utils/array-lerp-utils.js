// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'arrayLerp'
// - Renamed export 'v' to 'isTypedArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 708919
         */
module.exports = function (module, exports, require) {
  function i(t, n) {
    n ||= [];
    var e;
    var i = t ? Math.min(n.length, t.length) : 0;
    var r = n.slice();
    return function (o) {
      for (e = 0; e < i; ++e) {
        r[e] = t[e] * (1 - o) + n[e] * o;
      }
      return r;
    };
  }
  function r(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
  }
  require.d(exports, {
    arrayLerp: function () {
      return i;
    },
    isTypedArray: function () {
      return r;
    }
  });
}