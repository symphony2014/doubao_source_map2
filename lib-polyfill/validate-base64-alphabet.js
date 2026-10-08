// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 320946
         */
module.exports = function (module, exports, require) {
  var r = TypeError;
  module.exports = function (t) {
    var e = t && t.alphabet;
    if (e === undefined || e === "base64" || e === "base64url") {
      return e || "base64";
    }
    throw new r("Incorrect `alphabet` option");
  };
}