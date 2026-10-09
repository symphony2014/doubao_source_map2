// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 'r' to 'iconButtonWithTooltip'
// - Resolved require(158007) to 'icon-button-with-tooltip'
// - Renamed variable 'o' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'a' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'l' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'syncIconComponent'
// - Resolved require(650706) to 'sync-icon-component'
// - Renamed variable 'd' to 'artifactMetaProcessorUtils'
// - Resolved require(686064) to 'artifact-meta-processor-utils'
// - Renamed variable 'c' to 'chatCodeRegenerateActionSymbol'
// - Resolved require(853691) to 'chat-code-regenerate-action-symbol'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'PJ' to 'getMessageById' (module 393180)
// - Updated imported property 'ru' to 'shouldProcessArtifact' (module 686064)
// - Updated imported property 'Uq' to 'sendArtifactMessage' (module 686064)
// - Updated imported property 'K' to 'IconButton' (module 158007)
// - Updated imported property 'o' to 'SyncIcon' (module 650706)
// - Updated imported property 'C' to 'codeRegenerateAction' (module 853691)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 412851
         */
module.exports = function (module, exports, require) {
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var syncIconComponent = require("sync-icon-component") /*id: 650706*/;
  var artifactMetaProcessorUtils = require("artifact-meta-processor-utils") /*id: 686064*/;
  var chatCodeRegenerateActionSymbol = require("chat-code-regenerate-action-symbol") /*id: 853691*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function v(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
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
    }(t, "string")) == "symbol" ? i : i + "") in e) {
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
  let p = e => {
    let {
      message: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    let {
      sendMessage: c
    } = chatServiceContext.useChatService("chatMessageService");
    let v = async () => {
      let s = chatMessageStoreFactory.createMessageStore.getState();
      let u = conversationMessageUtils_1.getMessageById(s, t.conversation_id || "", (t == null ? undefined : t.reply_id) ?? "");
      let v = u == null ? undefined : u.content_obj;
      let p = u == null ? undefined : u.skill?.skill_id;
      let f = u == null ? undefined : u.skill?.skill_type;
      if (v) {
        if (await artifactMetaProcessorUtils.shouldProcessArtifact()) {
          await artifactMetaProcessorUtils.sendArtifactMessage({
            text: String(v.text ?? ""),
            refValue: "",
            messageExt: {
              answer_with_suggest: "0"
            },
            conversationId: u.conversation_id,
            reportParams: {
              scene: "regenerate"
            },
            contextValue: {}
          });
          return;
        }
        c([{
          text: String(v.text ?? ""),
          extraExt: {
            ...(p ? {
              useSamanthaChat: "true",
              input_skill: JSON.stringify({
                skill_id: p,
                skill_type: f ?? p
              })
            } : {}),
            answer_with_suggest: "0"
          },
          reportParams: {
            scene: "regenerate"
          }
        }]);
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      "data-testid": "message_action_regenerate",
      prefix: reactJsxRuntimeCoreReexport.jsx(syncIconComponent.SyncIcon, {}),
      tooltipContent: n("regenerate_button_hover_text"),
      onClick: v
    });
  };
  class f {
    constructor() {
      v(this, "pluginIdentifier", chatCodeRegenerateActionSymbol.codeRegenerateAction);
      v(this, "ButtonContentGroups", [p]);
    }
  }
  require.r(exports);
  require.d(exports, {
    CodeRegenerateReceiveMessageActionButtonPlugin: function () {
      return f;
    }
  });
}