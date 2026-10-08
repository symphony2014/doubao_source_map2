// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'BlockContainerPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 11239
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docxBlockContainerProvider = require("docx-block-container-provider") /*id: 577766*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  require("react-core-library-reexport") /*id: 634663*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  class d extends editorContextFacade.EditorContextFacade {
    getWrapper(e) {
      return i => {
        let {
          type: o,
          viewType: l,
          record: a
        } = i;
        let {
          snapshot: d
        } = a;
        let {
          align: u
        } = d;
        let h = l || docxEditorCore.getBlockModel(i.struct)?.ssrViewType;
        let f = s(`docx-${o}-block-container`, {
          [`docx-view-type-${h}`]: !!h
        }, {
          [`docx-block-align-${u}`]: !!u
        });
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: f,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: `docx-${o}-block-inner-container`,
            children: reactJsxRuntimeCoreReexport.jsx(e, {
              ...i
            })
          })
        });
      };
    }
  }
  function u() {
    docxEditorCore.registerViewExt(docxBlockContainerProvider.blockContainerName, d);
  }
  require.d(exports, {
    BlockContainerPlugin: function () {
      return u;
    }
  });
}