// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useSkillReceive'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 463729
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var typeCheckUtils = require("type-check-utils") /*id: 916406*/;
  var featureFlagConstant = require("feature-flag-constant") /*id: 523244*/;
  exports.useSkillReceive = function (e, t) {
    if (featureFlagConstant.isFeatureEnabled) {
      typeCheckUtils.isFunction(e);
    }
    var d = useLatestRef_1.useLatestRef(e);
    var u = (t == null ? undefined : t.wait) ?? 1000;
    var _ = reactCoreLibraryReexport.useMemo(function () {
      return debounceUtilWrapper.createDebounce(function () {
        var e = [];
        var t = 0;
        for (; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        return d.current.apply(d, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(e), false));
      }, u, t);
    }, []);
    useOnUnmountHook.useOnUnmount(function () {
      _.cancel();
    });
    return {
      run: _,
      cancel: _.cancel,
      flush: _.flush
    };
  };
}