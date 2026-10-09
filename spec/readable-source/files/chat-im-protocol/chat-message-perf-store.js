// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Xj' to 'getSendMsgPerf'
// - Renamed export 'Xs' to 'getRecvMsgPerf'
// - Renamed export 'b3' to 'updateSendMsgPerf'
// - Renamed export 'GB' to 'deleteRecvMsgPerf'
// - Renamed export 'J' to 'updateRecvMsgPerf'
// - Renamed export 'eF' to 'deleteSendMsgPerf'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 308749
         */
module.exports = function (module, exports, require) {
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var performanceTimeUtil = require("performance-time-util") /*id: 512870*/;
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  let o = () => ({
    sendMessagePerformance: {},
    receiveMessagePerformance: {}
  });
  let l = (() => {
    let e = reduxDevtoolsPersistIntegration.enhanceSubscribe(o);
    return reactStoreHookFactory.createStoreHook()(e);
  })();
  let c = () => {
    if (!chatStoreManager.getStore("flowWebLayoutStore").getState().chatCompMountedTime.message_box) {
      chatStoreManager.getStore("flowWebLayoutStore").setState(e => {
        let {
          chatCompMountedTime: t
        } = e;
        return {
          chatCompMountedTime: {
            ...t,
            message_box: Math.round(performanceTimeUtil.getPerformanceNow())
          }
        };
      });
    }
  };
  let u = (e, t) => {
    let {
      sendMessagePerformance: i
    } = l.getState();
    if (i[e] === undefined && t.start !== undefined) {
      l.setState(s => ({
        sendMessagePerformance: {
          ...s.sendMessagePerformance,
          [e]: {
            ...t
          }
        }
      }));
    }
    if (i[e]?.start !== undefined && i[e].end === undefined && t.end !== undefined) {
      l.setState(s => ({
        sendMessagePerformance: {
          ...s.sendMessagePerformance,
          [e]: {
            ...s.sendMessagePerformance[e],
            ...t
          }
        }
      }));
      c();
    }
  };
  let d = (e, t) => {
    let {
      receiveMessagePerformance: i
    } = l.getState();
    if (i[e] === undefined && t.start !== undefined) {
      l.setState(s => ({
        receiveMessagePerformance: {
          ...s.receiveMessagePerformance,
          [e]: {
            ...t
          }
        }
      }));
    }
    if (i[e]?.start !== undefined && i[e].end === undefined && t.end !== undefined) {
      l.setState(s => ({
        receiveMessagePerformance: {
          ...s.receiveMessagePerformance,
          [e]: {
            ...s.receiveMessagePerformance[e],
            ...t
          }
        }
      }));
      c();
    }
  };
  let v = e => {
    let {
      sendMessagePerformance: t
    } = l.getState();
    return t[e ?? ""];
  };
  let g = e => {
    if (e) {
      l.setState(t => {
        delete t.sendMessagePerformance[e];
        return {
          sendMessagePerformance: {
            ...t.sendMessagePerformance
          }
        };
      });
    }
  };
  let _ = e => {
    let {
      receiveMessagePerformance: t
    } = l.getState();
    return t[e ?? ""];
  };
  let m = e => {
    if (e) {
      l.setState(t => {
        delete t.receiveMessagePerformance[e];
        return {
          receiveMessagePerformance: {
            ...t.receiveMessagePerformance
          }
        };
      });
    }
  };
  require.d(exports, {
    getSendMsgPerf: function () {
      return v;
    },
    getRecvMsgPerf: function () {
      return _;
    },
    updateSendMsgPerf: function () {
      return u;
    },
    deleteRecvMsgPerf: function () {
      return m;
    },
    updateRecvMsgPerf: function () {
      return d;
    },
    deleteSendMsgPerf: function () {
      return g;
    }
  });
}