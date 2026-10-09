// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'i' to 'chatAsrButtonHook'
// - Resolved require(370968) to 'chat-asr-button-hook'
// - Renamed variable 'a' to 'skillChatInputWrapper'
// - Resolved require(137475) to 'skill-chat-input-wrapper'
// - Renamed variable 'o' to 'attachmentStateValidator'
// - Resolved require(151792) to 'attachment-state-validator'
// - Renamed variable 's' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 'u' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'l' to 'chatFgStoreHooks'
// - Resolved require(583867) to 'chat-fg-store-hooks'
// - Renamed variable 'c' to 'chatStorageKeys'
// - Resolved require(187143) to 'chat-storage-keys'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.bind(682910) to 'dbx-sonner-toaster-wrapper'
// - Updated imported property 'Tu' to 'getSourceValue' (module 583867)
// - Updated imported property 'd' to 'chatStorageKeys' (module 187143)
// - Updated imported property 'LA' to 'subscribeUploadStore' (module 793484)
// - Updated imported property 'UG' to 'useExtractedText' (module 411117)
// - Updated imported property 'nC' to 'useEditorValue' (module 411117)
// - Updated imported property 'RL' to 'setEditorValue' (module 411117)
// - Updated imported property 'L' to 'useAttachValidator' (module 151792)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'e' to 'useChatAsrButton' (module 370968)
// - Updated imported property 'b' to 'ChatInputWrapper' (module 137475)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-input-engine-infra.27de6beb.js
         * chunkId: 63727
         * moduleId: 174113
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatAsrButtonHook = require("chat-asr-button-hook") /*id: 370968*/;
  var skillChatInputWrapper = require("skill-chat-input-wrapper") /*id: 137475*/;
  var attachmentStateValidator = require("attachment-state-validator") /*id: 151792*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    var t;
    let {
      chatId: f,
      skill: p,
      scene: h,
      onSubmit: m,
      config: g
    } = e;
    let v = chatFgStoreHooks.getSourceValue("auto_set_ref_node", {
      source: chatStorageKeys.chatStorageKeys.serverAB,
      defaultValue: "1"
    }) === "0";
    let y = attachmentUploadStoreHooks.subscribeUploadStore({
      chatId: f,
      skillType: p == null ? undefined : p.skill_type
    });
    let w = chatInputStoreHelpers.useExtractedText() === "";
    let b = !g.prompt || typeof g.prompt != "object" || (t = g.prompt.allowEmptyWithAttachments) === null || t === undefined || t;
    let C = chatInputStoreHelpers.useEditorValue();
    let {
      success: x,
      tips: S
    } = attachmentStateValidator.useAttachValidator({
      attachmentStates: y ?? [],
      scene: "sendMessageButton",
      submitIgnoreUploadStatus: v
    });
    let _ = isEmptyUtil.isEmpty(y) ? w : !x || !b;
    let {
      customButton: E,
      asrButtonShow: O
    } = chatAsrButtonHook.useChatAsrButton({
      scene: h,
      skill: p,
      enable: g.asr,
      temporaryShow: _,
      onUpdateValue: chatInputStoreHelpers.setEditorValue,
      getValue: () => C,
      onStopSubmit: () => m()
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "size-36",
      onClick: e => e.stopPropagation(),
      children: reactJsxRuntimeCoreReexport.jsx(skillChatInputWrapper.ChatInputWrapper, {
        customButton: E,
        disableToSend: _,
        onClickSendButton: () => {
          m();
        },
        onClickDisabledSendButton: async () => {
          if (!isEmptyUtil.isEmpty(y) && !x && S) {
            let {
              dbxToastAPI: e
            } = await Promise.resolve().then(require.bind(require, "dbx-sonner-toaster-wrapper") /*id: 682910*/);
            e.warning(S);
          }
        },
        sendMessageHoverText: "",
        useV3: true
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    InputEngineSendButton: function () {
      return f;
    }
  });
}