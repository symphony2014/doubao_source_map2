// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37204.6399fc74.js
         * chunkId: 37204
         * moduleId: 468185
         */
module.exports = function (module, exports, require) {
  module.exports = (e, t) => {
    if (typeof e != "string" || typeof t != "string") {
      throw TypeError("Expected the arguments to be of type `string`");
    }
    if (t === "") {
      return [e];
    }
    let r = e.indexOf(t);
    if (r === -1) {
      return [e];
    } else {
      return [e.slice(0, r), e.slice(r + t.length)];
    }
  };
}