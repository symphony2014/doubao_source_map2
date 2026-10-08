// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// - Renamed variable 'o' to 'stackTraceCleaner'
// - Resolved require(903868) to 'stack-trace-cleaner'
// - Renamed variable 'i' to 'errorStackDefinitionCheck'
// - Resolved require(446818) to 'error-stack-definition-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 218156
         */
module.exports = function (module, exports, require) {
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  var stackTraceCleaner = require("stack-trace-cleaner") /*id: 903868*/;
  var errorStackDefinitionCheck = require("error-stack-definition-check") /*id: 446818*/;
  var a = Error.captureStackTrace;
  module.exports = function (t, r, e, u) {
    if (errorStackDefinitionCheck) {
      if (a) {
        a(t, r);
      } else {
        definePropertyHelper_1(t, "stack", stackTraceCleaner(e, u));
      }
    }
  };
}