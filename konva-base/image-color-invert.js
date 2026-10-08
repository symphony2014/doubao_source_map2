// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 931891
         */
module.exports = function (module, exports, require) {
  exports.Invert = undefined;
  exports.Invert = function (t) {
    var e;
    var i = t.data;
    var r = i.length;
    for (e = 0; e < r; e += 4) {
      i[e] = 255 - i[e];
      i[e + 1] = 255 - i[e + 1];
      i[e + 2] = 255 - i[e + 2];
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}