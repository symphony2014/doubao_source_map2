// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 659456
         */
module.exports = function (module, exports, require) {
  module.exports = function (e, t) {
    var r = {};
    var n = Object.keys(e);
    var i = Array.isArray(t);
    var o = 0;
    for (; o < n.length; o++) {
      var a = n[o];
      var s = e[a];
      if (i ? t.indexOf(a) !== -1 : t(a, s, e)) {
        r[a] = s;
      }
    }
    return r;
  };
}