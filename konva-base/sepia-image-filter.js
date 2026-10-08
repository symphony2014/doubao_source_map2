// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 18315
         */
module.exports = function (module, exports, require) {
  exports.Sepia = undefined;
  exports.Sepia = function (t) {
    var e;
    var i;
    var r;
    var a;
    var n = t.data;
    var s = n.length;
    for (e = 0; e < s; e += 4) {
      i = n[e + 0];
      r = n[e + 1];
      a = n[e + 2];
      n[e + 0] = Math.min(255, i * 0.393 + r * 0.769 + a * 0.189);
      n[e + 1] = Math.min(255, i * 0.349 + r * 0.686 + a * 0.168);
      n[e + 2] = Math.min(255, i * 0.272 + r * 0.534 + a * 0.131);
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}