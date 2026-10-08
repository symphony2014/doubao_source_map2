// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'useImageUploadHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 683572
         */
module.exports = function (module, exports, require) {
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var imageUploadValidationHook = require("image-upload-validation-hook") /*id: 668174*/;
  let h = e => {
    let {
      chatId: t,
      chatType: n,
      skill: h
    } = e;
    let f = (h == null ? undefined : h.skill_type) || chatAppEnums.SkillType.ExerciseAssistant;
    let {
      addAttachment: m,
      getPreGeneratedLocalMessageId: g
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: t ?? "",
      skillType: f
    });
    let v = imageUploadValidationHook.useImageUploadCheck();
    return {
      handleFilesChange: async (e, a) => {
        if (!e.length) {
          return;
        }
        if (!v(e)) {
          teaAnalyticsEventTracker.trackEvent("upload_status", {
            status: "0",
            conversation_id: t,
            skill_name: skillTypeMappings.getSkillName(f),
            skill_id: f.toString(),
            duration: "0",
            upload_type: "pic",
            upload_from: "exercise_upload"
          });
          return;
        }
        let d = e[0];
        await m({
          file: d,
          type: "image",
          ctx: {
            conversationId: n === chatConversationTypes.ConversationTypes.NewThread ? "" : t ?? "",
            chatType: (n === chatConversationTypes.ConversationTypes.NewThread ? "default_new" : chatSkillPinTypeDeterminer.determineSkillPinType("", t)) || "other_default",
            skillType: f,
            skillId: f.toString(),
            uploadFrom: skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
            botId: chatConversationSelectors_2.getBotId(chatFeedStoreFactory.useFeedStore.getState()),
            uploadWay: a.uploadWay,
            from: a.from,
            uploadCollectionWay: "single",
            uploadId: await g()
          }
        });
      }
    };
  };
  require.d(exports, {
    useImageUploadHandler: function () {
      return h;
    }
  });
}