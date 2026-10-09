// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'GH' to 'createMessageStore'
// - Renamed export 'MT' to 'createStoreWithConfig'
// - Renamed export 'nX' to 'initializeMessageStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 794449
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatStateFactory = require("chat-state-factory") /*id: 432677*/;
  let l = e => {
    let {
      prefix: t,
      isEnableDebug: n,
      reduxDevToolsSnapshot: l
    } = e;
    immerCoreImplementation.PatchesPlugin();
    if (n && l) {
      return reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.devToolsMiddleware(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(chatStateFactory.createChatState), {
        name: `${t}chat-message-store`
      }));
    } else {
      return reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(chatStateFactory.createChatState));
    }
  };
  let s = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    let {
      _useMessageStore: i
    } = s.prototype;
    if (i) {
      return i(...t);
    }
    throw Error("useMessageStore is not initialized");
  };
  function u(e) {
    let {
      _useMessageStore: t
    } = s.prototype || {};
    if (!t) {
      let t = l({
        ...e
      });
      Object.setPrototypeOf(s.prototype, t);
      Object.defineProperties(s, {
        ...Object.getOwnPropertyDescriptors(t)
      });
      s.prototype._useMessageStore = t;
    }
  }
  require.d(exports, {
    createMessageStore: function () {
      return s;
    },
    createStoreWithConfig: function () {
      return l;
    },
    initializeMessageStore: function () {
      return u;
    }
  });
}