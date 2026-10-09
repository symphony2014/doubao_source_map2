// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'EditModeContextFacade'
// - Renamed export 'g' to 'editModeChangeEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 612759
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var docxDragDropConstants = require("docx-drag-drop-constants") /*id: 253882*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var inputDeviceTypes = require("input-device-types") /*id: 865354*/;
  var docxEditorInputModeContext = require("docx-editor-input-mode-context") /*id: 318127*/;
  let d = "EDIT_MODE_CHANGE";
  class u extends editorContextFacade.EditorContextFacade {
    getEffect() {
      return e => {
        let {
          editMode: i
        } = docxEditorInputModeContext.useEditorInputMode(e.editorAPI);
        let r = reactCoreLibraryReexport.useCallback(e => {
          docxEditorEventConstantsAndManager.globalEventBus.emit(docxEditorEventConstantsAndManager.eventConstants.COMMON.DRAG_STATUS_CHANGE, e);
        }, []);
        reactCoreLibraryReexport.useEffect(() => {
          if (i === inputDeviceTypes.InputDeviceType.Keyboard) {
            this.boundary.classList.add("keyboard-mode");
          } else {
            this.boundary.classList.remove("keyboard-mode");
          }
          this.blockManager.dispatch(d, i);
        }, [i]);
        reactCoreLibraryReexport.useEffect(() => {
          this.blockManager.addListener(docxDragDropConstants.dragStatusEvent, r);
          return () => {
            this.blockManager.removeListener(docxDragDropConstants.dragStatusEvent, r);
          };
        }, [r]);
      };
    }
  }
  require.d(exports, {
    EditModeContextFacade: function () {
      return u;
    },
    editModeChangeEvent: function () {
      return d;
    }
  });
}