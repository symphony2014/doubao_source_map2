// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'o' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'l' to 'editorModuleConstants'
// - Resolved require(21060) to 'editor-module-constants'
// - Renamed variable 'a' to 'editorUndoModule'
// - Resolved require(933023) to 'editor-undo-module'
// - Renamed variable 's' to 'contentStateManager'
// - Resolved require(519638) to 'content-state-manager'
// - Renamed variable 'd' to 'activeEditorRange'
// - Resolved require(466344) to 'active-editor-range'
// - Renamed variable 'u' to 'editorZoneState'
// - Resolved require(962363) to 'editor-zone-state'
// - Renamed variable 'c' to 'editorInputHandler'
// - Resolved require(142590) to 'editor-input-handler'
// - Renamed variable 'h' to 'docxEditorKitProviders'
// - Resolved require(519830) to 'docx-editor-kit-providers'
// - Updated imported property 'nc' to 'onInitHook' (module 135760)
// - Updated imported property 'f3' to 'get' (module 555385)
// - Updated imported property 'QO' to 'textualDepProvider' (module 519830)
// - Updated imported property 'mb' to 'textualDepTypes' (module 519830)
// - Updated imported property 'h' to 'editorModuleConsts' (module 21060)
// - Updated imported property 'Z' to 'ContentStateManager' (module 519638)
// - Updated imported property 'e' to 'ActiveEditorRange' (module 466344)
// - Updated imported property 'H' to 'EditorZoneState' (module 962363)
// - Updated imported property 'j0' to 'UndoModule' (module 933023)
// - Updated imported property 'F3' to 'EditorInputHandler' (module 142590)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_required_resource.e1f31793.js
         * chunkId: 33591
         * moduleId: 827088
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var editorUndoModule = require("editor-undo-module") /*id: 933023*/;
  var contentStateManager = require("content-state-manager") /*id: 519638*/;
  var activeEditorRange = require("active-editor-range") /*id: 466344*/;
  var editorZoneState = require("editor-zone-state") /*id: 962363*/;
  var editorInputHandler = require("editor-input-handler") /*id: 142590*/;
  var docxEditorKitProviders = require("docx-editor-kit-providers") /*id: 519830*/;
  function f() {
    docxEditorCore.onInitHook(() => {
      dependencyInjectionContainer.get(docxEditorKitProviders.textualDepProvider).setModules(docxEditorKitProviders.textualDepTypes.CAPTION, {
        [editorModuleConstants.editorModuleConsts.ContentState]: contentStateManager.ContentStateManager,
        [editorModuleConstants.editorModuleConsts.Range]: activeEditorRange.ActiveEditorRange,
        [editorModuleConstants.editorModuleConsts.ZoneState]: editorZoneState.EditorZoneState,
        [editorModuleConstants.editorModuleConsts.UndoModule]: editorUndoModule.UndoModule,
        [editorModuleConstants.editorModuleConsts.InputModel]: editorInputHandler.EditorInputHandler
      });
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return f;
    }
  });
}