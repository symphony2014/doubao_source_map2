// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'i' to 'skillChatInputEngine'
// - Resolved require(109888) to 'skill-chat-input-engine'
// - Renamed variable 'a' to 'chatInputSkillKeydownHandler'
// - Resolved require(299053) to 'chat-input-skill-keydown-handler'
// - Renamed variable 'o' to 'chatSkillExitEventTracker'
// - Resolved require(466492) to 'chat-skill-exit-event-tracker'
// - Renamed variable 'l' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 's' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 'u' to 'urlValidator'
// - Resolved require(714614) to 'url-validator'
// - Renamed variable 'd' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'nC' to 'useEditorValue' (module 411117)
// - Updated imported property 'RL' to 'setEditorValue' (module 411117)
// - Updated imported property '_' to 'useChatInputSkillKeyHandler' (module 299053)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'O' to 'trackSkillExitEvent' (module 466492)
// - Updated imported property 'P' to 'EventInputTypes' (module 466492)
// - Updated imported property 'LA' to 'subscribeUploadStore' (module 793484)
// - Updated imported property 'hx' to 'useAttachmentHook' (module 793484)
// - Updated imported property 'd' to 'useChatInputEngine' (module 109888)
// - Updated imported property 'P' to 'isValidUrl' (module 714614)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 42917
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var skillChatInputEngine = require("skill-chat-input-engine") /*id: 109888*/;
  var chatInputSkillKeydownHandler = require("chat-input-skill-keydown-handler") /*id: 299053*/;
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var urlValidator = require("url-validator") /*id: 714614*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      disabled: t,
      chatId: r,
      skill: p,
      trackParams: f,
      onSubmit: m,
      controllerRef: h,
      className: g,
      onChange: v
    } = e;
    let y = i18nTranslationUtils.useTranslationWithFallback();
    let _ = chatInputStoreHelpers.useEditorValue();
    let {
      handleKeyDown: b
    } = chatInputSkillKeydownHandler.useChatInputSkillKeyHandler({
      editorValue: _,
      onResetEditorValue: emptyExportFunction.emptyFunction,
      onSubmit: m,
      onCloseSkillEvent: () => chatSkillExitEventTracker.trackSkillExitEvent({
        exitScene: chatSkillExitEventTracker.EventInputTypes.Keyboard,
        trackParams: {
          ...f,
          upload_collection_way: "",
          collection_name: "",
          upload_file_type: "",
          upload_token_length: ""
        }
      })
    });
    let x = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: r ?? "",
      skillType: p == null ? undefined : p.skill_type
    });
    let {
      addLink: w
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: r ?? "",
      skillType: p == null ? undefined : p.skill_type
    });
    let {
      renderEditor: k
    } = skillChatInputEngine.useChatInputEngine({
      editorProps: {
        disabled: t,
        value: _,
        onChange: e => {
          chatInputStoreHelpers.setEditorValue(e);
        },
        onKeyDown: b,
        placeholder: y("skill_dataAnalysis_input_placeholder"),
        onPaste: e => {
          let t = e.clipboardData.getData("text");
          if (urlValidator.isValidUrl(t) && x.length === 0) {
            e.preventDefault();
            if (w != null) {
              w({
                url: t
              });
            }
            return;
          }
        }
      },
      useV3: true,
      chatId: r,
      activeSkill: p,
      onControllerChange: e => {
        if (h) {
          h.current = {
            focus: () => e == null ? undefined : e.focus(),
            blur: () => e == null ? undefined : e.blur()
          };
        }
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: k({
        className: g,
        onChange: v
      })
    });
  };
  class f {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, t || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: p,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = p;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    CIPromptEditorPlugin: function () {
      return f;
    }
  });
}