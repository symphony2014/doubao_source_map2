// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'translateService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: translate-skill-guidance-page.ef1836c4.js
         * chunkId: 29337
         * moduleId: 437553
         */
module.exports = function (module, exports, require) {
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var businessLangMapper = require("business-lang-mapper") /*id: 122238*/;
  let c = async e => {
    let {
      rawSendMessage: t,
      modifyMessage: n,
      reportParams: l,
      extraExt: a,
      translateText: r,
      sourceLangValue: i,
      targetLangValue: c,
      sourceLangName: d,
      targetLangName: _
    } = e;
    let g = chatAppEnums.SkillType.Translate;
    let p = g.toString();
    let f = {
      skill_type: g,
      skill_id: p,
      ...businessLangMapper.mapLangInput({
        sourceLangValue: i,
        targetLangValue: c,
        sourceLangName: d,
        targetLangName: _
      })
    };
    let m = [{
      text: r,
      reportParams: {
        scene: "chat_action_bar",
        sec_scene: skillTypeMappings.getSkillActionClass(g),
        ...l
      },
      extraExt: {
        input_skill: JSON.stringify(f),
        ...a
      }
    }];
    if (n) {
      m = n(m);
    }
    await t(m);
  };
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var referenceBlockTransformer = require("reference-block-transformer") /*id: 642515*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var cjkAwareConcat = require("cjk-aware-concat") /*id: 234823*/;
  let v = async e => {
    var t;
    let {
      chatId: n,
      reportParams: a,
      extraExt: r,
      translateText: i,
      sourceLangValue: s,
      targetLangValue: c,
      sourceLangName: p,
      targetLangName: f
    } = e;
    if (!i) {
      return;
    }
    let m = aiChatEnumConstants.skillTypes.SkillTranslate;
    let h = aiAssistantSkillTypes.SkillTypes.SkillTranslate;
    let v = businessLangMapper.mapLangInput({
      sourceLangValue: s,
      targetLangValue: c,
      sourceLangName: p,
      targetLangName: f
    });
    let x = k({
      translateText: i,
      targetLangName: f
    });
    let w = {
      scene: "chat_action_bar",
      sec_scene: skillTypeMappings.getSkillActionClass(h),
      ...a
    };
    let y = {
      chat_ability: conversationMessageUtils.serializeAbilityData(m, JSON.stringify(v))
    };
    let S = conversationMessageUtils.createMessageObject({
      conversation: conversationMessageUtils.parseConversationId(n),
      message: {
        content_blocks_v2: x,
        ext: {
          ...y,
          ...r
        }
      }
    });
    if ((t = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService")) === null || t === undefined) {
      return undefined;
    } else {
      return t.sendMessage({
        message: S,
        session: {
          reportParams: w
        }
      });
    }
  };
  let k = e => {
    let {
      translateText: t,
      targetLangName: n
    } = e;
    let l = referenceBlockTransformer.transformReferences([{
      type: "text",
      text: t
    }]);
    let a = cjkAwareConcat.smartConcat(i18nTranslationUtils.i18nextTranslate("flow_web_ext_action_translate_to"), n);
    let r = chatTextBlockFactory.createTextBlock(a);
    return conversationMessageUtils.assembleContentBlocks({
      referenceBlocks: l,
      textBlock: r
    });
  };
  let x = () => {
    let {
      sendMessage: e
    } = chatServiceContext.useChatService("chatMessageService");
    return {
      sendMessage: reactFunctionMemoHook.useMemoizedCallback(async t => (await aiChatSkillConversationChecker.isValidSkillType(aiChatEnumConstants.skillTypes.SkillTranslate)) ? v(t) : c({
        rawSendMessage: e,
        ...t
      }))
    };
  };
  require.d(exports, {
    translateService: function () {
      return x;
    }
  });
}