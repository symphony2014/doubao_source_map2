// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'localeThemeContext'
// - Resolved require(174017) to 'locale-theme-context'
// - Renamed variable 'i' to 'reactLoadableComponent'
// - Resolved require(35867) to 'react-loadable-component'
// - Resolved require.e(46126) to 'forbidden-action-manager-localization'
// - Resolved require.bind(32790) to 'attach-forbidden-placeholder'
// - Resolved require.e(46126) to 'forbidden-action-manager-localization'
// - Resolved require.bind(32790) to 'attach-forbidden-placeholder'
// - Resolved require.e(46126) to 'forbidden-action-manager-localization'
// - Resolved require.bind(32790) to 'attach-forbidden-placeholder'
// - Resolved require.e(46126) to 'forbidden-action-manager-localization'
// - Resolved require.bind(32790) to 'attach-forbidden-placeholder'
// - Renamed variable 's' to 'i18nInitializationUtils'
// - Resolved require(379142) to 'i18n-initialization-utils'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'iV' to 'ThemeProvider' (module 174017)
// - Updated imported property 'Kd' to 'getDefaultLocale' (module 379142)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: cac-placeholder.51604e75.js
         * chunkId: 10423
         * moduleId: 212191
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var localeThemeContext = require("locale-theme-context") /*id: 174017*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var d = reactLoadableComponent;
  let a = d({
    loader: () => require.e("forbidden-action-manager-localization") /*id: 46126*/.then(require.bind(require, "attach-forbidden-placeholder") /*id: 32790*/),
    loading: () => null,
    render: (e, n) => {
      let {
        AttachPreviewForbiddenComp: t
      } = e;
      return reactCoreLibraryReexport.createElement(t, Object.assign({}, n));
    }
  });
  let c = d({
    loader: () => require.e("forbidden-action-manager-localization") /*id: 46126*/.then(require.bind(require, "attach-forbidden-placeholder") /*id: 32790*/),
    loading: () => null,
    render: (e, n) => {
      let {
        AttachPrintForbiddenComp: t
      } = e;
      return reactCoreLibraryReexport.createElement(t, Object.assign({}, n));
    }
  });
  let o = d({
    loader: () => require.e("forbidden-action-manager-localization") /*id: 46126*/.then(require.bind(require, "attach-forbidden-placeholder") /*id: 32790*/),
    loading: () => null,
    render: (e, n) => {
      let {
        AttachExportForbiddenComp: t
      } = e;
      return reactCoreLibraryReexport.createElement(t, Object.assign({}, n));
    }
  });
  let u = d({
    loader: () => require.e("forbidden-action-manager-localization") /*id: 46126*/.then(require.bind(require, "attach-forbidden-placeholder") /*id: 32790*/),
    loading: () => null,
    render: (e, n) => {
      let {
        AttachPreviewBtnForbiddenComp: t
      } = e;
      return reactCoreLibraryReexport.createElement(t, Object.assign({}, n));
    }
  });
  var i18nInitializationUtils = require("i18n-initialization-utils") /*id: 379142*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = e => reactJsxRuntimeCoreReexport.jsx(localeThemeContext.ThemeProvider, {
    locale: i18nInitializationUtils.getDefaultLocale(),
    children: reactJsxRuntimeCoreReexport.jsx(a, {
      ...e
    })
  });
  let j = () => reactJsxRuntimeCoreReexport.jsx(localeThemeContext.ThemeProvider, {
    locale: i18nInitializationUtils.getDefaultLocale(),
    children: reactJsxRuntimeCoreReexport.jsx(c, {})
  });
  let _ = () => reactJsxRuntimeCoreReexport.jsx(localeThemeContext.ThemeProvider, {
    locale: i18nInitializationUtils.getDefaultLocale(),
    children: reactJsxRuntimeCoreReexport.jsx(o, {})
  });
  let A = e => reactJsxRuntimeCoreReexport.jsx(localeThemeContext.ThemeProvider, {
    locale: i18nInitializationUtils.getDefaultLocale(),
    children: reactJsxRuntimeCoreReexport.jsx(u, {
      ...e
    })
  });
  require.r(exports);
  require.d(exports, {
    AttachPrintForbidden: function () {
      return j;
    },
    AttachExportForbidden: function () {
      return _;
    },
    AttachPreviewForbidden: function () {
      return b;
    },
    AttachPreviewBtnForbidden: function () {
      return A;
    }
  });
}