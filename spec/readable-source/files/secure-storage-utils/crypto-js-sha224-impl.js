// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// - Resolved require(210720) to 'crypto-js-sha256-impl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 856408
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    var n;
    var o;
    t = e.lib.WordArray;
    n = (r = e.algo).SHA256;
    o = r.SHA224 = n.extend({
      _doReset: function () {
        this._hash = new t.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
      },
      _doFinalize: function () {
        var e = n._doFinalize.call(this);
        e.sigBytes -= 4;
        return e;
      }
    });
    e.SHA224 = n._createHelper(o);
    e.HmacSHA224 = n._createHmacHelper(o);
    return e.SHA224;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/, require("crypto-js-sha256-impl") /*id: 210720*/);
}