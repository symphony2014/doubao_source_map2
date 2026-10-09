// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'XY' to 'useGridResize'
// - Renamed export 'yF' to 'triggerGridResize'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 202645
         */
module.exports = function (module, exports, require) {
  var o;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let l = new (require("docx-editor-event-constants-and-manager") /*id: 267720*/.EventEmitter)();
  (o = {}).GRID_COLUMN_RESIZING = "GRID_COLUMN_RESIZING";
  let a = o;
  function c(e) {
    l.trigger(a.GRID_COLUMN_RESIZING, [e]);
  }
  function u() {
    let [e, n] = reactCoreLibraryReexport.useState(false);
    let r = reactCoreLibraryReexport.useCallback(e => {
      n(e);
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      l.on(a.GRID_COLUMN_RESIZING, r);
      return () => {
        l.off(a.GRID_COLUMN_RESIZING, r);
      };
    }, [r]);
    return e;
  }
  require.d(exports, {
    useGridResize: function () {
      return u;
    },
    triggerGridResize: function () {
      return c;
    }
  });
}