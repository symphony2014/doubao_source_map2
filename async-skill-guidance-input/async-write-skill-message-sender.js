// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'useWriteMessage'
// - Renamed export 'O' to 'useWritePayload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-skill-bar.fa8b92d0.js
         * chunkId: 18910
         * moduleId: 511261
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var messageAttachmentBlockFactory = require("message-attachment-block-factory") /*id: 930060*/;
  let c = e => {
    let {
      text: t = "",
      conversationId: n,
      extraExt: i,
      inputSkillObj: r,
      reportParams: o = {},
      replace: s,
      status: a,
      rawSendMessage: l
    } = e;
    if (l != null) {
      l([{
        text: t,
        conversationId: n,
        extraExt: {
          ...i,
          input_skill: JSON.stringify(r)
        },
        reportParams: o,
        operation: {
          replace: s
        },
        messageStatus: a
      }]);
    }
  };
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatInputSkillTypes = require("chat-input-skill-types") /*id: 878542*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  let S = async e => {
    let {
      text: t,
      conversationId: n,
      extraExt: i,
      reportParams: r = {},
      replace: a,
      status: l
    } = e;
    let c = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
    let u = chatTextBlockFactory.createTextBlock(t ?? "");
    let d = conversationMessageUtils.assembleContentBlocks({
      textBlock: u
    });
    let p = C(e);
    let h = conversationMessageUtils.createMessageObject({
      conversation: conversationMessageUtils.parseConversationId(n ?? ""),
      message: {
        content_blocks_v2: d,
        ext: {
          ...T(i),
          ...(p ? {
            chat_ability: p
          } : {})
        }
      }
    });
    if (l === chatMessageTypes.PushMessageStatus.InVisible) {
      h.status_v2 = chatConstantsEnum.messageStatus.MessageStatus_INVISIBLE;
    }
    if (a !== undefined) {
      h.is_replace = !!a;
    }
    if (c == null) {
      return undefined;
    } else {
      return c.sendMessage({
        message: h,
        session: {
          reportParams: r
        }
      });
    }
  };
  let T = e => Object.fromEntries(Object.entries(e ? throttledOmitPathStringify.omitPathStringify(e, "input_skill") : {}).map(e => {
    let [t, n] = e;
    return [t, isStringTypeCheck.isString(n) ? n : safeJsonUtils.safeStringify(n)];
  }));
  let w = e => {
    let t = e == null ? undefined : e.chat_ability;
    if (isStringTypeCheck.isString(t)) {
      let {
        ability_param: e,
        ability_type: n
      } = safeJsonUtils.safeParse(t, {});
      if (!isStringTypeCheck.isString(e)) {
        return;
      }
      return safeJsonUtils.safeStringify({
        ability_type: n,
        ability_param: e
      });
    }
  };
  let E = e => e === "artifact_polish" ? chatInputSkillTypes.ChatSkillAction.FULL_TEXT_POLISH : e === "artifact_adjust_the_length_long" ? chatInputSkillTypes.ChatSkillAction.LENGTH_ADJUSTMENT_LONG : e === "artifact_adjust_the_length_short" ? chatInputSkillTypes.ChatSkillAction.LENGTH_ADJUSTMENT_SHORT : undefined;
  let C = e => {
    let {
      extraExt: t,
      inputSkillObj: n
    } = e;
    let {
      doc_action: r,
      type: o,
      selection: a,
      cursor: l,
      enable_search: c,
      doc_structure_version: u,
      placeholder_page_artifact: h,
      generate_config: f
    } = t || {};
    let {
      skill_type: m = chatAppEnums.SkillType.WriteAssistant,
      variables: v
    } = n || {};
    let {
      action: S,
      enable_pages_canvas: T,
      enable_search: w,
      disable_canvas: C
    } = v || {};
    let R = {};
    if (r) {
      R.action = infraUtilFunctions.parseNumber(r);
    } else if (isStringTypeCheck.isString(S) && E(S)) {
      R.action = E(S);
    } else {
      R.action = chatInputSkillTypes.ChatSkillAction.DIRECT_INPUT;
    }
    R.content_context ||= {};
    if (R.content_context) {
      if (isStringTypeCheck.isString(o)) {
        R.content_context.type = infraUtilFunctions.parseNumber(o);
      }
      if (isStringTypeCheck.isString(a)) {
        R.content_context.selected_content = safeJsonUtils.safeParse(a, undefined);
      }
      if (isStringTypeCheck.isString(l)) {
        R.content_context.cursor_position = safeJsonUtils.safeParse(l, undefined);
      }
      if (isStringTypeCheck.isString(u)) {
        R.content_context.doc_structure_version = infraUtilFunctions.parseNumber(u);
      }
      if (isStringTypeCheck.isString(h)) {
        let {
          page_token: e
        } = safeJsonUtils.safeParse(h, undefined) ?? {};
        if (e) {
          R.content_context.page_token = e;
        }
      }
      R.config ||= {};
      if (R.config) {
        if (isStringTypeCheck.isString(f)) {
          R.config.generate_config = safeJsonUtils.safeParse(f, undefined);
        }
        if (T === "true" || T === true) {
          R.config.canvas_mode = chatInputSkillTypes.ChatInputMode.OPEN;
        } else if (C === true) {
          R.config.canvas_mode = chatInputSkillTypes.ChatInputMode.CLOSE;
        } else {
          R.config.canvas_mode = chatInputSkillTypes.ChatInputMode.AUTO;
        }
        if (isStringTypeCheck.isString(c)) {
          R.config.enable_search = c === "true";
        } else if (isBooleanUtil.isBoolean(c)) {
          R.config.enable_search = c;
        } else if (isUndefinedCheck.isUndefined(w)) {
          R.config.enable_search = false;
        } else {
          R.config.enable_search = w === "true" || w === true;
        }
        return conversationMessageUtils.serializeAbilityData(m, safeJsonUtils.safeStringify(R));
      } else {
        return undefined;
      }
    }
  };
  let R = (e, t) => {
    let n = safeJsonUtils.safeParse(t, undefined);
    let i = safeJsonUtils.safeParse(e, undefined);
    if (!i) {
      return t ?? "";
    }
    if (!n) {
      return e ?? "";
    }
    let r = n.ability_type;
    if (r !== i.ability_type) {
      return t ?? "";
    }
    let o = safeJsonUtils.safeParse(n.ability_param, {});
    let a = safeJsonUtils.safeParse(i.ability_param, {});
    let l = safePropertyAssignUtil.safePropertyAssign(a, o);
    return conversationMessageUtils.serializeAbilityData(r, safeJsonUtils.safeStringify(l));
  };
  let k = e => {
    var n;
    let o = ((n = e.inputSkillObj) === null || n === undefined ? undefined : n.variables?.action) ?? "";
    return !!isStringTypeCheck.isString(o) && !!["gen_outline", "gen_doc"].includes(o);
  };
  let x = () => ({
    sendWriteMessage: async e => (await aiChatSkillConversationChecker.isValidSkillType(aiAssistantSkillTypes.SkillTypes.SkillWrite)) && !k(e) ? S(e) : c(e)
  });
  let O = () => ({
    sendWritePayloadMessage: async e => {
      let {
        payload: t,
        blocks: n,
        rawSendMessage: i,
        conversationId: c,
        inputSkillObj: u,
        reportParams: d = {},
        skillType: p = aiAssistantSkillTypes.SkillTypes.SkillWrite
      } = e;
      if ((await aiChatSkillConversationChecker.isValidSkillType(p)) && !k(e)) {
        let e = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
        let i = (n == null ? undefined : n.length) ? n : messageAttachmentBlockFactory.createAttachmentBlocks(t);
        if (i) {
          let n = R(C({
            extraExt: t.extraExt,
            inputSkillObj: u
          }), w(t.extraExt));
          let r = conversationMessageUtils.createMessageObject({
            conversation: conversationMessageUtils.parseConversationId(c ?? ""),
            message: {
              content_blocks_v2: i,
              ext: {
                ...T(t.extraExt),
                chat_ability: n
              },
              message_status: t.messageStatus
            }
          });
          if (e == null) {
            return undefined;
          } else {
            return e.sendMessage({
              message: r,
              session: {
                reportParams: d
              }
            });
          }
        }
      }
      i([t]);
    }
  });
  require.d(exports, {
    useWriteMessage: function () {
      return x;
    },
    useWritePayload: function () {
      return O;
    }
  });
}