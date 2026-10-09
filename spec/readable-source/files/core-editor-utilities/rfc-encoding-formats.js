// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 542852
         */
module.exports = function (module, exports, require) {
  var t = String.prototype.replace;
  var r = /%20/g;
  var n = "RFC3986";
  module.exports = {
    default: n,
    formatters: {
      RFC1738: function (e) {
        return t.call(e, r, "+");
      },
      RFC3986: function (e) {
        return String(e);
      }
    },
    RFC1738: "RFC1738",
    RFC3986: n
  };
}