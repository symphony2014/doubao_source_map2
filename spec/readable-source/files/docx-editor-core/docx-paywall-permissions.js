// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'TP' to 'getDefaultBlockNum'
// - Renamed export 'UT' to 'isPaywallNeeded'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 430531
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var i;
    return ((i = e.docx) === null || i === undefined ? undefined : i.paywallPermission?.needPaid) || false;
  }
  function o(e) {
    var i;
    return ((i = e.docx) === null || i === undefined ? undefined : i.paywallPermission?.defaultBlockNum) || 239;
  }
  require.d(exports, {
    getDefaultBlockNum: function () {
      return o;
    },
    isPaywallNeeded: function () {
      return r;
    }
  });
}