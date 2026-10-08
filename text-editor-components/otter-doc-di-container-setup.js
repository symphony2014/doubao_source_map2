// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'setupOtterDocDIContainer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 58489
         */
module.exports = function (module, exports, require) {
  var reactOptimizedImageWrapper = require("react-optimized-image-wrapper") /*id: 784484*/;
  var fileUploaderService = require("file-uploader-service") /*id: 566355*/;
  var aiSpaceAttachmentConstants = require("ai-space-attachment-constants") /*id: 241695*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var samanthaImagePreviewGallery = require("samantha-image-preview-gallery") /*id: 927160*/;
  var imageThinkingComponent = require("image-thinking-component") /*id: 602617*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var mindmapComponent_1 = require("mindmap-component_1") /*id: 805794*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var flowDebugStatus = require("flow-debug-status") /*id: 553601*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var flowApiConfigManager = require("flow-api-config-manager") /*id: 691950*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var fileDownloadUtilities = require("file-download-utilities") /*id: 552822*/;
  var secureLinkOpener = require("secure-link-opener") /*id: 357305*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var localeDirectionCheck = require("locale-direction-check") /*id: 255854*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var canvasDocPanelIcon_1 = require("canvas-doc-panel-icon_1") /*id: 507860*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var docUserServiceToken = require("doc-user-service-token") /*id: 765582*/;
  var docUploaderServiceSymbol = require("doc-uploader-service-symbol") /*id: 308802*/;
  var docTeaServiceSymbol = require("doc-tea-service-symbol") /*id: 151816*/;
  var docLoggerSymbol = require("doc-logger-symbol") /*id: 192564*/;
  var docI18nServiceToken = require("doc-i18n-service-token") /*id: 900813*/;
  var docFileUtilsSymbol = require("doc-file-utils-symbol") /*id: 696345*/;
  var docFgServiceConstants = require("doc-fg-service-constants") /*id: 699539*/;
  var docEnvServiceSymbol = require("doc-env-service-symbol") /*id: 606694*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var docUiServiceSymbols = require("doc-ui-service-symbols") /*id: 452862*/;
  var otterDocApiServiceDi = require("otter-doc-api-service-di") /*id: 53616*/;
  let B = false;
  function L() {
    if (B) {
      return;
    }
    B = true;
    let e = apiServicesCollection.OtterDocApiService;
    let n = apiServicesCollection.OtterCoreApiService;
    diContainerInstance.diContainer.bind(otterDocApiServiceDi.OtterDocApiSymbol).toConstantValue({
      AgwBindAttachment: e.AgwBindAttachment.bind(e),
      AgwCopyAttachment: e.AgwCopyAttachment.bind(e),
      AgwGetAttachmentDownloadInfo: e.AgwGetAttachmentDownloadInfo.bind(e),
      AGWGetPageChanges: e.AGWGetPageChanges.bind(e),
      AGWGetPageClientVars: e.AGWGetPageClientVars.bind(e),
      AGWGetUserObjSetting: e.AGWGetUserObjSetting.bind(e),
      AGWListPageHistory: e.AGWListPageHistory.bind(e),
      AgwMGetAttachment: e.AgwMGetAttachment.bind(e),
      AGWMGetBlockClientVars: e.AGWMGetBlockClientVars.bind(e),
      AGWMGetPageMeta: e.AGWMGetPageMeta.bind(e),
      AGWRevertPageHistory: e.AGWRevertPageHistory.bind(e),
      AGWRevertPageHistoryStatus: e.AGWRevertPageHistoryStatus.bind(e),
      AGWReviewComment: e.AGWReviewComment.bind(e),
      AGWUpdateUserObjSetting: e.AGWUpdateUserObjSetting.bind(e),
      AgwUpdateCursor: n.AgwUpdateCursor.bind(n),
      AgwMGetUserOverview: n.AgwMGetUserOverview.bind(n),
      isApiError: apiErrorChecker.isApiError,
      otter_doc_common: {
        AuthType: {
          UserPermission: 0,
          ResourceAuthToken: 1
        },
        RoomType: {
          Page: 1
        }
      },
      getFlowApiOptions: flowApiConfigManager.getFlowApiOptions
    });
    diContainerInstance.diContainer.bind(docUiServiceSymbols.IconUploadImageIcon).toConstantValue(canvasDocPanelIcon_1.DocPanelOutlined);
    diContainerInstance.diContainer.bind(docUiServiceSymbols.IconCloseIcon).toConstantValue(rtlCloseIcon.RtlCloseIcon);
    diContainerInstance.diContainer.bind(docUiServiceSymbols.IconWrapper).toConstantValue(topBarActionItem.TopBarActionItem);
    diContainerInstance.diContainer.bind(docUiServiceSymbols.DocToastService).toConstantValue({
      success: samanthaToastFactory.defaultToast.success.bind(samanthaToastFactory.defaultToast),
      info: samanthaToastFactory.defaultToast.info.bind(samanthaToastFactory.defaultToast)
    });
    diContainerInstance.diContainer.bind(docUiServiceSymbols.DocModalComponent).toConstantValue(modalDialogComponent.Modal);
    diContainerInstance.diContainer.bind(docUiServiceSymbols.DocMindMapComponent).toConstantValue(mindmapComponent_1.default);
    diContainerInstance.diContainer.bind(docUiServiceSymbols.DocImageGallery).toConstantValue(samanthaImagePreviewGallery.ImagePreviewGallery);
    diContainerInstance.diContainer.bind(docUiServiceSymbols.DocImageLoading).toConstantValue(imageThinkingComponent.ImageThinkingView);
    diContainerInstance.diContainer.bind(docUiServiceSymbols.MdBoxImageComponent).toConstantValue(reactOptimizedImageWrapper.Image);
    diContainerInstance.diContainer.bind(docFgServiceConstants.docFgServiceId).toConstantValue({
      getFGValue: chatFgStoreHooks.getSourceKeySync,
      isEnableDebug: flowDebugStatus.isDebugEnabled
    });
    diContainerInstance.diContainer.bind(docFileUtilsSymbol.docFileUtilsSymbol).toConstantValue({
      checkIsAudioByFileName: fileTypeDetectionUtils.isAudioExtension,
      checkIsImageByFileName: fileTypeDetectionUtils.isImageExtension,
      checkIsVideoByFileName: fileTypeDetectionUtils.isVideoExtension,
      fileIsImage: fileTypeDetectionUtils.isImageBlob,
      fileIsAudio: fileTypeDetectionUtils.isAudioExtension_1,
      fileIsVideo: fileTypeDetectionUtils.isVideoExtension_1,
      downloadFileByLink: fileDownloadUtilities.openUrlInHiddenIframe,
      openLinkInNewTab: secureLinkOpener.openSecureLink,
      getFileExt: getFileExtension.getFileExtension
    });
    diContainerInstance.diContainer.bind(docI18nServiceToken.DocI18nService).toConstantValue({
      useTranslateFn: i18nTranslationUtils.useTranslationWithFallback,
      getUnreactiveLanguage: localeDirectionCheck.getBrowserLanguage
    });
    diContainerInstance.diContainer.bind(docLoggerSymbol.docLoggerSymbol).toConstantValue({
      persist: {
        error: loggerServiceCore.defaultLogger.persist.error.bind(loggerServiceCore.defaultLogger.persist),
        info: loggerServiceCore.defaultLogger.persist.info.bind(loggerServiceCore.defaultLogger.persist)
      }
    });
    diContainerInstance.diContainer.bind(docTeaServiceSymbol.docTeaServiceSymbol).toConstantValue({
      trackEvent: teaAnalyticsEventTracker.trackEvent
    });
    diContainerInstance.diContainer.bind(docUploaderServiceSymbol.docUploaderService).toConstantValue({
      createUploader: e => new fileUploaderService.UploaderService(e),
      UPLOADER_SCENE_ID: {
        FEEDBACK: aiSpaceAttachmentConstants.spaceSceneIds.FEEDBACK,
        BOT_CHAT: aiSpaceAttachmentConstants.spaceSceneIds.BOT_CHAT,
        AI_SPACE: aiSpaceAttachmentConstants.spaceSceneIds.AI_SPACE
      },
      UPLOADER_TYPE: {
        Image: aiSpaceAttachmentConstants.attachmentTypes.Image,
        File: aiSpaceAttachmentConstants.attachmentTypes.File,
        Video: aiSpaceAttachmentConstants.attachmentTypes.Video
      }
    });
    diContainerInstance.diContainer.bind(docUserServiceToken.docUserServiceToken).toConstantValue({
      getUserId: chatUserInfoActions.getUserIdStr,
      getIsLoggedIn: userInfoStatusSelectors.selectUserInfoSuccess
    });
    diContainerInstance.diContainer.bind(docEnvServiceSymbol.docEnvService).toConstantValue({
      getAid: () => uniParamsManager.uniParamsManager.getParam("aid")
    });
  }
  require.d(exports, {
    setupOtterDocDIContainer: function () {
      return L;
    }
  });
}