// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'AsyncSkillChatInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 128080
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => Promise.all([require.e("dropdown-menu-system") /*id: 18380*/, require.e("flow-chat-editor") /*id: 88860*/]).then(require.bind(require, "flow-chat-editor") /*id: 359248*/)
  }));
  let s = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      fallback: n,
      ...r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
      fallback: n ?? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
      children: reactJsxRuntimeCoreReexport.jsx(a, {
        ...r,
        ref: t
      })
    });
  });
  require.d(exports, {
    AsyncSkillChatInput: function () {
      return s;
    }
  });
}