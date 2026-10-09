// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'AiSpaceAttachmentPopoverButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67052.e31f852f.js
         * chunkId: 67052
         * moduleId: 769458
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var supportedFileExtensionsUtility = require("supported-file-extensions-utility") /*id: 79808*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlIconComponent_1_1 = require("rtl-icon-component_1_1") /*id: 565165*/;
  var aiSpaceAttachmentInput = require("ai-space-attachment-input") /*id: 500254*/;
  var getAiSpaceMigrateStatus = require("get-ai-space-migrate-status") /*id: 662963*/;
  var aispaceUploadFeatureChecker = require("aispace-upload-feature-checker") /*id: 865738*/;
  var v = {
    "popover-content-wrapper": "popover-content-wrapper-uysP26",
    "popover-content-title": "popover-content-title-iR8Tv4",
    "popover-content-item-wrapper": "popover-content-item-wrapper-CVkm9S",
    button: "button-b1EArh"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = () => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let e = await getAiSpaceMigrateStatus.getMigrateStatus();
      if ((e == null ? undefined : e.status) === "finished") {
        return Promise.all([require.e("module-federation-runtime") /*id: 19584*/, require.e("flow-auth-space-sdk") /*id: 57467*/, require.e("semi-design-ui-component-chunks") /*id: 38149*/, require.e("aispace-input-feishu-filelist-modal") /*id: 50535*/]).then(require.bind(require, "ai-space-file-upload-modal") /*id: 242488*/).then(e => ({
          default: e.UploadAISpaceFilesModal
        }));
      } else {
        return Promise.all([require.e("folder-file-icons") /*id: 41522*/, require.e("semi-design-ui-component-chunks") /*id: 38149*/, require.e("aispace-input-filelist-modal") /*id: 38418*/]).then(require.bind(require, "aispace-file-upload-modal_1") /*id: 901158*/).then(e => ({
          default: e.UploadAISpaceFilesModal
        }));
      }
    }
  });
  let k = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => y()));
  let x = e => {
    let {
      size: t,
      position: n
    } = e;
    let c = aispaceUploadFeatureChecker.isAispaceUploadEnabled();
    let u = i18nTranslationUtils.useTranslationWithFallback();
    let {
      chatId: _
    } = chatViewCoreSelectors.useChatViewConfig() || {};
    let y = chatStoreManager.useStoreSelector("chatInputStore", e => _ ? e.activeSkillTypeMap[_] : undefined);
    let x = {
      skill_id: y,
      skill_name: skillTypeMappings.getSkillName(y)
    };
    let [w, E] = reactCoreLibraryReexport.useState(false);
    let [C, T] = reactCoreLibraryReexport.useState(false);
    let [$, R] = reactCoreLibraryReexport.useState(0);
    let S = supportedFileExtensionsUtility.getSupportedFileExtensions();
    if (c) {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [C && reactJsxRuntimeCoreReexport.jsx(k, {
          onClose: () => T(false),
          supportedFileTypes: S,
          from: "input_bar"
        }), reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
          rePosKey: $,
          stopPropagation: true,
          onClickOutSide: () => {
            E(false);
          },
          content: w && reactJsxRuntimeCoreReexport.jsx("div", {
            className: v["popover-content-wrapper"],
            onClick: e => {
              e.nativeEvent.stopPropagation();
              e.stopPropagation();
            },
            children: reactJsxRuntimeCoreReexport.jsx(aiSpaceAttachmentInput.AiSpaceAttachment, {
              onDataLoaded: () => {
                setTimeout(() => {
                  R($ + 1);
                }, 50);
              },
              titleClassName: v["popover-content-title"],
              itemClassName: v["popover-content-item-wrapper"],
              onOpenFileListModal: () => {
                E(false);
                setTimeout(() => {
                  T(true);
                }, 10);
                teaAnalyticsEventTracker.trackEvent("pin_button_click", {
                  button_name: "more_drive_files",
                  click_from: "chat_enter_bar",
                  ...x
                });
              },
              fileTypes: S,
              onAddFileToAttachment: e => {
                E(false);
                teaAnalyticsEventTracker.trackEvent("pin_button_click", {
                  button_name: "upload_drive_file",
                  click_from: "chat_enter_bar",
                  collection_id: e.key,
                  collection_name: e.name,
                  ...x
                });
              },
              onNavigateToAISpace: () => {
                teaAnalyticsEventTracker.trackEvent("pin_button_click", {
                  button_name: "upload_to_drive",
                  click_from: "chat_enter_bar",
                  ...x
                });
              }
            })
          }),
          visible: w,
          trigger: "custom",
          position: n || "topRight",
          style: {
            borderRadius: "10px",
            backgroundColor: "var(--s-color-bg-float)",
            border: "1px solid var(--s-color-border-tertiary)"
          },
          children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            type: "tertiary",
            "data-testid": "upload_file_button",
            icon: reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1_1.RtlIcon, {}),
            className: v.button,
            onClick: e => {
              e.stopPropagation();
              E(!w);
            },
            size: t,
            children: u("read_uploadFile_fromDrive")
          })
        })]
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    AiSpaceAttachmentPopoverButton: function () {
      return x;
    }
  });
}