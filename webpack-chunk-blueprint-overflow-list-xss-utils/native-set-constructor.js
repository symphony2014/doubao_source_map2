// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'NativeSet'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 625743
         */
module.exports = function (module, exports, require) {
  var coreJsNativeCheckUtil = require("core-js-native-check-util") /*id: 150570*/;
  var globalObjectDetector_1 = require("global-object-detector_1") /*id: 203498*/;
  var o = coreJsNativeCheckUtil.getNativeFunction(globalObjectDetector_1.globalObject, "Set");
  exports.NativeSet = o;
}