// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fq' to 'clampedNumberValidator'
// - Renamed export 'Rx' to 'numberValidator'
// - Renamed export 'bA' to 'numberWithDefaultValidator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 730157
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
    clampedNumberValidator: function () {
      return s;
    },
    numberValidator: function () {
      return r;
    },
    numberWithDefaultValidator: function () {
      return o;
    }
  });
}