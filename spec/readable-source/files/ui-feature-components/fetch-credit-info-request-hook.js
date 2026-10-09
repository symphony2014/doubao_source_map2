// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'fetchCreditInfoRequest'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43927.2698fd8a.js
         * chunkId: 43927
         * moduleId: 406055
         */
module.exports = function (module, exports, require) {
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var fetchCreditInfoAction = require("fetch-credit-info-action") /*id: 210368*/;
  let o = () => {
    useRequestHook.useRequest(async () => await fetchCreditInfoAction.fetchCreditInfo(false));
  };
  require.d(exports, {
    fetchCreditInfoRequest: function () {
      return o;
    }
  });
}