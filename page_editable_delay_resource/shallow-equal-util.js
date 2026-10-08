// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'shallowEqual'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 181980
         */
module.exports = function (module, exports, require) {
  function i(e, t) {
    if (e === t) {
      return true;
    }
    if (!e || !t) {
      return false;
    }
    var n = Object.keys(e);
    var i = Object.keys(t);
    var r = n.length;
    if (i.length !== r) {
      return false;
    }
    for (var o = 0; o < r; o++) {
      var s = n[o];
      if (e[s] !== t[s] || !Object.prototype.hasOwnProperty.call(t, s)) {
        return false;
      }
    }
    return true;
  }
  require.d(exports, {
    shallowEqual: function () {
      return i;
    }
  });
}