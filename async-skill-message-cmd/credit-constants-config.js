// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ER' to 'creditInvitePath'
// - Renamed export 'HX' to 'dailyCreditStorage'
// - Renamed export 'Z5' to 'doubaoBaseUrl'
// - Renamed export 'ZS' to 'firstCreditTipKey'
// - Renamed export '_' to 'configVersion'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 399502
         */
module.exports = function (module, exports, require) {
  let i = "DAILY_CREDIT_BENEFIT_STORAGE";
  let o = "FIRST_CREDIT_TIP_STORAGE";
  let a = "https://www.doubao.com";
  let l = "/credit/invite";
  let r = "1";
  require.d(exports, {
    creditInvitePath: function () {
      return l;
    },
    dailyCreditStorage: function () {
      return i;
    },
    doubaoBaseUrl: function () {
      return a;
    },
    firstCreditTipKey: function () {
      return o;
    },
    configVersion: function () {
      return r;
    }
  });
}