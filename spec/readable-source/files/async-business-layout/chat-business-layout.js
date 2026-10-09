// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'ChatBusinessLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 452778
         */
module.exports = function (module, exports, require) {
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var asyncBusinessLayout = require("async-business-layout") /*id: 144317*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    var t;
    let {
      chatId: n,
      chatType: d,
      ChatInputSlot: u,
      ...h
    } = e;
    let {
      isExpand: f,
      inputPortalTarget: p
    } = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => ({
      isExpand: e.isExpand,
      inputPortalTarget: e.inputPortalTarget
    }), deepEqualityUtil_1.isDeepEqual);
    let m = () => u && (f && p ? reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx(u, {
      chatId: n,
      chatType: d
    }), p) : reactJsxRuntimeCoreReexport.jsx(u, {
      chatId: n,
      chatType: d
    }));
    let v = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig, deepEqualityUtil_1.isDeepEqual);
    let g = chatStoreManager.useStoreSelector("chatViewCanvasStore", e => e.canvasContent);
    let _ = chatStoreManager.useStoreSelector("chatInputStore", e => {
      let r = n ? e.activeSkillTypeMap?.[n] : undefined;
      if (r && n) {
        return e.skillMap?.[r];
      } else {
        return undefined;
      }
    });
    let b = {
      chatView: {
        isImmersiveMode: (t = v == null ? undefined : v.isImmersiveMode) !== null && t !== undefined && t
      },
      chatCanvas: {
        ...g
      },
      inputActiveSkill: _
    };
    let {
      matcher: y
    } = chatPluginMatcherRegistry.useSkillBarMatcher();
    let w = y == null ? undefined : y.map(e => e(b)).find(e => e !== undefined);
    let {
      plugin: S,
      loading: x
    } = chatPluginIocManager.skillBarPluginHook(w);
    let C = () => !S || x ? null : reactJsxRuntimeCoreReexport.jsx(S.Content, {
      chatId: n,
      chatType: d
    });
    let {
      matcher: k
    } = chatPluginMatcherRegistry.useFooterDisclaimerMatcher();
    let T = k == null ? undefined : k.map(e => e()).find(e => e !== undefined);
    let {
      plugin: E,
      loading: I
    } = chatPluginIocManager.chatFooterDisclaimerHook(T);
    let j = () => !E || I ? reactJsxRuntimeCoreReexport.jsx("div", {
      className: "h-12"
    }) : reactJsxRuntimeCoreReexport.jsx(E.Content, {});
    return reactJsxRuntimeCoreReexport.jsxs(asyncBusinessLayout.BusinessLayout, {
      ...h,
      children: [C == null ? undefined : C(), m == null ? undefined : m(), j == null ? undefined : j()]
    });
  };
  require.d(exports, {
    ChatBusinessLayout: function () {
      return d;
    }
  });
}