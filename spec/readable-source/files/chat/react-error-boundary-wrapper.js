// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Pf' to 'withErrorBoundary'
// - Renamed export 'SV' to 'ErrorBoundary'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 939224
         */
module.exports = function (module, exports, require) {
  var reactErrorBoundary = require("react-error-boundary") /*id: 528804*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let o = reactCoreLibraryReexport.createContext(null);
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatTargetTypes = require("chat-target-types") /*id: 909338*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = (e, t) => {
    let {
      fallback: n,
      fallbackRender: i,
      FallbackComponent: r
    } = t;
    let o = r ? t => reactJsxRuntimeCoreReexport.jsx(r, {
      ...t,
      from: `${e}(ErrorBoundaryName)`
    }) : r;
    let a = i ? t => i({
      ...t,
      from: `${e}(ErrorBoundaryName)`
    }) : i;
    return {
      ...t,
      fallback: n,
      FallbackComponent: o,
      fallbackRender: a
    };
  };
  let c = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      onError: n,
      errorBoundaryName: c,
      logger: d,
      children: h,
      errorBoundaryScope: m = chatTargetTypes.chatTargetTypes.Component,
      meta: g,
      ...f
    } = e;
    let p = function (e) {
      let {
        allowNull: t = false
      } = e || {};
      let n = reactCoreLibraryReexport.useContext(o);
      if (!t && !n) {
        throw Error("expect logger in LoggerContext but not found");
      }
      return n;
    }({
      allowNull: true
    });
    let _ = d || p || loggerServiceCore.defaultLogger;
    let v = reactCoreLibraryReexport.useCallback((e, t) => {
      let {
        componentStack: i
      } = t;
      let o = e.cause;
      let a = {
        reportJsError: o == null || !o.isNotError,
        errorBoundaryName: c,
        errorBoundaryScope: m,
        reactInfo: {
          componentStack: i,
          version: reactCoreLibraryReexport.version
        },
        ...g
      };
      if (_ != null) {
        _.persist.error({
          eventName: "boundary_on_error",
          error: e,
          meta: a
        });
      }
      if (n != null) {
        n(e, t);
      }
    }, []);
    let b = u(c, f);
    return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundary.ErrorBoundary, {
      ...b,
      onError: v,
      ref: t,
      children: h
    });
  });
  function d(e, t) {
    let n = n => reactJsxRuntimeCoreReexport.jsx(c, {
      ...t,
      children: reactJsxRuntimeCoreReexport.jsx(e, {
        ...n
      })
    });
    let i = e.displayName || e.name || "Unknown";
    n.displayName = `withErrorBoundary(${i})`;
    return n;
  }
  c.displayName = "ErrorBoundary";
  require.d(exports, {
    withErrorBoundary: function () {
      return d;
    },
    ErrorBoundary: function () {
      return c;
    }
  });
}