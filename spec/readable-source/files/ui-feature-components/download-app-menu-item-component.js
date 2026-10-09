// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'DownloadAppMenuItemComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43927.2698fd8a.js
         * chunkId: 43927
         * moduleId: 948880
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  require("button-component-export") /*id: 576887*/;
  var chatIconComponent = require("chat-icon-component") /*id: 758617*/;
  var appDownloadPopupMenu = require("app-download-popup-menu") /*id: 129268*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      className: t = ""
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let i = userInfoStatusSelectors.selectUserInfoSuccess_1();
    return reactJsxRuntimeCoreReexport.jsx(appDownloadPopupMenu.DownloadDropdown, {
      position: "right",
      pageIsLoggedIn: i,
      onVisibleChange: e => {
        if (e) {
          teaAnalyticsEventTracker.trackEvent("menu_click", {
            button_name: "download_mobile_app"
          });
        }
      },
      onAndroidClick: () => {
        teaAnalyticsEventTracker.trackEvent("menu_click", {
          button_name: "download_android_app"
        });
      },
      onIosClick: () => {
        teaAnalyticsEventTracker.trackEvent("menu_click", {
          button_name: "download_ios_app"
        });
      },
      children: e => reactJsxRuntimeCoreReexport.jsxs("div", {
        className: r("flex items-center gap-8", t),
        "data-testid": "download_app_item",
        onClick: e,
        children: [reactJsxRuntimeCoreReexport.jsx(chatIconComponent.ChatIcon, {
          className: "size-16"
        }), reactJsxRuntimeCoreReexport.jsx("p", {
          className: "mr-8",
          children: n("navbar_download_mobileApp_button_title")
        })]
      })
    });
  };
  require.d(exports, {
    DownloadAppMenuItemComponent: function () {
      return p;
    }
  });
}