// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'triggerHoverChange'
// - Renamed export 's' to 'useHoverChangeState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 530115
         */
module.exports = function (module, exports, require) {
  var o;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let l = new (require("docx-editor-event-constants-and-manager") /*id: 267720*/.EventEmitter)();
  (o = a || {}).ADD_LINE_SYMBOL_HOVER_CHANGE = "ADD_LINE_SYMBOL_HOVER_CHANGE";
  var a = o;
  function c(e) {
    l.trigger(a.ADD_LINE_SYMBOL_HOVER_CHANGE, [e]);
  }
  function u() {
    let [e, n] = reactCoreLibraryReexport.useState(false);
    let r = reactCoreLibraryReexport.useCallback(e => {
      n(e);
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      l.on(a.ADD_LINE_SYMBOL_HOVER_CHANGE, r);
      return () => {
        l.off(a.ADD_LINE_SYMBOL_HOVER_CHANGE, r);
      };
    }, [r]);
    return e;
  }
  require.d(exports, {
    triggerHoverChange: function () {
      return c;
    },
    useHoverChangeState: function () {
      return u;
    }
  });
}