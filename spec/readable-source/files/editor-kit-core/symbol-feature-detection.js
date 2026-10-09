// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 793478
         */
module.exports = function (module, exports, require) {
  module.exports = function () {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") {
      return false;
    }
    if (typeof Symbol.iterator == "symbol") {
      return true;
    }
    var t = {};
    var e = Symbol("test");
    var r = Object(e);
    if (typeof e == "string" || Object.prototype.toString.call(e) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]") {
      return false;
    }
    t[e] = 42;
    for (var n in t) {
      return false;
    }
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0) {
      return false;
    }
    var o = Object.getOwnPropertySymbols(t);
    if (o.length !== 1 || o[0] !== e || !Object.prototype.propertyIsEnumerable.call(t, e)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var i = Object.getOwnPropertyDescriptor(t, e);
      if (i.value !== 42 || i.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
}