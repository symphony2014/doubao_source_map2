// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 618453
         */
module.exports = function (module, exports, require) {
  exports.Grayscale = undefined;
  exports.Grayscale = function (t) {
    var e;
    var i;
    var r = t.data;
    var a = r.length;
    for (e = 0; e < a; e += 4) {
      i = r[e] * 0.34 + r[e + 1] * 0.5 + r[e + 2] * 0.16;
      r[e] = i;
      r[e + 1] = i;
      r[e + 2] = i;
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}