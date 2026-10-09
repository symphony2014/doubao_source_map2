// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'formatChatAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 759.d4297f73.js
         * chunkId: 759
         * moduleId: 848753
         */
module.exports = function (module, exports, require) {
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConstantId = require("chat-constant-id") /*id: 392213*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let _ = e => {
    let {
      ext: h,
      reportParams: v,
      options: w = [],
      reference: g
    } = e;
    if (isNullishCheck.isNil(h.doc_action)) {
      return w;
    }
    let x = lastElementHelper.getLastElement(w);
    let {
      extraExt: b
    } = x ?? {};
    let k = safeJsonUtils.safeParse(b == null ? undefined : b.input_skill, {});
    let y = k.variables ?? {};
    let S = {
      skill_id: String(chatAppEnums.SkillType.WriteAssistant),
      skill_type: chatAppEnums.SkillType.WriteAssistant,
      ...k
    };
    let {
      chatId: T,
      chatType: $
    } = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig ?? {};
    let j = $ === chatConversationTypes.ConversationTypes.NewThread;
    return [{
      text: h.text ?? "",
      conversationId: j ? "0" : T,
      localConversationId: j ? T : undefined,
      botId: chatConversationSelectors_2.getBotId(chatFeedStoreFactory.useFeedStore.getState()) || chatConstantId.chatConstantId,
      ...(x ?? {}),
      reportParams: {
        scene: "chat_action_bar",
        ...((x == null ? undefined : x.reportParams) ?? {}),
        ...(v ?? {})
      },
      extraExt: {
        ...(b ?? {}),
        ...y,
        selection: JSON.stringify(h.selection),
        cursor: JSON.stringify(h.cursor),
        type: String(h.type),
        input_skill: JSON.stringify(throttledOmitPathStringify.omitPathStringify(S, "variables")),
        doc_action: String(h.doc_action),
        reference_content: g ?? "",
        doc_structure_version: h.docStructureVersion ?? ""
      }
    }];
  };
  require.d(exports, {
    formatChatAction: function () {
      return _;
    }
  });
}