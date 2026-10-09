// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'a' to 'checkPropertyDescriptorSupport'
// - Resolved require(618813) to 'check-property-descriptor-support'
// - Renamed variable 'c' to 'reflectOwnKeysPolyfill'
// - Resolved require(198580) to 'reflect-own-keys-polyfill'
// - Renamed variable 'i' to 'stringToArrayFallback'
// - Resolved require(476143) to 'string-to-array-fallback'
// - Renamed variable 'o' to 'getPropertyDescriptor'
// - Resolved require(836432) to 'get-property-descriptor'
// - Renamed variable 'l' to 'safeDefineProperty'
// - Resolved require(665456) to 'safe-define-property'
// - Updated imported property 'f' to 'getPropertyDescriptor' (module 836432)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 676832
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var checkPropertyDescriptorSupport = require("check-property-descriptor-support") /*id: 618813*/;
  var reflectOwnKeysPolyfill = require("reflect-own-keys-polyfill") /*id: 198580*/;
  var stringToArrayFallback = require("string-to-array-fallback") /*id: 476143*/;
  var getPropertyDescriptor = require("get-property-descriptor") /*id: 836432*/;
  var safeDefineProperty = require("safe-define-property") /*id: 665456*/;
  coreJsExportUtil({
    target: "Object",
    stat: true,
    sham: !checkPropertyDescriptorSupport
  }, {
    getOwnPropertyDescriptors: function (e) {
      var t;
      var r;
      var n = stringToArrayFallback(e);
      var a = getPropertyDescriptor.getPropertyDescriptor;
      var f = reflectOwnKeysPolyfill(n);
      var s = {};
      var u = 0;
      while (f.length > u) {
        if ((r = a(n, t = f[u++])) !== undefined) {
          safeDefineProperty(s, t, r);
        }
      }
      return s;
    }
  });
}