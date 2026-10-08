// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatInputEventHandler'
// - Resolved require(144822) to 'chat-input-event-handler'
// - Updated imported property 'SS' to 'createInputHandler' (module 144822)
// - Updated imported property 'Kb' to 'onBeforeBreakMsg' (module 144822)
// - Updated imported property 'oW' to 'onBeforeSendMessage' (module 144822)
// - Updated imported property 'xK' to 'onEmptySlash' (module 144822)
// - Updated imported property 'GQ' to 'onKeyDown' (module 144822)
// - Updated imported property 'pe' to 'onBeforeMessageSend' (module 144822)
// - Updated imported property 'WF' to 'onMessageSendingEnd' (module 144822)
// - Updated imported property 'As' to 'onPaste' (module 144822)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9866.90f2189f.js
         * chunkId: 9866
         * moduleId: 381266
         */
module.exports = function (module, exports, require) {
  var chatInputEventHandler = require("chat-input-event-handler") /*id: 144822*/;
  require.r(exports);
  require.d(exports, {
    actionTogglerFactory: function () {
      return chatInputEventHandler.createInputHandler;
    },
    emitBeforeBreakMessage: function () {
      return chatInputEventHandler.onBeforeBreakMsg;
    },
    emitBeforeSendMessage: function () {
      return chatInputEventHandler.onBeforeSendMessage;
    },
    emitEmptySlash: function () {
      return chatInputEventHandler.onEmptySlash;
    },
    emitKeyDown: function () {
      return chatInputEventHandler.onKeyDown;
    },
    emitMessageSendingBefore: function () {
      return chatInputEventHandler.onBeforeMessageSend;
    },
    emitMessageSendingEnd: function () {
      return chatInputEventHandler.onMessageSendingEnd;
    },
    emitPaste: function () {
      return chatInputEventHandler.onPaste;
    }
  });
}