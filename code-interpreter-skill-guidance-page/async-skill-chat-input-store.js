// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'chatInputStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 727801
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  let a = {
    promptEditorValue: "",
    guidanceEditorValue: {
      data: []
    },
    ciEditorFocused: false
  };
  let s = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(e => ({
    ...a,
    updatePromptEditorValue: t => {
      e(immerCoreImplementation.produce(e => {
        e.promptEditorValue = t;
      }));
    },
    updateGuidanceEditorValue: t => {
      e(immerCoreImplementation.produce(e => {
        e.guidanceEditorValue = t;
      }));
    },
    updateCIEditorFocusedState: t => {
      e(immerCoreImplementation.produce(e => {
        e.ciEditorFocused = t;
      }));
    }
  })));
  require.d(exports, {
    chatInputStore: function () {
      return s;
    }
  });
}