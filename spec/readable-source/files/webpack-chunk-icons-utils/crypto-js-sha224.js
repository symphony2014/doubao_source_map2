// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// - Resolved require(338262) to 'crypto-js-sha256'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 986160
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    var n;
    var i;
    t = e.lib.WordArray;
    n = (r = e.algo).SHA256;
    i = r.SHA224 = n.extend({
      _doReset: function () {
        this._hash = new t.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
      },
      _doFinalize: function () {
        var e = n._doFinalize.call(this);
        e.sigBytes -= 4;
        return e;
      }
    });
    e.SHA224 = n._createHelper(i);
    e.HmacSHA224 = n._createHmacHelper(i);
    return e.SHA224;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-sha256") /*id: 338262*/);
}