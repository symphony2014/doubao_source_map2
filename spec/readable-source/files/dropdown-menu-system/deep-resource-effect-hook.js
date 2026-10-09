// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useDeepResourceHook'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18380.923ae249.js
         * chunkId: 18380
         * moduleId: 295232
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useResourceEffectHook_1 = require("use-resource-effect-hook_1") /*id: 404507*/;
  var deepEqualCheckUtil = require("deep-equal-check-util") /*id: 974619*/;
  exports.useDeepResourceHook = function (e, t, r) {
    var a = reactCoreLibraryReexport.useRef();
    var i = reactCoreLibraryReexport.useRef(0);
    if (!deepEqualCheckUtil.checkDeepEqual(t, a.current)) {
      a.current = t;
      i.current += 1;
    }
    useResourceEffectHook_1.useResourceEffect(e, [i.current], r);
  };
}