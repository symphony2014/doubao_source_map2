// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 371359
         */
module.exports = function (module, exports, require) {
  module.exports = function (e, t, r, n) {
    var i = r ? r.call(n, e, t) : undefined;
    if (i !== undefined) {
      return !!i;
    }
    if (e === t) {
      return true;
    }
    if (typeof e != "object" || !e || typeof t != "object" || !t) {
      return false;
    }
    var o = Object.keys(e);
    var a = Object.keys(t);
    if (o.length !== a.length) {
      return false;
    }
    var s = Object.prototype.hasOwnProperty.bind(t);
    var c = 0;
    for (; c < o.length; c++) {
      var u = o[c];
      if (!s(u)) {
        return false;
      }
      var f = e[u];
      var l = t[u];
      if ((i = r ? r.call(n, f, l, u) : undefined) === false || i === undefined && f !== l) {
        return false;
      }
    }
    return true;
  };
}