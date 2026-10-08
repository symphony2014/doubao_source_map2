// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 352344
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var i = Object.create;
  var o = function () {
    function e() {}
    return function (t) {
      if (!isObjectOrFunction_1_1.isObjectOrFunction(t)) {
        return {};
      }
      if (i) {
        return i(t);
      }
      e.prototype = t;
      var n = new e();
      e.prototype = undefined;
      return n;
    };
  }();
  exports.createObject = o;
}