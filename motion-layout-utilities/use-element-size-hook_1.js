// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'x' to 'useElementSize'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 303517
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useResizeObserverHook = require("use-resize-observer-hook") /*id: 754067*/;
  var useCustomRefHook = require("use-custom-ref-hook") /*id: 153765*/;
  var useRafCallback = require("use-raf-callback") /*id: 670341*/;
  function a() {
    let t = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
    let [e, i] = reactCoreLibraryReexport.useState(null);
    let a = useCustomRefHook.useCustomRef(null, t => {
      i(t);
      return t;
    });
    let [l, u] = reactCoreLibraryReexport.useState();
    let [h] = useRafCallback.useRafCallback(t => {
      u({
        width: t.contentRect.width,
        height: t.contentRect.height
      });
    });
    useResizeObserverHook.useResizeObserver(e, h, t);
    return [l, a];
  }
  require.d(exports, {
    useElementSize: function () {
      return a;
    }
  });
}