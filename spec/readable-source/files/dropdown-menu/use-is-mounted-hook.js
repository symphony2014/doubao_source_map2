// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'useIsMounted'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 799618
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  function i() {
    var e = reactCoreLibraryReexport.useRef(false);
    var t = reactCoreLibraryReexport.useCallback(function () {
      return e.current;
    }, []);
    reactRefEffectUtils.useLayoutEffect(function () {
      e.current = true;
      return function () {
        e.current = false;
      };
    });
    return t;
  }
  require.d(exports, {
    useIsMounted: function () {
      return i;
    }
  });
}