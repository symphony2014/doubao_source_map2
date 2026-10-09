// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 418188
         */
module.exports = function (module, exports, require) {
  function t(e, t) {
    var r = Array(arguments.length - 1);
    var n = 0;
    var i = 2;
    var s = true;
    while (i < arguments.length) {
      r[n++] = arguments[i++];
    }
    return new Promise(function (i, o) {
      r[n] = function (e) {
        if (s) {
          s = false;
          if (e) {
            o(e);
          } else {
            var t = Array(arguments.length - 1);
            var r = 0;
            while (r < t.length) {
              t[r++] = arguments[r];
            }
            i.apply(null, t);
          }
        }
      };
      try {
        e.apply(t || null, r);
      } catch (e) {
        if (s) {
          s = false;
          o(e);
        }
      }
    });
  }
  module.exports = t;
}