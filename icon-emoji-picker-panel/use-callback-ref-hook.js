// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'useCallbackRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 373105
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  function a(e, t, n = {}) {
    var a = n.skipNullish;
    var c = a !== undefined && a;
    var u = reactCoreLibraryReexport.useRef(e);
    var s = reactRefEffectUtils.useUpdatedRef(t);
    return reactCoreLibraryReexport.useMemo(function () {
      var e = {};
      Object.defineProperty(e, "current", {
        get: function () {
          return u.current;
        },
        set: function (e) {
          if (e !== u.current && (!c || c && domTypeUtils_1.isDefined(e))) {
            var t;
            if ((t = s.current) !== null && t !== undefined) {
              t.call(s, e);
            }
            u.current = e;
          }
        }
      });
      return e;
    }, [s, c]);
  }
  require.d(exports, {
    useCallbackRef: function () {
      return a;
    }
  });
}