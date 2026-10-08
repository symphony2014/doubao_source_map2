// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(938302) to 'crypto-js-core'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 513741
         */
module.exports = function (module, exports, require) {
  var n;
  n = function (e) {
    (function () {
      var t = e.lib.WordArray;
      var r = e.enc;
      function n(e) {
        return e << 8 & -16711936 | e >>> 8 & 16711935;
      }
      r.Utf16 = r.Utf16BE = {
        stringify: function (e) {
          var t = e.words;
          var r = e.sigBytes;
          var n = [];
          var i = 0;
          for (; i < r; i += 2) {
            var o = t[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
            n.push(String.fromCharCode(o));
          }
          return n.join("");
        },
        parse: function (e) {
          var r = e.length;
          var n = [];
          var i = 0;
          for (; i < r; i++) {
            n[i >>> 1] |= e.charCodeAt(i) << 16 - i % 2 * 16;
          }
          return t.create(n, r * 2);
        }
      };
      r.Utf16LE = {
        stringify: function (e) {
          var t = e.words;
          var r = e.sigBytes;
          var i = [];
          var o = 0;
          for (; o < r; o += 2) {
            var a = n(t[o >>> 2] >>> 16 - o % 4 * 8 & 65535);
            i.push(String.fromCharCode(a));
          }
          return i.join("");
        },
        parse: function (e) {
          var r = e.length;
          var i = [];
          var o = 0;
          for (; o < r; o++) {
            i[o >>> 1] |= n(e.charCodeAt(o) << 16 - o % 2 * 16);
          }
          return t.create(i, r * 2);
        }
      };
    })();
    return e.enc.Utf16;
  };
  module.exports = n(require("crypto-js-core") /*id: 938302*/);
}