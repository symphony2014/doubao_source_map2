// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'watchdogEvents'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_watchdog.4924cfc0.js
         * chunkId: 17612
         * moduleId: 524051
         */
module.exports = function (module, exports, require) {
  var i;
  (i = {}).BEFORE_UNLOAD = "before_unload";
  i.OOPS = "oops";
  i.DESTROY = "destroy";
  i.ClEAR = "mobile_clear";
  i.WATCH_TIMEOUT = "watch_timeout";
  i.OVER_OP_SIZE = "over_op_size";
  i.OVER_RECORD_SIZE = "over_record_size";
  i.OVER_TEXT_SIZE = "over_text_size";
  i.NONE = "none";
  let o = i;
  require.d(exports, {
    watchdogEvents: function () {
      return o;
    }
  });
}