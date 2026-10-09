// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useControlledState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19365.bed2e0e3.js
         * chunkId: 19365
         * moduleId: 756850
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var typeCheckUtils = require("type-check-utils") /*id: 916406*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var useResetState = require("use-reset-state") /*id: 997624*/;
  exports.useControlledState = function (e = {}, t = {}) {
    var n = t.defaultValue;
    var l = t.defaultValuePropName;
    var c = l === undefined ? "defaultValue" : l;
    var u = t.valuePropName;
    var d = u === undefined ? "value" : u;
    var p = t.trigger;
    var h = p === undefined ? "onChange" : p;
    var f = e[d];
    var m = e.hasOwnProperty(d);
    var g = reactCoreLibraryReexport.useMemo(function () {
      if (m) {
        return f;
      } else if (e.hasOwnProperty(c)) {
        return e[c];
      } else {
        return n;
      }
    }, []);
    var y = reactCoreLibraryReexport.useRef(g);
    if (m) {
      y.current = f;
    }
    var v = useResetState.useResetState();
    return [y.current, reactFunctionMemoHook.useMemoizedCallback(function (t) {
      var n = [];
      var i = 1;
      for (; i < arguments.length; i++) {
        n[i - 1] = arguments[i];
      }
      var o = typeCheckUtils.isFunction(t) ? t(y.current) : t;
      if (!m) {
        y.current = o;
        v();
      }
      if (e[h]) {
        e[h].apply(e, typescriptRuntimeHelpers.arraySpread([o], typescriptRuntimeHelpers.spreadArray(n), false));
      }
    })];
  };
}