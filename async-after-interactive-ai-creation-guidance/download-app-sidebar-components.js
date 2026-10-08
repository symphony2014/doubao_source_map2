// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'QC' to 'DownloadAppButton'
// - Renamed export 'c2' to 'DownloadAppMenuItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 789871
         */
module.exports = function (module, exports, require) {
  var chatUiConfigRenderer = require("chat-ui-config-renderer") /*id: 757047*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlMobileIcon = require("rtl-mobile-icon") /*id: 479670*/;
  var arrowRightRtlIcon = require("arrow-right-rtl-icon") /*id: 371018*/;
  var downloadIconComponent_1 = require("download-icon-component_1") /*id: 70938*/;
  var appDownloadPopupMenu = require("app-download-popup-menu") /*id: 129268*/;
  require("xss-content-sanitizer") /*id: 508971*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  let f = () => {
    let e = function () {
      let e = userAgentDeviceDetector.isAppleDevice() ? "46006057a" : "46006058a";
      return `doubao://?gd_label=click_schema_lhft_${e}&needlaunchlog=1`;
    }();
    require.e("webpack-bundle-analysis-utility") /*id: 97038*/.then(require.bind(require, "scheme-launch-handler") /*id: 664457*/).then(t => {
      t.default({
        link: "https://zlinkurl.cn/JYUPR",
        scheme: e,
        disableLinkLaunch: true,
        schemeWaitTime: 1500
      });
    });
  };
  var downloadAppMenuItemComponent = require("download-app-menu-item-component") /*id: 948880*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = chatUiConfigRenderer.chatConfigRenderer(e => {
    let {
      className: t = ""
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let i = userInfoStatusSelectors.selectUserInfoSuccess_1();
    return reactJsxRuntimeCoreReexport.jsx(appDownloadPopupMenu.DownloadPopover, {
      position: "left",
      stopPropagation: true,
      spacing: 8,
      style: {
        borderRadius: 12,
        overflow: "hidden"
      },
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
      children: e => reactJsxRuntimeCoreReexport.jsxs("button", {
        className: `
            flex w-full min-w-192 cursor-pointer items-center gap-8 rounded-8
            border-none bg-transparent py-8 pr-10 pl-12 text-14 font-medium
            text-s-color-text-secondary s-font-small-strong
            hover:bg-s-color-bg-trans
            ${t}
          `,
        "data-testid": "download_app_item",
        onClick: e,
        children: [reactJsxRuntimeCoreReexport.jsx(rtlMobileIcon.RtlMobileIcon, {
          className: "text-16"
        }), reactJsxRuntimeCoreReexport.jsx("p", {
          className: "flex-1 text-left",
          children: n("navbar_download_mobileApp_button_title")
        }), reactJsxRuntimeCoreReexport.jsx(arrowRightRtlIcon.ArrowRightRtlIcon, {
          className: "p-2 text-12 text-s-color-text-quaternary"
        })]
      })
    });
  }, downloadAppMenuItemComponent.DownloadAppMenuItemComponent, "sidebarV2");
  let g = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
      type: "tertiary",
      size: "medium",
      className: "text-s-font-base-strong flex items-center justify-center !rounded-12 border-0",
      icon: reactJsxRuntimeCoreReexport.jsx(downloadIconComponent_1.DownloadIcon, {
        className: "p-2 !text-18"
      }),
      onClick: () => {
        f();
      },
      children: e("web_download_app")
    });
  };
  require.d(exports, {
    DownloadAppButton: function () {
      return g;
    },
    DownloadAppMenuItem: function () {
      return v;
    }
  });
}