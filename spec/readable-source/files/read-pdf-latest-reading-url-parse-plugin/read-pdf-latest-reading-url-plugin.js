// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'l' to 'aiChatSkillConversationChecker'
// - Resolved require(728119) to 'ai-chat-skill-conversation-checker'
// - Renamed variable 'r' to 'chatSkillMessageSender'
// - Resolved require(500722) to 'chat-skill-message-sender'
// - Renamed variable 'n' to 'chatMessageSender'
// - Resolved require(894807) to 'chat-message-sender'
// - Renamed variable 's' to 'chatInputActionUtils'
// - Resolved require(678030) to 'chat-input-action-utils'
// - Renamed variable 'c' to 'chatPanelModes'
// - Resolved require(690886) to 'chat-panel-modes'
// - Renamed variable '_' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Updated imported property 'h' to 'isValidSkillType' (module 728119)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'J' to 'sendChatMessage' (module 894807)
// - Updated imported property 'v' to 'sendSkillMessage' (module 500722)
// - Updated imported property 'yG' to 'getChatInputAction' (module 678030)
// - Updated imported property 'P' to 'PanelMode' (module 690886)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: read-pdf-latest-reading-url-parse-plugin.68a64c76.js
         * chunkId: 63210
         * moduleId: 728790
         */
module.exports = function (module, exports, require) {
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiChatSkillConversationChecker = require("ai-chat-skill-conversation-checker") /*id: 728119*/;
  var chatSkillMessageSender = require("chat-skill-message-sender") /*id: 500722*/;
  var chatMessageSender = require("chat-message-sender") /*id: 894807*/;
  let o = async e => {
    let {
      rawSendMessage: t,
      ...a
    } = e;
    if (await aiChatSkillConversationChecker.isValidSkillType(aiAssistantSkillTypes.SkillTypes.SkillRead)) {
      return chatMessageSender.sendChatMessage(a);
    } else {
      return chatSkillMessageSender.sendSkillMessage({
        ...a,
        rawSendMessage: t
      });
    }
  };
  var chatInputActionUtils = require("chat-input-action-utils") /*id: 678030*/;
  var chatPanelModes = require("chat-panel-modes") /*id: 690886*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let d = e => "link" in e;
  let m = e => {
    let {
      asset: t,
      conversationId: a,
      prompt: i
    } = e;
    let l = d(t) ? {
      type: "link",
      link: t.link
    } : {
      type: "attachment",
      fileName: t.fileName,
      fileKey: t.fileKey
    };
    let r = [d(t) ? t.link : t.fileKey];
    let n = [d(t) ? {
      url: t.link
    } : {
      name: t.fileName,
      uri: t.fileKey
    }];
    return {
      chatId: a,
      conversationId: a,
      reportParams: {
        scene: "click_suggest_template"
      },
      extraExt: {
        immersive_reading_files: JSON.stringify(r),
        need_reference: "0"
      },
      skillParamObj: chatInputActionUtils.getChatInputAction({
        immersiveFiles: n
      }),
      text: i,
      refContents: [l]
    };
  };
  var u = async e => {
    let {
      payload: t,
      sendMessage: a,
      chatViewService: i
    } = e;
    let {
      asset: l,
      conversationId: r,
      needSendMessage: n = false
    } = t;
    if (l && n) {
      await new Promise(e => {
        setTimeout(e, 1000);
      });
      let e = m(t);
      await o({
        ...e,
        rawSendMessage: a
      });
      i.openCanvasPanel({
        exactPluginIdentifier: "read-preview",
        conversationId: r || "",
        messageId: "",
        readContent: {
          ...(d(l) ? {
            pdfUrl: l.link,
            pdfName: l.link,
            realFileKey: l.link
          } : {
            pdfId: l.fileKey,
            pdfName: l.fileName,
            realFileKey: l.fileKey
          }),
          openFrom: "click_latest_reading_in_guidance_page"
        },
        canvasLayoutState: chatPanelModes.PanelMode.CANVAS_ONLY
      });
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "read_canvas_open_start",
        meta: {
          open_from: "click_latest_reading_in_guidance_page"
        }
      });
    }
  };
  require.r(exports);
  require.d(exports, {
    default: function () {
      return u;
    }
  });
}