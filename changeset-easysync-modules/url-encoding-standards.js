// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 945497
         */
module.exports = function (module, exports, require) {
  var e = String.prototype.replace;
  var n = /%20/g;
  module.exports = {
    default: "RFC3986",
    formatters: {
      RFC1738: function (t) {
        return e.call(t, n, "+");
      },
      RFC3986: function (t) {
        return t;
      }
    },
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
}