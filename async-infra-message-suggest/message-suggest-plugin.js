// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'i' to 'chatAttachmentExtractor'
// - Resolved require(85490) to 'chat-attachment-extractor'
// - Renamed variable 'l' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 'a' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'suggestMessageList'
// - Resolved require(447868) to 'suggest-message-list'
// - Renamed variable 'u' to 'chatMessageServiceManager'
// - Resolved require(701777) to 'chat-message-service-manager'
// - Renamed variable 's' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'c' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'd' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'p' to 'conversationMessageUtils'
// - Resolved require(45244) to 'conversation-message-utils'
// - Renamed variable 'f' to 'aiChatSkillConversationChecker'
// - Resolved require(728119) to 'ai-chat-skill-conversation-checker'
// - Renamed variable '_' to 'chatTextBlockFactory'
// - Resolved require(351389) to 'chat-text-block-factory'
// - Renamed variable 'g' to 'referenceBlockTransformer'
// - Resolved require(642515) to 'reference-block-transformer'
// - Renamed variable 'm' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'S' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'v' to 'infraReceiveMessageSymbol'
// - Resolved require(103109) to 'infra-receive-message-symbol'
// - Renamed variable 'L' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'vh' to 'chatMessageServiceContext' (module 701777)
// - Updated imported property 'nu' to 'selectUserInfoSuccess_1' (module 480327)
// - Updated imported property 'K9' to 'getMessageFromLink' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'g' to 'extractChatAttachments' (module 85490)
// - Updated imported property 'z' to 'isValidConversationForSkill' (module 728119)
// - Updated imported property 'Q' to 'transformReferences' (module 642515)
// - Updated imported property 'f' to 'createTextBlock' (module 351389)
// - Updated imported property 'Gq' to 'assembleContentBlocks' (module 45244)
// - Updated imported property 'cW' to 'createMessageObject' (module 45244)
// - Updated imported property 'i1' to 'parseConversationId' (module 45244)
// - Updated imported property 'yn' to 'serializeAbilityData' (module 45244)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'H_' to 'GuidanceType' (module 791429)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property '_' to 'SuggestMessageList' (module 447868)
// - Updated imported property 'j' to 'infraMessageSuggest' (module 103109)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-suggest.ce48dc2b.js
         * chunkId: 32179
         * moduleId: 973604
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatAttachmentExtractor = require("chat-attachment-extractor") /*id: 85490*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var suggestMessageList = require("suggest-message-list") /*id: 447868*/;
  var chatMessageServiceManager = require("chat-message-service-manager") /*id: 701777*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var referenceBlockTransformer = require("reference-block-transformer") /*id: 642515*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var infraReceiveMessageSymbol = require("infra-receive-message-symbol") /*id: 103109*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function k(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let h = e => {
    let {
      message: t,
      suggests: n,
      loading: v,
      onTrackClickEvent: k
    } = e;
    let h = chatMessageServiceManager.chatMessageServiceContext.get("chatMessageService", true);
    let E = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let I = async (e, n) => {
      let I = messageContentTypeAndStatusChecker.H6e(t);
      let y = messageContentTypeAndStatusChecker.kwD(t);
      let T = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), (t == null ? undefined : t.conversation_id) || "", {
        messageId: (t == null ? undefined : t.reply_id) || "",
        isLocalMessage: false
      });
      let A = T && chatAttachmentExtractor.extractChatAttachments(T);
      let x = t ? {
        skill_type: t.skill?.skill_type,
        skill_id: String(t.skill?.skill_type)
      } : {};
      if (await aiChatSkillConversationChecker.isValidConversationForSkill(t)) {
        let n = referenceBlockTransformer.transformReferences(A || []);
        let r = chatTextBlockFactory.createTextBlock(e.content);
        let i = conversationMessageUtils.assembleContentBlocks({
          textBlock: r,
          referenceBlocks: n
        });
        let a = conversationMessageUtils.createMessageObject({
          conversation: conversationMessageUtils.parseConversationId((t == null ? undefined : t.conversation_id) ?? ""),
          message: {
            content_blocks_v2: i,
            ext: {
              suggest_extra: e.extra ?? "",
              chat_ability: conversationMessageUtils.serializeAbilityData(t == null ? undefined : t.skill?.skill_type, "")
            }
          }
        });
        let o = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
        if (o != null) {
          o.sendMessage({
            message: a,
            session: {
              reportParams: {
                scene: "suggested_prompts",
                preset_prompt_type: "default_prompt",
                send_source: skillConstantsEnum.GuidanceType.SUGGEST
              }
            }
          });
        }
      } else if (h != null) {
        h.sendMessage([{
          text: e.content,
          reportParams: {
            scene: "suggested_prompts",
            preset_prompt_type: "default_prompt",
            send_source: skillConstantsEnum.GuidanceType.SUGGEST
          },
          extraExt: {
            ...(E ? {} : {
              send_from_skill_guidance_or_suggestion: "1"
            }),
            ...(A && !isEmptyUtil.isEmpty(A) ? {
              reference_content: safeJsonUtils.safeStringify(A)
            } : {}),
            ...(I || y ? {
              input_skill: safeJsonUtils.safeStringify(x)
            } : {})
          }
        }]);
      }
      k(e, n);
    };
    return reactJsxRuntimeCoreReexport.jsx(suggestMessageList.SuggestMessageList, {
      message: t,
      loading: v,
      suggests: n,
      onClick: I
    });
  };
  class E {
    constructor() {
      k(this, "pluginIdentifier", infraReceiveMessageSymbol.infraMessageSuggest);
      k(this, "Content", h);
    }
  }
  require.r(exports);
  require.d(exports, {
    DefaultReceiveMessageSuggestsMessagePlugin: function () {
      return E;
    }
  });
}