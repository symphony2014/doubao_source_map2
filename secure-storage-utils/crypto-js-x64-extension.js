// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(689014) to 'crypto-js-core-lib'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 705049
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    var n;
    var o;
    r = (t = e.lib).Base;
    n = t.WordArray;
    (o = e.x64 = {}).Word = r.extend({
      init: function (e, t) {
        this.high = e;
        this.low = t;
      }
    });
    o.WordArray = r.extend({
      init: function (e, t) {
        e = this.words = e || [];
        if (t != undefined) {
          this.sigBytes = t;
        } else {
          this.sigBytes = e.length * 8;
        }
      },
      toX32: function () {
        var e = this.words;
        var t = e.length;
        var r = [];
        var o = 0;
        for (; o < t; o++) {
          var i = e[o];
          r.push(i.high);
          r.push(i.low);
        }
        return n.create(r, this.sigBytes);
      },
      clone: function () {
        var e = r.clone.call(this);
        var t = e.words = this.words.slice(0);
        var n = t.length;
        var o = 0;
        for (; o < n; o++) {
          t[o] = t[o].clone();
        }
        return e;
      }
    });
    return e;
  };
  module.exports = n(require("crypto-js-core-lib") /*id: 689014*/);
}