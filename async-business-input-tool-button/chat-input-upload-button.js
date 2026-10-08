// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'ChatUploadButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 839441
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncSkillChatInputBtn = require("async-skill-chat-input-btn") /*id: 159621*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var closeSvgIconComponent = require("close-svg-icon-component") /*id: 605824*/;
  var aiSpaceFileUploadModalLoader = require("ai-space-file-upload-modal-loader") /*id: 797653*/;
  var aispaceUploadFeatureChecker = require("aispace-upload-feature-checker") /*id: 865738*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var svgDocumentIcon = require("svg-document-icon") /*id: 807030*/;
  var asyncBusinessToolIcon = require("async-business-tool-icon") /*id: 342025*/;
  var fileUploadHookUtility = require("file-upload-hook-utility") /*id: 185856*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = e => {
    let {
      originButton: t,
      onFilesChange: n,
      fileTypes: r = [],
      testId: l,
      enableAiSpace: b,
      disabled: y,
      multiple: w = false
    } = e;
    let x = aispaceUploadFeatureChecker.isAispaceUploadEnabled() && b;
    let C = i18nTranslationUtils.useTranslationWithFallback();
    let [k, S] = reactCoreLibraryReexport.useState(false);
    let [E, T] = reactCoreLibraryReexport.useState(false);
    let [j, P] = reactCoreLibraryReexport.useState("input_bar");
    let {
      chatId: N,
      chatType: R
    } = chatViewCoreSelectors.useChatViewConfig() || {};
    let I = chatStoreManager.useStoreSelector("chatInputStore", e => N ? e.activeSkillTypeMap[N] : undefined);
    let O = chatConversationSelectors.selectConvLink(N || "", R);
    let M = {
      skill_id: I == null ? undefined : I.toString(),
      skill_name: skillTypeMappings.getSkillName(I)
    };
    let {
      handleClickButton: D,
      inputElement: A
    } = fileUploadHookUtility.useFileUpload({
      onFilesChange: n,
      testId: l,
      fileTypes: r,
      multiple: w
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [E && reactJsxRuntimeCoreReexport.jsx(aiSpaceFileUploadModalLoader.AISpaceFileUploadModalLoader, {
        onClose: () => T(false),
        supportedFileTypes: r,
        from: j
      }), x && O && !y ? reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
        open: k,
        onOpenChange: e => S(e),
        modal: false,
        children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            onClick: e => {
              e.nativeEvent.stopPropagation();
              e.stopPropagation();
              teaAnalyticsEventTracker.trackEvent("pin_button_click", {
                button_name: "upload_file_entrance",
                click_from: "chat_enter_bar",
                ...M
              });
            },
            children: t
          })
        }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
          children: reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
            side: "top",
            children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuItemWithVariants, {
              icon: reactJsxRuntimeCoreReexport.jsx(svgDocumentIcon.DocumentIcon, {}),
              onClick: () => {
                teaAnalyticsEventTracker.trackEvent("click_upload_entrance_board", {
                  ...M,
                  button_name: "upload_file"
                });
                teaAnalyticsEventTracker.trackEvent("pin_button_click", {
                  button_name: "upload_file",
                  ...M
                });
                D();
                S(false);
              },
              children: C("podcast_mainPage_btn_uploadFile")
            }), reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuItem, {
              onClick: () => {
                setTimeout(() => {
                  T(true);
                  P("input_bar");
                }, 10);
                teaAnalyticsEventTracker.trackEvent("pin_button_click", {
                  button_name: "more_drive_files",
                  click_from: "chat_enter_bar",
                  ...M
                });
                teaAnalyticsEventTracker.trackEvent("click_upload_entrance_board", {
                  ...M,
                  button_name: "more_drive_files"
                });
              },
              className: "flex flex-nowrap items-center gap-8",
              children: [reactJsxRuntimeCoreReexport.jsx(asyncBusinessToolIcon.BusinessToolIcon, {
                className: "size-16"
              }), C("aispace_addMenu_option_moreFile")]
            })]
          })
        })]
      }) : reactJsxRuntimeCoreReexport.jsx("div", {
        onClick: e => {
          D(e);
          teaAnalyticsEventTracker.trackEvent("pin_button_click", {
            button_name: "upload_file_entrance",
            click_from: "chat_enter_bar",
            ...M
          });
        },
        children: t
      }), A]
    });
  };
  let y = e => {
    let {
      isOverflow: t,
      isToolButtonSmall: n,
      isAddAttachmentDisabled: i,
      fileTypes: s,
      handleFilesChange: c,
      scene: u,
      enableAiSpace: d = true,
      multiple: p = false,
      trackParams: h
    } = e;
    let f = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx(b, {
      fileTypes: s,
      disabled: i,
      multiple: p,
      enableAiSpace: d,
      originButton: reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
        small: n,
        disableTip: f("podcast_mainPage_tooltip_clear"),
        isOverflow: t,
        disabled: i,
        leadingIcon: reactJsxRuntimeCoreReexport.jsx(closeSvgIconComponent.CloseIcon, {}),
        onClick: () => teaAnalyticsEventTracker.trackEvent("click_upload_entrance", h),
        scene: u,
        children: f("podcast_mainPage_btn_uploadFile")
      }),
      onFilesChange: e => {
        if (c != null) {
          c(e, {
            from: "click",
            uploadWay: "browse_folder"
          });
        }
      }
    });
  };
  require.d(exports, {
    ChatUploadButton: function () {
      return y;
    }
  });
}