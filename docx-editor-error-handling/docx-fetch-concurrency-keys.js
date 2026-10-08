// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'fetchConfigKeys'
// - Renamed export 'c' to 'fetchStateKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 177633
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  (n = {}).PRE_CONCURRENCY_FETCH_OOPS = "docx_concurrency_prefetch_oops";
  n.PRE_CONCURRENCY_FETCH_STATE = "docx_concurrency_prefetch_state";
  n.DOCX_WORKER_FETCH_CLIENTVAR = "docx_worker_fetch_clientvar";
  n.PRE_CONCURRENCY_FETCH_INIT = "docx_concurrency_pre_fetch_init";
  let l = n;
  (o = {}).PRE_CONCURRENCY_FETCH_ENABLE = "ccm_docx_clientvar_pre_concurrency_enable";
  o.MOBILE_FETCH_USE_WORKER_ENABLE = "ccm_docx_mobile_used_worker_enable";
  o.FETCH_SLICE_CONFIG = "docx_clientvar_fetch_slice_config";
  o.MOBILE_FETCH_SLICE_CONFIG = "User.appConfig.clientvarFetchSliceConfig.concurrency";
  let s = o;
  require.d(exports, {
    fetchConfigKeys: function () {
      return s;
    },
    fetchStateKeys: function () {
      return l;
    }
  });
}