// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'useChatInputAttachmentHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 771957
         */
module.exports = function (module, exports, require) {
  var imageUploadSettingCheck = require("image-upload-setting-check") /*id: 795291*/;
  var chatAttachmentOpenHandler = require("chat-attachment-open-handler") /*id: 354799*/;
  var attachmentStateValidator = require("attachment-state-validator") /*id: 151792*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let l = e => {
    let {
      activeSkill: t,
      disableRefContents: n,
      refContents: l,
      attachmentStates: u,
      scene: c,
      submitIgnoreUploadStatus: d
    } = e;
    let p = i18nTranslationUtils.useTranslationWithFallback();
    let f = imageUploadSettingCheck.canUploadImage();
    let {
      openReadCanvas: h
    } = chatAttachmentOpenHandler.chatAttachmentOpener({
      attachmentStates: u ?? [],
      openFrom: c ? `send_message_in_${c}` : "send_message"
    });
    let {
      success: m,
      tips: v
    } = attachmentStateValidator.useAttachValidator({
      attachmentStates: u ?? [],
      scene: "sendMessageButton",
      submitIgnoreUploadStatus: d
    });
    return {
      getPlaceholder: () => {
        if ((t == null ? undefined : t.skill_type) === chatAppEnums.SkillType.ReadPDF || !n && ((l == null ? undefined : l[0]?.type) === "attachment" || (l == null ? undefined : l[0]?.type) === "link")) {
          return p("landing_creation_inputmessage_pdf");
        }
      },
      enableSendOcrImage: f,
      openReadCanvas: h,
      getSendReportParams: () => ({
        is_long_file: 0
      }),
      getSendMessageHoverText: () => v,
      attachmentCanSend: m
    };
  };
  require.d(exports, {
    useChatInputAttachmentHandler: function () {
      return l;
    }
  });
}