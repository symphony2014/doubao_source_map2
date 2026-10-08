// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 8840
         */
module.exports = function (module, exports, require) {
  var functionValidator = require("function-validator") /*id: 599706*/;
  var o = TypeError;
  function i(t) {
    var r;
    var e;
    this.promise = new t(function (t, n) {
      if (r !== undefined || e !== undefined) {
        throw new o("Bad Promise constructor");
      }
      r = t;
      e = n;
    });
    this.resolve = functionValidator(r);
    this.reject = functionValidator(e);
  }
  module.exports.f = function (t) {
    return new i(t);
  };
}