// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cb' to 'docxRecordVar'
// - Renamed export 'aF' to 'lazyRecordType'
// - Renamed export 'Fv' to 'fetchSliceStates'
// - Renamed export 'H0' to 'criticalErrorCodes'
// - Renamed export 'X9' to 'clientvarEvents'
// - Renamed export 'O5' to 'skipBlockDidFetch'
// - Renamed export 'jM' to 'lazyRecordJump'
// - Renamed export 'qK' to 'tableHideLoading'
// - Renamed export 'c$' to 'concurrencyFlags'
// - Renamed export 'nO' to 'mergedRecordStates'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 112384
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var s;
  var l;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  (i = {}).PRE_CONCURRENCY_FETCH_OOPS = "docx_concurrency_pre_fetch_oops";
  i.PRE_CONCURRENCY_FETCH_STATE = "docx_concurrency_pre_fetch_state";
  let a = i;
  let c = "lazy_record";
  let d = "docx_record_client_var";
  (o = {}).MAIN_CONTENT_FETCH_DONE = "main_content_fetch_done";
  o.INIT_SLICE_CLIENTVARS = "init_slice_clientvars";
  o.FETCH_SLICED_CLIENTVARS = "fetch_sliced_clientvars";
  o.FETCH_SLICED_CLIENTVARS_RESPONSE = "fetch_sliced_clientvars_response";
  o.HAS_MORE = "has_more";
  o.ON_SLICE_RESPONSE = "on_slice_response";
  o.ON_FIRST_SLICE_READY = "on_first_slice_ready";
  o.HANDLE_RESPONSE = "handle_response";
  o.REQUEST_RENDER = "request_render";
  o.REQUEST_RENDER_TASK_FINISH = "request_render_task_finish";
  o.REQUEST_RENDER_TASK_ALL_FINISH = "request_render_task_all_finish";
  o.GEN_FETCH_SKIP_BLOCK_TASK = "gen_fetch_skip_block_task";
  o.REQUEST_SKIPPED_BLOCK = "request_skipped_block";
  o.ON_ALL_SLICE_RESPONSE = "on_all_slice_response";
  let f = o;
  (s = {}).IS_UNDEFINED = "lazy_record_undefined";
  s.FETCH_ALL_DONE_BUT_HAS_PENDING_BLOCK = "lazy_record_fetch_all_done_but_has_pending_block";
  s.FETCH_SLICED_ERROR = "lazy_record_fetch_sliced_error";
  let h = s;
  let p = "lazy_record_jump";
  let v = "skip_block_did_fetch";
  let g = Object.assign({}, f, h);
  (l = {}).CLIENTVAR_ADDED_INTO_STORAGE = "clientvar_added_into_storage";
  l.CLIENTVAR_SLICE_RESPONSE = "clientvar_slice_response";
  l.CLIENTVAR_RENDER_TASK_FINISH = "clientvar_render_task_finish";
  l.CLIENTVAR_SUB_TASK_FINISH = "clientvar_sub_task_finish";
  l.CLIENTVAR_FETCH_ALL_DONE_NEW = "clientvar_fetch_all_done_new";
  l.CRITICAL_CLIENT_VAR_APPLY_DONE = "critical_client_var_apply_done";
  l.CLIENTVAR_APPLY_SLICE_CLIENTVAR_AFTER = "CLIENTVAR_APPLY_SLICE_CLIENTVAR_AFTER";
  l.CLIENTVAR_APPLY_ALL_DONE = "clientvar_apply_all_done";
  l.CLIENTVAR_FETCH_SKIPPED_BLOCK_DONE = "clientvar_fetch_skipped_block_done";
  l.CLIENTVAR_SLICE_SKIPPED_BLOCK_ERROR = "clientvar_slice_skipped_block_error";
  l.CLIENTVAR_SLICE_FATAL = "clientvar_slice_fatal_error";
  l.CLIENTVAR_FETCH_ALLOW_EDIT = "clientvar_fetch_allow_edit";
  l.POST_CLIENTVAR_FETCH_ALLOW_EDIT = "post_clientvar_fetch_allow_edit";
  l.CLIENTVAR_FETCH_MAIN_CONTENT_DONE = "CLIENTVAR_FETCH_MAIN_CONTENT_DONE";
  l.CLIENTVAR_FETCH_TASK_WILL_START = "CLIENTVAR_FETCH_TASK_WILL_START";
  l.CLIENTVAR_SKIP_BLOCK_APPLIED = "CLIENTVAR_SKIP_BLOCK_APPLIED";
  l.ALLOW_EDIT = "allow_edit";
  l.CLIENTVAR_WORKER_FETCH_ALL_DONE = "clientvar_worker_fetch_all_done";
  l.SHOW_OOPS = "SHOW_OOPS";
  let m = l;
  let _ = "CLIENTVAR_TABLE_BLOCK_TRIGGER_HIDE_LOADING";
  let y = new Set([collaborativeEditingFlowSyncModule.ErrorType.NO_PERMISSION, collaborativeEditingFlowSyncModule.ErrorType.NOT_FOUND, collaborativeEditingFlowSyncModule.ErrorType.DELETED]);
  require.d(exports, {
    docxRecordVar: function () {
      return d;
    },
    lazyRecordType: function () {
      return c;
    },
    fetchSliceStates: function () {
      return f;
    },
    criticalErrorCodes: function () {
      return y;
    },
    clientvarEvents: function () {
      return m;
    },
    skipBlockDidFetch: function () {
      return v;
    },
    lazyRecordJump: function () {
      return p;
    },
    tableHideLoading: function () {
      return _;
    },
    concurrencyFlags: function () {
      return a;
    },
    mergedRecordStates: function () {
      return g;
    }
  });
}