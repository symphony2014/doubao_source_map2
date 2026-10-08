// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getBaseGetTag'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 360094
         */
module.exports = function (module, exports, require) {
  var coreJsNativeCheckUtil = require("core-js-native-check-util") /*id: 150570*/;
  var globalObjectDetector_1 = require("global-object-detector_1") /*id: 203498*/;
  var o = coreJsNativeCheckUtil.getNativeFunction(globalObjectDetector_1.globalObject, "DataView");
  var nativeMapConstructor = require("native-map-constructor") /*id: 331775*/;
  var s = coreJsNativeCheckUtil.getNativeFunction(globalObjectDetector_1.globalObject, "Promise");
  var nativeSetConstructor = require("native-set-constructor") /*id: 625743*/;
  var nativeWeakmapDetector = require("native-weakmap-detector") /*id: 99767*/;
  var baseGetTag = require("base-get-tag") /*id: 670218*/;
  var safeToStringUtil = require("safe-to-string-util") /*id: 679355*/;
  var h = "[object Map]";
  var d = "[object Promise]";
  var p = "[object Set]";
  var g = "[object WeakMap]";
  var v = "[object DataView]";
  var m = safeToStringUtil.safeToString(o);
  var y = safeToStringUtil.safeToString(nativeMapConstructor.NativeMap);
  var b = safeToStringUtil.safeToString(s);
  var _ = safeToStringUtil.safeToString(nativeSetConstructor.NativeSet);
  var w = safeToStringUtil.safeToString(nativeWeakmapDetector.NativeWeakMap);
  var E = baseGetTag.baseGetTag;
  if (o && E(new o(new ArrayBuffer(1))) != v || nativeMapConstructor.NativeMap && E(new nativeMapConstructor.NativeMap()) != h || s && E(s.resolve()) != d || nativeSetConstructor.NativeSet && E(new nativeSetConstructor.NativeSet()) != p || nativeWeakmapDetector.NativeWeakMap && E(new nativeWeakmapDetector.NativeWeakMap()) != g) {
    E = function (e) {
      var t = baseGetTag.baseGetTag(e);
      var n = t == "[object Object]" ? e.constructor : undefined;
      var r = n ? safeToStringUtil.safeToString(n) : "";
      if (r) {
        switch (r) {
          case m:
            return v;
          case y:
            return h;
          case b:
            return d;
          case _:
            return p;
          case w:
            return g;
        }
      }
      return t;
    };
  }
  var S = E;
  require.d(exports, {
    getBaseGetTag: function () {
      return S;
    }
  });
}