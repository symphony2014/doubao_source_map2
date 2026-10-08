// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'usePreviousRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 744719
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let r = e => {
    let {
      value: t,
      isEqual: n = Object.is
    } = e;
    let r = reactCoreLibraryReexport.useRef();
    let o = reactCoreLibraryReexport.useRef(t);
    if (!n(o.current, t)) {
      r.current = o.current;
      o.current = t;
    }
    return r;
  };
  require.d(exports, {
    usePreviousRef: function () {
      return r;
    }
  });
}