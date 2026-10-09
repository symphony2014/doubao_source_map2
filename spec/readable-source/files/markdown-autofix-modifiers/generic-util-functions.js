// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Do' to 'findMapResult'
// - Renamed export 'sd' to 'safeGetProperty'
// - Renamed export 't6' to 'safeJsonParse'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52853.7f831412.js
         * chunkId: 52853
         * moduleId: 165378
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  let n = e => {
    try {
      if (e) {
        return JSON.parse(e);
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  };
  let l = (e, t) => {
    if (!isUndefinedCheck.isUndefined(t)) {
      if (e == null) {
        return undefined;
      } else {
        return e[t];
      }
    }
  };
  let o = (e, t) => {
    for (let r of e) {
      let e = t(r);
      if (e !== false) {
        return [r, e];
      }
    }
  };
  require.d(exports, {
    findMapResult: function () {
      return o;
    },
    safeGetProperty: function () {
      return l;
    },
    safeJsonParse: function () {
      return n;
    }
  });
}