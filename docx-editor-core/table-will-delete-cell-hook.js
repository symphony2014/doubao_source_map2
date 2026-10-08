// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'toggleDeleteCell'
// - Renamed export 'A' to 'useWillDeleteCell'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 175568
         */
module.exports = function (module, exports, require) {
  var docxEditorBlockRenderer = require("docx-editor-block-renderer") /*id: 211843*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var l = debugBrowserConfig;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useStableCallbackHook = require("use-stable-callback-hook") /*id: 600393*/;
  var tableWillDeleteCellProvider = require("table-will-delete-cell-provider") /*id: 473045*/;
  let u = l("table:useWillDeleteCell");
  function d(e, n) {
    n.editorAPI.getService(tableWillDeleteCellProvider.tableWillDelCellId).toggleDeleteCell(e);
  }
  function h(e) {
    let [n, i] = reactCoreLibraryReexport.useState(false);
    let o = docxEditorBlockRenderer.useInjector(tableWillDeleteCellProvider.tableWillDelCellId, {
      optional: true
    });
    let l = useStableCallbackHook.useStableCallback(n => {
      let {
        willDelete: r,
        caller: o
      } = n;
      if (e === n.tableId) {
        u("table=%s %s.setTableWillDeleteCell %s", e, o, r);
        i(r);
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = o == null ? undefined : o.subDeleteCell(l);
      return () => {
        if (e != null) {
          e.unsubscribe();
        }
      };
    }, [l]);
    return n;
  }
  require.d(exports, {
    toggleDeleteCell: function () {
      return d;
    },
    useWillDeleteCell: function () {
      return h;
    }
  });
}