// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'useAttachmentInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 895364
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatInputAiFeatureConstants = require("chat-input-ai-feature-constants") /*id: 155267*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var scrollCleanupHook = require("scroll-cleanup-hook") /*id: 791817*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    let {
      chatId: t,
      activeSkill: n,
      getAttachmentCanSend: g,
      showPresetPrompt: y = true,
      disableGridLayout: _,
      onSubmit: b,
      renderAttachmentBox: w
    } = e;
    let S = useLatestCallbackHook_1.useLatestCallback(g);
    let E = useLatestCallbackHook_1.useLatestCallback(b);
    let x = chatGuidanceSelectors.hasActiveSkill();
    let {
      cleanScrollToRow: k
    } = scrollCleanupHook.useCleanScroll();
    let T = attachmentUploadStoreHooks.subscribeAttachments({
      chatId: t,
      skillType: n == null ? undefined : n.skill_type
    });
    let P = attachmentUploadStoreHooks.getAttachmentKeys({
      chatId: t,
      skillType: n == null ? undefined : n.skill_type
    });
    let C = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: t,
      skillType: n == null ? undefined : n.skill_type
    });
    let {
      updatePreGeneratedLocalMessageId: O,
      addAttachment: N,
      addLink: I,
      addGitHubLink: A,
      deleteAttachment: R,
      clearAllAttachments: j,
      reuploadAttachment: M,
      getPreGeneratedLocalMessageId: L
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: t,
      skillType: n == null ? undefined : n.skill_type
    });
    let D = async () => {
      await j({});
      await O();
    };
    reactUseUpdateEffect.useUpdateEffect(() => {
      D();
    }, [t]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      k();
    }, [C, k]);
    let Z = async () => {
      await O();
      await j({});
    };
    let z = !isEmptyUtil.isEmpty(C);
    let U = reactCoreLibraryReexport.useRef(null);
    let W = {
      showPresetPrompt: (n == null ? undefined : n.skill_type) !== chatAppEnums.SkillType.CodeInterpreter && y,
      attachmentStates: C,
      renderArea: e => e.attachmentStates.every(e => e.type === "image") ? reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentImageAreaLazy, {
        ...e
      }) : reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentFileAreaLazy, {
        ...e,
        disableGridLayout: _,
        renderAttachmentBox: w
      }),
      getPreGeneratedLocalMessageId: L,
      onDeleteAttachment: e => {
        R({
          index: e
        });
      },
      onRetryAttachment: e => {
        M({
          index: e
        });
      },
      onClickPresetPrompt: async (e, t) => {
        var n;
        if ((n = S == null ? undefined : S()) !== null && n !== undefined && !n) {
          return;
        }
        let i = chatInputAiFeatureConstants.featureActionNameMap[t] || e;
        teaAnalyticsEventTracker.trackEvent("input_bar_edit", {
          upload_id: await L(),
          upload_file_size: String(C.reduce((e, t) => e + (t.size || 0), 0)),
          upload_collection_way: isEmptyUtil.isEmpty(C) ? "" : C.length === 1 ? "single" : "multi",
          upload_from: isEmptyUtil.isEmpty(C) ? undefined : x ? skillConstantsEnum.UploadSource.UPLOAD_FROM_READ_SUMMARIZE_MODULE : skillConstantsEnum.UploadSource.UPLOAD_FROM_UPLOAD_PINBUTTON,
          prompt_content: i,
          prompt_from: "quick_actions",
          file_type: C.map(e => getFileExtension.getFileExtension(e.fileName)).join(",")
        });
        if (E != null) {
          E(e, t);
        }
      }
    };
    return {
      attachments: T,
      attachmentKeys: P,
      attachmentStates: C,
      clearAllAttachments: j,
      clearAttachments: D,
      getPreGeneratedLocalMessageId: L,
      addAttachment: N,
      updatePreGeneratedLocalMessageId: O,
      onAfterSubmit: Z,
      onResetAccessoryArea: () => {
        D();
      },
      addLink: I,
      addGitHubLink: A,
      enableAttachmentArea: z,
      attachmentAreaRef: U,
      attachmentAreaScrollToBottom: () => {
        var e;
        var t;
        if ((t = U.current) !== null && t !== undefined && (e = t.scrollToBottom) !== null && e !== undefined) {
          e.call(t);
        }
      },
      attachmentAreaProps: W
    };
  };
  require.d(exports, {
    useAttachmentInput: function () {
      return g;
    }
  });
}