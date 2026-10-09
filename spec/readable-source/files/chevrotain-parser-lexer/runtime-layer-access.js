// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 988119
         */
module.exports = function (module, exports, require) {
  let r;
  function n() {
    if (r === undefined) {
      throw Error("No runtime abstraction layer installed");
    }
    return r;
  }
  (n ||= {}).install = function (e) {
    if (e === undefined) {
      throw Error("No runtime abstraction layer provided");
    }
    r = e;
  };
  exports.default = n;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}