// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fq' to 'clampedNumberTransformer'
// - Renamed export 'Rx' to 'numberTransformer'
// - Renamed export 'bA' to 'defaultNumberTransformer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 397219
         */
module.exports = function (module, exports, require) {
  var clampNumber = require("clamp-number") /*id: 887362*/;
  let r = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
  };
  let s = {
    ...r,
    transform: t => clampNumber.clampNumber(0, 1, t)
  };
  let o = {
    ...r,
    default: 1
  };
  require.d(exports, {
    clampedNumberTransformer: function () {
      return s;
    },
    numberTransformer: function () {
      return r;
    },
    defaultNumberTransformer: function () {
      return o;
    }
  });
}