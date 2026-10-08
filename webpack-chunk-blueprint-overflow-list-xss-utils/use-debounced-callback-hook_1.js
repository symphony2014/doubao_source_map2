// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useDebouncedCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 366474
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var typeCheckUtils = require("type-check-utils") /*id: 916406*/;
  var featureFlagConstant = require("feature-flag-constant") /*id: 523244*/;
  exports.useDebouncedCallback = function (e, t) {
    if (featureFlagConstant.isFeatureEnabled) {
      typeCheckUtils.isFunction(e);
    }
    var l = useLatestRef_1.useLatestRef(e);
    var f = (t == null ? undefined : t.wait) ?? 1000;
    var h = reactCoreLibraryReexport.useMemo(function () {
      return debounceUtil_1_1.debounce(function () {
        var e = [];
        var t = 0;
        for (; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
        return l.current.apply(l, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(e), false));
      }, f, t);
    }, []);
    useOnUnmountHook.useOnUnmount(function () {
      h.cancel();
    });
    return {
      run: h,
      cancel: h.cancel,
      flush: h.flush
    };
  };
}