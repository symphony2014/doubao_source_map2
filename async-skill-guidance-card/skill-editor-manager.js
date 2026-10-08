// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'SkillEditorManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 653890
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var skillEditorStateStores = require("skill-editor-state-stores") /*id: 168235*/;
  class a {
    focusOnEditor() {
      skillEditorStateStores.skillEditorStore.getState().updateReadDocEditorFocusedState(true);
    }
    updateEditorValue(e) {
      if (isStringTypeCheck.isString(e)) {
        skillEditorStateStores.skillEditorStore.getState().updatePromptEditorValue(e);
      } else if (inputToolConverter.isTextType(e.data[0])) {
        skillEditorStateStores.skillEditorStore.getState().updatePromptEditorValue(e.data[0].text);
      }
    }
    clearEditorValue() {
      this.updateEditorValue("");
    }
  }
  require.d(exports, {
    SkillEditorManager: function () {
      return a;
    }
  });
}