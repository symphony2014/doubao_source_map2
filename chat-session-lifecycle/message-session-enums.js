// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H2' to 'MessageSessionEvent'
// - Renamed export 'Iu' to 'MessageStage'
// - Renamed export 'cU' to 'MessageSessionStage'
// - Renamed export 'sJ' to 'MessageStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 497192
         */
module.exports = function (module, exports, require) {
  var i;
  var n;
  var r;
  var a;
  (i = {})[i.Init = 0] = "Init";
  i[i.MessageSessionStart = 1] = "MessageSessionStart";
  i[i.MessageSendingStage = 2] = "MessageSendingStage";
  i[i.SyncMessageReceivingStage = 3] = "SyncMessageReceivingStage";
  i[i.AsyncMessageReceivingStage = 4] = "AsyncMessageReceivingStage";
  i[i.SuggestionReceivingStage = 5] = "SuggestionReceivingStage";
  i[i.MessageSessionEnd = 6] = "MessageSessionEnd";
  let o = i;
  (n = {})[n.StartMessageSession = 0] = "StartMessageSession";
  n[n.ErrorMessageSession = 1] = "ErrorMessageSession";
  n[n.BreakMessageSession = 2] = "BreakMessageSession";
  n[n.StartMessageSending = 3] = "StartMessageSending";
  n[n.BreakMessageSending = 4] = "BreakMessageSending";
  n[n.ErrorMessageSending = 5] = "ErrorMessageSending";
  n[n.TimeoutMessageSending = 6] = "TimeoutMessageSending";
  n[n.StartSyncMessageReceiving = 7] = "StartSyncMessageReceiving";
  n[n.BreakSyncMessageReceiving = 8] = "BreakSyncMessageReceiving";
  n[n.ErrorSyncMessageReceiving = 9] = "ErrorSyncMessageReceiving";
  n[n.TimeoutSyncMessageReceiving = 10] = "TimeoutSyncMessageReceiving";
  n[n.StartAsyncMessageReceiving = 11] = "StartAsyncMessageReceiving";
  n[n.BreakAsyncMessageReceiving = 12] = "BreakAsyncMessageReceiving";
  n[n.ErrorAsyncMessageReceiving = 13] = "ErrorAsyncMessageReceiving";
  n[n.TimeoutAsyncMessageReceiving = 14] = "TimeoutAsyncMessageReceiving";
  n[n.StartSuggestionReceiving = 15] = "StartSuggestionReceiving";
  n[n.TimeoutSuggestionReceiving = 16] = "TimeoutSuggestionReceiving";
  n[n.BreakSuggestionReceiving = 17] = "BreakSuggestionReceiving";
  n[n.ErrorSuggestionReceiving = 18] = "ErrorSuggestionReceiving";
  n[n.EndMessageSession = 19] = "EndMessageSession";
  let l = n;
  (r = {})[r.Init = 0] = "Init";
  r[r.MessageStart = 1] = "MessageStart";
  r[r.MessageEnd = 2] = "MessageEnd";
  let c = r;
  (a = {})[a.StartMessage = 0] = "StartMessage";
  a[a.EndMessage = 1] = "EndMessage";
  let u = a;
  require.d(exports, {
    MessageSessionEvent: function () {
      return l;
    },
    MessageStage: function () {
      return u;
    },
    MessageSessionStage: function () {
      return o;
    },
    MessageStatus: function () {
      return c;
    }
  });
}