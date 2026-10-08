// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'a' to 'objectAssignPolyfill_1'
// - Resolved require(859939) to 'object-assign-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 517077
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var objectAssignPolyfill_1 = require("object-assign-polyfill_1") /*id: 859939*/;
  coreJsExportUtil({
    target: "Object",
    stat: true,
    arity: 2,
    forced: Object.assign !== objectAssignPolyfill_1
  }, {
    assign: objectAssignPolyfill_1
  });
}