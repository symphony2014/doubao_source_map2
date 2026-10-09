// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'ChatGithubRepoModal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 789650
         */
module.exports = function (module, exports, require) {
  var chatLinkValidator = require("chat-link-validator") /*id: 392039*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var githubRepoUploadModal = require("github-repo-upload-modal") /*id: 155455*/;
  var useCodingSkillAttachmentHandlerHook = require("use-coding-skill-attachment-handler-hook") /*id: 573323*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      visible: t,
      toggleGithubModalVisible: n,
      useV3: c
    } = e;
    let d = i18nTranslationUtils.useTranslationWithFallback();
    let u = chatAppEnums.SkillType.Default;
    let {
      attachmentStates: p,
      handleAddGithubLink: f,
      clearAttachments: _
    } = useCodingSkillAttachmentHandlerHook.useCodingSkillAttachmentHandler({
      skillId: "default",
      skillType: u
    });
    let h = chatLinkValidator.createLinkValidator();
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: t && reactJsxRuntimeCoreReexport.jsx(githubRepoUploadModal.GithubRepoModal, {
        handleCancel: () => {
          n(false);
        },
        handleConfirm: e => {
          var t;
          if ((t = p == null ? undefined : p.length) !== null && t !== undefined && t) {
            _({});
          }
          f(e);
          n(false);
        },
        t: d,
        validRemoteGithubUrl: h,
        useV3: c
      })
    });
  };
  require.d(exports, {
    ChatGithubRepoModal: function () {
      return c;
    }
  });
}