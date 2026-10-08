// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'shouldRegenerate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 965069
         */
module.exports = function (module, exports, require) {
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  let r = e => {
    if (localResourceCheck.isLocal(e)) {
      return !!(e == null ? undefined : e.is_regen) || !!e.local.isRegenerate || (e == null ? undefined : e.ext?.regen) === "1";
    } else {
      return !!(e == null ? undefined : e.is_regen) || (e == null ? undefined : e.ext?.regen) === "1";
    }
  };
  require.d(exports, {
    shouldRegenerate: function () {
      return r;
    }
  });
}