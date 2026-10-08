// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$w' to 'isExpertAvailable'
// - Renamed export 'Ts' to 'resolveThinkingMode'
// - Renamed export 'sl' to 'isThinkingEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 202832
         */
module.exports = function (module, exports, require) {
  var modeConstants = require("mode-constants") /*id: 701817*/;
  let r = (e, t) => {
    let {
      deepThinkingAutoCotMode: n,
      deepThinkingSwitchUseAutoCot: r,
      deepThinkingSwitchValue: a,
      enableDeepThinkingAutoMode: l,
      expertMode: o
    } = e;
    if (t) {
      return modeConstants.modeConstants.Off;
    } else if ((n === "optional" && r || n === "hidden_force") && l) {
      return modeConstants.modeConstants.Auto;
    } else if (o) {
      return modeConstants.modeConstants.Pro;
    } else if (a) {
      return modeConstants.modeConstants.On;
    } else {
      return modeConstants.modeConstants.Off;
    }
  };
  let a = () => true;
  let l = () => true;
  require.d(exports, {
    isExpertAvailable: function () {
      return l;
    },
    resolveThinkingMode: function () {
      return r;
    },
    isThinkingEnabled: function () {
      return a;
    }
  });
}