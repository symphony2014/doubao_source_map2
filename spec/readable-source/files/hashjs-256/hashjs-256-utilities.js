// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(281108) to 'hashjs-256-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: hashjs-256.6917a130.js
         * chunkId: 62121
         * moduleId: 186350
         */
module.exports = function (module, exports, require) {
  var r = require("hashjs-256-utils") /*id: 281108*/.rotr32;
  function i(t, n, e) {
    return t & n ^ t & e ^ n & e;
  }
  exports.ft_1 = function (t, n, e, r) {
    var h;
    if (t === 0) {
      return (h = n) & e ^ ~h & r;
    } else if (t === 1 || t === 3) {
      return n ^ e ^ r;
    } else if (t === 2) {
      return i(n, e, r);
    } else {
      return undefined;
    }
  };
  exports.ch32 = function (t, n, e) {
    return t & n ^ ~t & e;
  };
  exports.maj32 = i;
  exports.p32 = function (t, n, e) {
    return t ^ n ^ e;
  };
  exports.s0_256 = function (t) {
    return r(t, 2) ^ r(t, 13) ^ r(t, 22);
  };
  exports.s1_256 = function (t) {
    return r(t, 6) ^ r(t, 11) ^ r(t, 25);
  };
  exports.g0_256 = function (t) {
    return r(t, 7) ^ r(t, 18) ^ t >>> 3;
  };
  exports.g1_256 = function (t) {
    return r(t, 17) ^ r(t, 19) ^ t >>> 10;
  };
}