// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'createMsgBoxStore'
// - Renamed export 't' to 'messageBoxSlice'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 63836
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  let o = (e, t) => ({
    sendMessageBoxConfig: {},
    receiveMessageBoxConfig: {},
    messageBoxArea: {
      Default: {
        bottom: {
          visible: true
        },
        top: {
          visible: true
        },
        left: {
          visible: false
        },
        right: {
          visible: false
        }
      }
    },
    getMessageBoxArea(e = "Default") {
      return t().messageBoxArea[e];
    },
    getLayoutSetter(e = "Default") {
      return {
        setLayoutAreaVisible: n => t().messageBoxArea[e][n].visible = true,
        setLayoutAreaInVisible: n => t().messageBoxArea[e][n].visible = false
      };
    },
    updateReceiveMessageBoxConfig: n => {
      e({
        receiveMessageBoxConfig: {
          ...t().receiveMessageBoxConfig,
          ...n
        }
      });
      return t().receiveMessageBoxConfig;
    },
    updateSendMessageBoxConfig: n => {
      e({
        sendMessageBoxConfig: {
          ...t().sendMessageBoxConfig,
          ...n
        }
      });
      return t().sendMessageBoxConfig;
    }
  });
  let a = () => reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(o));
  require.d(exports, {
    createMsgBoxStore: function () {
      return a;
    },
    messageBoxSlice: function () {
      return o;
    }
  });
}