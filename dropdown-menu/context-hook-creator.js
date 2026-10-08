// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'createContextHook'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_send_to_chat.7c9030fe.js
         * chunkId: 82045
         * moduleId: 46755
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function n(e) {
    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      strict: true
    };
    var l = s.customizedContextMethods?.createContext ?? reactCoreLibraryReexport.createContext;
    var c = s.customizedContextMethods?.useContext ?? reactCoreLibraryReexport.useContext;
    var u = s.customizedContextMethods?.useContextSelector;
    function d(t) {
      return function r(i) {
        if (!u) {
          var n;
          var a = Error(`useContextSelector(${e}): \`useContextSelector\` is undefined. Seems you forgot to pass customizedContextMethods.`);
          a.name = "ContextError";
          if ((n = Error.captureStackTrace) !== null && n !== undefined) {
            n.call(Error, a, r);
          }
          throw a;
        }
        if (u == null) {
          return undefined;
        } else {
          return u(t, function (t) {
            if (!t) {
              var r;
              var n = Error(`useContextSelector(${e}): \`context\` is undefined. Seems you forgot to wrap component within the Provider`);
              n.name = "ContextError";
              if ((r = Error.captureStackTrace) !== null && r !== undefined) {
                r.call(Error, n, u);
              }
              throw n;
            }
            return i(t);
          });
        }
      };
    }
    if (!s.strict) {
      var p = l(s.defaultValue);
      p.displayName = e;
      return {
        Provider: p.Provider,
        useContext: function () {
          return c(p);
        },
        useContextSelector: d(p)
      };
    }
    var _ = l(null);
    _.displayName = e;
    return {
      Provider: _.Provider,
      useContext: function t() {
        var r = c(_);
        if (!r) {
          var i;
          var n = Error(`useContext(${e}): \`context\` is undefined. Seems you forgot to wrap component within the Provider`);
          n.name = "ContextError";
          if ((i = Error.captureStackTrace) !== null && i !== undefined) {
            i.call(Error, n, t);
          }
          throw n;
        }
        return r;
      },
      useContextSelector: d(_)
    };
  }
  require.d(exports, {
    createContextHook: function () {
      return n;
    }
  });
}