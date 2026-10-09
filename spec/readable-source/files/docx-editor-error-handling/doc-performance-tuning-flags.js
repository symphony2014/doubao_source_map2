// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'PerfTuningFlags'
// - Renamed export 'f' to 'IdleApplyFlags'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 808188
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  (n = {})[n.NONE = 1] = "NONE";
  n[n.ALLOW_DOWNGRADE = 2] = "ALLOW_DOWNGRADE";
  n[n.ALLOW_LARGE_DOC_PERF_TUNING = 4] = "ALLOW_LARGE_DOC_PERF_TUNING";
  let l = n;
  (o = {})[o.UNDETERMINED = 1] = "UNDETERMINED";
  o[o.DISABLE_IDLE_APPLY_ALL_BY_DOWNGRADE = 4] = "DISABLE_IDLE_APPLY_ALL_BY_DOWNGRADE";
  o[o.ENABLE_IDLE_APPLY_CRITICAL_BY_LARGE_DOC = 8] = "ENABLE_IDLE_APPLY_CRITICAL_BY_LARGE_DOC";
  o[o.OPTIMIZE_IDLE_APPLY = 12] = "OPTIMIZE_IDLE_APPLY";
  o[o.ENABLE_IDLE_APPLY_ALL_BY_NO_LARGE_DOC_TUNING_FG = 16] = "ENABLE_IDLE_APPLY_ALL_BY_NO_LARGE_DOC_TUNING_FG";
  o[o.ENABLE_IDLE_APPLY_ALL_BY_FETCH_ALL_DONE = 32] = "ENABLE_IDLE_APPLY_ALL_BY_FETCH_ALL_DONE";
  o[o.ENABLE_IDLE_APPLY_ALL = 48] = "ENABLE_IDLE_APPLY_ALL";
  o[o.ENABLE_IDLE_APPLY_ALL_OR_CRITICAL = 56] = "ENABLE_IDLE_APPLY_ALL_OR_CRITICAL";
  let s = o;
  require.d(exports, {
    PerfTuningFlags: function () {
      return l;
    },
    IdleApplyFlags: function () {
      return s;
    }
  });
}