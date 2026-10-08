// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'base64CharMap'
// - Resolved require(753894) to 'base64-char-map'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53224.ebaf78df.js
         * chunkId: 53224
         * moduleId: 558354
         */
module.exports = function (module, exports, require) {
  var base64CharMap = require("base64-char-map") /*id: 753894*/;
  exports.encode = function (e) {
    var t;
    var n = "";
    var i = e < 0 ? (-e << 1) + 1 : (e << 1) + 0;
    do {
      t = i & 31;
      if ((i >>>= 5) > 0) {
        t |= 32;
      }
      n += base64CharMap.encode(t);
    } while (i > 0);
    return n;
  };
  exports.decode = function (e, t, n) {
    var i;
    var o;
    var a;
    var s;
    var l = e.length;
    var c = 0;
    var u = 0;
    do {
      if (t >= l) {
        throw Error("Expected more digits in base 64 VLQ value.");
      }
      if ((s = base64CharMap.decode(e.charCodeAt(t++))) === -1) {
        throw Error("Invalid base64 digit: " + e.charAt(t - 1));
      }
      a = !!(s & 32);
      s &= 31;
      c += s << u;
      u += 5;
    } while (a);
    o = (i = c) >> 1;
    n.value = (i & 1) == 1 ? -o : o;
    n.rest = t;
  };
}