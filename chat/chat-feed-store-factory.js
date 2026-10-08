// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'NW' to 'useFeedStore'
// - Renamed export 'fD' to 'initializeFeedStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 610697
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var chatStoreInitialState = require("chat-store-initial-state") /*id: 243729*/;
  let a = () => ({
    prevActiveConversationId: null,
    currentActiveConversationId: null,
    latestArchivedConversationId: null
  });
  let l = {
    conversationMap: {},
    localConversationMap: {},
    lastMessageIndexMap: {},
    actionBarTemplateMap: {}
  };
  let s = () => ({
    ...l
  });
  let u = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return {
      ...chatStoreInitialState.chatInitialState,
      ...s(...t),
      ...a(...t)
    };
  };
  let c = e => {
    let {
      prefix: t,
      isEnableDebug: n,
      reduxDevToolsSnapshot: o
    } = e;
    if (n && o) {
      return reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.devToolsMiddleware(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(u), {
        name: `${t}-chat-feed-store`
      }));
    } else {
      return reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(u));
    }
  };
  let d = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    let {
      _useFeedStore: i
    } = d.prototype;
    if (i) {
      return i(...t);
    }
    throw Error("useFeedStore is not initialized");
  };
  function h(e) {
    let {
      _useFeedStore: t
    } = d.prototype || {};
    if (!t) {
      let t = c({
        ...e
      });
      Object.setPrototypeOf(d.prototype, t);
      Object.defineProperties(d, {
        ...Object.getOwnPropertyDescriptors(t)
      });
      d.prototype._useFeedStore = t;
    }
  }
  require.d(exports, {
    useFeedStore: function () {
      return d;
    },
    initializeFeedStore: function () {
      return h;
    }
  });
}