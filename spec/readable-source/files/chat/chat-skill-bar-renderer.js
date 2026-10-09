// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'renderSkillBar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 958066
         */
module.exports = function (module, exports, require) {
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var skillBarComponent_1 = require("skill-bar-component_1") /*id: 773090*/;
  var portalTargetStoreHook = require("portal-target-store-hook") /*id: 960802*/;
  var chatDeepThinkUiHooks = require("chat-deep-think-ui-hooks") /*id: 470286*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatGuidanceConfigSelector = require("chat-guidance-config-selector") /*id: 811136*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    let {
      chatId: t,
      chatType: n,
      className: r
    } = e;
    let {
      targetRef: g
    } = chatDeepThinkUiHooks.useDeepThinkRef();
    let f = chatStoreManager.useStoreSelector("chatInputStore", e => e.activeSkillTypeMap[t || ""]);
    let {
      guidanceGenericInputMode: p,
      inputAggregateList: _
    } = chatGuidanceConfigSelector.useChatGuidanceConfig();
    let v = portalTargetStoreHook.usePortalTarget();
    if (f || !p || (_ == null ? undefined : _.includes("generic"))) {
      return null;
    } else if (p === chatLauncherConfigHooks.inputModeConstants.InlineExpandSkillbar) {
      if (v) {
        return reactDomEntryWrapper.createPortal(reactJsxRuntimeCoreReexport.jsx("div", {
          className: o("-ml-2 flex h-full items-center overflow-hidden", "w-[calc(100%+8px)]"),
          children: reactJsxRuntimeCoreReexport.jsx(skillBarComponent_1.SkillBar, {
            chatId: t,
            chatType: n,
            mode: "desktop",
            scene: n === chatConversationTypes.ConversationTypes.NewThread ? "landing" : "bottom_bar",
            asTool: true
          })
        }), v);
      } else {
        return null;
      }
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: o("flex w-full max-w-800", r),
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: o("mr-6 empty:order-2 empty:w-96"),
          ref: g
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "min-w-0 flex-1",
          children: reactJsxRuntimeCoreReexport.jsx(skillBarComponent_1.SkillBar, {
            chatId: t,
            chatType: n,
            mode: "desktop",
            scene: n === chatConversationTypes.ConversationTypes.NewThread ? "landing" : "bottom_bar"
          })
        })]
      });
    }
  };
  require.d(exports, {
    renderSkillBar: function () {
      return g;
    }
  });
}