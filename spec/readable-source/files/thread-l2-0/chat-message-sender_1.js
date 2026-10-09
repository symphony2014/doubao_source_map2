// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'sendChatMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 195759
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var referenceBlockTransformer = require("reference-block-transformer") /*id: 642515*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  async function s(e, t) {
    let n = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
    if (n != null) {
      n.sendMessage({
        message: e,
        session: {
          reportParams: t
        }
      });
    }
  }
  async function c(e) {
    let {
      text: t,
      conversationId: n,
      contextValue: i,
      refValue: c,
      messageExt: d,
      refExtra: u,
      attachmentBlock: p,
      refContents: f = [],
      reportParams: _ = {}
    } = e;
    let h = {};
    let m = [...f];
    if (c) {
      m.push({
        type: "text",
        text: c,
        extra: u
      });
    }
    if (m.length) {
      let e = referenceBlockTransformer.transformReferences(m);
      h.referenceBlocks = e;
    }
    if (p) {
      h.attachmentBlock = p;
    }
    let g = chatTextBlockFactory.createTextBlock(t);
    h.textBlock = g;
    let b = conversationMessageUtils.assembleContentBlocks(h);
    let v = conversationMessageUtils.createMessageObject({
      conversation: conversationMessageUtils.parseConversationId(n ?? ""),
      message: {
        content_blocks_v2: b,
        ext: {
          ...d,
          chat_ability: conversationMessageUtils.serializeAbilityData(chatAppEnums.SkillType.CodeAssistant, JSON.stringify(i || {}))
        }
      }
    });
    await s(v, _);
  }
  require.d(exports, {
    sendChatMessage: function () {
      return c;
    }
  });
}