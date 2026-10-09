// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'lazyMarkdownMessageRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 472952
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  let a = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("async-utils-helpers") /*id: 76341*/.then(require.bind(require, "samantha-markdown-message") /*id: 885968*/)
  }));
  require.d(exports, {
    lazyMarkdownMessageRenderer: function () {
      return a;
    }
  });
}