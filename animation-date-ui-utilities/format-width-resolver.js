// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 412266
         */
module.exports = function (module, exports, require) {
  exports.default = function (e) {
    return function (t, n) {
      var a;
      if ((n != null && n.context ? String(n.context) : "standalone") === "formatting" && e.formattingValues) {
        var r = e.defaultFormattingWidth || e.defaultWidth;
        var i = n != null && n.width ? String(n.width) : r;
        a = e.formattingValues[i] || e.formattingValues[r];
      } else {
        var o = e.defaultWidth;
        var s = n != null && n.width ? String(n.width) : e.defaultWidth;
        a = e.values[s] || e.values[o];
      }
      return a[e.argumentCallback ? e.argumentCallback(t) : t];
    };
  };
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}