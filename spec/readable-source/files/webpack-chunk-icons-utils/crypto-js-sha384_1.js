// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// - Resolved require(715147) to 'crypto-js-x64'
// - Resolved require(691309) to 'crypto-js-sha512-impl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 204067
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    var n;
    var i;
    var o;
    var a;
    r = (t = e.x64).Word;
    n = t.WordArray;
    o = (i = e.algo).SHA512;
    a = i.SHA384 = o.extend({
      _doReset: function () {
        this._hash = new n.init([new r.init(3418070365, 3238371032), new r.init(1654270250, 914150663), new r.init(2438529370, 812702999), new r.init(355462360, 4144912697), new r.init(1731405415, 4290775857), new r.init(2394180231, 1750603025), new r.init(3675008525, 1694076839), new r.init(1203062813, 3204075428)]);
      },
      _doFinalize: function () {
        var e = o._doFinalize.call(this);
        e.sigBytes -= 16;
        return e;
      }
    });
    e.SHA384 = o._createHelper(a);
    e.HmacSHA384 = o._createHmacHelper(a);
    return e.SHA384;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/, require("crypto-js-x64") /*id: 715147*/, require("crypto-js-sha512-impl") /*id: 691309*/);
}