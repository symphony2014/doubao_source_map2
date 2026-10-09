// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GP' to 'sheetToUsage'
// - Renamed export 'ON' to 'fileBlockTypes'
// - Renamed export 'PK' to 'blockStateConstants'
// - Renamed export 'W1' to 'loadDurationMetric'
// - Renamed export 'W4' to 'loadFailMetric'
// - Renamed export 'x8' to 'spaMode'
// - Renamed export 'xX' to 'blockEventNames'
// - Renamed export 'x_' to 'urlParam'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 337105
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  (n = {}).INIT = "init";
  n.SHOW = "show";
  n.DATA_LOAD_START = "dataLoadStart";
  n.JS_READY = "jsReady";
  n.DATA_READY = "dataReady";
  n.TTV = "ttv";
  n.TTU = "ttu";
  n.TURN_INTO_REAL_TYPE = "turnIntoRealType";
  let s = n;
  (o = {}).SHEET_TO_USAGE = "sheet_to_usage";
  let a = o;
  let c = {
    [s.INIT]: "block_init",
    [s.SHOW]: "block_show_in_viewport",
    [s.DATA_LOAD_START]: "block_data_request_start",
    [s.JS_READY]: "block_js_loaded_success",
    [s.DATA_READY]: "fetch_block_data_success",
    [s.TTV]: "block_ttv",
    [s.TTU]: "block_ttu",
    [s.TURN_INTO_REAL_TYPE]: "turn_into_real_type"
  };
  let d = [docBlockTypeConstants.blockTypeConstants.FILE];
  let u = "ccm_block_load_duration_dev";
  let h = "ccm_block_load_fail_dev";
  let f = "url";
  let g = "spa";
  require.d(exports, {
    sheetToUsage: function () {
      return a;
    },
    fileBlockTypes: function () {
      return d;
    },
    blockStateConstants: function () {
      return s;
    },
    loadDurationMetric: function () {
      return u;
    },
    loadFailMetric: function () {
      return h;
    },
    spaMode: function () {
      return g;
    },
    blockEventNames: function () {
      return c;
    },
    urlParam: function () {
      return f;
    }
  });
}