// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'localeThemeContext'
// - Resolved require(174017) to 'locale-theme-context'
// - Renamed variable 'i' to 'reactLoadableComponent'
// - Resolved require(35867) to 'react-loadable-component'
// - Resolved require.e(89490) to 'attachment-dlp-placeholder-ui'
// - Resolved require.bind(129962) to 'dlp-attachment-placeholders'
// - Resolved require.e(89490) to 'attachment-dlp-placeholder-ui'
// - Resolved require.bind(129962) to 'dlp-attachment-placeholders'
// - Renamed variable 'u' to 'i18nInitializationUtils'
// - Resolved require(379142) to 'i18n-initialization-utils'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'iV' to 'ThemeProvider' (module 174017)
// - Updated imported property 'Kd' to 'getDefaultLocale' (module 379142)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: dlp-placeholder.0eb4baed.js
         * chunkId: 60174
         * moduleId: 188530
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var localeThemeContext = require("locale-theme-context") /*id: 174017*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var d = reactLoadableComponent;
  let a = d({
    loader: () => require.e("attachment-dlp-placeholder-ui") /*id: 89490*/.then(require.bind(require, "dlp-attachment-placeholders") /*id: 129962*/),
    loading: () => null,
    render: (e, n) => {
      let {
        AttachDLPPreviewForbiddenComp: t
      } = e;
      return reactCoreLibraryReexport.createElement(t, Object.assign({}, n));
    }
  });
  let c = d({
    loader: () => require.e("attachment-dlp-placeholder-ui") /*id: 89490*/.then(require.bind(require, "dlp-attachment-placeholders") /*id: 129962*/),
    loading: () => null,
    render: (e, n) => {
      let {
        AttachDLPDeleteComp: t
      } = e;
      return reactCoreLibraryReexport.createElement(t, Object.assign({}, n));
    }
  });
  var i18nInitializationUtils = require("i18n-initialization-utils") /*id: 379142*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = () => reactJsxRuntimeCoreReexport.jsx(localeThemeContext.ThemeProvider, {
    locale: i18nInitializationUtils.getDefaultLocale(),
    children: reactJsxRuntimeCoreReexport.jsx(a, {})
  });
  let _ = () => reactJsxRuntimeCoreReexport.jsx(localeThemeContext.ThemeProvider, {
    locale: i18nInitializationUtils.getDefaultLocale(),
    children: reactJsxRuntimeCoreReexport.jsx(c, {})
  });
  require.r(exports);
  require.d(exports, {
    DLPDeleted: function () {
      return _;
    },
    DLPPreviewForbidden: function () {
      return s;
    }
  });
}