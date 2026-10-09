// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'createGlobalConfigContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 601748
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isObjectOrFunctionCheck_1 = require("is-object-or-function-check_1") /*id: 8406*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var reactiveStateUtil = require("reactive-state-util") /*id: 840764*/;
  function a(t, e) {
    var n = reactCoreLibraryReexport.createContext(undefined);
    var a = reactiveStateUtil.createState(e);
    var u = a.set;
    var c = a.get;
    var l = a.subscribe;
    return {
      ConfigProvider: n.Provider,
      useConfig: function (t) {
        var e = reactCoreLibraryReexport.useContext(n);
        return isObjectOrFunctionCheck_1.useSyncExternalStore(l, reactCoreLibraryReexport.useCallback(function () {
          var r = c();
          return t ?? e ?? r;
        }, [e, t]));
      },
      GlobalConfigProvider: function (t) {
        var e = t.value;
        reactRefEffectUtils.useLayoutEffect(function () {
          u(e);
        }, [e]);
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, undefined);
      },
      setGlobal: u
    };
  }
  require.d(exports, {
    createGlobalConfigContext: function () {
      return a;
    }
  });
}