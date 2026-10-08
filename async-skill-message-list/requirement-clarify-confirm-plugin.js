// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'findRequirementClarifyBlock'
// - Resolved require(458064) to 'find-requirement-clarify-block'
// - Renamed variable 'o' to 'chatConstantsEnum'
// - Resolved require(876559) to 'chat-constants-enum'
// - Renamed variable 'a' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 's' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'l' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'd' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Renamed variable 'f' to 'arrowRightIconComponent'
// - Resolved require(317574) to 'arrow-right-icon-component'
// - Renamed variable 'p' to 'artifactMetaProcessorUtils'
// - Resolved require(686064) to 'artifact-meta-processor-utils'
// - Renamed variable '_' to 'codingSkillStoreModule'
// - Resolved require(528099) to 'coding-skill-store-module'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'v' to 'skillMessageReplyMatcher'
// - Resolved require(41717) to 'skill-message-reply-matcher'
// - Renamed variable 'y' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'b' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'zc' to 'messageContentType' (module 876559)
// - Updated imported property 'mr' to 'codingSkillStore' (module 528099)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'ru' to 'shouldProcessArtifact' (module 686064)
// - Updated imported property 'Uq' to 'sendArtifactMessage' (module 686064)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// - Updated imported property 'h' to 'ArrowRightIcon' (module 317574)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'K9' to 'getMessageFromLink' (module 393180)
// - Updated imported property 'WR' to 'isLastSectionMessage' (module 458064)
// - Updated imported property 'oH' to 'findRequirementClarifyBlockInConversation' (module 458064)
// - Updated imported property 'W' to 'isReplyMessage' (module 41717)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-list.169e7e3e.js
         * chunkId: 66228
         * moduleId: 294374
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var findRequirementClarifyBlock = require("find-requirement-clarify-block") /*id: 458064*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var arrowRightIconComponent = require("arrow-right-icon-component") /*id: 317574*/;
  var artifactMetaProcessorUtils = require("artifact-meta-processor-utils") /*id: 686064*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  let h = new class {
    isSending(e) {
      let t = this.sendingStates.get(e);
      return !!t && (Date.now() - t.timestamp > 5000 ? (this.sendingStates.delete(e), false) : t.isSending);
    }
    setSendingState(e, t) {
      if (t) {
        this.sendingStates.set(e, {
          isSending: true,
          timestamp: Date.now()
        });
      } else {
        this.sendingStates.delete(e);
      }
    }
    tryStartSending(e) {
      return !this.isSending(e) && (this.setSendingState(e, true), true);
    }
    endSending(e) {
      this.setSendingState(e, false);
    }
    cleanup() {
      let e = Date.now();
      for (let [t, n] of this.sendingStates.entries()) {
        if (e - n.timestamp > 5000) {
          this.sendingStates.delete(t);
        }
      }
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "sendingStates";
      t = new Map();
      if ((e = typeof (n = function (e, t) {
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
      }(e, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }();
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    let {
      messageId: n,
      message: i,
      size: g
    } = e;
    let v = i18nTranslationUtils.useTranslationWithFallback();
    let [y, b] = reactCoreLibraryReexport.useState(false);
    let S = reactCoreLibraryReexport.useMemo(() => {
      var e;
      if (i == null) {
        return undefined;
      } else if ((e = i.content_blocks) === null || e === undefined) {
        return undefined;
      } else {
        return e.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_REQUIREMENT_CLARIFY);
      }
    }, [i]);
    let E = codingSkillStoreModule.codingSkillStore(e => e.clarifyDebounceSavePromiseMap[(S == null ? undefined : S.id) || ""]);
    let {
      sendMessage: T
    } = chatServiceContext.useChatService("chatMessageService");
    let O = reactCoreLibraryReexport.useRef(false);
    let L = reactCoreLibraryReexport.useCallback(async () => {
      let o = S == null ? undefined : S.id;
      if (!o) {
        return;
      }
      b(true);
      let a = true;
      if (E) {
        E.flush();
        await Promise.all([E.promise]).then(() => {
          a = true;
        }).catch(() => {
          a = false;
          b(false);
        });
      }
      if (!h.tryStartSending(o)) {
        return;
      }
      if (O.current || !i || !a) {
        b(false);
        return;
      }
      let u = {
        skill_id: String(chatAppEnums.SkillType.CodeAssistant),
        skill_type: chatAppEnums.SkillType.CodeAssistant
      };
      let d = {
        code_assistant_source: "dev_mode",
        code_assistant_requirements: {
          send_type: 1,
          resource_key: S == null ? undefined : S.content_obj?.resource_key,
          clarify_message_id: n
        }
      };
      let f = [{
        type: "text",
        text: "",
        extra: {
          context_variables: JSON.stringify(d)
        }
      }];
      teaAnalyticsEventTracker.trackEvent("click_card", {
        card_type: "code_agent_requirement_clarification",
        button_name: "start_generating",
        bot_id: i.bot_id,
        skill_id: i.skill?.skill_id_no_default,
        skill_name: skillTypeMappings.getSkillName(i.skill?.skill_type_no_default),
        conversation_id: i.conversation_id,
        section_id: i.section_id,
        message_id: i.message_id
      });
      let _ = {
        scene: "requirement_clarify_confirm_button"
      };
      if (await artifactMetaProcessorUtils.shouldProcessArtifact()) {
        await artifactMetaProcessorUtils.sendArtifactMessage({
          text: v("coding_website_build_confirm_requirement"),
          refValue: "",
          messageExt: {
            answer_with_suggest: "0",
            send_from_skill_guidance_or_suggestion: "1"
          },
          conversationId: i.conversation_id,
          reportParams: _,
          contextValue: d
        });
        return;
      }
      T([{
        text: v("coding_website_build_confirm_requirement"),
        reportParams: _,
        extraExt: {
          input_skill: JSON.stringify(u),
          answer_with_suggest: "0",
          send_from_skill_guidance_or_suggestion: "1",
          reference_content: JSON.stringify(f)
        }
      }]).finally(() => {
        b(false);
      });
    }, [n, i, S == null ? undefined : S.content_obj?.resource_key, E, T]);
    return reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
      type: "ai-primary",
      size: g,
      icon: reactJsxRuntimeCoreReexport.jsx(arrowRightIconComponent.ArrowRightIcon, {}),
      iconPosition: "right",
      onClick: L,
      loading: y,
      "data-testid": "requirement-clarify-confirm-btn",
      children: v("coding_website_build_confirm_requirement")
    });
  };
  var skillMessageReplyMatcher = require("skill-message-reply-matcher") /*id: 41717*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  let S = e => {
    let {
      conversationId: t
    } = e;
    let [n, o] = reactCoreLibraryReexport.useState();
    let a = chatMessageStoreFactory.createMessageStore(e => {
      let r = e.messageLinkMap[t];
      if (!r) {
        return {
          enableToGenerateCode: false,
          message: null
        };
      }
      let o = r.find(e => e.messageId === n);
      if (!o) {
        return {
          enableToGenerateCode: false,
          message: null
        };
      }
      let a = conversationMessageUtils_1.getMessageFromLink(e, t, o);
      return {
        enableToGenerateCode: findRequirementClarifyBlock.isLastSectionMessage(t, a),
        message: a
      };
    });
    return {
      genre: reactCoreLibraryReexport.useMemo(() => {
        var t;
        return ((t = a.message) === null || t === undefined ? undefined : t.content_obj?.genre) ?? "paper";
      }, [a.message]),
      clarifyMessageId: n,
      setClarifyMessageId: o,
      enableToGenerateCode: a == null ? undefined : a.enableToGenerateCode
    };
  };
  let E = e => {
    let {
      conversationId: t,
      unionMessageList: n,
      inViewMessageList: o
    } = e;
    let {
      clarifyMessageId: a,
      enableToGenerateCode: s,
      setClarifyMessageId: l
    } = S({
      conversationId: t
    });
    let u = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      let e = skillMessageReplyMatcher.isReplyMessage(t, n);
      if (!e) {
        l(undefined);
        return;
      }
      let r = findRequirementClarifyBlock.findRequirementClarifyBlockInConversation([e], t);
      if (!r || !o.find(t => t.id === e.id)) {
        l(undefined);
        return;
      }
      u.current = r;
      l(r.message_id);
    }, [n, o]);
    if (a && s) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "floating-wrapper-Ktj3qE",
        children: reactJsxRuntimeCoreReexport.jsx(g, {
          size: "large",
          messageId: a,
          message: u.current
        })
      });
    } else {
      return null;
    }
  };
  class T {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: E,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = E;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    RequirementClarifyConfirmButtonPlugin: function () {
      return T;
    }
  });
}