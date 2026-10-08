// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useClampedCounter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 912956
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var typeCheckUtils = require("type-check-utils") /*id: 916406*/;
  function s(e, t = {}) {
    var n = t.min;
    var i = t.max;
    var r = e;
    if (typeCheckUtils.isNumber(i)) {
      r = Math.min(i, r);
    }
    if (typeCheckUtils.isNumber(n)) {
      r = Math.max(n, r);
    }
    return r;
  }
  exports.useClampedCounter = function (e = 0, t = {}) {
    var n = t.min;
    var l = t.max;
    var c = typescriptRuntimeHelpers.spreadArray(reactCoreLibraryReexport.useState(function () {
      return s(e, {
        min: n,
        max: l
      });
    }), 2);
    var d = c[0];
    var u = c[1];
    function h(e) {
      u(function (t) {
        return s(typeCheckUtils.isNumber(e) ? e : e(t), {
          max: l,
          min: n
        });
      });
    }
    return [d, {
      inc: reactFunctionMemoHook.useMemoizedCallback(function (e = 1) {
        h(function (t) {
          return t + e;
        });
      }),
      dec: reactFunctionMemoHook.useMemoizedCallback(function (e = 1) {
        h(function (t) {
          return t - e;
        });
      }),
      set: reactFunctionMemoHook.useMemoizedCallback(function (e) {
        h(e);
      }),
      reset: reactFunctionMemoHook.useMemoizedCallback(function () {
        h(e);
      })
    }];
  };
}