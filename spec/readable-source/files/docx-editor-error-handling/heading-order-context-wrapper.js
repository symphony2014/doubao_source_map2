// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'HeadingOrderContextWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 350443
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var docEditorConstants_1 = require("doc-editor-constants_1") /*id: 2607*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  class a extends editorContextFacade.EditorContextFacade {
    getWrapper(e) {
      let {
        headingModule: i
      } = this.editorContext;
      let r = e => {
        return (i == null ? undefined : i.getOrderText(e)) ?? null;
      };
      return o => {
        let {
          blockId: a,
          recordId: c
        } = o;
        let [d, u] = reactCoreLibraryReexport.useState(() => r(c));
        let h = reactCoreLibraryReexport.useCallback(() => {
          if (i) {
            u(r(c));
          }
        }, [a]);
        reactCoreLibraryReexport.useEffect(() => {
          this.blockManager.addListener(docEditorConstants_1.updateFlags.FORCE_UPDATE, h, a);
          return () => {
            this.blockManager.removeListener(docEditorConstants_1.updateFlags.FORCE_UPDATE, h, a);
          };
        }, [h, a]);
        return reactJsxRuntimeCoreReexport.jsx(e, {
          ...o,
          order: d
        });
      };
    }
  }
  require.d(exports, {
    HeadingOrderContextWrapper: function () {
      return a;
    }
  });
}