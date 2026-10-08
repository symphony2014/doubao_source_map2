// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'c' to 'localforageAsyncStorage'
// - Resolved require(383061) to 'localforage-async-storage'
// - Renamed variable 's' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'l' to 'binaryDataSerializer'
// - Resolved require(677248) to 'binary-data-serializer'
// - Renamed variable 'd' to 'storageConstants'
// - Resolved require(340491) to 'storage-constants'
// - Renamed variable 'h' to 'urlParseUtils'
// - Resolved require(365040) to 'url-parse-utils'
// - Renamed variable 'm' to 'analyticsEventLogger'
// - Resolved require(618475) to 'analytics-event-logger'
// - Renamed variable '_' to 'libStorageUtils'
// - Resolved require(421151) to 'lib-storage-utils'
// - Resolved require.e(89760) to 'lib-storage-expire'
// - Resolved require.bind(702417) to 'storage-expire-retry-manager'
// - Updated imported property 'HB' to 'storageTypes' (module 340491)
// - Updated imported property 'hu' to 'storageStatus' (module 340491)
// - Updated imported property 'nT' to 'parseUrl' (module 365040)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'Z' to 'binarySerializer' (module 677248)
// - Updated imported property 'Lr' to 'checkRewriteStorage' (module 421151)
// - Updated imported property 'aH' to 'logError' (module 618475)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47421.f728df43.js
         * chunkId: 47421
         * moduleId: 586806
         */
module.exports = function (module, exports, require) {
  let n;
  let o;
  var i;
  var u;
  var localforageAsyncStorage = require("localforage-async-storage") /*id: 383061*/;
  var f = localforageAsyncStorage;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var binaryDataSerializer = require("binary-data-serializer") /*id: 677248*/;
  var storageConstants = require("storage-constants") /*id: 340491*/;
  var urlParseUtils = require("url-parse-utils") /*id: 365040*/;
  let v = {
    name: "libstorage",
    storeName: "keyvaluepairs"
  };
  let y = {
    [storageConstants.storageTypes.LOCALSTORAGESYNC]: {
      name: "",
      storeName: v.storeName
    },
    [storageConstants.storageTypes.LOCALSTORAGEASYNC]: {
      name: "",
      storeName: v.storeName
    },
    [storageConstants.storageTypes.INDEXEDDB]: v,
    [storageConstants.storageTypes.WEBSQL]: v
  };
  let g = typeof window == "undefined" ? {
    userId: "",
    token: ""
  } : {
    userId: window.User?.id,
    token: function () {
      let {
        token: t,
        type: r
      } = urlParseUtils.parseUrl(location.href, true);
      return r === "wiki" && window.current_space_wiki?.obj_token || t;
    }()
  };
  function p(e) {
    let r = y[storageConstants.storageTypes.LOCALSTORAGESYNC];
    let n = e.name ?? r;
    let o = n ? `${n}/` : "";
    if (e.storeName !== r.storeName) {
      o += e.storeName + "/";
    }
    return o;
  }
  class b {
    constructor(e) {
      this.getStorageKey = e => this.keyPrefix + e;
      this._initStorage(e);
    }
    _initStorage(e) {
      this._config = e;
      this.keyPrefix = p(e);
    }
    runCallbackWithResult(e = emptyExportFunction.emptyFunction, t) {
      try {
        e(null, t);
      } catch (e) {}
    }
    iterate(e, t) {
      let r = 1;
      let n = this.keys().find(t => {
        let n = localStorage.getItem(t);
        n &&= binaryDataSerializer.binarySerializer.deserialize(n);
        let o = e(n, t, r++);
        if (o !== undefined) {
          return o;
        }
      });
      this.runCallbackWithResult(t, n);
      return n;
    }
    getItem(e, t) {
      let r = localStorage.getItem(this.getStorageKey(e));
      r &&= binaryDataSerializer.binarySerializer.deserialize(r);
      this.runCallbackWithResult(t, r);
      return r;
    }
    setItem(e, t, r) {
      binaryDataSerializer.binarySerializer.serialize(t, (t, r) => {
        if (r) {
          throw r;
        }
        localStorage.setItem(this.getStorageKey(e), t);
      });
      this.runCallbackWithResult(r, t);
    }
    removeItem(e, t) {
      localStorage.removeItem(this.getStorageKey(e));
      this.runCallbackWithResult(t);
    }
    clear(e) {
      this.keys().forEach(e => {
        this.removeItem(e);
      });
      this.runCallbackWithResult(e);
    }
    length(e) {
      let t = this.keys().length;
      this.runCallbackWithResult(e, t);
      return t;
    }
    key(e, t) {
      let r = this.keys()[e];
      this.runCallbackWithResult(t, r);
      return r;
    }
    keys(e) {
      let t = [];
      Object.keys(localStorage).forEach(e => {
        if (e.indexOf(this.keyPrefix) === 0) {
          t.push(e.substring(this.keyPrefix.length));
        }
      });
      this.runCallbackWithResult(e, t);
      return t;
    }
    dropInstance(e = {}, t) {
      e.name = e.name || this._config.name;
      e.storeName = e.storeName || this._config.storeName;
      let r = p(e);
      Object.keys(localStorage).forEach(e => {
        if (e.indexOf(r) === 0) {
          localStorage.removeItem(e);
        }
      });
      this.runCallbackWithResult(t);
    }
    ready() {
      return true;
    }
    supports() {
      return true;
    }
    driver() {
      return storageConstants.storageTypes.LOCALSTORAGESYNC;
    }
  }
  var analyticsEventLogger = require("analytics-event-logger") /*id: 618475*/;
  var libStorageUtils = require("lib-storage-utils") /*id: 421151*/;
  async function S() {
    if (n && o) {
      return;
    }
    let {
      expireStorage: e,
      Retry: t
    } = await require.e("lib-storage-expire") /*id: 89760*/.then(require.bind(require, "storage-expire-retry-manager") /*id: 702417*/);
    n = e;
    o = t;
  }
  (i = u ||= {}).BEAFORE = "before";
  i.AFTER = "after";
  i.ERROR = "error";
  let w = {
    [u.AFTER]: [e => {
      S();
      if (!libStorageUtils.checkRewriteStorage() && n) {
        n.update(e);
      }
    }]
  };
  let I = {
    [u.AFTER]: [e => {
      S();
      if (!libStorageUtils.checkRewriteStorage() && n) {
        n.update(e, true);
      }
    }]
  };
  let E = {
    [storageConstants.storageTypes.LOCALSTORAGEASYNC]: {
      setItem: Object.assign(Object.assign({}, w), {
        [u.ERROR]: [(e, t, r) => (S(), !libStorageUtils.checkRewriteStorage() && o) ? new o(e, t, r).run(true) : storageConstants.storageStatus.FAIL]
      }),
      getItem: Object.assign({}, I)
    },
    [storageConstants.storageTypes.LOCALSTORAGESYNC]: {
      setItem: Object.assign(Object.assign({}, w), {
        [u.ERROR]: [(e, t, r) => (S(), !libStorageUtils.checkRewriteStorage() && o) ? new o(e, t, r).run() : storageConstants.storageStatus.FAIL]
      }),
      getItem: Object.assign({}, I)
    }
  };
  let A = e => {
    var n;
    var o;
    let {
      driver: i,
      name: a,
      time: u,
      args: c
    } = e;
    try {
      return ((o = (n = E[i]?.[a]?.[u]) === null || n === undefined ? undefined : n.map) === null || o === undefined ? undefined : o.call(n, e => e.apply(undefined, c))) || [];
    } catch (e) {
      analyticsEventLogger.logError("run hook")(e);
    }
    return [];
  };
  function N(e, t, r = emptyExportFunction.emptyFunction) {
    try {
      r(t);
    } catch (e) {}
    analyticsEventLogger.logError(e)(t);
    return null;
  }
  function O(e = {}) {
    return function (t, r) {
      return {
        configurable: true,
        get() {
          let {
            sync: n
          } = e;
          let o = {
            _self: this,
            target: t,
            name: r,
            cbIndex: e.cbIndex
          };
          if (n || this.checkIsUseLocalStorageSync) {
            return function (...e) {
              let {
                _self: t,
                target: r,
                name: n,
                cbIndex: i
              } = o;
              let a = i !== undefined ? e[i] : undefined;
              let c = () => t.storage[n].apply(t.storage, e);
              try {
                A({
                  driver: t.storage.driver(),
                  name: n,
                  time: u.BEAFORE,
                  args: e
                });
                let r = c();
                A({
                  driver: t.storage.driver(),
                  name: n,
                  time: u.BEAFORE,
                  args: e
                });
                return r;
              } catch (o) {
                if (A({
                  driver: t.storage.driver(),
                  name: n,
                  time: u.ERROR,
                  args: [o, c, {
                    key: e[0],
                    value: e[1]
                  }]
                })[0] === storageConstants.storageStatus.SUCCESS) {
                  return null;
                }
                return N(`${r.constructor.name}-${n}`, o, a);
              }
            };
          } else {
            return async function (...e) {
              let {
                _self: t,
                target: r,
                name: n
              } = o;
              let i = () => t.storage[n].apply(t.storage, e);
              try {
                A({
                  driver: t.storage.driver(),
                  name: n,
                  time: u.BEAFORE,
                  args: e
                });
                let r = await i();
                A({
                  driver: t.storage.driver(),
                  name: n,
                  time: u.BEAFORE,
                  args: e
                });
                return r;
              } catch (o) {
                if ((await Promise.all(A({
                  driver: t.storage.driver(),
                  name: n,
                  time: u.ERROR,
                  args: [o, i, {
                    key: e[0],
                    value: e[1]
                  }]
                })))[0] === storageConstants.storageStatus.SUCCESS) {
                  return null;
                }
                return N(`${r.constructor.name}-${n}`, o);
              }
            };
          }
        }
      };
    };
  }
  function R(e, t, r, n) {
    var o;
    var i = arguments.length;
    var a = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
      a = Reflect.decorate(e, t, r, n);
    } else {
      for (var u = e.length - 1; u >= 0; u--) {
        if (o = e[u]) {
          a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a;
        }
      }
    }
    if (i > 3 && a) {
      Object.defineProperty(t, r, a);
    }
    return a;
  }
  class B {
    constructor(e) {
      this._config = {};
      this._defaultConfig = y[storageConstants.storageTypes.INDEXEDDB];
      this.defineDriver = f.defineDriver;
      this.config(e);
    }
    get checkIsUseLocalStorageSync() {
      return this._config.driver?.[0] === storageConstants.storageTypes.LOCALSTORAGESYNC;
    }
    updateDriver(e) {
      if (!e) {
        return;
      }
      let t = e;
      if (typeof t == "string") {
        t = [t];
      }
      this._config.driver = t;
      this._defaultConfig = y[t[0]];
    }
    createStorage() {
      if (this.checkIsUseLocalStorageSync) {
        this.storage = new b(this._config);
      } else {
        this.storage = f.createInstance(this._config);
      }
    }
    updateCondition(e) {
      if (e === true) {
        this._config.condition = g;
      } else if (e) {
        this._config.condition = e;
      } else {
        this._config.condition = {};
      }
    }
    updateConfigName() {
      if (this._config.condition && typeof this._config.condition != "boolean") {
        let e = function (e) {
          let {
            userId: t,
            token: r,
            extension: n
          } = e;
          let o = "";
          if (t) {
            o += `${t}`;
          }
          if (r) {
            o += `${o ? "/" : ""}${r}`;
          }
          if (n && n.length > 0) {
            let e = n.sort();
            o += `${o ? "/" : ""}${e.join("/")}`;
          }
          return o;
        }(this._config.condition);
        this._config.name = this._originName ? `${this._originName}/${e}` : e;
      } else {
        this._config.name = this._originName;
      }
    }
    config(e) {
      Object.keys(e).forEach(t => {
        let r = e[t];
        if (t === "driver") {
          return this.updateDriver(r);
        } else if (t === "condition") {
          return this.updateCondition(r);
        } else if (t === "name") {
          return this._originName = r;
        } else {
          this._config[t] = r;
          return;
        }
      });
      this._config.driver = this._config.driver || [storageConstants.storageTypes.INDEXEDDB, storageConstants.storageTypes.WEBSQL, storageConstants.storageTypes.LOCALSTORAGEASYNC];
      this._originName = this._originName || this._defaultConfig.name;
      this._config.storeName = this._config.storeName || this._defaultConfig.storeName;
      this.updateConfigName();
      this.createStorage();
    }
    setDriver(e) {
      this.config({
        driver: e
      });
    }
    createInstance(e) {
      return new B(e);
    }
  }
  R([O({
    sync: true
  })], B.prototype, "supports", undefined);
  R([O({
    sync: true
  })], B.prototype, "driver", undefined);
  R([O()], B.prototype, "ready", undefined);
  R([O({
    cbIndex: 1
  })], B.prototype, "iterate", undefined);
  R([O({
    cbIndex: 1
  })], B.prototype, "getItem", undefined);
  R([O({
    cbIndex: 2
  })], B.prototype, "setItem", undefined);
  R([O({
    cbIndex: 1
  })], B.prototype, "removeItem", undefined);
  R([O({
    cbIndex: 0
  })], B.prototype, "clear", undefined);
  R([O({
    cbIndex: 0
  })], B.prototype, "length", undefined);
  R([O({
    cbIndex: 1
  })], B.prototype, "key", undefined);
  R([O({
    cbIndex: 0
  })], B.prototype, "keys", undefined);
  R([O()], B.prototype, "dropInstance", undefined);
  let j = new B({});
  var C = j;
  require.r(exports);
  require.d(exports, {
    storage: function () {
      return j;
    },
    Driver: function () {
      return storageConstants.storageTypes;
    },
    default: function () {
      return C;
    }
  });
}