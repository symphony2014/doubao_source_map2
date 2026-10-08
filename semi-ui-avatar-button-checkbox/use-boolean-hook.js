// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useBoolean'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-ai-creation-guidance.67ffc317.js
         * chunkId: 15933
         * moduleId: 240989
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function o(e = false, t) {
    var n = typescriptRuntimeHelpers.spreadArray(reactCoreLibraryReexport.useState(e), 2);
    var o = n[0];
    var a = n[1];
    return [o, reactCoreLibraryReexport.useMemo(function () {
      var n = t === undefined ? !e : t;
      return {
        toggle: function () {
          return a(function (t) {
            if (t === e) {
              return n;
            } else {
              return e;
            }
          });
        },
        set: function (e) {
          return a(e);
        },
        setLeft: function () {
          return a(e);
        },
        setRight: function () {
          return a(n);
        }
      };
    }, [])];
  }
  function a(e = false) {
    var t = typescriptRuntimeHelpers.spreadArray(o(!!e), 2);
    var n = t[0];
    var a = t[1];
    var s = a.toggle;
    var l = a.set;
    return [n, reactCoreLibraryReexport.useMemo(function () {
      return {
        toggle: s,
        set: function (e) {
          return l(!!e);
        },
        setTrue: function () {
          return l(true);
        },
        setFalse: function () {
          return l(false);
        }
      };
    }, [])];
  }
  require.d(exports, {
    useBoolean: function () {
      return a;
    }
  });
}