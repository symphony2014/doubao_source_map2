// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 977272
         */
module.exports = function (module, exports, require) {
  var n = this && this.__spreadArrays || function () {
    var t = 0;
    var e = 0;
    var n = arguments.length;
    for (; e < n; e++) {
      t += arguments[e].length;
    }
    var r = Array(t);
    var i = 0;
    var e = 0;
    for (; e < n; e++) {
      var o = arguments[e];
      var s = 0;
      var a = o.length;
      for (; s < a; s++, i++) {
        r[i] = o[s];
      }
    }
    return r;
  };
  exports.__esModule = true;
  exports.flatten = function (t) {
    if (t) {
      var e = t.slice();
      var r = 0;
      while (r < e.length) {
        if (Array.isArray(e[r])) {
          e.splice.apply(e, n([r, 1], e[r]));
        } else {
          r++;
        }
      }
      return e;
    }
    return t;
  };
}