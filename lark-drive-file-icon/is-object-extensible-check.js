// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'a' to 'isObjectOrFunction_1'
// - Resolved require(446549) to 'is-object-or-function_1'
// - Renamed variable 'c' to 'getObjectTypeString'
// - Resolved require(32151) to 'get-object-type-string'
// - Renamed variable 'i' to 'arrayBufferSafetyCheck'
// - Resolved require(288693) to 'array-buffer-safety-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 414848
         */
module.exports = function (module, exports, require) {
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var isObjectOrFunction_1 = require("is-object-or-function_1") /*id: 446549*/;
  var getObjectTypeString = require("get-object-type-string") /*id: 32151*/;
  var arrayBufferSafetyCheck = require("array-buffer-safety-check") /*id: 288693*/;
  var o = Object.isExtensible;
  var l = safeFunctionExecutor(function () {
    o(1);
  });
  module.exports = l || arrayBufferSafetyCheck ? function (e) {
    return !!isObjectOrFunction_1(e) && (!arrayBufferSafetyCheck || getObjectTypeString(e) !== "ArrayBuffer") && (!o || o(e));
  } : o;
}