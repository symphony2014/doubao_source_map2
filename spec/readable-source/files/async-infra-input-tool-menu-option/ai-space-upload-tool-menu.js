// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'o' to 'supportedFileExtensionsUtility'
// - Resolved require(79808) to 'supported-file-extensions-utility'
// - Renamed variable 'i' to 'useChatFileExtensions'
// - Resolved require(896476) to 'use-chat-file-extensions'
// - Renamed variable 's' to 'aiSpaceFileUploadModalLoader'
// - Resolved require(797653) to 'ai-space-file-upload-modal-loader'
// - Renamed variable 'a' to 'aispaceUploadFeatureChecker'
// - Resolved require(865738) to 'aispace-upload-feature-checker'
// - Renamed variable 'l' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'c' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'u' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'd' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'p' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 'f' to 'dbxDropdownMenuComponents'
// - Resolved require(491728) to 'dbx-dropdown-menu-components'
// - Renamed variable 'h' to 'asyncBusinessToolIcon'
// - Resolved require(342025) to 'async-business-tool-icon'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Q' to 'isAispaceUploadEnabled' (module 865738)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'w' to 'getSupportedFileExtensions' (module 79808)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'w' to 'useChatFileExt' (module 896476)
// - Updated imported property 'L' to 'BusinessToolIcon' (module 342025)
// - Updated imported property 'tm' to 'AISpaceFileUploadModalLoader' (module 797653)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-tool-menu-option.99a4fe5c.js
         * chunkId: 24352
         * moduleId: 545707
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var supportedFileExtensionsUtility = require("supported-file-extensions-utility") /*id: 79808*/;
  var useChatFileExtensions = require("use-chat-file-extensions") /*id: 896476*/;
  var aiSpaceFileUploadModalLoader = require("ai-space-file-upload-modal-loader") /*id: 797653*/;
  var aispaceUploadFeatureChecker = require("aispace-upload-feature-checker") /*id: 865738*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var dbxDropdownMenuComponents = require("dbx-dropdown-menu-components") /*id: 491728*/;
  var asyncBusinessToolIcon = require("async-business-tool-icon") /*id: 342025*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = e => {
    let {
      portalMenuOption: t,
      chatId: n,
      chatType: g,
      closeMenu: v
    } = e;
    let b = aispaceUploadFeatureChecker.isAispaceUploadEnabled();
    let y = i18nTranslationUtils.useTranslationWithFallback();
    let [C, O] = reactCoreLibraryReexport.useState(false);
    let [E, _] = reactCoreLibraryReexport.useState("input_bar");
    let w = supportedFileExtensionsUtility.getSupportedFileExtensions();
    let x = chatStoreManager.useStoreSelector("chatInputStore", e => n ? e.activeSkillTypeMap[n] : undefined);
    let j = x === chatAppEnums.SkillType.ReadPDF;
    let P = {
      skill_id: x,
      skill_name: skillTypeMappings.getSkillName(x)
    };
    let S = useChatFileExtensions.useChatFileExt({
      chatId: n,
      chatType: g,
      activeSkillType: x
    });
    if (!b) {
      return null;
    }
    let T = reactJsxRuntimeCoreReexport.jsxs(dbxDropdownMenuComponents.DbxDropdownMenuItem, {
      onClick: () => {
        v();
        setTimeout(() => {
          O(true);
          _("input_bar");
        }, 10);
        teaAnalyticsEventTracker.trackEvent("pin_button_click", {
          button_name: "more_drive_files",
          click_from: "chat_enter_bar",
          ...P
        });
        teaAnalyticsEventTracker.trackEvent("click_upload_entrance_board", {
          ...P,
          button_name: "more_drive_files"
        });
      },
      className: "flex flex-nowrap items-center gap-8",
      children: [reactJsxRuntimeCoreReexport.jsx(asyncBusinessToolIcon.BusinessToolIcon, {
        className: "size-16"
      }), y("aispace_addMenu_option_moreFile")]
    });
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [C && reactJsxRuntimeCoreReexport.jsx(aiSpaceFileUploadModalLoader.AISpaceFileUploadModalLoader, {
        onClose: () => O(false),
        supportedFileTypes: j ? w : S,
        from: E
      }), t == null ? undefined : t(T)]
    });
  };
  function v(e, t, n) {
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
  class b {
    constructor() {
      v(this, "type", "attachment");
      v(this, "Content", g);
    }
  }
  require.r(exports);
  require.d(exports, {
    AiSpaceUploadFileToolMenuPlugin: function () {
      return b;
    }
  });
}