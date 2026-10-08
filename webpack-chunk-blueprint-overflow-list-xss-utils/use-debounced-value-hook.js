// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useDebouncedValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 510920
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  exports.useDebouncedValue = function (e, t) {
    var n = typescriptRuntimeHelpers.spreadArray(reactCoreLibraryReexport.useState(e), 2);
    var a = n[0];
    var s = n[1];
    var u = useDebouncedCallbackHook_1.useDebouncedCallback(function () {
      s(e);
    }, t).run;
    reactCoreLibraryReexport.useEffect(function () {
      u();
    }, [e]);
    return a;
  };
}