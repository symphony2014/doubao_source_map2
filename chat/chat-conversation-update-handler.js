// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'updateConversationInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 701589
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  async function u(e) {
    let {
      conversation: t,
      bot_info: n,
      msg_templates: u,
      trace_map: c
    } = e;
    let d = t == null ? undefined : t.conversation_id;
    if (!d || !t || !n) {
      loggerServiceCore.defaultLogger.persist.warning({
        message: "invalid conversationInfo to update",
        meta: {
          conversation_id: d,
          bot_id: n == null ? undefined : n.bot_id
        }
      });
      return;
    }
    let h = await chatIocServiceLoaderHook.loadServiceAsync("chatBotService");
    chatFeedStoreFactory.useFeedStore.setState(immerCoreImplementation.produce(e => {
      let p = e.conversationMap[d];
      e.conversationMap[d] = {
        ...p,
        ...t,
        last_section_id: (t == null ? undefined : t.last_section_id) || (p == null ? undefined : p.last_section_id),
        name: (t == null ? undefined : t.name) || (p == null ? undefined : p.name),
        icon_image: chatFeedStoreFactory.useFeedStore.getState().isOverallList && chatConversationCheckers.isCocoSubPlatform(t.conversation_type) ? (p == null ? undefined : p.icon_image) ?? t.icon_image : t == null ? undefined : t.icon_image,
        thread_source: p == null ? undefined : p.thread_source,
        extra: t.extra ?? (p == null ? undefined : p.extra),
        latest_artifact: objectPathGetDefault.getObjectPathDefault(t, "latest_artifact") ?? (p == null ? undefined : p.latest_artifact),
        intention_type: (t == null ? undefined : t.intention_type) ?? (p == null ? undefined : p.intention_type)
      };
      if (n == null ? undefined : n.id) {
        if (h != null) {
          h.updateBot(n);
        }
      }
      if (u) {
        e.actionBarTemplateMap[d] = u.map(e => ({
          ...e,
          req_id: c == null ? undefined : c.request_id
        }));
      }
      if (d && t.badge_count && t.read_badge_count) {
        e.lastMessageIndexMap[d] = {
          message_index: Number(t.message_index) || 0,
          read_message_index: Number(t.read_message_index) || 0,
          read_badge_count: Number(t.read_badge_count ?? t.read_message_index) || 0,
          badge_count: Number(t.badge_count ?? t.message_index) || 0
        };
      }
    }));
  }
  require.d(exports, {
    updateConversationInfo: function () {
      return u;
    }
  });
}