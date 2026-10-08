// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Resolved require(409831) to 'array-prototype-iteration-helpers'
// - Resolved require(248170) to 'array-species-constructor-check_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 640438
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var a = require("array-prototype-iteration-helpers") /*id: 409831*/.filter;
  coreJsExportUtil({
    target: "Array",
    proto: true,
    forced: !require("array-species-constructor-check_1") /*id: 248170*/("filter")
  }, {
    filter: function (e) {
      return a(this, e, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
}