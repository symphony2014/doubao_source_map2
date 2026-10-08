// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DU' to 'getTeaParamsWithMessageIds'
// - Renamed export 'u7' to 'getBasicTeaParams'
// - Renamed export 'w9' to 'getTeaParamsWithoutMessages'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 26185.02d79590.js
         * chunkId: 26185
         * moduleId: 938296
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var arrayObjectForeach = require("array-object-foreach") /*id: 434194*/;
  var arrayCompactUtil = require("array-compact-util") /*id: 571426*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  let x = e => {
    let i = chatConversationSelectors.selectConversation(e);
    let {
      service: a
    } = chatIocServiceLoaderHook.useServiceLoader("chatViewService");
    let {
      extraInfo: o,
      messageIndexList: s,
      shareType: f
    } = chatMessageShareSelectStore.chatMessageShareSelectStore(e => ({
      extraInfo: e.extraInfo,
      messageIndexList: e.messageIndexList,
      shareType: e.shareType
    }), deepEqualityUtil.deepEqual);
    return {
      bot_id: i == null ? undefined : i.bot_id,
      conversation_id: e,
      conversation_type: i == null ? undefined : i.conversation_type,
      chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", i == null ? undefined : i.conversation_id) || "other_default",
      content_type: "chat",
      entrance_type: (o == null ? undefined : o.entranceType) ?? "",
      share_thread_cnt: s.length,
      whether_allow_pdf: +(f === chatAiConstants.filterType.All),
      canvas_type: a == null ? undefined : a.getCanvasTeaParams()?.canvas_type
    };
  };
  let m = e => {
    let n = chatConversationSelectors.selectConversation(e);
    let {
      extraInfo: d,
      messageIndexList: x,
      shareType: m,
      findMessageByIndex: v
    } = chatMessageShareSelectStore.chatMessageShareSelectStore(e => ({
      extraInfo: e.extraInfo,
      messageIndexList: e.messageIndexList,
      shareType: e.shareType,
      findMessageByIndex: e.findMessageByIndex
    }), deepEqualityUtil.deepEqual);
    let h = {
      bot_id: n == null ? undefined : n.bot_id,
      conversation_id: e,
      conversation_type: n == null ? undefined : n.conversation_type,
      chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", n == null ? undefined : n.conversation_id) || "other_default",
      content_type: "chat",
      entrance_type: (d == null ? undefined : d.entranceType) ?? "",
      share_thread_cnt: x.length,
      whether_allow_pdf: +(m === chatAiConstants.filterType.All)
    };
    let g = collectionMapMatcher.mapWithMatcher(x, t => v({
      conversationId: e ?? "",
      state: chatMessageStoreFactory.createMessageStore.getState(),
      messageIndex: t
    }));
    let _ = {
      message_id_list: [],
      super_task_id_list: [],
      super_task_mode_list: []
    };
    arrayObjectForeach.arrayObjectForeach(g, e => {
      var i;
      let a = (e == null ? undefined : e.skill?.skill_type) === chatAppEnums.SkillType.DesExtSkillSuperTask;
      if (e == null ? undefined : e.message_id) {
        _.message_id_list.push(e.message_id);
      }
      if (a && (e == null ? undefined : e.async_task?.id)) {
        _.super_task_id_list.push(e.async_task.id);
      }
      if (a) {
        _.super_task_mode_list.push((e == null ? undefined : (i = e.verbose) === null || i === undefined ? undefined : i.super_task?.supertask_task_type) === "0" ? "search_task" : "complex_task");
      }
    });
    let b = e => e.length === 0 ? undefined : e.length === 1 ? e[0] : e.join(",");
    let w = b(arrayCompactUtil.compactArray(_.message_id_list));
    let y = b(arrayCompactUtil.compactArray(_.super_task_id_list));
    let M = b(arrayCompactUtil.compactArray(_.super_task_mode_list));
    return {
      ...h,
      ...(() => {
        let e = {};
        if (y) {
          e.super_task_id = y;
        }
        if (M) {
          e.super_task_mode = M;
        }
        if (w) {
          e.message_id = w;
        }
        return e;
      })()
    };
  };
  let v = e => {
    let n = chatConversationSelectors.selectConversation(e);
    let {
      extraInfo: i,
      messageIndexList: a
    } = chatMessageShareSelectStore.chatMessageShareSelectStore(e => ({
      extraInfo: e.extraInfo,
      messageIndexList: e.messageIndexList
    }), deepEqualityUtil.deepEqual);
    return {
      bot_id: n == null ? undefined : n.bot_id,
      conversation_id: e,
      conversation_type: n == null ? undefined : n.conversation_type,
      chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", n == null ? undefined : n.conversation_id) || "other_default",
      content_type: "chat",
      entrance_type: (i == null ? undefined : i.entranceType) ?? "",
      share_thread_cnt: a.length
    };
  };
  require.d(exports, {
    getTeaParamsWithMessageIds: function () {
      return m;
    },
    getBasicTeaParams: function () {
      return x;
    },
    getTeaParamsWithoutMessages: function () {
      return v;
    }
  });
}