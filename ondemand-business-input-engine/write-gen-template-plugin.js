// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'chatConversationTypes'
// - Resolved require(93192) to 'chat-conversation-types'
// - Renamed variable 'i' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'a' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 'o' to 'chatGuidanceSelectors'
// - Resolved require(441131) to 'chat-guidance-selectors'
// - Renamed variable 'l' to 'chatViewCoreSelectors'
// - Resolved require(837195) to 'chat-view-core-selectors'
// - Renamed variable 's' to 'skillTypeMappings'
// - Resolved require(361602) to 'skill-type-mappings'
// - Renamed variable 'u' to 'writeChatInputPanel'
// - Resolved require(7478) to 'write-chat-input-panel'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Es' to 'hasActiveSkill' (module 441131)
// - Updated imported property 'z' to 'ConversationTypes' (module 93192)
// - Updated imported property 'Nu' to 'getSkillName' (module 361602)
// - Updated imported property 'oL' to 'setValue' (module 411117)
// - Updated imported property 'tN' to 'getChatId' (module 837195)
// - Updated imported property 'Am' to 'useAttachmentService' (module 793484)
// - Updated imported property 'S' to 'writeChatInputPanel' (module 7478)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-business-input-engine.02df2173.js
         * chunkId: 55431
         * moduleId: 905556
         */
module.exports = function (module, exports, require) {
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var writeChatInputPanel = require("write-chat-input-panel") /*id: 7478*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    var t;
    let {
      showBanner: r,
      isGuidanceInput: u = false,
      chatType: d,
      skill: c,
      chatId: p,
      trackParams: f
    } = e;
    let m = chatGuidanceSelectors.hasActiveSkill();
    let h = !m && d === chatConversationTypes.ConversationTypes.NewThread;
    return {
      visible: r ?? (!m && (!u || !h)),
      trackParams: {
        ...f,
        skill_id: c == null ? undefined : (t = c.skill_type) === null || t === undefined ? undefined : t.toString(),
        skill_name: skillTypeMappings.getSkillName(c == null ? undefined : c.skill_type),
        show_scene: "bottom_bar",
        conversation_id: p
      },
      onUpdateSelectedTemplate: (e, t) => {
        chatInputStoreHelpers.setValue(t ?? "");
      },
      onClearAttachment: () => {
        let e = chatViewCoreSelectors.getChatId();
        if (!e) {
          return;
        }
        let {
          clearAttachments: t
        } = attachmentUploadStoreHooks.useAttachmentService({
          chatId: e
        });
        t({});
      }
    };
  };
  let p = e => {
    let {
      chatId: t,
      skill: r,
      chatType: n,
      trackParams: i
    } = e;
    let a = c({
      chatId: t,
      skill: r,
      chatType: n,
      trackParams: i,
      isGuidanceInput: true
    });
    return reactJsxRuntimeCoreReexport.jsx(writeChatInputPanel.writeChatInputPanel, {
      ...a
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
    WriteGenerationTemplatePlugin: function () {
      return f;
    }
  });
}