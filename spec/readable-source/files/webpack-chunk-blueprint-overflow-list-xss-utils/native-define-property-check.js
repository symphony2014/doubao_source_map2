// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'nativeDefineProperty'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 325095
         */
module.exports = function (module, exports, require) {
  var coreJsNativeCheckUtil = require("core-js-native-check-util") /*id: 150570*/;
  var i = function () {
    try {
      var e = coreJsNativeCheckUtil.getNativeFunction(Object, "defineProperty");
      e({}, "", {});
      return e;
    } catch (e) {}
  }();
  exports.nativeDefineProperty = i;
}