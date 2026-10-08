// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'useSelectedBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 9599
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useDebounceCallbackHook_1 = require("use-debounce-callback-hook_1") /*id: 682959*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  function d(e) {
    let {
      selectionAPI: r,
      blockManager: n
    } = e;
    let [d, u] = reactCoreLibraryReexport.useState();
    let h = Error("selection_block_view_error").stack || "";
    let p = useDebounceCallbackHook_1.useDebounceCallback(() => {
      let e = r.getSelection();
      if (e.length === 1 && e[0].type === docxBlockSelectionHandler_1.blockTypes.TEXT) {
        let r = e[0].id;
        let o = n.getBlockViewByBlockIdNotCheck(r);
        if (!o) {
          let e = n.hasBlockModelByBlockId(r);
          n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
            action: "selection_block_view_error",
            info: JSON.stringify({
              blockId: r,
              hasBlockModel: e,
              recordId: e && n.getBlockModelByBlockId(r).recordId,
              stackInfo: h
            })
          });
          docxUtilityHelpers.captureException("selection_block_view_error");
        }
        if (o && editorTextBlockUtilities.isEditorInstance(o)) {
          u(o);
        }
      } else {
        u(null);
      }
    }, 0);
    reactCoreLibraryReexport.useEffect(() => {
      p();
      r.onSelectionChange(p);
      return () => {
        r.offSelectionChange(p);
      };
    }, [r, p]);
    return d;
  }
  require.d(exports, {
    useSelectedBlock: function () {
      return d;
    }
  });
}