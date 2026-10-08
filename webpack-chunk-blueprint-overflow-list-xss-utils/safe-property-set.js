// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'safeSetProperty'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 252243
         */
module.exports = function (module, exports, require) {
  var nativeDefinePropertyCheck = require("native-define-property-check") /*id: 325095*/;
  exports.safeSetProperty = function (e, t, n) {
    if (t == "__proto__" && nativeDefinePropertyCheck.nativeDefineProperty) {
      nativeDefinePropertyCheck.nativeDefineProperty(e, t, {
        configurable: true,
        enumerable: true,
        value: n,
        writable: true
      });
    } else {
      e[t] = n;
    }
  };
}