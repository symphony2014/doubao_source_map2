// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useToolbarProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_delay_resource.8cd7ac06.js
         * chunkId: 68859
         * moduleId: 270758
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxEditorToolbarProviderSelector = require("docx-editor-toolbar-provider-selector") /*id: 932717*/;
  function a(e) {
    let [r, i] = reactCoreLibraryReexport.useState(docxEditorToolbarProviderSelector.getToolbarProvider);
    reactCoreLibraryReexport.useEffect(() => {
      if (e) {
        let e = () => {
          i(docxEditorToolbarProviderSelector.getToolbarProvider);
        };
        document.addEventListener("resize", e);
        return () => {
          document.removeEventListener("resize", e);
        };
      }
    }, [e]);
    return r;
  }
  require.d(exports, {
    useToolbarProvider: function () {
      return a;
    }
  });
}