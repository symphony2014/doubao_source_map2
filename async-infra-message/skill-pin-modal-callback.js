// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'useSkillPinCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 381053
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  function o(e) {
    let t = useLatestRef_1.useLatestRef(e);
    let n = reactCoreLibraryReexport.useCallback(function () {
      var e;
      var n = arguments.length;
      var i = Array(n);
      var r = 0;
      for (; r < n; r++) {
        i[r] = arguments[r];
      }
      if ((e = t.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.call(t, ...i);
      }
    }, []);
    return e && n;
  }
  require.d(exports, {
    useSkillPinCallback: function () {
      return o;
    }
  });
}