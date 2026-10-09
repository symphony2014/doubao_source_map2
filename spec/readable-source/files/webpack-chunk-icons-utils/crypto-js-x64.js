// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 715147
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    var t;
    var r;
    var n;
    var i;
    r = (t = e.lib).Base;
    n = t.WordArray;
    (i = e.x64 = {}).Word = r.extend({
      init: function (e, t) {
        this.high = e;
        this.low = t;
      }
    });
    i.WordArray = r.extend({
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
        var i = 0;
        for (; i < t; i++) {
          var o = e[i];
          r.push(o.high);
          r.push(o.low);
        }
        return n.create(r, this.sigBytes);
      },
      clone: function () {
        var e = r.clone.call(this);
        var t = e.words = this.words.slice(0);
        var n = t.length;
        var i = 0;
        for (; i < n; i++) {
          t[i] = t[i].clone();
        }
        return e;
      }
    });
    return e;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/);
}