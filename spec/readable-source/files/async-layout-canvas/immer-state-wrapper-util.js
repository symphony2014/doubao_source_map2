// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'immerStateWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 38922
         */
module.exports = function (module, exports, require) {
  var immerProduceCore = require("immer-produce-core") /*id: 949322*/;
  let r = e => (t, a, r) => {
    r.setState = (e, a, ...r) => t(typeof e == "function" ? immerProduceCore.produce(e) : e, a, ...r);
    return e(r.setState, a, r);
  };
  require.d(exports, {
    immerStateWrapper: function () {
      return r;
    }
  });
}