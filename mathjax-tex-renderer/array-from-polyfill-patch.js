// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'T' to 'arrayFromPolyfill'
// - Resolved require(123370) to 'array-from-polyfill'
// - Resolved require(559695) to 'symbol-well-known-iterator-checker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 733332
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var arrayFromPolyfill = require("array-from-polyfill") /*id: 123370*/;
  coreJsExportUtil({
    target: "Array",
    stat: true,
    forced: !require("symbol-well-known-iterator-checker") /*id: 559695*/(function (t) {
      Array.from(t);
    })
  }, {
    from: arrayFromPolyfill
  });
}