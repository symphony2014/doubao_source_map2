// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L2' to 'lifecycleEvents'
// - Renamed export 'Nu' to 'workerEvents'
// - Renamed export 'jK' to 'errorCodes'
// - Renamed export 'tk' to 'statusStates'
// - Renamed export 'uN' to 'fetchModes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 290082
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var a;
  var i;
  var c;
  var s;
  var l;
  var u;
  var d;
  var f;
  (s = n ||= {})[s.fetchError = -2] = "fetchError";
  s[s.tableSkipBlockLogicError = -14] = "tableSkipBlockLogicError";
  s[s.firstBlockMapEmptyAfterRetry = -4] = "firstBlockMapEmptyAfterRetry";
  s[s.cursorBlockMapEmptyAfterRetry = -8] = "cursorBlockMapEmptyAfterRetry";
  s[s.outSideFetchTimeout = -16] = "outSideFetchTimeout";
  (l = o ||= {}).Success = "SUCCESS";
  l.Error = "ERROR";
  l.Pending = "PENDING";
  (u = a ||= {})[u.ALL = 0] = "ALL";
  u[u.TOP_BOTTOM = 1] = "TOP_BOTTOM";
  u[u.BOTTOM_TOP = 2] = "BOTTOM_TOP";
  u[u.SPREAD = 3] = "SPREAD";
  u[u.SPECIFIC = 4] = "SPECIFIC";
  u[u.AroundV2 = 7] = "AroundV2";
  (d = i ||= {}).Start = "START";
  d.WorkerStart = "WORKERSTART";
  d.Clientvar = "CLIENTVAR";
  d.FetchError = "FETCHERROR";
  d.FetchFinish = "FETCHFINISH";
  d.RetryTable = "RETRYTABLE";
  d.NeedUpload = "NEEDUPLOAD";
  d.Destroy = "DESTROY";
  (f = c ||= {}).LibStart = "lib_start";
  f.WorkerFetchStart = "worker_fetch_start";
  f.Retry = "retry";
  f.SendStart = "send_start";
  f.SendEnd = "send_end";
  f.SendEndError = "send_end_error";
  f.GetClientvar = "get_clientvar";
  f.GetClientvarError = "get_clientvar_error";
  f.FetchFinish = "fetch_finish";
  f.PostWorkerDestroy = "post_worker_destroy";
  f.ResumeFromFrozen = "resume_from_frozen";
  f.freeze = "freeze";
  f.visible = "visible";
  f.hidden = "hidden";
  require.d(exports, {
    lifecycleEvents: function () {
      return i;
    },
    workerEvents: function () {
      return c;
    },
    errorCodes: function () {
      return n;
    },
    statusStates: function () {
      return o;
    },
    fetchModes: function () {
      return a;
    }
  });
}