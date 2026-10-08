// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'buildChatMessage'
// - Renamed export 'r' to 'parseChatAbility'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 589350
         */
module.exports = function (module, exports, require) {
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  let u = (e, t) => {
    var s;
    let l = (s = t.externalService.feedStore) === null || s === undefined ? undefined : s.getState();
    let c = (l == null ? undefined : l.conversationMap[e.conversation_id || ""]) ?? (l == null ? undefined : l.localConversationMap[e.local_conversation_id || ""]);
    return {
      local_conversation_id: e.local_conversation_id,
      conversation_id: e.conversation_id ?? "",
      bot_id: String(e.bot_id ?? (c == null ? undefined : c.bot_id) ?? ""),
      last_section_id: (c == null ? undefined : c.last_section_id) ?? "",
      last_message_index: Number(c == null ? undefined : c.message_index)
    };
  };
  let d = e => {
    if (e.ext?.send_from_desktop_launcher_share === "1") {
      return aiChatEnumConstants.inputSourceType.SharedApp;
    } else if (e.ext?.send_from_desktop_launcher === "1") {
      return aiChatEnumConstants.inputSourceType.DesktopLauncher;
    } else if (e.ext?.send_from_pc_push === "1") {
      return aiChatEnumConstants.inputSourceType.DesktopPush;
    } else if (e.ext?.send_from_skill_guidance_or_suggestion === "1") {
      return aiChatEnumConstants.inputSourceType.GuidanceOrSuggestion;
    } else if (e.ext?.send_from_canvas_action_bar === "1") {
      return aiChatEnumConstants.inputSourceType.CanvasActionbar;
    } else {
      return aiChatEnumConstants.inputSourceType.InputBox;
    }
  };
  let v = e => {
    let n = Number(e.ext?.use_deep_think_override || e.ext?.use_deep_think);
    if (n) {
      if (n === aiChatEnumConstants.deepThinkSwitch.DeepThinkSwitchAuto) {
        return aiChatEnumConstants.deepThinkSwitch.DeepThinkSwitchAuto;
      } else if (n === aiChatEnumConstants.deepThinkSwitch.DeepThinkSwitchPro) {
        return aiChatEnumConstants.deepThinkSwitch.DeepThinkSwitchPro;
      } else {
        return aiChatEnumConstants.deepThinkSwitch.DeepThinkSwitchTrue;
      }
    } else if (e.ext?.use_auto_cot === "2") {
      return aiChatEnumConstants.deepThinkSwitch.DeepThinkSwitchAuto;
    } else {
      return aiChatEnumConstants.deepThinkSwitch.DeepThinkSwitchFalse;
    }
  };
  let g = e => {
    return {
      send_message_scene: "",
      create_time_ms: Number(e.create_time),
      collect_id: "",
      is_audio: false,
      answer_with_suggest: e.ext?.answer_with_suggest === "1",
      tts_switch: false,
      need_deep_think: v(e),
      click_clear_context: false,
      from_suggest: e.ext?.send_from_skill_guidance_or_suggestion === "1",
      is_regen: e.ext?.regen === "1",
      is_replace: e.ext?.replace === "1",
      disable_sse_cache: false,
      select_text_action: "",
      resend_for_regen: e.ext?.resend_for_regen === "1",
      scene_type: aiChatEnumConstants.requestSceneType.ReqSceneType_Default,
      unique_key: e.session_id || "",
      start_seq: 0,
      need_create_conversation: !!e.local_conversation_id,
      conversation_init_option: e.ext?.conversation_init_option ? safeJsonUtils.safeParse(e.ext?.conversation_init_option, undefined) : undefined,
      regen_query_id: safeJsonUtils.safeParse(e.ext?.regen_query_id, []),
      edit_query_id: safeJsonUtils.safeParse(e.ext?.edit_query_id, []),
      regen_instruction: "",
      no_replace_for_regen: e.ext?.no_replace_for_regen === "1",
      message_from: d(e),
      shared_app_name: ((e == null ? undefined : e.ext?.send_from_desktop_launcher_share) === "1" ? e == null ? undefined : e.ext?.shared_app_name : "") ?? "",
      action_bar_skill_id: infraUtilFunctions.parseNumber(e == null ? undefined : e.ext?.action_bar_skill_id),
      sse_recv_event_options: {
        support_chunk_delta: true
      },
      is_ai_playground: (e == null ? undefined : e.ext?.is_playground) === "1",
      onboarding: e == null ? undefined : e.ext?.samantha_onboarding
    };
  };
  let _ = e => {
    return safeJsonUtils.safeParse(e.ext?.chat_ability, undefined);
  };
  let m = e => ({
    ...(throttledOmitPathStringify.omitPathStringify(e.ext, ["chat_ability", "vip_feature_key", "autoNavigate", "use_submit_pipeline", "is_playground", "no_replace_for_regen"]) || {}),
    sub_conv_firstmet_type: e.local_conversation_id ? "1" : "0"
  });
  let h = e => {
    let t = e == null ? undefined : e.status;
    if (t === chatMessageTypes.PushMessageStatus.Available || t === chatMessageTypes.PushMessageStatus.Broken || t === chatMessageTypes.PushMessageStatus.Streaming) {
      return chatConstantsEnum.messageStatus.MessageStatus_AVAILABLE;
    } else if (t === chatMessageTypes.PushMessageStatus.InVisible) {
      return chatConstantsEnum.messageStatus.MessageStatus_INVISIBLE;
    } else if (t === chatMessageTypes.PushMessageStatus.NotCompliant) {
      return chatConstantsEnum.messageStatus.MessageStatus_NotCompliant;
    } else if (t === chatMessageTypes.PushMessageStatus.Unselected) {
      return chatConstantsEnum.messageStatus.MessageStatus_UNSELECTED;
    } else {
      return chatConstantsEnum.messageStatus.MessageStatus_INVISIBLE;
    }
  };
  let f = (e, t) => {
    let s = objectValuesHelper.getObjectValues(e).map(e => e.extra);
    if (!s.length) {
      throw Error("messageExtra is undefined");
    }
    let i = s[0] || {};
    let r = s.map(e => {
      return {
        local_message_id: (e == null ? undefined : e.local_message_id) ?? "",
        content_block: (e == null ? undefined : e.content_blocks_v2) ?? [],
        message_status: h(e)
      };
    });
    let a = _(i);
    let o = m(i);
    return {
      client_meta: u(i, t),
      messages: r,
      option: g(i),
      chat_ability: a,
      ext: o
    };
  };
  require.d(exports, {
    buildChatMessage: function () {
      return f;
    },
    parseChatAbility: function () {
      return _;
    }
  });
}