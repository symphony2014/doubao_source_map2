// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 893478
         */
module.exports = function (module, exports, require) {
  function e() {
    return typeof function () {}.name == "string";
  }
  var r = Object.getOwnPropertyDescriptor;
  if (r) {
    try {
      r([], "length");
    } catch (t) {
      r = null;
    }
  }
  e.functionsHaveConfigurableNames = function () {
    if (!e() || !r) {
      return false;
    }
    var t = r(function () {}, "name");
    return !!t && !!t.configurable;
  };
  var n = Function.prototype.bind;
  e.boundFunctionsHaveNames = function () {
    return e() && typeof n == "function" && function () {}.bind().name !== "";
  };
  module.exports = e;
}