// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 676076
         */
module.exports = function (module, exports, require) {
  module.exports = function (t, e) {
    e = e.split(":")[0];
    if (!(t *= 1)) {
      return false;
    }
    switch (e) {
      case "http":
      case "ws":
        return t !== 80;
      case "https":
      case "wss":
        return t !== 443;
      case "ftp":
        return t !== 21;
      case "gopher":
        return t !== 70;
      case "file":
        return false;
    }
    return t !== 0;
  };
}