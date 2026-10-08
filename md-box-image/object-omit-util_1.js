// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 53844
         */
module.exports = function (module, exports, require) {
  module.exports = function (e, t) {
    if (e == null) {
      return {};
    }
    var n;
    var r;
    var i = {};
    var o = Object.keys(e);
    for (r = 0; r < o.length; r++) {
      n = o[r];
      if (!(t.indexOf(n) >= 0)) {
        i[n] = e[n];
      }
    }
    return i;
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}