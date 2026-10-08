// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GN' to 'triggerTextToolbarHover'
// - Renamed export 'Ts' to 'triggerTablePopoverTextToolbarHover'
// - Renamed export 'ZH' to 'triggerTableCellTextToolbarHover'
// - Renamed export 'xu' to 'useToolbarHoverState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 520726
         */
module.exports = function (module, exports, require) {
  var o;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let l = new (require("docx-editor-event-constants-and-manager") /*id: 267720*/.EventEmitter)();
  (o = {}).TEXT_TOOLBAR_HOVER = "TEXT_TOOLBAR_HOVER";
  o.TABLE_CELL_TEXT_TOOLBAR_HOVER = "TABLE_CELL_TEXT_TOOLBAR_HOVER";
  o.TABLE_POPOVER_TEXT_TOOLBAR_HOVER = "TABLE_POPOVER_TEXT_TOOLBAR_HOVER";
  let a = o;
  function c(e) {
    l.trigger(a.TEXT_TOOLBAR_HOVER, [e]);
  }
  function u(e) {
    l.trigger(a.TABLE_CELL_TEXT_TOOLBAR_HOVER, [e]);
  }
  function s(e) {
    l.trigger(a.TABLE_POPOVER_TEXT_TOOLBAR_HOVER, [e]);
  }
  function d() {
    let [e, n] = reactCoreLibraryReexport.useState(false);
    let [r, o] = reactCoreLibraryReexport.useState(false);
    let [c, u] = reactCoreLibraryReexport.useState(false);
    let s = reactCoreLibraryReexport.useCallback(e => {
      n(e);
    }, []);
    let d = reactCoreLibraryReexport.useCallback(e => {
      o(e);
    }, []);
    let h = reactCoreLibraryReexport.useCallback(e => {
      u(e);
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      l.on(a.TEXT_TOOLBAR_HOVER, s);
      l.on(a.TABLE_CELL_TEXT_TOOLBAR_HOVER, d);
      l.on(a.TABLE_POPOVER_TEXT_TOOLBAR_HOVER, h);
      return () => {
        l.off(a.TEXT_TOOLBAR_HOVER, s);
        l.off(a.TABLE_CELL_TEXT_TOOLBAR_HOVER, d);
        l.off(a.TABLE_POPOVER_TEXT_TOOLBAR_HOVER, h);
      };
    }, [s, d, h]);
    return e || r || c;
  }
  require.d(exports, {
    triggerTextToolbarHover: function () {
      return c;
    },
    triggerTablePopoverTextToolbarHover: function () {
      return s;
    },
    triggerTableCellTextToolbarHover: function () {
      return u;
    },
    useToolbarHoverState: function () {
      return d;
    }
  });
}