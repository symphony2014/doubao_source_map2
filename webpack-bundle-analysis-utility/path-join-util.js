// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 925886
         */
module.exports = function (module, exports, require) {
  module.exports = function (e, t) {
    if (t) {
      return e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "");
    } else {
      return e;
    }
  };
}