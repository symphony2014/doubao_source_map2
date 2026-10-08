// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'throttledToString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 827495
         */
module.exports = function (module, exports, require) {
  var constantCreator = require("constant-creator") /*id: 851378*/;
  var nativeDefinePropertyCheck = require("native-define-property-check") /*id: 325095*/;
  var identityFunctionUtil_1 = require("identity-function-util_1") /*id: 69676*/;
  var a = nativeDefinePropertyCheck.nativeDefineProperty ? function (e, t) {
    return nativeDefinePropertyCheck.nativeDefineProperty(e, "toString", {
      configurable: true,
      enumerable: false,
      value: constantCreator.createConstant(t),
      writable: true
    });
  } : identityFunctionUtil_1.identity;
  var s = require("function-throttle") /*id: 738638*/.throttle(a);
  require.d(exports, {
    throttledToString: function () {
      return s;
    }
  });
}