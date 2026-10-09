// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'createChatStore'
// - Renamed export 'i' to 'chatStoreConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 306195
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  let o = (e, t) => ({
    messageGroupArea: {
      Default: {
        bottom: {
          visible: true
        }
      }
    },
    getMessageGroupArea(e = "Default") {
      return t().messageGroupArea[e];
    },
    getLayoutSetter(e = "Default") {
      return {
        setLayoutAreaVisible: n => t().messageGroupArea[e][n].visible = true,
        setLayoutAreaInVisible: n => t().messageGroupArea[e][n].visible = false
      };
    }
  });
  let a = () => reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(o));
  require.d(exports, {
    createChatStore: function () {
      return a;
    },
    chatStoreConfig: function () {
      return o;
    }
  });
}