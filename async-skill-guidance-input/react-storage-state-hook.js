// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'usePersistedState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 452169
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  var typeCheckUtils = require("type-check-utils") /*id: 916406*/;
  function l(t) {
    return function (e, r = {}) {
      var l;
      var h = r.onError;
      var c = h === undefined ? function (t) {} : h;
      try {
        l = t();
      } catch (t) {
        c(t);
      }
      function u(t) {
        if (r == null ? undefined : r.serializer) {
          if (r == null) {
            return undefined;
          } else {
            return r.serializer(t);
          }
        } else {
          return JSON.stringify(t);
        }
      }
      function d(t) {
        if (r == null ? undefined : r.deserializer) {
          if (r == null) {
            return undefined;
          } else {
            return r.deserializer(t);
          }
        } else {
          return JSON.parse(t);
        }
      }
      function f() {
        try {
          var t = l == null ? undefined : l.getItem(e);
          if (t) {
            return d(t);
          }
        } catch (t) {
          c(t);
        }
        if (typeCheckUtils.isFunction(r == null ? undefined : r.defaultValue)) {
          if (r == null) {
            return undefined;
          } else {
            return r.defaultValue();
          }
        } else if (r == null) {
          return undefined;
        } else {
          return r.defaultValue;
        }
      }
      var p = typescriptRuntimeHelpers.spreadArray(reactCoreLibraryReexport.useState(function () {
        return f();
      }), 2);
      var g = p[0];
      var m = p[1];
      reactUseUpdateEffect.useUpdateEffect(function () {
        m(f());
      }, [e]);
      function v(t) {
        var r = typeCheckUtils.isFunction(t) ? t(g) : t;
        m(r);
        if (typeCheckUtils.isUndefined(r)) {
          if (l != null) {
            l.removeItem(e);
          }
        } else {
          try {
            if (l != null) {
              l.setItem(e, u(r));
            }
          } catch (t) {}
        }
      }
      return [g, reactFunctionMemoHook.useMemoizedCallback(v)];
    };
  }
  require.d(exports, {
    usePersistedState: function () {
      return l;
    }
  });
}