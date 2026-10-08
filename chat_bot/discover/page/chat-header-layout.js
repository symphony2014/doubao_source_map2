// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'ChatHeaderLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 403584
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var headerLayoutComponent = require("header-layout-component") /*id: 949835*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatHeaderToolButtonRenderer = require("chat-header-tool-button-renderer") /*id: 17734*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useDebouncedValueHook = require("use-debounced-value-hook") /*id: 510920*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var spaceLayoutComponent = require("space-layout-component") /*id: 765807*/;
  var chatSidebarStateManager = require("chat-sidebar-state-manager") /*id: 496970*/;
  var sidebarToggleButton = require("sidebar-toggle-button") /*id: 519963*/;
  var g = "stale-invisible-LSUbUU";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = e => {
    let {
      chatId: t,
      chatType: n,
      left: i,
      right: x,
      className: b,
      leftToolButtonPluginList: w,
      rightToolButtonPluginList: y
    } = e;
    let S = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let C = userInfoStatusSelectors.selectUserInfoFailed();
    let N = chatSidebarStateManager.useSidebarExpandState();
    let {
      isRightBarExpand: j
    } = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => {
      let {
        isExpand: t,
        canvasLayoutState: n
      } = e;
      return {
        isRightBarExpand: t,
        isRightNarrowMode: t && n === chatPanelModes.PanelMode.NARROW_SIDE_PANEL
      };
    }, deepEqualityUtil_1.isDeepEqual);
    let M = useDebouncedValueHook.useDebouncedValue(j, {
      wait: 300
    }) !== j;
    let k = n === chatConversationTypes.ConversationTypes.Conversation ? t : undefined;
    let T = responsiveScreenHooks.useIsNarrowScreen();
    let L = y == null ? undefined : y.map(e => reactJsxRuntimeCoreReexport.jsx(chatHeaderToolButtonRenderer.HeaderToolButton, {
      pluginIdentifer: e,
      conversationId: k,
      chatType: n,
      isLeftSideExpand: N,
      isRightBarExpand: j,
      isNarrowScreen: T
    }, String(e)));
    return reactJsxRuntimeCoreReexport.jsx(headerLayoutComponent.HeaderLayout, {
      className: a("absolute z-10 pointer-events-none", "simple-header-Fcf6D7", b),
      leftClassName: a("flex-1 !min-w-0 overflow-hidden", {
        [g]: M
      }),
      rightClassName: a({
        [g]: M
      }),
      autoCenter: false,
      left: i ?? reactJsxRuntimeCoreReexport.jsxs(spaceLayoutComponent.Space, {
        spacing: 12,
        className: `
              pointer-events-auto w-full pl-20
              empty:hidden
            `,
        children: [reactJsxRuntimeCoreReexport.jsx(sidebarToggleButton.SidebarToggleButton, {
          isNarrowScreen: T,
          isRightBarExpand: j,
          isLeftSideExpand: N
        }), w == null ? undefined : w.map(e => reactJsxRuntimeCoreReexport.jsx(chatHeaderToolButtonRenderer.HeaderToolButton, {
          pluginIdentifer: e,
          conversationId: k,
          chatType: n,
          isLeftSideExpand: N,
          isRightBarExpand: j,
          isNarrowScreen: T
        }, String(e))), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "min-w-0 flex-1"
        })]
      }),
      right: x ?? (S ? reactJsxRuntimeCoreReexport.jsx(spaceLayoutComponent.Space, {
        spacing: 12,
        className: "pointer-events-auto pr-20",
        children: reactJsxRuntimeCoreReexport.jsx(spaceLayoutComponent.Space, {
          spacing: 8,
          children: L
        })
      }) : C ? reactJsxRuntimeCoreReexport.jsx(spaceLayoutComponent.Space, {
        className: "pointer-events-auto pr-16",
        children: L
      }) : null)
    });
  };
  require.d(exports, {
    ChatHeaderLayout: function () {
      return x;
    }
  });
}