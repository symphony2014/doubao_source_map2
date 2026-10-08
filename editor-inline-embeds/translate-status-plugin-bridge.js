// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'RA' to 'translatePluginMgr'
// - Renamed export 'Tv' to 'translateStatusKey'
// - Renamed export '_e' to 'translatePluginStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 682283
         */
module.exports = function (module, exports, require) {
  var translateStatusConstants = require("translate-status-constants") /*id: 349844*/;
  let o = (() => {
    let e = {};
    return {
      getPlugin: () => e.module,
      setPlugin: i => {
        e.module = i;
      }
    };
  })();
  let l = (() => {
    let e = {};
    return {
      getPlugin: () => e.module,
      setPlugin: i => {
        e.module = i;
      }
    };
  })();
  require.d(exports, {
    translatePluginMgr: function () {
      return o;
    },
    translateStatusKey: function () {
      return translateStatusConstants.translateStatusKey;
    },
    translatePluginStore: function () {
      return l;
    }
  });
}