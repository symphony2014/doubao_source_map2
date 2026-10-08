// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'SidebarToggleButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 519963
         */
module.exports = function (module, exports, require) {
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var semiButtonWrapperComponent = require("semi-button-wrapper-component") /*id: 654274*/;
  var rtlDocumentIcon = require("rtl-document-icon") /*id: 5821*/;
  var chatSidebarStateManager = require("chat-sidebar-state-manager") /*id: 496970*/;
  var chatLayoutResponsiveHooks = require("chat-layout-responsive-hooks") /*id: 833112*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      isLeftSideExpand: t,
      isRightBarExpand: n
    } = e;
    let {
      visible: d,
      isSidebarResponsiveHide: c
    } = chatLayoutResponsiveHooks.useSidebarVisibility({
      isLeftSideExpand: t,
      isRightBarExpand: n
    });
    if (d) {
      return reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperComponent.SemiButtonWrapper, {
        "data-testid": "siderbar_closed_status_btn",
        className: "h-28 w-28 rounded-s-radius-xs p-0",
        theme: "borderless",
        icon: reactJsxRuntimeCoreReexport.jsx(rtlDocumentIcon.RtlDocumentIcon, {
          className: "text-20 text-s-color-text-secondary"
        }),
        onClick: () => {
          if (c) {
            chatSidebarStateManager.toggleMobileSidebarExpand();
          } else {
            teaAnalyticsEventTracker.trackEvent("sidebar_showstatus_change", {
              after_click_status: "open"
            });
            chatSidebarStateManager.updateSidebarExpand(true);
          }
        }
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    SidebarToggleButton: function () {
      return d;
    }
  });
}