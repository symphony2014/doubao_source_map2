// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'NY' to 'useCachedMemo'
// - Renamed export 'eD' to 'invokeCallback'
// - Renamed export 'g1' to 'useCachedValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 573742
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  let l = (e, t) => {
    let n = reactCoreLibraryReexport.useRef(e);
    if (!t(e, n.current)) {
      n.current = e;
    }
    return n.current;
  };
  let a = (e, t) => {
    let n = reactCoreLibraryReexport.useRef();
    if (isUndefinedCheck.isUndefined(n.current) || !deepEqualUtil_1.deepEqual(n.current, t)) {
      n.current = t;
    }
    return reactCoreLibraryReexport.useMemo(e, n.current);
  };
  let s = e => e();
  require.d(exports, {
    useCachedMemo: function () {
      return a;
    },
    invokeCallback: function () {
      return s;
    },
    useCachedValue: function () {
      return l;
    }
  });
}