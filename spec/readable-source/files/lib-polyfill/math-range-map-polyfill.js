// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 128504
         */
module.exports = function (module, exports, require) {
  module.exports = function (t, r, e, n, o) {
    var i = +t;
    var a = +r;
    var u = +e;
    var c = +n;
    var f = +o;
    if (i != i || a != a || u != u || c != c || f != f) {
      return NaN;
    } else if (i === Infinity || i === -Infinity) {
      return i;
    } else {
      return (i - a) * (f - c) / (u - a) + c;
    }
  };
}