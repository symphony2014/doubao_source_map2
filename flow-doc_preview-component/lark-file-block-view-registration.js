// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerLarkViewExt'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 318125
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var larkPageFileBlockOptionsName = require("lark-page-file-block-options-name") /*id: 728378*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  class s extends editorContextFacade.EditorContextFacade {
    getWrapper(e) {
      return n => {
        let o = n.recursionProps?.isShortcut;
        let l = n.recursionProps?.isPDF;
        if ((n == null ? undefined : n.type) === "file" && (n == null ? undefined : n.viewType) && o && !l) {
          n = {
            ...n,
            viewType: viewTypeConstants.viewTypes.Card
          };
        }
        return reactJsxRuntimeCoreReexport.jsx(e, {
          ...n
        });
      };
    }
  }
  function u() {
    docxEditorCore.registerViewExt(larkPageFileBlockOptionsName.larkFileBlockName, s);
  }
  require.d(exports, {
    registerLarkViewExt: function () {
      return u;
    }
  });
}