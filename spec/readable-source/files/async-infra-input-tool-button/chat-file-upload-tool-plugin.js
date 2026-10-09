// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatInputFileUpload'
// - Resolved require(850654) to 'chat-input-file-upload'
// - Renamed variable 'o' to 'chatPasteHandler'
// - Resolved require(226734) to 'chat-paste-handler'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'l' to 'aispaceUploadFeatureChecker'
// - Resolved require(865738) to 'aispace-upload-feature-checker'
// - Renamed variable 'd' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'c' to 'chatViewCoreSelectors'
// - Resolved require(837195) to 'chat-view-core-selectors'
// - Renamed variable 'u' to 'chatConversationSelectors'
// - Resolved require(783144) to 'chat-conversation-selectors'
// - Renamed variable 'h' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'p' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'm' to 'reactDomEntryWrapper'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Renamed variable 'g' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'v' to 'supportedFileExtensionsUtility'
// - Resolved require(79808) to 'supported-file-extensions-utility'
// - Renamed variable 'w' to 'useChatFileExtensions'
// - Resolved require(896476) to 'use-chat-file-extensions'
// - Renamed variable '_' to 'aiCodeUploadDropdownMenu'
// - Resolved require(951786) to 'ai-code-upload-dropdown-menu'
// - Renamed variable 'b' to 'aiCodingUploadOptions'
// - Resolved require(241057) to 'ai-coding-upload-options'
// - Renamed variable 'x' to 'codingSkillUploadHandler'
// - Resolved require(612038) to 'coding-skill-upload-handler'
// - Renamed variable 'y' to 'checkCodeAssistantEnabled'
// - Resolved require(973747) to 'check-code-assistant-enabled'
// - Renamed variable 'C' to 'chatGithubRepoUploadModal'
// - Resolved require(789650) to 'chat-github-repo-upload-modal'
// - Renamed variable 'k' to 'aiSpaceFileUploadModalLoader'
// - Resolved require(797653) to 'ai-space-file-upload-modal-loader'
// - Renamed variable 'E' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'S' to 'useLatestCallbackHook_1'
// - Resolved require(318475) to 'use-latest-callback-hook_1'
// - Renamed variable 'j' to 'reactUseRefValue'
// - Resolved require(45405) to 'react-use-ref-value'
// - Renamed variable 'R' to 'dbxDropdownMenuComponents'
// - Resolved require(491728) to 'dbx-dropdown-menu-components'
// - Renamed variable 'I' to 'asyncBusinessToolIcon'
// - Resolved require(342025) to 'async-business-tool-icon'
// - Renamed variable 'N' to 'businessToolIcon'
// - Resolved require(913916) to 'business-tool-icon'
// - Updated imported property 'u' to 'useChatUploadHook' (module 226734)
// - Updated imported property 'O' to 'handlePasteUpload' (module 226734)
// - Updated imported property 'K' to 'ChatInputUpload' (module 850654)
// - Updated imported property 'Q' to 'isAispaceUploadEnabled' (module 865738)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'w' to 'getSupportedFileExtensions' (module 79808)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'w' to 'useChatFileExt' (module 896476)
// - Updated imported property 'L' to 'BusinessToolIcon' (module 342025)
// - Updated imported property 'tm' to 'AISpaceFileUploadModalLoader' (module 797653)
// - Updated imported property 'N' to 'isCodeAssistantEnabled' (module 973747)
// - Updated imported property 'T' to 'useRefValue' (module 45405)
// - Updated imported property 'Q' to 'getAiCodingOptions' (module 241057)
// - Updated imported property 'y' to 'ChatGithubRepoModal' (module 789650)
// - Updated imported property 'm' to 'CodingSkillUploadHandler' (module 612038)
// - Updated imported property 'K' to 'CodeUploadDropdown' (module 951786)
// - Updated imported property 'a' to 'BusinessToolIcon' (module 913916)
// - Updated imported property 'JW' to 'useChatViewConfig' (module 837195)
// - Updated imported property 'jw' to 'selectConvLink' (module 783144)
// - Updated imported property 'Z' to 'useLatestCallback' (module 318475)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-tool-button.3b5f4e57.js
         * chunkId: 76842
         * moduleId: 114921
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatInputFileUpload = require("chat-input-file-upload") /*id: 850654*/;
  var chatPasteHandler = require("chat-paste-handler") /*id: 226734*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      className: t,
      enableUpload: n,
      onAfterSendMessage: i,
      disabled: a,
      onFileChange: l,
      isToolButtonSmall: d,
      isOverflow: c,
      renderCustomButton: u,
      reportParams: h,
      onClick: p
    } = e;
    let {
      uploadFiles: m,
      ultraLongTextGuideCanActive: g,
      hideUltraLongTextGuide: f,
      enableCodeSkillRelate: v
    } = chatPasteHandler.useChatUploadHook({
      enableUpload: n,
      onAfterSendMessage: i
    });
    chatPasteHandler.handlePasteUpload({
      enableUpload: n,
      onAfterSendMessage: i
    });
    return reactJsxRuntimeCoreReexport.jsx(chatInputFileUpload.ChatInputUpload, {
      className: t,
      onSubmitFiles: m,
      isToolButtonSmall: d,
      isOverflow: c,
      disabled: a,
      ultraLongTextGuideCanActive: g,
      hideUltraLongTextGuide: f,
      enableCodeSkillRelate: v,
      onFileChange: l,
      renderCustomButton: u,
      reportParams: h,
      onClick: p,
      borderlessTheme: false,
      disableTooltip: true
    });
  };
  var aispaceUploadFeatureChecker = require("aispace-upload-feature-checker") /*id: 865738*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var f = classnamesUtils;
  var supportedFileExtensionsUtility = require("supported-file-extensions-utility") /*id: 79808*/;
  var useChatFileExtensions = require("use-chat-file-extensions") /*id: 896476*/;
  var aiCodeUploadDropdownMenu = require("ai-code-upload-dropdown-menu") /*id: 951786*/;
  var aiCodingUploadOptions = require("ai-coding-upload-options") /*id: 241057*/;
  var codingSkillUploadHandler = require("coding-skill-upload-handler") /*id: 612038*/;
  var checkCodeAssistantEnabled = require("check-code-assistant-enabled") /*id: 973747*/;
  var chatGithubRepoUploadModal = require("chat-github-repo-upload-modal") /*id: 789650*/;
  var aiSpaceFileUploadModalLoader = require("ai-space-file-upload-modal-loader") /*id: 797653*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var reactUseRefValue = require("react-use-ref-value") /*id: 45405*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var asyncBusinessToolIcon = require("async-business-tool-icon") /*id: 342025*/;
  var businessToolIcon = require("business-tool-icon") /*id: 913916*/;
  let P = e => {
    let {
      portalMenuOption: t,
      chatId: n,
      chatType: r,
      closeMenu: o,
      trackParams: a
    } = e;
    let c = aispaceUploadFeatureChecker.isAispaceUploadEnabled();
    let u = i18nTranslationUtils.useTranslationWithFallback();
    let [m, g] = reactCoreLibraryReexport.useState(false);
    let [f, _] = reactCoreLibraryReexport.useState("input_bar");
    let b = supportedFileExtensionsUtility.getSupportedFileExtensions();
    let x = chatStoreManager.useStoreSelector("chatInputStore", e => n ? e.activeSkillTypeMap[n] : undefined);
    let y = x === chatAppEnums.SkillType.ReadPDF;
    let C = useChatFileExtensions.useChatFileExt({
      chatId: n,
      chatType: r,
      activeSkillType: x
    });
    if (!c) {
      return null;
    }
    let S = reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuItem, {
      onClick: () => {
        o();
        setTimeout(() => {
          g(true);
          _("input_bar");
        }, 10);
        teaAnalyticsEventTracker.trackEvent("pin_button_click", {
          button_name: "more_drive_files",
          click_from: "chat_enter_bar",
          ...a
        });
        teaAnalyticsEventTracker.trackEvent("click_upload_entrance_board", {
          ...a,
          button_name: "more_drive_files"
        });
      },
      className: "flex flex-nowrap items-center gap-8",
      children: [reactJsxRuntimeCoreReexport.jsx(asyncBusinessToolIcon.BusinessToolIcon, {
        className: "size-16"
      }), u("aispace_addMenu_option_moreFile")]
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [m && reactJsxRuntimeCoreReexport.jsx(aiSpaceFileUploadModalLoader.AISpaceFileUploadModalLoader, {
        onClose: () => g(false),
        supportedFileTypes: y ? b : C,
        from: f
      }), t == null ? undefined : t(S)]
    });
  };
  let D = e => {
    let {
      portalMenuOption: n,
      menuVisible: r,
      closeMenu: o,
      trackParams: a
    } = e;
    let l = checkCodeAssistantEnabled.isCodeAssistantEnabled() || true;
    let [d, c] = reactCoreLibraryReexport.useState(false);
    let u = reactUseRefValue.useRefValue(r != null && r);
    let h = aiCodingUploadOptions.getAiCodingOptions();
    let p = reactCoreLibraryReexport.useRef(null);
    if (l) {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [d && reactJsxRuntimeCoreReexport.jsx(chatGithubRepoUploadModal.ChatGithubRepoModal, {
          visible: d,
          toggleGithubModalVisible: c,
          useV3: true
        }), u && reactJsxRuntimeCoreReexport.jsx(codingSkillUploadHandler.CodingSkillUploadHandler, {
          ref: p,
          afterClick: () => o == null ? undefined : o(),
          toggleGithubModalVisible: c
        }), n == null ? undefined : n(reactJsxRuntimeCoreReexport.jsx(aiCodeUploadDropdownMenu.CodeUploadDropdown, {
          options: h,
          onChange: p.current?.handleUpload,
          trackParams: a
        }))]
      });
    } else {
      return null;
    }
  };
  let T = e => {
    let {
      portalMenuOption: t,
      closeMenu: n,
      originClick: i
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: t == null ? undefined : t(reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuItem, {
        onClick: () => {
          i();
          if (n == null) {
            return undefined;
          } else {
            return n();
          }
        },
        "data-testid": "upload_file_panel_upload_item",
        className: "flex flex-nowrap items-center gap-8",
        children: [reactJsxRuntimeCoreReexport.jsx(businessToolIcon.BusinessToolIcon, {
          className: "size-16"
        }), r("aispace_addMenu_option_uploadFile")]
      }))
    });
  };
  let Z = e => {
    let {
      onClick: t,
      originButton: n,
      toolButtonProps: r
    } = e;
    let o = aispaceUploadFeatureChecker.isAispaceUploadEnabled();
    let {
      chatId: a,
      chatType: h
    } = chatViewCoreSelectors.useChatViewConfig() || {};
    let g = chatStoreManager.useStoreSelector("chatInputStore", e => a ? e.activeSkillTypeMap[a] : undefined);
    let v = chatConversationSelectors.selectConvLink(a || "", h);
    let w = g === chatAppEnums.SkillType.ReadPDF;
    let [_, b] = reactCoreLibraryReexport.useState(false);
    let x = reactCoreLibraryReexport.useRef(null);
    let y = reactCoreLibraryReexport.useRef(null);
    let [C, k] = reactCoreLibraryReexport.useState(null);
    let E = useLatestCallbackHook_1.useLatestCallback(e => C && reactDomEntryWrapper.createPortal(e, C));
    let j = {
      ...r,
      portalMenuOption: E,
      closeMenu: () => b(false),
      menuVisible: _
    };
    if (o && v && (!g || w)) {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
          open: _,
          onOpenChange: e => b(e),
          modal: false,
          children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
            children: reactJsxRuntimeCoreReexport.jsxs("div", {
              onClick: e => e.stopPropagation(),
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                ref: x,
                className: f("*:!z-[1200] h-0 w-0")
              }), n]
            })
          }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
            container: x.current,
            children: reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
              ref: k,
              side: "top",
              className: "min-h-84"
            })
          })]
        }), reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenu, {
          open: true,
          modal: false,
          children: [reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuTrigger, {
            className: "pointer-events-none invisible absolute h-0 w-0",
            ref: y
          }), reactJsxRuntimeCoreReexport.jsx(dbxDropdownMenuComponents.DbxDropdownMenuPortal, {
            container: y.current,
            children: reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuContent, {
              className: "pointer-events-none invisible",
              children: [reactJsxRuntimeCoreReexport.jsx(P, {
                ...j
              }), reactJsxRuntimeCoreReexport.jsx(D, {
                ...j
              }), reactJsxRuntimeCoreReexport.jsx(T, {
                ...j,
                originClick: t
              })]
            })
          })]
        })]
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        onClick: t,
        children: n
      });
    }
  };
  function M(e) {
    let {
      popoverProps: t,
      trackParams: n,
      ...i
    } = e;
    let r = aispaceUploadFeatureChecker.isAispaceUploadEnabled();
    let {
      chatId: o,
      chatType: m
    } = chatViewCoreSelectors.useChatViewConfig() || {};
    let g = chatStoreManager.useStoreSelector("chatInputStore", e => o ? e.activeSkillTypeMap[o] : undefined);
    let f = chatConversationSelectors.selectConvLink(o || "", m);
    let v = g === chatAppEnums.SkillType.ReadPDF;
    if (r && f && (!g || v)) {
      return reactJsxRuntimeCoreReexport.jsx(a, {
        ...i,
        renderCustomButton: e => reactJsxRuntimeCoreReexport.jsx(Z, {
          originButton: e.originButton,
          onClick: e.onClick,
          toolButtonProps: i
        }),
        onClick: () => teaAnalyticsEventTracker.trackEvent("click_upload_entrance_board", {
          ...e.trackParams,
          button_name: "upload_file"
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(a, {
        ...i,
        trackParams: n,
        onClick: () => teaAnalyticsEventTracker.trackEvent("click_upload_entrance", n)
      });
    }
  }
  class $ {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: M,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = M;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    FileUploadToolButtonPlugin: function () {
      return $;
    }
  });
}