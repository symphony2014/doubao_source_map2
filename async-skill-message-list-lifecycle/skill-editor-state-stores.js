// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'skillEditorStore'
// - Renamed export 'o' to 'guidanceEditorStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-list-lifecycle.9b900672.js
         * chunkId: 16829
         * moduleId: 168235
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  let i = {
    urlEditorValue: {
      data: []
    },
    linkEditorValue: "",
    promptEditorValue: "",
    readDocEditorFocused: false,
    readUrlEditorFocused: false,
    latestRead: [],
    latestReadInitiated: false,
    guidanceEditorValue: {
      data: []
    },
    canvasOpenStatusMap: {}
  };
  let o = {
    guidanceEditorValue: {
      data: []
    },
    guidanceEditorFocused: false
  };
  let r = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(e => ({
    ...i,
    updateUrlEditorValue: t => {
      e(immerCoreImplementation.produce(e => {
        e.urlEditorValue = t;
      }));
    },
    updateLinkEditorValue: t => {
      e(immerCoreImplementation.produce(e => {
        e.linkEditorValue = t;
      }));
    },
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
    updateReadDocEditorFocusedState: t => {
      e(immerCoreImplementation.produce(e => {
        e.readDocEditorFocused = t;
      }));
    },
    updateReadUrlEditorFocusedState: t => {
      e(immerCoreImplementation.produce(e => {
        e.readUrlEditorFocused = t;
      }));
    },
    updateLatestRead: function (t) {
      let a = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      e(immerCoreImplementation.produce(e => {
        e.latestReadInitiated = true;
        if (t) {
          e.latestRead = a ? [...e.latestRead, ...t] : t;
        }
      }));
    },
    saveCanvasOpenState: t => {
      e(immerCoreImplementation.produce(e => {
        let {
          conversationId: a
        } = t;
        e.canvasOpenStatusMap[a] = t;
      }));
    },
    removeCanvasOpenState: t => {
      e(immerCoreImplementation.produce(e => {
        delete e.canvasOpenStatusMap[t];
      }));
    }
  })));
  let l = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(e => ({
    ...o,
    updateGuidanceEditorValue: t => {
      e(immerCoreImplementation.produce(e => {
        e.guidanceEditorValue = t;
      }));
    },
    updateGuidanceEditorFocusedState: t => {
      e(immerCoreImplementation.produce(e => {
        e.guidanceEditorFocused = t;
      }));
    }
  })));
  require.d(exports, {
    skillEditorStore: function () {
      return r;
    },
    guidanceEditorStore: function () {
      return l;
    }
  });
}