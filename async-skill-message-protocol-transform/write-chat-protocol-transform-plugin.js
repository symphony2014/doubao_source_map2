// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'deepCloneWrapper_1'
// - Resolved require(391722) to 'deep-clone-wrapper_1'
// - Renamed variable 'r' to 'safePropertyAssignUtil'
// - Resolved require(377863) to 'safe-property-assign-util'
// - Renamed variable 'o' to 'objectDefaultsUtil'
// - Resolved require(679337) to 'object-defaults-util'
// - Renamed variable 'a' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'l' to 'objectPathFilterUtil'
// - Resolved require(213469) to 'object-path-filter-util'
// - Renamed variable 'u' to 'objectExcludeFilterUtil'
// - Resolved require(194068) to 'object-exclude-filter-util'
// - Renamed variable 's' to 'throttledPathFilterStringify'
// - Resolved require(245841) to 'throttled-path-filter-stringify'
// - Renamed variable 'c' to 'collectionIncludesUtil'
// - Resolved require(517430) to 'collection-includes-util'
// - Renamed variable 'd' to 'inlineDocxActionTypes'
// - Resolved require(598431) to 'inline-docx-action-types'
// - Renamed variable '_' to 'aiChatSourceExtractor'
// - Resolved require(268836) to 'ai-chat-source-extractor'
// - Renamed variable 'v' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'f' to 'checkNestedContentType'
// - Resolved require(316567) to 'check-nested-content-type'
// - Renamed variable 'p' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'm' to 'chatContentTransformer'
// - Resolved require(590923) to 'chat-content-transformer'
// - Renamed variable 'g' to 'parseReferenceContentArray'
// - Resolved require(510762) to 'parse-reference-content-array'
// - Renamed variable 'h' to 'aliceMessageProtocolTransform'
// - Resolved require(842186) to 'alice-message-protocol-transform'
// - Renamed variable 'b' to 'chatConversationSelectors_2'
// - Resolved require(390347) to 'chat-conversation-selectors_2'
// - Renamed variable 'y' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'T' to 'chatConstantId'
// - Resolved require(392213) to 'chat-constant-id'
// - Renamed variable 'j' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'S' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'x' to 'isObjectOrFunction_1_1'
// - Resolved require(433743) to 'is-object-or-function_1_1'
// - Renamed variable 'k' to 'isNullishCheck'
// - Resolved require(282109) to 'is-nullish-check'
// - Renamed variable 'M' to 'infraUtilFunctions'
// - Resolved require(385226) to 'infra-util-functions'
// - Renamed variable 'C' to 'chatWritingSymbol'
// - Resolved require(958144) to 'chat-writing-symbol'
// - Updated imported property 'sT' to 'parseNumber' (module 385226)
// - Updated imported property 'Ji' to 'ensureBoolean' (module 385226)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'Z' to 'isObjectOrFunction' (module 433743)
// - Updated imported property 'Z' to 'isNil' (module 282109)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'Z' to 'deepClone' (module 391722)
// - Updated imported property 'm' to 'isNestedContentType' (module 316567)
// - Updated imported property 'H' to 'transformChatContent' (module 590923)
// - Updated imported property 'Z' to 'safePropertyAssign' (module 377863)
// - Updated imported property 'y9' to 'extractThinkMeta' (module 268836)
// - Updated imported property 'Z' to 'defaults' (module 679337)
// - Updated imported property 'Z' to 'filterObjectByPaths' (module 213469)
// - Updated imported property 'I' to 'parseReferenceContentArray' (module 510762)
// - Updated imported property 'zc' to 'SamanthaTypes' (module 687482)
// - Updated imported property 'Z' to 'filterObjectExclude' (module 194068)
// - Updated imported property 'Z' to 'throttledPathStr' (module 245841)
// - Updated imported property '_i' to 'transformMessageExt' (module 842186)
// - Updated imported property 'yN' to 'stringifyMessageContent' (module 842186)
// - Updated imported property 'l' to 'getDocxActionTypes' (module 598431)
// - Updated imported property 'Z' to 'includes' (module 517430)
// - Updated imported property 'IO' to 'getBotId' (module 390347)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'e' to 'chatConstantId' (module 392213)
// - Updated imported property 'A' to 'writingSymbol' (module 958144)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 911129
         */
module.exports = function (module, exports, require) {
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var objectPathFilterUtil = require("object-path-filter-util") /*id: 213469*/;
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var inlineDocxActionTypes = require("inline-docx-action-types") /*id: 598431*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var checkNestedContentType = require("check-nested-content-type") /*id: 316567*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatContentTransformer = require("chat-content-transformer") /*id: 590923*/;
  var parseReferenceContentArray = require("parse-reference-content-array") /*id: 510762*/;
  var aliceMessageProtocolTransform = require("alice-message-protocol-transform") /*id: 842186*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConstantId = require("chat-constant-id") /*id: 392213*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  let P = e => {
    let {
      content_obj: t = {},
      ext: n = {}
    } = e;
    let {
      text: i
    } = t;
    let {
      doc_action: r,
      type: o,
      selection: a,
      cursor: l,
      enable_search: u,
      doc_structure_version: s,
      input_skill: c,
      custom_style_requirement: d
    } = n;
    let _ = infraUtilFunctions.parseNumber(r);
    let v = infraUtilFunctions.parseNumber(o);
    let {
      variables: f
    } = safeJsonUtils.safeParse(c, {});
    let {
      action: p,
      content_context: m
    } = isObjectOrFunction_1_1.isObjectOrFunction(f) ? f : {};
    let g = infraUtilFunctions.parseNumber(p);
    let h = safeJsonUtils.safeParse(m, {});
    if (!isNullishCheck.isNil(r) || m) {
      return {
        text: i,
        action: _ ?? g,
        content_context: m ? h : {
          type: v,
          selected_content: a ? safeJsonUtils.safeParse(a, {}) : undefined,
          cursor_position: l ? safeJsonUtils.safeParse(l, {}) : undefined,
          doc_structure_version: infraUtilFunctions.parseNumber(s),
          custom_style_requirement: d
        },
        enable_search: infraUtilFunctions.ensureBoolean(u)
      };
    }
  };
  let Z = e => {
    let {
      content_obj: t = {},
      ext: n = {}
    } = e;
    let {
      text: i
    } = t;
    let {
      input_skill: r,
      placeholder_page_artifact: o,
      doc_action: l
    } = n;
    let {
      variables: u
    } = safeJsonUtils.safeParse(r, {});
    let s = safeJsonUtils.safeParse(o, undefined);
    if (!isObjectOrFunction_1_1.isObjectOrFunction(u)) {
      return null;
    }
    let {
      action: c,
      enable_pages_canvas: d,
      enable_search: _,
      content_context: v
    } = u;
    if (c === "gen_outline") {
      let {
        genre: e,
        type: t
      } = u;
      return {
        text: i,
        action: c,
        enable_search: infraUtilFunctions.ensureBoolean(_),
        gen_outline_input: {
          genre: e,
          type: Number(t)
        },
        ...(s && {
          placeholder_page_artifact: s
        })
      };
    }
    if (c === "gen_doc") {
      let {
        message_id: e,
        outline_id: t
      } = u;
      return {
        text: i,
        action: c,
        gen_doc_input: {
          message_id: e,
          outline_id: t
        },
        ...(s && {
          placeholder_page_artifact: s
        })
      };
    }
    if (!isUndefinedCheck.isUndefined(l) || v) {
      return null;
    } else {
      return {
        text: i,
        action: c,
        enable_search: infraUtilFunctions.ensureBoolean(_),
        enable_pages_canvas: infraUtilFunctions.ensureBoolean(d),
        ...(s && {
          placeholder_page_artifact: s
        })
      };
    }
  };
  let w = e => {
    let {
      create_write_doc_by_message: n,
      source_content: i = ""
    } = e.ext ?? {};
    if (n !== "1") {
      return null;
    } else {
      return {
        source_content: i,
        title: ""
      };
    }
  };
  var chatWritingSymbol = require("chat-writing-symbol") /*id: 958144*/;
  class I {
    aliceChatMessageToMessage(e, t) {
      let y = deepCloneWrapper_1.deepClone(e);
      y.content_obj ||= {};
      if (checkNestedContentType.isNestedContentType(y)) {
        let e = chatContentTransformer.transformChatContent(y.content_obj?.entities, y.nestedItems);
        if (e.length) {
          safePropertyAssignUtil.safePropertyAssign(y, {
            attachments: e
          });
        }
      }
      if (messageContentTypeAndStatusChecker.rKF(y)) {
        let {
          text: e,
          is_hide: t
        } = aiChatSourceExtractor.extractThinkMeta(y.meta_infos);
        safePropertyAssignUtil.safePropertyAssign(y, {
          content_obj: {
            ...y.content_obj,
            think: e
          },
          has_think_reason: true,
          think_reason_default_expand: true,
          think_reason_is_hide: t
        });
      }
      if (messageContentTypeAndStatusChecker.x4s(y)) {
        let {
          loading_style: e
        } = t.ext ?? {};
        safePropertyAssignUtil.safePropertyAssign(y.content_obj, {
          loading_style: e
        });
      } else if (messageContentTypeAndStatusChecker.fdv(y)) {
        let {
          outline: e,
          outline_leading_content: n,
          outline_meta: i,
          outline_id: o,
          brief: a,
          action_bar_config: l,
          samantha_code: u
        } = t.ext ?? {};
        safePropertyAssignUtil.safePropertyAssign(y.content_obj, {
          outline: e,
          outline_leading_content: n,
          outline_meta: i,
          outline_id: o,
          brief: a,
          action_bar_config: l,
          samantha_code: u
        });
      } else if (messageContentTypeAndStatusChecker.zwb(y)) {
        let {
          async_generate: e,
          brief: n,
          action_bar_config: i,
          samantha_code: r
        } = t.ext ?? {};
        objectDefaultsUtil.defaults(y.content_obj, {
          async_generate: isUndefinedCheck.isUndefined(e) ? undefined : !!e,
          brief: n,
          action_bar_config: i,
          samantha_code: r
        });
      } else if (messageContentTypeAndStatusChecker.z7f(y)) {
        let {
          pages_intention_card_status: e
        } = t.ext ?? {};
        let {
          raw_query: n,
          genre: i
        } = safeJsonUtils.safeParse(t.content, {});
        safePropertyAssignUtil.safePropertyAssign(y.content_obj, {
          pages_intention_card_status: e,
          raw_query: n,
          genre: i
        });
      } else if (messageContentTypeAndStatusChecker.XD1(y)) {
        let {
          samantha_artifact: e,
          samantha_code: n
        } = t.ext ?? {};
        let i = safeJsonUtils.safeParse(e, {});
        safePropertyAssignUtil.safePropertyAssign(y.content_obj, {
          samantha_code: n,
          artifact_meta: i
        });
      } else if (messageContentTypeAndStatusChecker.Fd2(y)) {
        let {
          input_skill: e
        } = t.ext ?? {};
        let {
          variables: n
        } = safeJsonUtils.safeParse(e, {});
        let {
          content_context: i,
          action: o,
          enable_search: u
        } = n ?? {};
        let {
          type: s,
          selected_content: c,
          cursor_position: d,
          doc_structure_version: _
        } = safeJsonUtils.safeParse(i, {}) ?? {};
        let v = objectPathFilterUtil.filterObjectByPaths({
          doc_action: o == null ? undefined : o.toString(),
          type: s == null ? undefined : s.toString(),
          selection: c ? safeJsonUtils.safeStringify(c) : undefined,
          cursor: d ? safeJsonUtils.safeStringify(d) : undefined,
          enable_search: isUndefinedCheck.isUndefined(u) ? undefined : u.toString(),
          doc_structure_version: _ == null ? undefined : _.toString()
        }, e => !!e);
        let f = parseReferenceContentArray.parseReferenceContentArray(t.ext);
        safePropertyAssignUtil.safePropertyAssign(y, {
          ext: {
            ...y.ext,
            ...v
          },
          references: f
        });
      }
      return y;
    }
    samanthaChatMessageToMessage(e, t) {
      let c = deepCloneWrapper_1.deepClone(e);
      c.content_obj ||= {};
      if (messageContentTypeAndStatusChecker.rKF(c)) {
        let {
          text: e,
          is_hide: t
        } = aiChatSourceExtractor.extractThinkMeta(c.meta_infos);
        safePropertyAssignUtil.safePropertyAssign(c, {
          content_obj: {
            ...c.content_obj,
            think: e
          },
          has_think_reason: true,
          think_reason_is_hide: t,
          think_reason_default_expand: true
        });
      }
      if (c.content_type === aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteOutlineOutput) {
        let {
          outline_leading_content: e,
          outline_meta: i,
          outline_id: o,
          text: a,
          samantha_code: l,
          loading_style: u
        } = safeJsonUtils.safeParse(t.message?.content, {});
        safePropertyAssignUtil.safePropertyAssign(c.content_obj, {
          outline_leading_content: e,
          outline_meta: i,
          outline_id: o,
          brief: a,
          text: a,
          samantha_code: l,
          loading_style: u
        });
      } else if (c.content_type === aiAssistantSkillTypes.SamanthaTypes.SamanthaWritePagesCardOutput) {
        let {
          async_generate: e,
          title: n,
          samantha_code: i,
          pages_id: a,
          summary: l
        } = safeJsonUtils.safeParse(t.message?.content, {});
        safePropertyAssignUtil.safePropertyAssign(c.content_obj, {
          async_generate: e,
          brief: n,
          samantha_code: i,
          pages_id: a,
          title: n,
          summary: l,
          generated_tips: "",
          generating_tips: ""
        });
      } else if (c.content_type === aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteArtifactOutput) {
        let e = safeJsonUtils.safeParse(t.message?.content, {});
        safePropertyAssignUtil.safePropertyAssign(c.content_obj, e);
      } else if (c.content_type === aiAssistantSkillTypes.SamanthaTypes.SamanthaWritingGenerateInput) {
        let {
          text: e,
          content_context: n,
          action: i,
          enable_search: o
        } = safeJsonUtils.safeParse(t.message?.content, {});
        let {
          type: l,
          selected_content: d,
          cursor_position: _,
          doc_structure_version: v
        } = n ?? {};
        let f = objectExcludeFilterUtil.filterObjectExclude({
          doc_action: i == null ? undefined : i.toString(),
          type: l == null ? undefined : l.toString(),
          selection: d ? safeJsonUtils.safeStringify(d) : undefined,
          cursor: _ ? safeJsonUtils.safeStringify(_) : undefined,
          enable_search: isUndefinedCheck.isUndefined(o) ? undefined : o.toString(),
          doc_structure_version: v == null ? undefined : v.toString()
        }, e => !!e);
        safePropertyAssignUtil.safePropertyAssign(c, {
          content_obj: {
            text: e
          },
          ext: f
        });
      }
      return c;
    }
    messageToSamanthaChatMessage(e) {
      let t = Z(e);
      if (t) {
        return {
          content: JSON.stringify(t),
          content_type: aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteInput,
          attachments: e.attachments
        };
      }
      let n = w(e);
      if (n) {
        return {
          content: JSON.stringify(n),
          content_type: aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteEditorInput,
          attachments: e.attachments
        };
      }
      let i = P(e);
      if (i) {
        return {
          content: JSON.stringify(i),
          content_type: aiAssistantSkillTypes.SamanthaTypes.SamanthaWritingGenerateInput,
          attachments: e.attachments,
          references: e.references
        };
      } else {
        return {
          content: JSON.stringify(e.content_obj),
          content_type: aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteInput,
          attachments: e.attachments
        };
      }
    }
    messageToAliceChatMessage(e) {
      var Z;
      var w;
      let C = deepCloneWrapper_1.deepClone(e);
      safePropertyAssignUtil.safePropertyAssign(C, throttledPathFilterStringify.throttledPathStr(e, ["local_conversation_id", "bot_id", "conversation_id", "section_id", "local_message_id", "message_type", "content_type", "create_time", "message_id", "reply_id", "content_source", "template_id", "ext", "status"]), {
        ext: aliceMessageProtocolTransform.transformMessageExt(C) ?? {},
        content: aliceMessageProtocolTransform.stringifyMessageContent(C)
      });
      let {
        content_type: I,
        content_obj: R = {},
        ext: A
      } = C;
      if (I === aiAssistantSkillTypes.SamanthaTypes.SamanthaWriteInput) {
        let {
          action: e,
          read_doc_input: t,
          continue_writing_input: i,
          expansion_input: s,
          abbreviation_input: v,
          polish_input: h,
          summarize_input: I,
          chat_in_doc_input: O,
          extract_paragraph_description_input: N,
          re_gen_paragraph_doc_input: E,
          inline_tone_input: W
        } = R;
        let B = null;
        if (e === inlineDocxActionTypes.getDocxActionTypes.ReadDoc) {
          B = {
            action: e,
            pages_id: (t == null ? undefined : t.pages_id) ?? ""
          };
        } else if (e === inlineDocxActionTypes.getDocxActionTypes.ContinueWriting) {
          B = {
            action: e,
            selected_content: (i == null ? undefined : i.selected_content) ?? ""
          };
        } else if (e === inlineDocxActionTypes.getDocxActionTypes.Expansion) {
          B = {
            action: e,
            selected_content: (s == null ? undefined : s.selected_content) ?? ""
          };
        } else if (e === inlineDocxActionTypes.getDocxActionTypes.Abbreviation) {
          B = {
            action: e,
            selected_content: (v == null ? undefined : v.selected_content) ?? ""
          };
        } else if (e === inlineDocxActionTypes.getDocxActionTypes.Polish) {
          B = {
            action: e,
            selected_content: (h == null ? undefined : h.selected_content) ?? ""
          };
        } else if (e === inlineDocxActionTypes.getDocxActionTypes.Summarize) {
          B = {
            action: e,
            selected_content: (I == null ? undefined : I.selected_content) ?? ""
          };
        } else if (e === inlineDocxActionTypes.getDocxActionTypes.ChatInDoc) {
          B = {
            action: e,
            selected_content: (O == null ? undefined : O.selected_content) ?? "",
            paragraph_content: (O == null ? undefined : O.paragraph_content) ?? "",
            last_generated_content: (O == null ? undefined : O.last_generated_content) ?? ""
          };
        } else if (e === inlineDocxActionTypes.getDocxActionTypes.ExtractParagraphDescription) {
          B = {
            action: e,
            paragraph_content: (N == null ? undefined : N.paragraph_content) ?? ""
          };
        } else if (e === inlineDocxActionTypes.getDocxActionTypes.RegenerateParagraphDoc) {
          B = {
            action: e,
            paragraph_content: (E == null ? undefined : E.paragraph_content) ?? "",
            paragraph_title: (E == null ? undefined : E.paragraph_title) ?? "",
            paragraph_description: (E == null ? undefined : E.paragraph_description) ?? ""
          };
        } else if (collectionIncludesUtil.includes([inlineDocxActionTypes.getDocxActionTypes.InlineToneProfessional, inlineDocxActionTypes.getDocxActionTypes.InlineToneCasual, inlineDocxActionTypes.getDocxActionTypes.InlineToneReadable, inlineDocxActionTypes.getDocxActionTypes.InlineToneSubtle, inlineDocxActionTypes.getDocxActionTypes.InlineToneAcademic, inlineDocxActionTypes.getDocxActionTypes.InlineToneElegant, inlineDocxActionTypes.getDocxActionTypes.InlineToneTrendy], e)) {
          B = {
            action: e,
            selected_content: (W == null ? undefined : W.selected_content) ?? ""
          };
        }
        if (B) {
          safePropertyAssignUtil.safePropertyAssign(A, {
            input_skill: B ? JSON.stringify({
              skill_id: String(chatAppEnums.SkillType.WriteAssistant),
              skill_type: chatAppEnums.SkillType.WriteAssistant,
              variables: B,
              source_message_id: A == null ? undefined : A.source_message_id
            }) : undefined,
            stream: "1",
            answer_with_suggest: "0",
            samantha_context: JSON.stringify({
              user_context: {
                locale: navigator.language.split("-")[0] || "en",
                timezone: ((w = Intl) === null || w === undefined ? undefined : (Z = w.DateTimeFormat()) === null || Z === undefined ? undefined : Z.resolvedOptions()?.timeZone) || ""
              },
              query_context: {}
            })
          });
          safePropertyAssignUtil.safePropertyAssign(C, {
            local_conversation_id: "0",
            bot_id: chatConversationSelectors_2.getBotId(chatFeedStoreFactory.useFeedStore.getState()) || chatConstantId.chatConstantId
          });
        }
      }
      return C;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = chatWritingSymbol.writingSymbol;
      if ((e = typeof (n = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
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
  }
  require.r(exports);
  require.d(exports, {
    WriteChatProtocolTransformPlugin: function () {
      return I;
    }
  });
}