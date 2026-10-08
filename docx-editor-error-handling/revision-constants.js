// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'revisionEvents'
// - Renamed export 'J' to 'revisionTxnActions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 394471
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  (n = {}).applyRevisionTransaction = "applyRevisionTransaction";
  n.rejectRevisionTransaction = "rejectRevisionTransaction";
  let l = n;
  (o = {}).DeleteRevision = "DeleteRevision";
  o.UpdateRevision = "UpdateRevision";
  o.BeforeRevisionStatusChange = "BeforeRevisionStatusChange";
  o.RecordRevisionUpdate = "RecordRevisionUpdate";
  let s = o;
  require.d(exports, {
    revisionEvents: function () {
      return s;
    },
    revisionTxnActions: function () {
      return l;
    }
  });
}