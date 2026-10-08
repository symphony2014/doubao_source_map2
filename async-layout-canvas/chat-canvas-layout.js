// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'ChatCanvasLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 370373
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var n = classnamesUtils;
  var docSkeletonPanel = require("doc-skeleton-panel") /*id: 779323*/;
  var layoutPositionOrders = require("layout-position-orders") /*id: 314031*/;
  var layoutSizeConstants = require("layout-size-constants") /*id: 416118*/;
  var responsiveControlBarHeaderWrapper = require("responsive-control-bar-header-wrapper") /*id: 550014*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = e => {
    let {
      className: t,
      style: a,
      delay: s = false
    } = e;
    let [x, v] = reactCoreLibraryReexport.useState(s === false);
    let _ = i18nTranslationUtils.useTranslationWithFallback();
    let b = [{
      key: "leave",
      zone: layoutPositionOrders.LayoutPositions.RightFirst,
      modifier: [{
        type: "icon",
        icon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {}),
        tooltip: _("confirm_button_yes"),
        extraProps: {
          "data-testid": "container_inner_close_btn"
        },
        onClick: () => {
          chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
        }
      }],
      getWidth: () => layoutSizeConstants.layoutMaxSize
    }];
    reactCoreLibraryReexport.useEffect(() => {
      if (userAgentDeviceDetector.isMobile()) {
        chatStoreManager.getStore("chatViewCanvasStore").setState(immerCoreImplementation.produce(e => {
          e.canvasLayoutState = chatPanelModes.PanelMode.CANVAS_ONLY;
        }));
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (s === false) {
        return;
      }
      let e = window.setTimeout(() => {
        v(true);
      }, isNumberUtil.isNumber(s) ? s : 1000);
      return () => {
        clearTimeout(e);
      };
    }, []);
    if (x) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: n("container-Mp4I9q", t),
        style: a,
        children: [reactJsxRuntimeCoreReexport.jsx(responsiveControlBarHeaderWrapper.ResponsiveControlBarHeader, {
          className: "header-jH18XY",
          bottomBorder: false,
          plugins: b
        }), reactJsxRuntimeCoreReexport.jsx(docSkeletonPanel.DocSkeletonPanel, {
          className: "content-v1LCig"
        })]
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    ChatCanvasLayout: function () {
      return x;
    }
  });
}