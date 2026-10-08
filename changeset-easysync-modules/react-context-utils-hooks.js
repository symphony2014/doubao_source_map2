// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ec' to 'useComponentLocale'
// - Renamed export 'IJ' to 'useComponentClass'
// - Renamed export 'VB' to 'useComponentSize'
// - Renamed export 'bU' to 'useLocale'
// - Renamed export 'h9' to 'usePopupContainer'
// - Renamed export 'nm' to 'useSizeContext'
// - Renamed export 'q8' to 'useComponentClassBuilder'
// - Renamed export 'rx' to 'useRootPrefixCls'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 618670
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactContextSelector = require("react-context-selector") /*id: 65860*/;
  var enUsLocaleContext = require("en-us-locale-context") /*id: 812811*/;
  var sizeContextProvider_1 = require("size-context-provider_1") /*id: 686769*/;
  function a() {
    return reactContextSelector.useContextSelector(enUsLocaleContext.EnUsLocaleContext, function (t) {
      return t.componentSize;
    });
  }
  function u() {
    return reactContextSelector.useContextValue(sizeContextProvider_1.SizeContext);
  }
  function c() {
    return reactContextSelector.useContextSelector(enUsLocaleContext.EnUsLocaleContext, function (t) {
      return t.rootPrefixCls;
    });
  }
  function l(t, e, n) {
    return function (r = "") {
      if (n) {
        return `${n}${r}`;
      } else {
        return `${t}__${e}${r}`;
      }
    };
  }
  function p(t, e) {
    var n = c();
    return reactCoreLibraryReexport.useMemo(function () {
      return l(n, t, e);
    }, [n, e, t]);
  }
  function h() {
    return reactContextSelector.useContextSelector(enUsLocaleContext.EnUsLocaleContext, function (t) {
      return t.getPopupContainer;
    });
  }
  function f() {
    return reactContextSelector.useContextSelector(enUsLocaleContext.EnUsLocaleContext, function (t) {
      return t.locale;
    });
  }
  function d(t) {
    var e = f();
    return reactCoreLibraryReexport.useMemo(function () {
      return e.components[t];
    }, [t, e.components]);
  }
  require.d(exports, {
    useComponentLocale: function () {
      return d;
    },
    useComponentClass: function () {
      return p;
    },
    useComponentSize: function () {
      return a;
    },
    useLocale: function () {
      return f;
    },
    usePopupContainer: function () {
      return h;
    },
    useSizeContext: function () {
      return u;
    },
    useComponentClassBuilder: function () {
      return l;
    },
    useRootPrefixCls: function () {
      return c;
    }
  });
}