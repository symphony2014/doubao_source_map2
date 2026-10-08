// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'chatInputStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 673935
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  let a = {
    editorValue: {
      data: []
    },
    focused: false
  };
  let s = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(e => ({
    ...a,
    updateEditorValue: t => {
      e(immerCoreImplementation.produce(e => {
        e.editorValue = t;
      }));
    },
    updateFocusedState: t => {
      e(immerCoreImplementation.produce(e => {
        e.focused = t;
      }));
    }
  })));
  require.d(exports, {
    chatInputStore: function () {
      return s;
    }
  });
}