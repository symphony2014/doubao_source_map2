// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'usePanelStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43927.2698fd8a.js
         * chunkId: 43927
         * moduleId: 440908
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  var immerProduceCore = require("immer-produce-core") /*id: 949322*/;
  let l = {
    scene: require("ui-panel-constants") /*id: 263908*/.panelConstants.MainPanel,
    modal: undefined,
    openFromMap: undefined,
    creditInfo: undefined,
    creditTasks: undefined
  };
  let a = reactStoreHookFactory.createStoreHook()(reduxDevtoolsPersistIntegration.enhanceSubscribe(e => ({
    ...l,
    setScene: t => {
      e(immerProduceCore.produce(e => {
        e.scene = t;
      }));
    },
    setModal: t => {
      e(immerProduceCore.produce(e => {
        e.modal = t;
      }));
    },
    setOpenFrom(t) {
      e(immerProduceCore.produce(e => {
        e.openFromMap = {
          ...(e.openFromMap ?? {}),
          [t.scene]: t.openFrom
        };
      }));
    },
    clearOpenFromMap() {
      e(immerProduceCore.produce(e => {
        e.openFromMap = undefined;
      }));
    },
    getOpenFrom() {
      return this.openFromMap?.[this.scene ?? ""];
    },
    setCreditInfo: t => {
      e(immerProduceCore.produce(e => {
        e.creditInfo = t;
      }));
    },
    setCreditTasks: t => {
      e(immerProduceCore.produce(e => {
        e.creditTasks = t;
      }));
    }
  })));
  require.d(exports, {
    usePanelStore: function () {
      return a;
    }
  });
}