// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatPasteHandler'
// - Resolved require(226734) to 'chat-paste-handler'
// - Renamed variable 'i' to 'chatFileDropArea'
// - Resolved require(92231) to 'chat-file-drop-area'
// - Renamed variable 'a' to 'attachmentStateValidator'
// - Resolved require(151792) to 'attachment-state-validator'
// - Renamed variable 'o' to 'chatInputAttachmentLazyComponents'
// - Resolved require(22429) to 'chat-input-attachment-lazy-components'
// - Renamed variable 'l' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 's' to 'chatRefContentSelectors'
// - Resolved require(434690) to 'chat-ref-content-selectors'
// - Renamed variable 'u' to 'codingSkillChatInput_1'
// - Resolved require(965068) to 'coding-skill-chat-input_1'
// - Renamed variable 'c' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 'd' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable 'p' to 'chatInputSkillLogic'
// - Resolved require(174117) to 'chat-input-skill-logic'
// - Renamed variable 'f' to 'chatInputAttachmentHook_1'
// - Resolved require(895364) to 'chat-input-attachment-hook_1'
// - Renamed variable 'm' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Tu' to 'getSourceValue' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'LA' to 'subscribeUploadStore' (module 793484)
// - Updated imported property 'E5' to 'getUploadConfig' (module 793484)
// - Updated imported property 'UC' to 'useRefContent' (module 434690)
// - Updated imported property 'y' to 'getChatInputConfig' (module 174117)
// - Updated imported property 'R' to 'useAttachmentInput' (module 895364)
// - Updated imported property 'L' to 'useAttachValidator' (module 151792)
// - Updated imported property 'O' to 'handlePasteUpload' (module 226734)
// - Updated imported property 'S' to 'codingSkillChatFlag' (module 965068)
// - Updated imported property 'og' to 'AttachmentAreaLazy' (module 22429)
// - Updated imported property 'm' to 'FileDropArea' (module 92231)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine.9f9181cd.js
         * chunkId: 30658
         * moduleId: 516878
         */
module.exports = function (module, exports, require) {
  var chatPasteHandler = require("chat-paste-handler") /*id: 226734*/;
  var chatFileDropArea = require("chat-file-drop-area") /*id: 92231*/;
  var attachmentStateValidator = require("attachment-state-validator") /*id: 151792*/;
  var chatInputAttachmentLazyComponents = require("chat-input-attachment-lazy-components") /*id: 22429*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatRefContentSelectors = require("chat-ref-content-selectors") /*id: 434690*/;
  var codingSkillChatInput_1 = require("coding-skill-chat-input_1") /*id: 965068*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var chatInputSkillLogic = require("chat-input-skill-logic") /*id: 174117*/;
  var chatInputAttachmentHook_1 = require("chat-input-attachment-hook_1") /*id: 895364*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      chatId: t,
      skill: n,
      isDisabled: h,
      trackParams: _,
      onSubmit: g
    } = e;
    let v = chatFgStoreHooks.getSourceValue("auto_set_ref_node", {
      source: chatStorageKeys.chatStorageKeys.serverAB,
      defaultValue: "1"
    }) === "0";
    let y = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: t,
      skillType: n == null ? undefined : n.skill_type
    });
    let b = chatRefContentSelectors.useRefContent(t);
    let w = (b == null ? undefined : b.refContents) || [];
    let C = chatInputSkillLogic.getChatInputConfig({
      attachmentStates: y,
      refContents: w
    });
    let {
      enableAttachmentArea: x,
      attachmentAreaProps: S,
      attachmentAreaRef: k
    } = chatInputAttachmentHook_1.useAttachmentInput({
      chatId: t,
      getAttachmentCanSend: () => T,
      onSubmit: g,
      showPresetPrompt: true
    });
    let {
      success: T
    } = attachmentStateValidator.useAttachValidator({
      attachmentStates: y ?? [],
      scene: "sendMessageButton",
      submitIgnoreUploadStatus: v
    });
    let {
      uploadFiles: P
    } = chatPasteHandler.handlePasteUpload({
      enableUpload: true,
      onAfterSendMessage: undefined
    });
    let {
      enabledSendMultiFileMessage: O,
      uploadMultiEntityConf: {
        maxFileCount: j
      }
    } = attachmentUploadStoreHooks.getUploadConfig();
    let E = O || codingSkillChatInput_1.codingSkillChatFlag ? j : 1;
    let M = (e, t) => {
      let n = "dataTransfer" in e ? e.dataTransfer.files : e.target.files;
      if (n && n.length !== 0) {
        P([...n], t);
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [x && reactJsxRuntimeCoreReexport.jsx(chatInputAttachmentLazyComponents.AttachmentAreaLazy, {
        ref: k,
        customPresetPrompts: C.getPresetPrompts(),
        trackParams: _,
        submitIgnoreUploadStatus: v,
        ...S
      }), !h && reactJsxRuntimeCoreReexport.jsx(chatFileDropArea.FileDropArea, {
        onDrop: e => {
          M(e, {
            from: "drag",
            uploadWay: "drag_drop"
          });
        },
        maxFileCount: E
      })]
    });
  };
  class _ {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: h,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = h;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    GenericInputEngineAttachmentAreaPlugin: function () {
      return _;
    }
  });
}