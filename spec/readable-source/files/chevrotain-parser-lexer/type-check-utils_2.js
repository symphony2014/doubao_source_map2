// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 666252
         */
module.exports = function (module, exports, require) {
  function r(e) {
    return typeof e == "string" || e instanceof String;
  }
  function n(e) {
    return Array.isArray(e);
  }
  exports.stringArray = exports.array = exports.func = exports.error = exports.number = exports.string = exports.boolean = undefined;
  exports.boolean = function (e) {
    return e === true || e === false;
  };
  exports.string = r;
  exports.number = function (e) {
    return typeof e == "number" || e instanceof Number;
  };
  exports.error = function (e) {
    return e instanceof Error;
  };
  exports.func = function (e) {
    return typeof e == "function";
  };
  exports.array = n;
  exports.stringArray = function (e) {
    return n(e) && e.every(e => r(e));
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}