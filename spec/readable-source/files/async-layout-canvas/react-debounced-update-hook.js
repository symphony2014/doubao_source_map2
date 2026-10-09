// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useDebouncedUpdate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 101452
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  exports.useDebouncedUpdate = function (e, t, a) {
    var n = typescriptRuntimeHelpers.spreadArray(reactCoreLibraryReexport.useState({}), 2);
    var l = n[0];
    var c = n[1];
    var d = useDebouncedCallbackHook_1.useDebouncedCallback(function () {
      c({});
    }, a).run;
    reactCoreLibraryReexport.useEffect(function () {
      return d();
    }, t);
    reactUseUpdateEffect.useUpdateEffect(e, [l]);
  };
}