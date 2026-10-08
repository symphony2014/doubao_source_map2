// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ec' to 'useComponentLocale'
// - Renamed export 'IJ' to 'useClassName'
// - Renamed export 'VB' to 'useComponentSize'
// - Renamed export 'bU' to 'useLocale'
// - Renamed export 'gm' to 'useDirection'
// - Renamed export 'h9' to 'usePopupContainer'
// - Renamed export 'nm' to 'useSizeContext'
// - Renamed export 'q8' to 'generateClassName'
// - Renamed export 'rx' to 'usePrefixCls'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 157
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  var uiGlobalConfigContext = require("ui-global-config-context") /*id: 698735*/;
  var sizeContextProvider = require("size-context-provider") /*id: 415555*/;
  function s() {
    return reactContextSelector.useContextSelector(uiGlobalConfigContext.UiGlobalConfigContext, function (e) {
      return e.componentSize;
    });
  }
  function c() {
    return reactContextSelector.useContextValue(sizeContextProvider.SizeContext);
  }
  function u() {
    return reactContextSelector.useContextSelector(uiGlobalConfigContext.UiGlobalConfigContext, function (e) {
      return e.rootPrefixCls;
    });
  }
  function d(e, n, r) {
    return function (i = "") {
      if (r) {
        return `${r}${i}`;
      } else {
        return `${e}__${n}${i}`;
      }
    };
  }
  function f(e, n) {
    var r = u();
    return reactCoreLibraryReexport.useMemo(function () {
      return d(r, e, n);
    }, [r, n, e]);
  }
  function m() {
    return reactContextSelector.useContextSelector(uiGlobalConfigContext.UiGlobalConfigContext, function (e) {
      return e.direction;
    });
  }
  function h() {
    return reactContextSelector.useContextSelector(uiGlobalConfigContext.UiGlobalConfigContext, function (e) {
      return e.getPopupContainer;
    });
  }
  function p() {
    return reactContextSelector.useContextSelector(uiGlobalConfigContext.UiGlobalConfigContext, function (e) {
      return e.locale;
    });
  }
  function v(e) {
    var n = p();
    return reactCoreLibraryReexport.useMemo(function () {
      return n.components[e];
    }, [e, n.components]);
  }
  require.d(exports, {
    useComponentLocale: function () {
      return v;
    },
    useClassName: function () {
      return f;
    },
    useComponentSize: function () {
      return s;
    },
    useLocale: function () {
      return p;
    },
    useDirection: function () {
      return m;
    },
    usePopupContainer: function () {
      return h;
    },
    useSizeContext: function () {
      return c;
    },
    generateClassName: function () {
      return d;
    },
    usePrefixCls: function () {
      return u;
    }
  });
}