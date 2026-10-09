// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'useAiSendMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18848.031095ef.js
         * chunkId: 18848
         * moduleId: 797491
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let a = async e => {
    let {
      rawSendMessage: t,
      reportParams: i,
      extraExt: n,
      inputSkillObj: r,
      text: o,
      image: s,
      imageKey: a,
      imageThumb: c,
      imageOri: u
    } = e;
    let d = chatAppEnums.SkillType.ExerciseAssistant;
    let h = d.toString();
    let p = {
      ...i
    };
    let f = {
      input_skill: JSON.stringify({
        skill_id: h,
        skill_type: d,
        ...r
      }),
      ...n
    };
    let m = {
      ...(a ? {
        image_key: a,
        image_thumb: c,
        image_ori: u
      } : s ? {
        image: s
      } : undefined),
      ...(o ? {
        text: o
      } : undefined),
      reportParams: p,
      extraExt: f
    };
    await t([m]);
  };
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var receiveMessageBoxStatus = require("receive-message-box-status") /*id: 682494*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var attachmentToMessageBlockTransformer = require("attachment-to-message-block-transformer") /*id: 324654*/;
  let g = async e => {
    var t;
    let {
      chatId: i,
      reportParams: n,
      extraExt: r,
      text: o,
      image: s,
      imageKey: l,
      imageOri: a
    } = e;
    let c = {
      ...n
    };
    let u = v({
      text: o,
      image: s,
      imageKey: l,
      imageOri: a,
      chatId: i,
      extraExt: {
        ...r
      }
    });
    if (u) {
      if ((t = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService")) === null || t === undefined) {
        return undefined;
      } else {
        return t.sendMessage({
          message: u,
          session: {
            reportParams: c
          }
        });
      }
    }
  };
  let v = e => {
    let {
      chatId: t,
      extraExt: i,
      text: n,
      image: r,
      imageKey: o,
      imageOri: s
    } = e;
    let l = aiChatEnumConstants.skillTypes.SkillEdu;
    let a = _({
      text: n,
      image: r,
      imageKey: o,
      imageOri: s
    });
    if (!a) {
      return;
    }
    let c = {
      chat_ability: conversationMessageUtils.serializeAbilityData(l)
    };
    return conversationMessageUtils.createMessageObject({
      conversation: conversationMessageUtils.parseConversationId(t),
      message: {
        content_blocks_v2: [a],
        ext: {
          ...c,
          ...i
        }
      }
    });
  };
  let _ = e => {
    let t;
    let i;
    let {
      text: n,
      image: r,
      imageKey: o,
      imageOri: s
    } = e;
    if (n) {
      return chatTextBlockFactory.createTextBlock(n);
    }
    if (o) {
      t = o;
      i = s == null ? undefined : s.url;
    } else {
      if (!r) {
        return;
      }
      t = "local_blob";
      i = URL.createObjectURL(r);
    }
    let l = uuidGeneratorUtil.generateUuid();
    let a = [{
      type: "image",
      localKey: l,
      from: "",
      file: new File([], "")
    }];
    let u = [{
      type: "image",
      localKey: l,
      fileName: "",
      fileKey: t,
      uploadPercent: 100,
      status: receiveMessageBoxStatus.messageBoxStatus.Normal,
      url: i
    }];
    let h = [t];
    return attachmentToMessageBlockTransformer.transformAttachmentsToMessageBlock({
      attachments: a,
      attachmentKeys: h,
      attachmentStates: u
    });
  };
  let w = () => {
    let {
      sendMessage: e
    } = chatServiceContext.useChatService("chatMessageService");
    return {
      sendMessage: reactFunctionMemoHook.useMemoizedCallback(async t => (await aiChatSkillConversationChecker.isValidSkillType(aiAssistantSkillTypes.SkillTypes.SkillEdu)) ? g(t) : a({
        rawSendMessage: e,
        ...t
      }))
    };
  };
  require.d(exports, {
    useAiSendMessage: function () {
      return w;
    }
  });
}