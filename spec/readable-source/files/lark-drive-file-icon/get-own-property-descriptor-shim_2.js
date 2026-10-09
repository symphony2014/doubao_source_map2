// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'a' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'c' to 'stringToArrayFallback'
// - Resolved require(476143) to 'string-to-array-fallback'
// - Resolved require(836432) to 'get-property-descriptor'
// - Renamed variable 'o' to 'checkPropertyDescriptorSupport'
// - Resolved require(618813) to 'check-property-descriptor-support'
// - Updated imported property 'f' to 'getPropertyDescriptor' (module 836432)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 641641
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var stringToArrayFallback = require("string-to-array-fallback") /*id: 476143*/;
  var i = require("get-property-descriptor") /*id: 836432*/.getPropertyDescriptor;
  var checkPropertyDescriptorSupport = require("check-property-descriptor-support") /*id: 618813*/;
  coreJsExportUtil({
    target: "Object",
    stat: true,
    forced: !checkPropertyDescriptorSupport || safeFunctionExecutor(function () {
      i(1);
    }),
    sham: !checkPropertyDescriptorSupport
  }, {
    getOwnPropertyDescriptor: function (e, t) {
      return i(stringToArrayFallback(e), t);
    }
  });
}