// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'createContextWithSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 603139
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function o(e) {
    var u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      strict: true
    };
    var c = u.customizedContextMethods?.createContext ?? reactCoreLibraryReexport.createContext;
    var l = u.customizedContextMethods?.useContext ?? reactCoreLibraryReexport.useContext;
    var s = u.customizedContextMethods?.useContextSelector;
    function f(n) {
      return function t(r) {
        if (!s) {
          var o;
          var i = Error(`useContextSelector(${e}): \`useContextSelector\` is undefined. Seems you forgot to pass customizedContextMethods.`);
          i.name = "ContextError";
          if ((o = Error.captureStackTrace) !== null && o !== undefined) {
            o.call(Error, i, t);
          }
          throw i;
        }
        if (s == null) {
          return undefined;
        } else {
          return s(n, function (n) {
            if (!n) {
              var t;
              var o = Error(`useContextSelector(${e}): \`context\` is undefined. Seems you forgot to wrap component within the Provider`);
              o.name = "ContextError";
              if ((t = Error.captureStackTrace) !== null && t !== undefined) {
                t.call(Error, o, s);
              }
              throw o;
            }
            return r(n);
          });
        }
      };
    }
    if (!u.strict) {
      var d = c(u.defaultValue);
      d.displayName = e;
      return {
        Provider: d.Provider,
        useContext: function () {
          return l(d);
        },
        useContextSelector: f(d)
      };
    }
    var p = c(null);
    p.displayName = e;
    return {
      Provider: p.Provider,
      useContext: function n() {
        var t = l(p);
        if (!t) {
          var r;
          var o = Error(`useContext(${e}): \`context\` is undefined. Seems you forgot to wrap component within the Provider`);
          o.name = "ContextError";
          if ((r = Error.captureStackTrace) !== null && r !== undefined) {
            r.call(Error, o, n);
          }
          throw o;
        }
        return t;
      },
      useContextSelector: f(p)
    };
  }
  require.d(exports, {
    createContextWithSelector: function () {
      return o;
    }
  });
}