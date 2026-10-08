// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'WrapperClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 489803
         */
module.exports = function (module, exports, require) {
  var objectCreateUtil = require("object-create-util") /*id: 352344*/;
  var emptyFunctionExport_1 = require("empty-function-export_1") /*id: 370291*/;
  function a(t, e) {
    this.__wrapped__ = t;
    this.__actions__ = [];
    this.__chain__ = !!e;
    this.__index__ = 0;
    this.__values__ = undefined;
  }
  a.prototype = objectCreateUtil.createObject(emptyFunctionExport_1.emptyFunction.prototype);
  a.prototype.constructor = a;
  exports.WrapperClass = a;
}