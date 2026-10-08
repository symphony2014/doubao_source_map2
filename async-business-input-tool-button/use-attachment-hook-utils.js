// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'useAttachmentHookUtils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 664800
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentStateValidator = require("attachment-state-validator") /*id: 151792*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let s = function (e) {
    let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let n = chatAppEnums.SkillType.DesExtSkillSuperTask;
    let s = attachmentUploadStoreHooks.getAttachmentKeys({
      chatId: e,
      skillType: n
    });
    let c = attachmentUploadStoreHooks.getAttachmentKeys({
      chatId: e
    });
    let u = attachmentUploadStoreHooks.subscribeAttachments({
      chatId: e,
      skillType: n
    });
    let d = attachmentUploadStoreHooks.subscribeAttachments({
      chatId: e
    });
    let p = t ? [...d, ...u] : u;
    let {
      deleteAttachment: h,
      updatePreGeneratedLocalMessageId: f,
      clearAllAttachments: m,
      reuploadAttachment: g
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: e,
      skillType: n
    });
    let {
      deleteAttachment: v
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: e
    });
    let _ = chatStoreManager.useStoreSelector("attachmentUploadStore", e => attachmentUploadStoreHooks.processAttachment(p, e), deepEqualUtil_1.deepEqual);
    let {
      success: b
    } = attachmentStateValidator.useAttachValidator({
      attachmentStates: _
    });
    return {
      attachmentCanSend: b,
      attachmentStates: _,
      attachments: p,
      attachmentKeys: t ? [...c, ...s] : s,
      deleteAttachment: e => {
        if (d.length && t) {
          if (e.index < d.length) {
            v(e);
          } else {
            h({
              ...e,
              index: e.index - d.length
            });
          }
        } else {
          h(e);
        }
      },
      updatePreGeneratedLocalMessageId: f,
      clearAllAttachments: m,
      reuploadAttachment: g
    };
  };
  require.d(exports, {
    useAttachmentHookUtils: function () {
      return s;
    }
  });
}