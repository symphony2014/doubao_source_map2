// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'o' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'a' to 'docxShortcutCommandUtils'
// - Resolved require(804220) to 'docx-shortcut-command-utils'
// - Renamed variable 'l' to 'blockManagerToken'
// - Resolved require(109058) to 'block-manager-token'
// - Updated imported property 'nc' to 'onInitHook' (module 135760)
// - Updated imported property 'f3' to 'get' (module 555385)
// - Updated imported property 'n' to 'blockManagerToken' (module 109058)
// - Updated imported property 'sq' to 'loadAsyncShortcut' (module 804220)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_delay_resource.8cd7ac06.js
         * chunkId: 68859
         * moduleId: 24796
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docxShortcutCommandUtils = require("docx-shortcut-command-utils") /*id: 804220*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  function s() {
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(blockManagerToken.blockManagerToken);
      docxShortcutCommandUtils.loadAsyncShortcut(e);
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return s;
    }
  });
}