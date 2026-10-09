// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatPasteHandler'
// - Resolved require(226734) to 'chat-paste-handler'
// - Renamed variable 'o' to 'chatInputFileUpload'
// - Resolved require(850654) to 'chat-input-file-upload'
// - Renamed variable 'i' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 's' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'a' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'dbxDropdownMenuComponents'
// - Resolved require(491728) to 'dbx-dropdown-menu-components'
// - Renamed variable 'c' to 'businessToolIcon'
// - Resolved require(913916) to 'business-tool-icon'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'u' to 'useChatUploadHook' (module 226734)
// - Updated imported property 'O' to 'handlePasteUpload' (module 226734)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'K' to 'ChatInputUpload' (module 850654)
// - Updated imported property 'a' to 'BusinessToolIcon' (module 913916)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-tool-menu-option.99a4fe5c.js
         * chunkId: 24352
         * moduleId: 880635
         */
module.exports = function (module, exports, require) {
  var chatPasteHandler = require("chat-paste-handler") /*id: 226734*/;
  var chatInputFileUpload = require("chat-input-file-upload") /*id: 850654*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var businessToolIcon = require("business-tool-icon") /*id: 913916*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = e => {
    let {
      portalMenuOption: t,
      closeMenu: n,
      enableUpload: d,
      onAfterSendMessage: p,
      disabled: f,
      onFileChange: h,
      reportParams: m,
      skill: g
    } = e;
    let v = i18nTranslationUtils.useTranslationWithFallback();
    let {
      uploadFiles: b,
      ultraLongTextGuideCanActive: y,
      hideUltraLongTextGuide: C,
      enableCodeSkillRelate: O
    } = chatPasteHandler.useChatUploadHook({
      enableUpload: true,
      onAfterSendMessage: p
    });
    chatPasteHandler.handlePasteUpload({
      enableUpload: d,
      onAfterSendMessage: p
    });
    let E = () => {
      teaAnalyticsEventTracker.trackEvent("click_upload_entrance_board", {
        button_name: "upload_file",
        skill_id: g == null ? undefined : g.skill_type,
        skill_name: skillTypeMappings.getSkillName(g == null ? undefined : g.skill_type)
      });
    };
    return reactJsxRuntimeCoreReexport.jsx(chatInputFileUpload.ChatInputUpload, {
      onSubmitFiles: b,
      isToolButtonSmall: false,
      isOverflow: false,
      disabled: f,
      ultraLongTextGuideCanActive: y,
      hideUltraLongTextGuide: C,
      enableCodeSkillRelate: O,
      onFileChange: h,
      enableDropUpload: d,
      renderCustomButton: e => {
        let {
          onClick: r
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: t == null ? undefined : t(reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuItem, {
            "data-testid": "upload_file_panel_upload_item",
            onClick: () => {
              r();
              E();
              if (n == null) {
                return undefined;
              } else {
                return n();
              }
            },
            className: "flex flex-nowrap items-center gap-8",
            children: [reactJsxRuntimeCoreReexport.jsx(businessToolIcon.BusinessToolIcon, {
              className: "size-16"
            }), v("aispace_addMenu_option_uploadFile")]
          }))
        });
      },
      reportParams: m,
      useV3: true
    });
  };
  function p(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class f {
    constructor() {
      p(this, "type", "attachment");
      p(this, "Content", d);
    }
  }
  require.r(exports);
  require.d(exports, {
    FileUploadToolMenuOptionPlugin: function () {
      return f;
    }
  });
}