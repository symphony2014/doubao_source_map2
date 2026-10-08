// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'sendChatMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: read-pdf-latest-reading-url-parse-plugin.68a64c76.js
         * chunkId: 63210
         * moduleId: 894807
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var aiChatEnumConstants = require("ai-chat-enum-constants") /*id: 458113*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var referenceBlockTransformer = require("reference-block-transformer") /*id: 642515*/;
  var attachmentToMessageBlockTransformer = require("attachment-to-message-block-transformer") /*id: 324654*/;
  let c = e => {
    let {
      chatId: t,
      extraExt: a,
      preGeneratedLocalMessageId: i,
      text: n,
      refContents: o,
      attachments: s,
      attachmentKeys: c,
      attachmentStates: d,
      skillParam: m
    } = e;
    let u = aiChatEnumConstants.skillTypes.SkillRead;
    let p = _({
      refContents: o,
      text: n,
      attachments: s,
      attachmentKeys: c,
      attachmentStates: d
    });
    let f = {
      chat_ability: conversationMessageUtils.serializeAbilityData(u, m)
    };
    return conversationMessageUtils.createMessageObject({
      conversation: conversationMessageUtils.parseConversationId(t),
      message: {
        content_blocks_v2: p,
        unique_id: i,
        ext: {
          ...f,
          ...a
        }
      }
    });
  };
  let _ = e => {
    let {
      refContents: t,
      text: a,
      attachments: i = [],
      attachmentKeys: l = [],
      attachmentStates: c = []
    } = e;
    let _ = referenceBlockTransformer.transformReferences(t || []);
    let d = attachmentToMessageBlockTransformer.transformAttachmentsToMessageBlock({
      attachments: i,
      attachmentKeys: l,
      attachmentStates: c
    });
    let m = chatTextBlockFactory.createTextBlock(a || "");
    return conversationMessageUtils.assembleContentBlocks({
      attachmentBlock: d,
      textBlock: m,
      referenceBlocks: _
    });
  };
  let d = async e => {
    var t;
    let {
      chatId: a,
      preGeneratedLocalMessageId: l,
      reportParams: r,
      extraExt: n,
      skillParamObj: o,
      text: s,
      attachments: _,
      attachmentKeys: d,
      attachmentStates: m,
      refContents: u
    } = e;
    let p = {
      ...r
    };
    let f = {
      ...n
    };
    let h = c({
      text: s,
      attachments: _,
      attachmentKeys: d,
      attachmentStates: m,
      refContents: u,
      chatId: a,
      skillParam: o && JSON.stringify(o),
      extraExt: f,
      preGeneratedLocalMessageId: l
    });
    if ((t = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService")) === null || t === undefined) {
      return undefined;
    } else {
      return t.sendMessage({
        message: h,
        session: {
          reportParams: p
        }
      });
    }
  };
  require.d(exports, {
    sendChatMessage: function () {
      return d;
    }
  });
}