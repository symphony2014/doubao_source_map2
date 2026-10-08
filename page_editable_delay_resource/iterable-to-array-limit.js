// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 218283
         */
module.exports = function (module, exports, require) {
  module.exports = function (e, t) {
    var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (n != null) {
      var i;
      var r;
      var o;
      var s;
      var a = [];
      var l = true;
      var u = false;
      try {
        o = (n = n.call(e)).next;
        if (t === 0) {
          if (Object(n) !== n) {
            return;
          }
          l = false;
        } else {
          for (; !(l = (i = o.call(n)).done) && (a.push(i.value), a.length !== t); l = true);
        }
      } catch (e) {
        u = true;
        r = e;
      } finally {
        try {
          if (!l && n.return != null && (s = n.return(), Object(s) !== s)) {
            return;
          }
        } finally {
          if (u) {
            throw r;
          }
        }
      }
      return a;
    }
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}