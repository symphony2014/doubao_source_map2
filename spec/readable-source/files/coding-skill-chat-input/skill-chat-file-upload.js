// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'chatFileUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 492056
         */
module.exports = function (module, exports, require) {
  var codingChatFileUpload = require("coding-chat-file-upload") /*id: 208950*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatConversationSelectors_1 = require("chat-conversation-selectors_1") /*id: 804460*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var skillMessageTypes = require("skill-message-types") /*id: 824454*/;
  let p = e => {
    let {
      attachmentStates: t,
      addAttachment: n,
      isNewThread: p,
      chatId: h,
      conversationId: m,
      skillType: f,
      skillId: _,
      getPreGeneratedLocalMessageId: v,
      clearRefContent: g,
      setUploadedFileType: b,
      trackExtraParams: y
    } = e;
    let x = codingChatFileUpload.codeFileValidator();
    let C = chatFeedStoreFactory.useFeedStore(chatConversationSelectors_2.getBotId);
    let w = {
      conversation_id: p ? "" : h ?? "",
      conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), m) || 1,
      chat_type: (p ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", h)) || "other_default",
      skill_name: f ? skillTypeMappings.getSkillName(f) : "",
      skill_id: _,
      uploadWay: "browse_folder",
      upload_type: "file",
      upload_token_length: "",
      upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
      click_from: "click",
      botId: chatConversationBotId.getConversationBotId(m) || C || "",
      ...y
    };
    return {
      handleAddFiles: async e => {
        if (e.target.files) {
          let {
            files: i
          } = e.target;
          let o = Array.from(i);
          let {
            filterFileList: r,
            abort: l
          } = await x({
            fileList: o,
            attachmentStates: t,
            toastImmediately: true,
            trackParams: w
          });
          if (!l) {
            for (let e of r) {
              await n({
                file: e,
                type: "file",
                ctx: {
                  conversationId: p ? "" : h ?? "",
                  chatType: (p ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", h)) || "other_default",
                  skillType: f || 0,
                  skillId: _ || "",
                  uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
                  botId: chatConversationBotId.getConversationBotId(m) || C || "",
                  uploadWay: "browse_folder",
                  from: "click",
                  uploadCollectionWay: i.length + t.length > 1 ? "multi" : "single",
                  uploadId: await v(),
                  extraParams: {
                    code_scene: (y == null ? undefined : y.code_scene) || "chat",
                    upload_file_type: "code_file"
                  }
                }
              });
              if (b != null) {
                b(skillMessageTypes.resourceTypes.FILE);
              }
            }
            if (g != null) {
              g();
            }
          }
        }
      }
    };
  };
  require.d(exports, {
    chatFileUpload: function () {
      return p;
    }
  });
}