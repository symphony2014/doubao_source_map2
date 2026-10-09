// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'versionConstant'
// - Resolved require(223785) to 'version-constant'
// - Renamed variable 'T' to 'priorityHandlerList'
// - Resolved require(104629) to 'priority-handler-list'
// - Renamed variable 'n' to 'mathjaxRetryHandler'
// - Resolved require(425825) to 'mathjax-retry-handler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 680159
         */
module.exports = function (module, exports, require) {
  exports.mathjax = undefined;
  var versionConstant = require("version-constant") /*id: 223785*/;
  var priorityHandlerList = require("priority-handler-list") /*id: 104629*/;
  var mathjaxRetryHandler = require("mathjax-retry-handler") /*id: 425825*/;
  exports.mathjax = {
    version: versionConstant.VERSION,
    handlers: new priorityHandlerList.HandlerList(),
    document: function (t, Q) {
      return exports.mathjax.handlers.document(t, Q);
    },
    handleRetriesFor: mathjaxRetryHandler.handleRetriesFor,
    retryAfter: mathjaxRetryHandler.retryAfter,
    asyncLoad: null
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}