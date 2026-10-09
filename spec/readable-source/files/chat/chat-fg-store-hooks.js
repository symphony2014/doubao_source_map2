// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HF' to 'fetchSourceKey'
// - Renamed export 'Iz' to 'mergeSourceData'
// - Renamed export 'NO' to 'useSourceKey'
// - Renamed export 'Pn' to 'getSourceKeySync'
// - Renamed export 'Tu' to 'getSourceValue'
// - Renamed export 'gD' to 'initChatSymbols'
// - Renamed export 'o1' to 'fetchSourceData'
// - Renamed export 'oh' to 'getSourceDataSync'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 583867
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var loadingStateConstants = require("loading-state-constants") /*id: 640739*/;
  var chatFgStoreManager = require("chat-fg-store-manager") /*id: 284583*/;
  var chatSymbolStoreUtil = require("chat-symbol-store-util") /*id: 96494*/;
  var chatStorageValidator = require("chat-storage-validator") /*id: 776801*/;
  function c(e) {
    chatSymbolStoreUtil.setSymbols(e);
  }
  function d(e, t) {
    let {
      defaultValue: n,
      source: i
    } = t;
    let {
      value: r
    } = f(e, {
      defaultValue: n,
      source: i
    });
    return r;
  }
  function h(e, t) {
    let {
      source: n,
      defaultValue: i
    } = t;
    let r = chatFgStoreManager.ChatFgStore.instance();
    if (chatSymbolStoreUtil.hasSymbol(n) && r.getLoadStatus(n) === loadingStateConstants.loadingStates.unload) {
      r.loadSource(n);
    }
    r.onLoadSourceKey(n, e, i);
    let c = r.getStore().getState();
    let d = objectPathGetDefault.getObjectPathDefault(c.data[n], e);
    chatStorageValidator.validateChatStorage({
      sourceVal: c.data[n],
      keyVal: d,
      sourceName: n,
      keyName: e
    });
    if (d === undefined) {
      return i;
    } else {
      return d;
    }
  }
  async function m(e, t) {
    let {
      source: n,
      defaultValue: i
    } = t;
    let r = chatFgStoreManager.ChatFgStore.instance();
    if (chatSymbolStoreUtil.hasSymbol(n) && r.getLoadStatus(n) !== loadingStateConstants.loadingStates.loaded) {
      await r.loadSource(n, false);
    }
    await r.onLoadSourceKey(n, e, i);
    let c = r.getStore().getState();
    let d = objectPathGetDefault.getObjectPathDefault(c.data[n], e);
    chatStorageValidator.validateChatStorage({
      sourceVal: c.data[n],
      keyVal: d,
      sourceName: n,
      keyName: e
    });
    if (d === undefined) {
      return i;
    } else {
      return d;
    }
  }
  async function g(e) {
    let {
      source: t,
      defaultValue: n
    } = e;
    let i = chatFgStoreManager.ChatFgStore.instance();
    if (chatSymbolStoreUtil.hasSymbol(t) && i.getLoadStatus(t) !== loadingStateConstants.loadingStates.loaded) {
      await i.loadSource(t, false);
    }
    let r = i.getStore().getState().data[t];
    if (r === undefined) {
      return n;
    } else {
      return r;
    }
  }
  function f(e, t) {
    let {
      defaultValue: n,
      source: c
    } = t;
    let d = chatFgStoreManager.ChatFgStore.instance();
    if (chatSymbolStoreUtil.hasSymbol(c) && d.getLoadStatus(c) === loadingStateConstants.loadingStates.unload) {
      d.loadSource(c);
    }
    let [h, m] = d.getStore()(t => {
      let i = objectPathGetDefault.getObjectPathDefault(t.data[c], e);
      chatStorageValidator.validateChatStorage({
        sourceVal: t.data[c],
        keyVal: i,
        sourceName: c,
        keyName: e
      });
      return [i === undefined ? n : i, t.loadStatus[c] === loadingStateConstants.loadingStates.loading || t.loadStatus[c] === loadingStateConstants.loadingStates.unload];
    }, deepEqualityUtil.deepEqual);
    let g = reactCoreLibraryReexport.useCallback(t => d.getStore().subscribe(e => e.data[c], (n, i) => {
      let r = objectPathGetDefault.getObjectPathDefault(n, e);
      let a = objectPathGetDefault.getObjectPathDefault(i, e);
      if (r !== a) {
        t(r, a);
      }
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      d.onLoadSourceKey(c, e, n);
    }, []);
    return {
      value: h,
      loading: m,
      subscribe: g
    };
  }
  function p(e, {
    defaultValue: t
  } = {}) {
    let n = chatFgStoreManager.ChatFgStore.instance();
    if (chatSymbolStoreUtil.hasSymbol(e) && n.getLoadStatus(e) === loadingStateConstants.loadingStates.unload) {
      n.loadSource(e);
    }
    if (n.isDataReady(e)) {
      return n.getStore().getState().data[e];
    } else {
      return t || {};
    }
  }
  async function _(e, t, {
    replace: n = false
  } = {}) {
    let i = chatFgStoreManager.ChatFgStore.instance();
    let r = Promise.resolve();
    if (chatSymbolStoreUtil.hasSymbol(e)) {
      if (i.getLoadStatus(e) !== loadingStateConstants.loadingStates.loaded) {
        r = i.loadSource(e);
      }
    } else {
      throw Error(`FGStore: [${e}] isn't existed`);
    }
    r.finally(() => {
      i.mergeSource(e, t, {
        loadStatus: loadingStateConstants.loadingStates.loaded,
        replace: n,
        triggerSet: true
      });
    });
    await r;
  }
  require.d(exports, {
    fetchSourceKey: function () {
      return m;
    },
    mergeSourceData: function () {
      return _;
    },
    useSourceKey: function () {
      return f;
    },
    getSourceKeySync: function () {
      return h;
    },
    getSourceValue: function () {
      return d;
    },
    initChatSymbols: function () {
      return c;
    },
    fetchSourceData: function () {
      return g;
    },
    getSourceDataSync: function () {
      return p;
    }
  });
}