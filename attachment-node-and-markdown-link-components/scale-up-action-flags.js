// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'getScaleUpFlags'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 143434
         */
module.exports = function (module, exports, require) {
  let i = e => {
    let {
      enableScaleUpAction: t
    } = e;
    return {
      showRef: t === true || Array.isArray(t) && t.includes("refer"),
      showZoom: t === true || Array.isArray(t) && t.includes("zoom")
    };
  };
  require.d(exports, {
    getScaleUpFlags: function () {
      return i;
    }
  });
}