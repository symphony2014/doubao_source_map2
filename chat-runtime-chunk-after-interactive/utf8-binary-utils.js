// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 763479
         */
module.exports = function (module, exports, require) {
  var t = {
    utf8: {
      stringToBytes: function (e) {
        return t.bin.stringToBytes(unescape(encodeURIComponent(e)));
      },
      bytesToString: function (e) {
        return decodeURIComponent(escape(t.bin.bytesToString(e)));
      }
    },
    bin: {
      stringToBytes: function (e) {
        var t = [];
        var n = 0;
        for (; n < e.length; n++) {
          t.push(e.charCodeAt(n) & 255);
        }
        return t;
      },
      bytesToString: function (e) {
        var t = [];
        var n = 0;
        for (; n < e.length; n++) {
          t.push(String.fromCharCode(e[n]));
        }
        return t.join("");
      }
    }
  };
  module.exports = t;
}