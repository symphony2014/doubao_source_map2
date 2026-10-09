// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 48884
         */
module.exports = function (module, exports, require) {
  module.exports = function (t) {
    if (t === undefined) {
      return t;
    }
    var e = {};
    if ("[[Value]]" in t) {
      e.value = t["[[Value]]"];
    }
    if ("[[Writable]]" in t) {
      e.writable = !!t["[[Writable]]"];
    }
    if ("[[Get]]" in t) {
      e.get = t["[[Get]]"];
    }
    if ("[[Set]]" in t) {
      e.set = t["[[Set]]"];
    }
    if ("[[Enumerable]]" in t) {
      e.enumerable = !!t["[[Enumerable]]"];
    }
    if ("[[Configurable]]" in t) {
      e.configurable = !!t["[[Configurable]]"];
    }
    return e;
  };
}