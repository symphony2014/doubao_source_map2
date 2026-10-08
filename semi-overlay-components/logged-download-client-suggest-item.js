// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'brandNameConstants'
// - Resolved require(63170) to 'brand-name-constants'
// - Renamed variable 'r' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'arrowRightIcon_1'
// - Resolved require(851073) to 'arrow-right-icon_1'
// - Renamed variable 'a' to 'desktopDownloadFeatures'
// - Resolved require(365311) to 'desktop-download-features'
// - Renamed variable 'l' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'd' to 'asyncRetryUtils'
// - Resolved require(374795) to 'async-retry-utils'
// - Renamed variable 'c' to 'uiPositionWrappers'
// - Resolved require(711067) to 'ui-position-wrappers'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(67480) to 'react-ui-components'
// - Resolved require.bind(493459) to 'download-notification-card-component'
// - Renamed variable 'g' to 'downloadActionTracker'
// - Resolved require(671471) to 'download-action-tracker'
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'AD' to 'retryWithFallback' (module 374795)
// - Updated imported property 'ck' to 'popoverWrapper' (module 711067)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'fz' to 'getBrandName' (module 63170)
// - Updated imported property 'd' to 'downloadFeatures' (module 365311)
// - Updated imported property 'Z' to 'DownloadAction' (module 671471)
// - Updated imported property 'Z' to 'ArrowRightIcon' (module 851073)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 93626.1184bf1a.js
         * chunkId: 93626
         * moduleId: 542628
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var brandNameConstants = require("brand-name-constants") /*id: 63170*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var arrowRightIcon_1 = require("arrow-right-icon_1") /*id: 851073*/;
  var desktopDownloadFeatures = require("desktop-download-features") /*id: 365311*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var uiPositionWrappers = require("ui-position-wrappers") /*id: 711067*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: () => require.e("react-ui-components") /*id: 67480*/.then(require.bind(require, "download-notification-card-component") /*id: 493459*/)
  })), () => reactJsxRuntimeCoreReexport.jsx("div", {
    className: "w-320 h-372"
  }));
  let p = e => {
    let {
      button: t,
      position: n,
      infoIdx: i = 0
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(uiPositionWrappers.popoverWrapper, {
      position: n ?? "bottom",
      arrowPointAtCenter: false,
      stopPropagation: true,
      content: reactJsxRuntimeCoreReexport.jsx(u, {
        infoIdx: i
      }),
      className: "header-download-btn !p-0",
      zIndex: 1000,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        children: t
      })
    });
  };
  var downloadActionTracker = require("download-action-tracker") /*id: 671471*/;
  let f = e => {
    let {
      utmSource: t,
      showFrom: n,
      chatCount: l = 0
    } = e;
    let d = i18nTranslationUtils.useTranslationWithFallback();
    let c = brandNameConstants.getBrandName();
    let u = reactCoreLibraryReexport.useMemo(() => {
      return Math.floor(l % (desktopDownloadFeatures.downloadFeatures?.length ?? 1));
    }, [l]);
    let f = desktopDownloadFeatures.downloadFeatures[u].icon;
    let m = d(desktopDownloadFeatures.downloadFeatures[u].btnText, {
      brandName: c
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "popoverWrapper-s5fVGK",
      children: reactJsxRuntimeCoreReexport.jsx(p, {
        position: "right",
        infoIdx: u,
        button: reactJsxRuntimeCoreReexport.jsx(downloadActionTracker.DownloadAction, {
          utmSource: t,
          trackMeta: {
            showFrom: n,
            popup_head: m
          },
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "suggestBtnWrapper-Av2zW_",
            "data-testid": "after_message_download_desktop_button",
            children: [f && reactJsxRuntimeCoreReexport.jsx(f, {}), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "mr-4 ml-6 text-s-color-text-secondary s-font-small",
              children: d(desktopDownloadFeatures.downloadFeatures[u].btnText, {
                brandName: c
              })
            }), reactJsxRuntimeCoreReexport.jsx(arrowRightIcon_1.ArrowRightIcon, {
              className: "p-2 text-12"
            })]
          })
        })
      })
    });
  };
  var m = f;
  require.r(exports);
  require.d(exports, {
    LoggedDownloadClientSuggestItem: function () {
      return f;
    },
    default: function () {
      return m;
    }
  });
}