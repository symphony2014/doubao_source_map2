// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 153164
         */
module.exports = function (module, exports, require) {
  var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var e = r + "+/";
  var n = r + "-_";
  function o(t) {
    var r = {};
    var e = 0;
    for (; e < 64; e++) {
      r[t.charAt(e)] = e;
    }
    return r;
  }
  module.exports = {
    i2c: e,
    c2i: o(e),
    i2cUrl: n,
    c2iUrl: o(n)
  };
}