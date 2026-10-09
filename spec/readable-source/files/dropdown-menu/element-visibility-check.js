// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 203776
         */
module.exports = function (module, exports, require) {
  exports.default = undefined;
  exports.default = function (e) {
    if (!e) {
      return false;
    }
    if (e.offsetParent) {
      return true;
    }
    if (e.getBBox) {
      var t = e.getBBox();
      if (t.width || t.height) {
        return true;
      }
    }
    if (e.getBoundingClientRect) {
      var n = e.getBoundingClientRect();
      if (n.width || n.height) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}