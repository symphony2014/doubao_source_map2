// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'i' to 'chatAttachmentExtractor'
// - Resolved require(85490) to 'chat-attachment-extractor'
// - Renamed variable 'a' to 'chatCoreConstants'
// - Resolved require(746101) to 'chat-core-constants'
// - Renamed variable 'o' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 'l' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 's' to 'suggestMessageList'
// - Resolved require(447868) to 'suggest-message-list'
// - Renamed variable 'u' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'c' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'd' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'p' to 'conversationMessageUtils'
// - Resolved require(45244) to 'conversation-message-utils'
// - Renamed variable 'm' to 'aiChatSkillConversationChecker'
// - Resolved require(728119) to 'ai-chat-skill-conversation-checker'
// - Renamed variable 'f' to 'chatTextBlockFactory'
// - Resolved require(351389) to 'chat-text-block-factory'
// - Renamed variable '_' to 'referenceBlockTransformer'
// - Resolved require(642515) to 'reference-block-transformer'
// - Renamed variable 'g' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'v' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'h' to 'chatSuggestPluginSymbol'
// - Resolved require(330797) to 'chat-suggest-plugin-symbol'
// - Renamed variable 'S' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'nu' to 'selectUserInfoSuccess_1' (module 480327)
// - Updated imported property 'K9' to 'getMessageFromLink' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'g' to 'extractChatAttachments' (module 85490)
// - Updated imported property 'Ub' to 'ContentTypes' (module 746101)
// - Updated imported property 'z' to 'isValidConversationForSkill' (module 728119)
// - Updated imported property 'Q' to 'transformReferences' (module 642515)
// - Updated imported property 'f' to 'createTextBlock' (module 351389)
// - Updated imported property 'Gq' to 'assembleContentBlocks' (module 45244)
// - Updated imported property 'cW' to 'createMessageObject' (module 45244)
// - Updated imported property 'i1' to 'parseConversationId' (module 45244)
// - Updated imported property 'yn' to 'serializeAbilityData' (module 45244)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'H_' to 'GuidanceType' (module 791429)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property '_' to 'SuggestMessageList' (module 447868)
// - Updated imported property 'n' to 'chatSuggestPluginId' (module 330797)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box-bottom.d95bd1e8.js
         * chunkId: 32003
         * moduleId: 948609
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatAttachmentExtractor = require("chat-attachment-extractor") /*id: 85490*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var suggestMessageList = require("suggest-message-list") /*id: 447868*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var referenceBlockTransformer = require("reference-block-transformer") /*id: 642515*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var chatSuggestPluginSymbol = require("chat-suggest-plugin-symbol") /*id: 330797*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function w(e, t, n) {
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
  let y = e => {
    let {
      message: t,
      suggests: n,
      loading: h,
      onTrackClickEvent: w
    } = e;
    let {
      sendMessage: y
    } = chatServiceContext.useChatService("chatMessageService");
    let b = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let k = async (e, n) => {
      var l;
      let x = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), (t == null ? undefined : t.conversation_id) || "", {
        messageId: (t == null ? undefined : t.reply_id) || "",
        isLocalMessage: false
      });
      let T = x && chatAttachmentExtractor.extractChatAttachments(x);
      if ((x == null ? undefined : (l = x.attachments) === null || l === undefined ? undefined : l.every(e => e.type === chatCoreConstants.ContentTypes.Image || e.type === chatCoreConstants.ContentTypes.VlmImage)) && T) {
        T = T.map(e => e.type === "attachment" ? {
          ...e,
          type: "image"
        } : e);
      }
      if (await aiChatSkillConversationChecker.isValidConversationForSkill(t)) {
        let n = referenceBlockTransformer.transformReferences(T || []);
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
        let l = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
        if (l != null) {
          l.sendMessage({
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
      } else {
        let n = safeJsonUtils.safeStringify(t ? {
          skill_type: t.skill?.skill_type,
          skill_id: String(t.skill?.skill_type)
        } : {});
        y([{
          text: e.content,
          reportParams: {
            scene: "suggested_prompts",
            preset_prompt_type: "default_prompt",
            send_source: skillConstantsEnum.GuidanceType.SUGGEST
          },
          extraExt: {
            ...(b ? {} : {
              send_from_skill_guidance_or_suggestion: "1"
            }),
            ...(T && !isEmptyUtil.isEmpty(T) ? {
              reference_content: safeJsonUtils.safeStringify(T)
            } : {}),
            input_skill: n
          }
        }]);
      }
      w(e, n);
    };
    return reactJsxRuntimeCoreReexport.jsx(suggestMessageList.SuggestMessageList, {
      message: t,
      loading: h,
      suggests: n,
      onClick: k
    });
  };
  class b {
    constructor() {
      w(this, "pluginIdentifier", chatSuggestPluginSymbol.chatSuggestPluginId);
      w(this, "Content", y);
    }
  }
  require.r(exports);
  require.d(exports, {
    CustomClickInChatReceiveMessageSuggestPlugin: function () {
      return b;
    }
  });
}