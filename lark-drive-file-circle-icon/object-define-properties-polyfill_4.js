// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'a' to 'checkPropertyDescriptorSupport'
// - Resolved require(618813) to 'check-property-descriptor-support'
// - Resolved require(182349) to 'object-define-properties-polyfill'
// - Updated imported property 'f' to 'defineProperties' (module 182349)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 420342
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var checkPropertyDescriptorSupport = require("check-property-descriptor-support") /*id: 618813*/;
  var c = require("object-define-properties-polyfill") /*id: 182349*/.defineProperties;
  coreJsExportUtil({
    target: "Object",
    stat: true,
    forced: Object.defineProperties !== c,
    sham: !checkPropertyDescriptorSupport
  }, {
    defineProperties: c
  });
}