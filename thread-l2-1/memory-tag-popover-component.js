// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'MemoryTagPopover'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 484510
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var memoryContentPopoverComponent = require("memory-content-popover-component") /*id: 188650*/;
  var getBotChatIdOrSession = require("get-bot-chat-id-or-session") /*id: 429156*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectorUtils = require("chat-conversation-selector-utils") /*id: 166172*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = reactCoreLibraryReexport.memo(e => {
    let {
      node: n,
      conversation_id: m,
      message_id: v,
      chat_ability: f,
      isShare: h = false,
      reply_id: g = ""
    } = e;
    let _ = n.block.content?.memory_tag_block;
    let b = getBotChatIdOrSession.getBotChatIdOrSession();
    let k = reactFunctionMemoHook.useMemoizedCallback((e, t) => {
      let {
        skillMap: i
      } = chatStoreManager.getStoreState("chatInputStore");
      let r = Object.values(i).find(e => (e == null ? undefined : e.skill_type) === (f == null ? undefined : f.ability_type));
      teaAnalyticsEventTracker.trackEvent(e, {
        bot_id: b || "",
        message_id: v || "",
        chat_type: chatSkillPinTypeDeterminer.determineSkillPinType(m),
        conversation_id: m,
        conversation_type: chatConversationSelectorUtils.getConversationType(m),
        skill_id: String((f == null ? undefined : f.ability_type) ?? aiChatEnumConstants.skillTypes.FreeChat),
        skill_name: r == null ? undefined : r.show_name,
        reply_id: g,
        ...t
      });
    });
    let {
      action_tag: y,
      action_title: x,
      icon_url: w,
      icon_url_dark: S,
      loading: R,
      loading_hide: $,
      actions: C
    } = _ || {};
    let T = reactCoreLibraryReexport.useMemo(() => ({
      memory_icon_url: w,
      memory_icon_url_dark: S,
      memory_action_title: x,
      memory_action_tag: y,
      memory_loading: R,
      memory_actions: C,
      memory_loading_hide: $
    }), [y, x, w, S, R, $, C]);
    if (!_ || $ || h) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(memoryContentPopoverComponent.MemoryContentPopover, {
        value: T,
        conversationId: m,
        trackEvent: k
      });
    }
  });
  require.d(exports, {
    MemoryTagPopover: function () {
      return m;
    }
  });
}