// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'useCustomRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 153765
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactUseStableRef = require("react-use-stable-ref") /*id: 842231*/;
  function s(t, e, i) {
    let s = reactUseStableRef.useStableRef(e);
    let o = reactUseStableRef.useStableRef(i);
    return reactCoreLibraryReexport.useMemo(() => {
      let e = t;
      return {
        get current() {
          if (o.current === undefined) {
            return e;
          } else {
            return o.current(e);
          }
        },
        set current(val) {
          e = s.current === undefined ? val : s.current(val);
        }
      };
    }, []);
  }
  require.d(exports, {
    useCustomRef: function () {
      return s;
    }
  });
}