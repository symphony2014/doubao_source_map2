// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'CodingSkillEditor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 154313
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  class a {
    focusOnEditor() {
      codingSkillStoreModule.codingSkillStore.getState().updateFocusedState(true);
    }
    updateEditorValue(e) {
      if (isStringTypeCheck.isString(e)) {
        codingSkillStoreModule.codingSkillStore.getState().updateEditorValue({
          data: [{
            type: chatFieldTypes.getFieldTypes.Text,
            text: e
          }]
        });
      } else {
        codingSkillStoreModule.codingSkillStore.getState().updateEditorValue(e);
      }
    }
    clearEditorValue() {
      this.updateEditorValue("");
    }
  }
  require.d(exports, {
    CodingSkillEditor: function () {
      return a;
    }
  });
}