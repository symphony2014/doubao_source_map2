// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'o' to 'checkPropertyDescriptorSupport'
// - Resolved require(618813) to 'check-property-descriptor-support'
// - Resolved require(976843) to 'object-define-property-safe'
// - Updated imported property 'f' to 'safeDefineProperty' (module 976843)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 14677
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var checkPropertyDescriptorSupport = require("check-property-descriptor-support") /*id: 618813*/;
  var i = require("object-define-property-safe") /*id: 976843*/.safeDefineProperty;
  coreJsExportUtil({
    target: "Object",
    stat: true,
    forced: Object.defineProperty !== i,
    sham: !checkPropertyDescriptorSupport
  }, {
    defineProperty: i
  });
}