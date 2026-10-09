// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'useSelecting'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 277639
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var eventTypeConstants = require("event-type-constants") /*id: 561150*/;
  let a = debugLoggerFactory.createLogger("common:hook:use-selecting");
  function c(e) {
    let n = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    let [r, i] = reactCoreLibraryReexport.useState(() => e.isSelecting());
    let c = n ? eventTypeConstants.selectionEvents.start : eventTypeConstants.selectionEvents.move;
    reactCoreLibraryReexport.useEffect(() => {
      let n = () => {
        a("set isSelecting to true");
        i(true);
      };
      let r = () => {
        a("set isSelecting to false");
        i(false);
      };
      e.on(c, n);
      e.on(eventTypeConstants.selectionEvents.stop, r);
      return () => {
        e.off(c, n);
        e.off(eventTypeConstants.selectionEvents.stop, r);
      };
    }, [e]);
    return r;
  }
  require.d(exports, {
    useSelecting: function () {
      return c;
    }
  });
}