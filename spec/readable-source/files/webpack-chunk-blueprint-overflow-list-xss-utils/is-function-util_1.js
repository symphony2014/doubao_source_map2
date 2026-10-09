// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 699491
         */
module.exports = function (module, exports, require) {
  var baseGetTag = require("base-get-tag") /*id: 670218*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  exports.isFunction = function (e) {
    if (!isObjectOrFunction_1_1.isObjectOrFunction(e)) {
      return false;
    }
    var t = baseGetTag.baseGetTag(e);
    return t == "[object Function]" || t == "[object GeneratorFunction]" || t == "[object AsyncFunction]" || t == "[object Proxy]";
  };
}