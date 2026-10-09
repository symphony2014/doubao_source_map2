// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConversationTypes'
// - Resolved require(93192) to 'chat-conversation-types'
// - Renamed variable 'i' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'o' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'a' to 'reactErrorBoundaryWrapper'
// - Resolved require(939224) to 'react-error-boundary-wrapper'
// - Renamed variable 's' to 'chatTargetTypes'
// - Resolved require(909338) to 'chat-target-types'
// - Renamed variable 'l' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'c' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'u' to 'chatCanvasLayoutHook'
// - Resolved require(342022) to 'chat-canvas-layout-hook'
// - Renamed variable 'h' to 'chatLayoutResponsiveHooks'
// - Resolved require(833112) to 'chat-layout-responsive-hooks'
// - Renamed variable 'p' to 'chatHeaderToolButtonRenderer'
// - Resolved require(17734) to 'chat-header-tool-button-renderer'
// - Renamed variable 'f' to 'buttonComponentExport'
// - Resolved require(576887) to 'button-component-export'
// - Renamed variable 'm' to 'arrowLeftIcon_1'
// - Resolved require(490368) to 'arrow-left-icon_1'
// - Renamed variable 'g' to 'sidebarStatusUpdateLogger'
// - Resolved require(140188) to 'sidebar-status-update-logger'
// - Renamed variable 'v' to 'chatSidebarStateManager'
// - Resolved require(496970) to 'chat-sidebar-state-manager'
// - Renamed variable 'b' to 'cylinderIcon'
// - Resolved require(921361) to 'cylinder-icon'
// - Renamed variable 'y' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'S' to 'batchImageStoreLogic'
// - Resolved require(73795) to 'batch-image-store-logic'
// - Renamed variable '_' to 'chatMessageShareSelectStore'
// - Resolved require(764401) to 'chat-message-share-select-store'
// - Renamed variable 'E' to 'chatPluginMatcherRegistry'
// - Resolved require(107672) to 'chat-plugin-matcher-registry'
// - Renamed variable 'j' to 'chatPluginIocManager'
// - Resolved require(232752) to 'chat-plugin-ioc-manager'
// - Updated imported property 'd' to 'updateSidebarStatus' (module 140188)
// - Updated imported property 'GQ' to 'updateSidebarExpand' (module 496970)
// - Updated imported property 'Z' to 'Button' (module 576887)
// - Updated imported property 'V' to 'CylinderIcon' (module 921361)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'p' to 'useChatMediaQuery' (module 833112)
// - Updated imported property 'O' to 'useChatCanvasLayout' (module 342022)
// - Updated imported property 'R' to 'HeaderToolButton' (module 17734)
// - Updated imported property 'k' to 'ArrowLeftIcon' (module 490368)
// - Updated imported property 'S0' to 'imageStore' (module 73795)
// - Updated imported property 'p' to 'chatMessageShareSelectStore' (module 764401)
// - Updated imported property 'Vd' to 'useChatHeaderMatcher' (module 107672)
// - Updated imported property 'dh' to 'chatHeaderPluginHook' (module 232752)
// - Updated imported property 'z' to 'ConversationTypes' (module 93192)
// - Updated imported property 'SV' to 'ErrorBoundary' (module 939224)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'f' to 'chatTargetTypes' (module 909338)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-layout.adb7a8b6.js
         * chunkId: 36969
         * moduleId: 805113
         */
module.exports = function (module, exports, require) {
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactErrorBoundaryWrapper = require("react-error-boundary-wrapper") /*id: 939224*/;
  var chatTargetTypes = require("chat-target-types") /*id: 909338*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var d = classnamesUtils;
  var chatCanvasLayoutHook = require("chat-canvas-layout-hook") /*id: 342022*/;
  var chatLayoutResponsiveHooks = require("chat-layout-responsive-hooks") /*id: 833112*/;
  var chatHeaderToolButtonRenderer = require("chat-header-tool-button-renderer") /*id: 17734*/;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var arrowLeftIcon_1 = require("arrow-left-icon_1") /*id: 490368*/;
  var sidebarStatusUpdateLogger = require("sidebar-status-update-logger") /*id: 140188*/;
  var chatSidebarStateManager = require("chat-sidebar-state-manager") /*id: 496970*/;
  var cylinderIcon = require("cylinder-icon") /*id: 921361*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let w = e => {
    let {
      isSidebarResponsiveHide: t,
      isLeftSideExpand: n
    } = e;
    return () => {
      sidebarStatusUpdateLogger.updateSidebarStatus(t ? n ? "closed" : "mobile-suspense" : n ? "closed" : "open", "header_expand_button_click");
      if (!t) {
        chatSidebarStateManager.updateSidebarExpand(!n);
      }
    };
  };
  let x = e => {
    let t = w(e);
    let n = e.isLeftSideExpand ? "siderbar_close_btn" : "siderbar_closed_status_btn";
    return reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
      variant: "icon",
      size: "lg",
      className: "text-(--dbx-text-primary)",
      "data-testid": n,
      onClick: t,
      children: reactJsxRuntimeCoreReexport.jsx(cylinderIcon.CylinderIcon, {})
    });
  };
  let C = e => {
    let {
      conversationId: t,
      conversationType: n,
      leftToolButtonPlugins: r,
      centerToolButtonPlugins: o,
      rightToolButtonPlugins: a,
      isHomePage: s
    } = e;
    let c = chatStoreManager.useStoreSelector("flowWebLayoutStore", e => e.sidebarStatus);
    let g = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.isExpand);
    let v = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.isAllowFullCanvas);
    let b = chatLayoutResponsiveHooks.useChatMediaQuery(g);
    let w = c === "open";
    let {
      toggleWideScreen: C,
      isWideScreenMode: S,
      canToggleWideScreen: _
    } = chatCanvasLayoutHook.useChatCanvasLayout({
      conversationId: t,
      messageId: t
    });
    let E = s ? "chat" : undefined;
    let j = reactCoreLibraryReexport.useMemo(() => a == null ? undefined : a.map(e => reactJsxRuntimeCoreReexport.jsx(chatHeaderToolButtonRenderer.HeaderToolButton, {
      pluginIdentifer: e,
      conversationId: t,
      chatType: n,
      isLeftSideExpand: w,
      isRightBarExpand: g,
      isNarrowScreen: b,
      isSidebarResponsiveHide: b,
      currentPageName: E
    }, String(e))), [a, t, n, w, g, b]);
    let R = reactCoreLibraryReexport.useMemo(() => r == null ? undefined : r.map(e => reactJsxRuntimeCoreReexport.jsx(chatHeaderToolButtonRenderer.HeaderToolButton, {
      pluginIdentifer: e,
      conversationId: t,
      chatType: n,
      isLeftSideExpand: w,
      isRightBarExpand: g,
      isNarrowScreen: b,
      isSidebarResponsiveHide: b,
      currentPageName: E
    }, String(e))), [r, t, n, w, g, b]);
    let k = reactCoreLibraryReexport.useMemo(() => o == null ? undefined : o.map(e => reactJsxRuntimeCoreReexport.jsx(chatHeaderToolButtonRenderer.HeaderToolButton, {
      pluginIdentifer: e,
      conversationId: t,
      chatType: n,
      isLeftSideExpand: w,
      isRightBarExpand: g,
      isNarrowScreen: b,
      isSidebarResponsiveHide: b,
      currentPageName: E
    }, String(e))), [o, t, n, w, g, b]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `
        relative z-30 flex-row flex h-[var(--header-height)] w-full flex-none
        items-center border-b border-b-[var(--dbx-line-7)] px-16
      `,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: d("flex-row flex min-w-0 flex-1 gap-8 overflow-hidden"),
        children: [reactJsxRuntimeCoreReexport.jsx(x, {
          isSidebarResponsiveHide: b,
          isLeftSideExpand: b ? c === "mobile-suspense" : c === "open"
        }), R]
      }), (k == null ? undefined : k.length) ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex-row flex flex-1 justify-center gap-8",
        children: k
      }) : null, reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex-row flex flex-1 justify-end gap-8",
        children: [j, v && _ && !S && reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
          variant: "icon",
          size: "md",
          onClick: C,
          children: reactJsxRuntimeCoreReexport.jsx(arrowLeftIcon_1.ArrowLeftIcon, {
            className: "text-dbx-text-primary"
          })
        })]
      })]
    });
  };
  var batchImageStoreLogic = require("batch-image-store-logic") /*id: 73795*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  let R = e => {
    let {
      conversationId: t,
      conversationType: n
    } = e;
    let r = batchImageStoreLogic.imageStore(e => e.batchDownloadSelected);
    let i = chatMessageShareSelectStore.chatMessageShareSelectStore(e => e.isSelectMode);
    let o = chatMessageShareSelectStore.chatMessageShareSelectStore(e => e.scene);
    let {
      matcher: a
    } = chatPluginMatcherRegistry.useChatHeaderMatcher();
    let s = (a ?? []).map(e => e({
      threadSelected: i,
      threadSelectModeScene: o,
      batchDownloadSelected: r != null && r
    })).find(e => e !== undefined);
    let {
      plugin: l
    } = chatPluginIocManager.chatHeaderPluginHook(s ?? "");
    if (!l) {
      return null;
    }
    let {
      Content: c
    } = l;
    return reactJsxRuntimeCoreReexport.jsx(c, {
      conversationId: t,
      chatType: n
    });
  };
  let k = e => {
    let {
      leftToolButtonPlugins: l,
      centerToolButtonPlugins: c,
      rightToolButtonPlugins: d,
      isHomePage: u
    } = e;
    let {
      currentChatViewConfig: h
    } = chatStoreManager.useStoreSelector("chatViewCoreStore");
    let p = (h == null ? undefined : h.chatId) ?? "";
    let f = (h == null ? undefined : h.chatType) ?? chatConversationTypes.ConversationTypes.NewThread;
    let m = R({
      conversationId: p,
      conversationType: f
    });
    let g = reactJsxRuntimeCoreReexport.jsx(C, {
      conversationId: p,
      conversationType: f,
      leftToolButtonPlugins: l,
      centerToolButtonPlugins: c,
      rightToolButtonPlugins: d,
      isHomePage: u
    });
    if (m) {
      return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
        errorBoundaryName: "business_header_error",
        logger: loggerServiceCore.defaultLogger,
        errorBoundaryScope: chatTargetTypes.chatTargetTypes.Component,
        fallback: g,
        children: m
      });
    } else {
      return g;
    }
  };
  require.r(exports);
  require.d(exports, {
    Header: function () {
      return k;
    }
  });
}