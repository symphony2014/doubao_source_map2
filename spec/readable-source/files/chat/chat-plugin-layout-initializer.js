// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatPanelModes'
// - Resolved require(690886) to 'chat-panel-modes'
// - Renamed variable 'r' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'o' to 'chatPluginMatcherRegistry'
// - Resolved require(107672) to 'chat-plugin-matcher-registry'
// - Renamed variable 'a' to 'chatPluginIocManager'
// - Resolved require(232752) to 'chat-plugin-ioc-manager'
// - Renamed variable 'l' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Resolved require.e(71518) to 'ui-avatar-typography-tag'
// - Resolved require.e(27079) to 'dnd-kit-react-components'
// - Resolved require.e(64640) to 'semi-ui-tooltip-utilities'
// - Resolved require.e(26176) to 'api-client-services'
// - Resolved require.e(79175) to 'samantha-message-utils'
// - Resolved require.e(43927) to 'ui-feature-components'
// - Resolved require.e(36969) to 'async-after-interactive-layout'
// - Resolved require.bind(564771) to 'canvas-panel-with-sash'
// - Updated imported property 'P' to 'PanelMode' (module 690886)
// - Updated imported property 'Hq' to 'loadChatCanvasMatcher' (module 107672)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Q3' to 'chatCanvasPluginLoader' (module 232752)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 811260
         */
module.exports = function (module, exports, require) {
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let s = {
    zen_split: {
      sidebarBehavior: "close",
      preferredCanvasLayout: chatPanelModes.PanelMode.SIDE_PANEL,
      layoutMode: "zen_split"
    },
    canvas_immersive: {
      sidebarBehavior: "close",
      preferredCanvasLayout: chatPanelModes.PanelMode.FULL_IMMERSIVE,
      layoutMode: "canvas_immersive"
    }
  };
  async function u(e) {
    try {
      let t = await chatPluginMatcherRegistry.loadChatCanvasMatcher();
      let n = {
        conversationId: "",
        messageId: "",
        targetUrlPluginId: e
      };
      for (let e of t) {
        let t = e(n);
        if (t) {
          return t;
        }
      }
    } catch (e) {
      loggerServiceCore.defaultLogger.error({
        message: "Failed to resolve plugin ID",
        error: e
      });
    }
    return e;
  }
  let c = {
    name: "plugin-layout",
    init: () => c,
    onInitRunDynamic: async () => {
      if (typeof window == "undefined") {
        return {
          iife: []
        };
      }
      let e = new URLSearchParams(window.location.search);
      let t = e.get("layout");
      let i = e.get("pluginId");
      let o = e.get("canvas_impayload");
      if (!i || !o) {
        return {
          iife: []
        };
      }
      Promise.all([require.e("ui-avatar-typography-tag") /*id: 71518*/, require.e("dnd-kit-react-components") /*id: 27079*/, require.e("semi-ui-tooltip-utilities") /*id: 64640*/, require.e("api-client-services") /*id: 26176*/, require.e("samantha-message-utils") /*id: 79175*/, require.e("ui-feature-components") /*id: 43927*/, require.e("async-after-interactive-layout") /*id: 36969*/]).then(require.bind(require, "canvas-panel-with-sash") /*id: 564771*/).catch(e => {
        loggerServiceCore.defaultLogger.error({
          message: "Failed to load canvas panel",
          error: e
        });
      });
      try {
        let e = await u(i);
        let n = await chatPluginIocManager.chatCanvasPluginLoader(e);
        if (!n) {
          return {
            iife: []
          };
        }
        let l = {};
        try {
          l = JSON.parse(o);
        } catch (e) {
          return {
            iife: []
          };
        }
        let c = window.location.pathname.match(/\/chat\/([^/]+)/);
        let d = l.conversation_id || (c ? c[1] : "");
        let h = l.message_id || l.messageId || "";
        chatStoreManager.getStore("chatViewCanvasStore").setState({
          conversationId: d,
          messageId: h,
          canvasContent: l,
          matchedCanvasPluginIdentifier: e,
          fromUrlPrefetch: true,
          isExpand: true,
          isAllowFullCanvas: !!(n == null ? undefined : n.isAllowFullCanvas)
        });
        if (t) {
          (function (e) {
            let t = s[e];
            if (t) {
              (function (e) {
                let t = chatStoreManager.getStore("chatViewCanvasStore");
                let n = chatStoreManager.getStore("flowWebLayoutStore");
                if (e.preferredCanvasLayout !== undefined) {
                  t.setState({
                    canvasLayoutState: e.preferredCanvasLayout
                  });
                }
                if (e.sidebarBehavior === "close") {
                  n.setState({
                    sidebarStatus: "closed"
                  });
                }
                if (e.layoutMode) {
                  n.setState({
                    layoutMode: e.layoutMode
                  });
                }
              })(t);
            }
          })(t);
        }
      } catch (e) {
        loggerServiceCore.defaultLogger.error({
          message: "Failed to apply canvas layout aggregation",
          error: e
        });
      }
      return {
        iife: []
      };
    }
  };
  require.r(exports);
  require.d(exports, {
    pluginLayout: function () {
      return c;
    }
  });
}