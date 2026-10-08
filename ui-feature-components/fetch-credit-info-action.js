// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'fetchCreditInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43927.2698fd8a.js
         * chunkId: 43927
         * moduleId: 210368
         */
module.exports = function (module, exports, require) {
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var uiPanelStateStore = require("ui-panel-state-store") /*id: 440908*/;
  async function l() {
    let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
    try {
      let {
        data: t
      } = await apiServicesCollection.CommerceBenefitSupplyService.AGWGetCreditNumAndOptionalTasks({
        need_tasks: e
      });
      let {
        setCreditInfo: n,
        setCreditTasks: r
      } = uiPanelStateStore.usePanelStore.getState();
      if (t == null ? undefined : t.credit_info) {
        n(t.credit_info);
      } else {
        throw Error("empty credit info");
      }
      if (e) {
        r(t.optional_tasks || []);
      }
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "AGWGetCreditNumAndOptionalTasks_error",
        error: e
      });
    }
  }
  require.d(exports, {
    fetchCreditInfo: function () {
      return l;
    }
  });
}