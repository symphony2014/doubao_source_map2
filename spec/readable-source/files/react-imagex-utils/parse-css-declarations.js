// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'cssDeclarationParser'
// - Resolved require(789062) to 'css-declaration-parser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76927.23dec985.js
         * chunkId: 76927
         * moduleId: 170612
         */
module.exports = function (module, exports, require) {
  var cssDeclarationParser = require("css-declaration-parser") /*id: 789062*/;
  function i(e, t) {
    var n;
    var i;
    var o;
    var a = null;
    if (!e || typeof e != "string") {
      return a;
    }
    var l = cssDeclarationParser(e);
    var s = typeof t == "function";
    var c = 0;
    var u = l.length;
    for (; c < u; c++) {
      i = (n = l[c]).property;
      o = n.value;
      if (s) {
        t(i, o, n);
      } else if (o) {
        a ||= {};
        a[i] = o;
      }
    }
    return a;
  }
  module.exports = i;
  module.exports.default = i;
}