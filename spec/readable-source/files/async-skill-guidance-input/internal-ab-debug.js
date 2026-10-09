// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'ABDebugComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 515441
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var internalEnvCheck = require("internal-env-check") /*id: 30256*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => Promise.all([require.e("codemirror-editor-core") /*id: 53909*/, require.e("super-task-ab-debug") /*id: 22412*/]).then(require.bind(require, "ab-debug-ui-component") /*id: 132314*/).then(e => ({
    default: e.ABDebug
  }))));
  let s = () => internalEnvCheck.isInternalEnv() ? reactJsxRuntimeCoreReexport.jsx(l, {}) : null;
  require.d(exports, {
    ABDebugComponent: function () {
      return s;
    }
  });
}