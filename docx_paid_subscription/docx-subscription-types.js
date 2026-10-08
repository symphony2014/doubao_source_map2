// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'SubscriptionTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_paid_subscription.2a41bf28.js
         * chunkId: 60668
         * moduleId: 682485
         */
module.exports = function (module, exports, require) {
  var n;
  (n = {})[n.ERROR = 0] = "ERROR";
  n[n.UN_PAID = 1] = "UN_PAID";
  n[n.COPILOT = 2] = "COPILOT";
  n[n.OFFLINE_APPLY = 3] = "OFFLINE_APPLY";
  n[n.OFFLINE_CREATE = 4] = "OFFLINE_CREATE";
  n[n.TRANSLATE = 5] = "TRANSLATE";
  n[n.PRESENTATION = 6] = "PRESENTATION";
  n[n.DOCUMENT = 7] = "DOCUMENT";
  n[n.PAGINATION = 8] = "PAGINATION";
  let r = n;
  require.d(exports, {
    SubscriptionTypes: function () {
      return r;
    }
  });
}