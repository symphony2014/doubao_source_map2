// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Resolved require(409831) to 'array-prototype-iteration-helpers'
// - Resolved require(248170) to 'array-species-constructor-check_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 966545
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var T = require("array-prototype-iteration-helpers") /*id: 409831*/.map;
  coreJsExportUtil({
    target: "Array",
    proto: true,
    forced: !require("array-species-constructor-check_1") /*id: 248170*/("map")
  }, {
    map: function (t) {
      return T(this, t, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
}