// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'createConfigContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 595221
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isObjectOrFunctionCheck_1 = require("is-object-or-function-check_1") /*id: 8406*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var createObservable = require("create-observable") /*id: 706734*/;
  function c(e, t) {
    var n = reactCoreLibraryReexport.createContext(undefined);
    var c = createObservable.createObservable(t);
    var u = c.set;
    var s = c.get;
    var l = c.subscribe;
    return {
      ConfigProvider: n.Provider,
      useConfig: function (e) {
        var t = reactCoreLibraryReexport.useContext(n);
        return isObjectOrFunctionCheck_1.useSyncExternalStore(l, reactCoreLibraryReexport.useCallback(function () {
          var r = s();
          return e ?? t ?? r;
        }, [t, e]));
      },
      GlobalConfigProvider: function (e) {
        var t = e.value;
        reactRefEffectUtils.useLayoutEffect(function () {
          u(t);
        }, [t]);
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, undefined);
      },
      setGlobal: u
    };
  }
  require.d(exports, {
    createConfigContext: function () {
      return c;
    }
  });
}