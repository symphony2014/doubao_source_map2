// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'writingChatInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 659572
         */
module.exports = function (module, exports, require) {
  var writingChatInputController = require("writing-chat-input-controller") /*id: 619607*/;
  let i = {
    updateWritingEditorValue: e => {
      writingChatInputController.writingChatInputControllerInstance.updateWritingRichEditorContent(e);
    },
    getWritingEditorValue: () => writingChatInputController.writingChatInputControllerInstance.getWritingRichEditorContent(),
    focusOnWritingEditor: e => {
      writingChatInputController.writingChatInputControllerInstance.focusOnWritingEditor(e);
    },
    setTemplate: e => {
      writingChatInputController.writingChatInputControllerInstance.setTemplate(e);
    },
    reset: () => {
      writingChatInputController.writingChatInputControllerInstance.reset();
    },
    on: function () {
      var e = arguments.length;
      var t = Array(e);
      var n = 0;
      for (; n < e; n++) {
        t[n] = arguments[n];
      }
      return writingChatInputController.writingChatInputControllerInstance.on(...t);
    },
    off: function () {
      var e = arguments.length;
      var t = Array(e);
      var n = 0;
      for (; n < e; n++) {
        t[n] = arguments[n];
      }
      return writingChatInputController.writingChatInputControllerInstance.off(...t);
    },
    setLongArticleWriting: e => {
      writingChatInputController.writingChatInputControllerInstance.setLongArticleWriting(e);
    },
    addNewAttachmentFiles: function () {
      var e = arguments.length;
      var t = Array(e);
      var n = 0;
      for (; n < e; n++) {
        t[n] = arguments[n];
      }
      writingChatInputController.writingChatInputControllerInstance.addNewAttachmentFiles(...t);
    },
    setAttachmentConfig: e => {
      writingChatInputController.writingChatInputControllerInstance.setAttachmentConfig(e);
    },
    updateWritingRichEditorSendDisabledState: e => {
      writingChatInputController.writingChatInputControllerInstance.updateWritingRichEditorSendDisabledState(e);
    }
  };
  require.d(exports, {
    writingChatInput: function () {
      return i;
    }
  });
}