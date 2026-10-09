// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'VideoSkillEditor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 802697
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var videoSkillStore = require("video-skill-store") /*id: 297271*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  class a {
    focusOnEditor() {
      videoSkillStore.createVideoSkillStore().getState().updateFocusedState(true);
    }
    updateEditorValue(e) {
      if (isStringTypeCheck.isString(e)) {
        videoSkillStore.createVideoSkillStore().getState().updateEditorValue({
          data: [{
            type: chatFieldTypes.getFieldTypes.Text,
            text: e
          }]
        });
      } else {
        videoSkillStore.createVideoSkillStore().getState().updateEditorValue(e);
      }
    }
    clearEditorValue() {
      this.updateEditorValue("");
    }
  }
  require.d(exports, {
    VideoSkillEditor: function () {
      return a;
    }
  });
}