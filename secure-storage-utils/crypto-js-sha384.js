// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// - Resolved require(705049) to 'crypto-js-x64-extension'
// - Resolved require(457393) to 'crypto-js-sha512'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 69733
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    var n;
    var o;
    var i;
    var a;
    r = (t = e.x64).Word;
    n = t.WordArray;
    i = (o = e.algo).SHA512;
    a = o.SHA384 = i.extend({
      _doReset: function () {
        this._hash = new n.init([new r.init(3418070365, 3238371032), new r.init(1654270250, 914150663), new r.init(2438529370, 812702999), new r.init(355462360, 4144912697), new r.init(1731405415, 4290775857), new r.init(2394180231, 1750603025), new r.init(3675008525, 1694076839), new r.init(1203062813, 3204075428)]);
      },
      _doFinalize: function () {
        var e = i._doFinalize.call(this);
        e.sigBytes -= 16;
        return e;
      }
    });
    e.SHA384 = i._createHelper(a);
    e.HmacSHA384 = i._createHmacHelper(a);
    return e.SHA384;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/, require("crypto-js-x64-extension") /*id: 705049*/, require("crypto-js-sha512") /*id: 457393*/);
}