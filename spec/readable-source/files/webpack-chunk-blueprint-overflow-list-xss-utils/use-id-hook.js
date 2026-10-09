// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'useId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 845738
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactUseLayoutEffectSafe = require("react-use-layout-effect-safe") /*id: 245652*/;
  var a = (r ||= require.t(reactCoreLibraryReexport, 2))[" useId ".trim().toString()] || (() => undefined);
  var s = 0;
  function u(e) {
    let [t, n] = reactCoreLibraryReexport.useState(a());
    reactUseLayoutEffectSafe.useLayoutEffect(() => {
      if (!e) {
        n(e => e ?? String(s++));
      }
    }, [e]);
    return e || (t ? `radix-${t}` : "");
  }
  require.d(exports, {
    useId: function () {
      return u;
    }
  });
}