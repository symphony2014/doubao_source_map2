// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'ChatFgStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 284583
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var promiseDelayUtil = require("promise-delay-util") /*id: 937669*/;
  var loadingStateConstants = require("loading-state-constants") /*id: 640739*/;
  var chatSymbolStoreUtil = require("chat-symbol-store-util") /*id: 96494*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var localStorageCacheManager = require("local-storage-cache-manager") /*id: 128737*/;
  class h extends localStorageCacheManager.LocalStorageCacheManager {
    get replaceValues() {
      return true;
    }
    async load() {
      if (!this.options.Tea?.getAllVars) {
        throw Error("TeaFGParser: need Tea sdk");
      }
      let t = new Promise(e => {
        this.options.Tea.getAllVars(t => {
          let n = {};
          for (let e of Object.keys(t || {})) {
            n[e] = t[e]?.val || false;
          }
          e(n);
        });
      });
      if (this.getLoadTimeout()) {
        return promiseAsyncUtilities.promiseWithTimeout(t, this.getLoadTimeout());
      } else {
        return t;
      }
    }
    onLoadKey(e, t) {
      var n;
      var i;
      let r = (n = (i = this.options).valueGetter) === null || n === undefined ? undefined : n.call(i, e);
      if (r === undefined) {
        r = t;
      }
      return new Promise(t => {
        var n;
        var i;
        if ((i = this.options.Tea) !== null && i !== undefined && (n = i.getVar) !== null && n !== undefined) {
          n.call(i, e, r, n => {
            var i;
            var r;
            var o;
            var a;
            let l = (i = (r = this.options).valueGetter) === null || i === undefined ? undefined : i.call(r, e);
            if (n !== undefined && n !== l) {
              if ((o = (a = this.options).valueSetter) !== null && o !== undefined) {
                o.call(a, e, n);
              }
            }
            t();
          });
        }
      });
    }
    constructor(e, t) {
      var n;
      var i;
      var r;
      var o;
      var a;
      super(e, t);
      o = undefined;
      if ((r = typeof (a = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(r = "options", "string")) == "symbol" ? a : a + "") in this) {
        Object.defineProperty(this, r, {
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[r] = o;
      }
      this.options = {
        storageCache: true,
        ...t
      };
      let l = (i = this.options.Tea) === null || i === undefined ? undefined : (n = i.getABconfig) === null || n === undefined ? undefined : n.bind(this.options.Tea);
      if (l) {
        this.options.Tea.getABconfig = (e, t) => {
          l(e, e => {
            var n;
            var i;
            t(e);
            if ((n = (i = this.options).reload) !== null && n !== undefined) {
              n.call(i);
            }
          });
        };
      }
    }
  }
  class m extends localStorageCacheManager.LocalStorageCacheManager {
    async load() {
      if (!this.options.load) {
        throw Error(`DefaultFGParser: [load] is required on [${this.name}]`);
      }
      if (this.getLoadTimeout()) {
        return await promiseAsyncUtilities.promiseWithTimeout(this.options.load(), this.getLoadTimeout());
      } else {
        return await this.options.load();
      }
    }
    constructor(e, t) {
      var n;
      var i;
      var r;
      super(e, t);
      i = undefined;
      if ((n = typeof (r = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(n = "options", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, n, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = i;
      }
      this.options = t;
    }
  }
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  class f extends localStorageCacheManager.LocalStorageCacheManager {
    async load() {
      if (!this.options.load) {
        throw Error(`DefaultFGParser: [load] is required on [${this.name}]`);
      }
      if (this.getLoadTimeout()) {
        return promiseAsyncUtilities.promiseWithTimeout(this.options.load(), this.getLoadTimeout());
      } else {
        return this.options.load();
      }
    }
    constructor(e, t) {
      var n;
      var i;
      var r;
      super(e, t);
      i = undefined;
      if ((n = typeof (r = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(n = "options", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, n, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = i;
      }
      this.options = t;
    }
  }
  var chatStorageValidator = require("chat-storage-validator") /*id: 776801*/;
  function _(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class v {
    static instance() {
      v._instance ||= new v();
      return v._instance;
    }
    getStore() {
      return this.store;
    }
    initStore() {
      return reactStoreHookFactory.createStoreHook()(reduxDevtoolsPersistIntegration.enhanceSubscribe(() => ({
        data: {},
        loadStatus: {},
        store: this
      })));
    }
    async loadSource(e, t = false) {
      await promiseDelayUtil.delayPromise(0);
      if (!this.dataSourceConfig[e]) {
        await this.loadSourceConfig(e);
      }
      let n = this.dataSourceConfig[e];
      if (!n) {
        throw Error(`FGStore: [${e}] source not found`);
      }
      let i = this.getLoadStatus(e);
      if (n.loadCache && (!t && [loadingStateConstants.loadingStates.loading, loadingStateConstants.loadingStates.reloading, loadingStateConstants.loadingStates.loaded].includes(i) || t && [loadingStateConstants.loadingStates.loading, loadingStateConstants.loadingStates.reloading].includes(i))) {
        return n.loadCache;
      }
      let r = t && i === loadingStateConstants.loadingStates.loaded ? loadingStateConstants.loadingStates.reloading : loadingStateConstants.loadingStates.loading;
      this.updateLoadStatus(e, r);
      n.loadCache = n.parserInstance.load().then(t => {
        this.mergeSource(e, t, {
          loadStatus: loadingStateConstants.loadingStates.loaded,
          replace: n.parserInstance.replaceValues && Object.values(t).length > 0
        });
        return n.parserInstance.updateCacheValues(t);
      }).catch(t => {
        this.updateLoadStatus(e, loadingStateConstants.loadingStates.unload);
      });
      return n.loadCache;
    }
    async loadSourceConfig(e) {
      let t;
      let n = chatSymbolStoreUtil.getSymbol(e);
      let i = (t = typeof n == "function" ? {
        load: n,
        defaultValue: {}
      } : {
        ...n,
        defaultValue: {
          ...(n.defaultValue || {})
        }
      }).parser;
      if (!i) {
        if (!(i = function (e) {
          switch (e) {
            case chatStorageKeys.chatStorageKeys.storage:
            case chatStorageKeys.chatStorageKeys.debugStorage:
              return storageFeatureGateParser.StorageFGParser;
            case chatStorageKeys.chatStorageKeys.tea:
              return h;
            case chatStorageKeys.chatStorageKeys.tcc:
              return m;
            default:
              return f;
          }
        }(e))) {
          throw Error(`FGStore: parser is needed on [${e}]`);
        }
        t.parser = i;
      }
      let r = this;
      t.reload = () => this.loadSource(e, true);
      t.valueGetter = (t, n) => r.getSourceValue(e, t, n);
      t.valueSetter = (t, n) => {
        r.mergeSource(e, {
          [t]: n
        }, {});
      };
      let o = {
        ...t
      };
      delete o.parser;
      delete o.defaultValue;
      let a = new i(e, o);
      this.dataSourceConfig[e] = {
        initOptions: t,
        parserInstance: a,
        loadCache: null
      };
      this.mergeSource(e, {
        ...(t.defaultValue || {}),
        ...((await a.getCacheValues()) || {})
      }, {
        loadStatus: loadingStateConstants.loadingStates.unload
      });
    }
    mergeSource(e, t, n) {
      let {
        loadStatus: i,
        replace: r = false,
        triggerSet: o = false
      } = n;
      this.getStore().setState(n => ({
        data: {
          ...n.data,
          [e]: r ? {
            ...t
          } : {
            ...n.data[e],
            ...t
          }
        },
        loadStatus: i === undefined ? n.loadStatus : {
          ...n.loadStatus,
          [e]: i
        }
      }));
      if (o) {
        this.triggerSet(e, this.getStore().getState().data[e]);
      }
    }
    updateLoadStatus(e, t) {
      this.store.setState(n => {
        n.loadStatus[e] = t;
        return n;
      });
    }
    setSourceValue(e, t, n) {
      var i;
      this.store.setState(i => ({
        data: {
          ...i.data,
          [e]: {
            ...i.data[e],
            [t]: n
          }
        }
      }));
      if ((i = this.getParser(e)) !== null && i !== undefined) {
        i.updateCacheValue(t, n);
      }
      this.triggerSet(e, {
        key: t,
        value: n
      });
    }
    getSourceValue(e, t, n) {
      let i = this.store.getState();
      let r = objectPathGetDefault.getObjectPathDefault(i.data[e], t);
      chatStorageValidator.validateChatStorage({
        sourceVal: i.data[e],
        keyVal: r,
        sourceName: e,
        keyName: t
      });
      if (r === undefined) {
        return n;
      } else {
        return r;
      }
    }
    onLoadSourceKey(e, t, n) {
      var i;
      var r;
      if ((r = this.getParser(e)) !== null && r !== undefined && (i = r.onLoadKey) !== null && i !== undefined) {
        i.call(r, t, n);
      }
    }
    getTargetConfig(e) {
      return this.dataSourceConfig[e];
    }
    getParser(e) {
      return this.dataSourceConfig[e]?.parserInstance;
    }
    getParserOptions(e) {
      var t;
      if ((t = this.getParser(e)) === null || t === undefined) {
        return undefined;
      } else {
        return t.getOptions();
      }
    }
    getLoadStatus(e) {
      return this.store.getState().loadStatus[e] || loadingStateConstants.loadingStates.unload;
    }
    isDataReady(e, t) {
      t ||= this.getLoadStatus(e);
      return t === loadingStateConstants.loadingStates.loaded || t === loadingStateConstants.loadingStates.reloading;
    }
    triggerSet(e, t) {
      var n;
      var i;
      let {
        key: r,
        value: o
      } = t;
      let a = this.dataSourceConfig[e];
      if (a) {
        if ((n = (i = a.parserInstance).set) !== null && n !== undefined) {
          n.call(i, {
            key: r,
            value: o,
            datas: {
              ...(this.store.getState().data[e] || {})
            }
          });
        }
      }
    }
    constructor() {
      _(this, "dataSourceConfig", {});
      _(this, "store", undefined);
      this.store = this.initStore();
    }
  }
  _(v, "_instance", null);
  require.d(exports, {
    ChatFgStore: function () {
      return v;
    }
  });
}