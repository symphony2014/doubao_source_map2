// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MR' to 'EditorInitStatus'
// - Renamed export 'd7' to 'DATASET_TOKEN'
// - Renamed export 'ei' to 'LIFECYCLE_TOKEN'
// - Renamed export 'zn' to 'registerView'
// - Renamed export 'AP' to 'SupportStatus'
// - Renamed export 'cK' to 'REPLACE_PENDING'
// - Renamed export 'b$' to 'MODEL_TOKEN'
// - Renamed export 'iC' to 'updateGlobalExts'
// - Renamed export 'e6' to 'isRemoveMutation'
// - Renamed export 'BO' to 'isMergeMutation'
// - Renamed export 'LI' to 'INLINE_LAYOUT'
// - Renamed export 'XD' to 'UpdateType'
// - Renamed export 'PV' to 'isMoveMutation'
// - Renamed export 'XO' to 'registerProviders'
// - Renamed export 'u7' to 'PENDING_STATUS'
// - Renamed export 'zJ' to 'DataService'
// - Renamed export 'B2' to 'MutationAction'
// - Renamed export 'K1' to 'Editor'
// - Renamed export 'pT' to 'BlockStruct'
// - Renamed export 'YG' to 'registerAutoRuns'
// - Renamed export '_k' to 'isReplaceOp'
// - Renamed export 'qt' to 'registerViewModel'
// - Renamed export 'Dr' to 'disableModule'
// - Renamed export 'Mq' to 'runWithDataset'
// - Renamed export 'VZ' to 'debounce'
// - Renamed export 'bU' to 'INIT_STATUS'
// - Renamed export 'gs' to 'updateViewExts'
// - Renamed export 'mJ' to 'registerTrigger'
// - Renamed export 'Dk' to 'EditMode'
// - Renamed export 'GF' to 'isAddMutation'
// - Renamed export 'Th' to 'Renderer'
// - Renamed export 'fP' to 'SubjectType'
// - Renamed export 'xo' to 'loadServiceModule'
// - Renamed export 'ix' to 'registerViewExt'
// - Renamed export 'JF' to 'isUpdateMutation'
// - Renamed export 'YS' to 'INJECTION_TOKEN'
// - Renamed export 'gp' to 'FALLBACK_STATUS'
// - Renamed export 'po' to 'ZERO_OFFSET'
// - Renamed export 'YH' to 'isMoveAddMutation'
// - Renamed export 'nc' to 'onInitHook'
// - Renamed export 'qj' to 'registerSignals'
// - Renamed export 'FS' to 'EDITOR_API_TOKEN'
// - Renamed export 'C6' to 'MODULE_MGR_TOKEN'
// - Renamed export 'Qi' to 'createSignal'
// - Renamed export 'f7' to 'isPendingType'
// - Renamed export 'Q2' to 'registerUpdateCfg'
// - Renamed export '_9' to 'registerFetcher'
// - Renamed export 'IH' to 'isUnsupportedError'
// - Renamed export 'cv' to 'getProviderName'
// - Renamed export 'g6' to 'SlotType'
// - Renamed export 'oq' to 'BLOCK_DATA_TOKEN'
// - Renamed export 'yJ' to 'BlockModel'
// - Renamed export 's1' to 'VIEW_TOKEN'
// - Renamed export 'Hr' to 'ScopeType'
// - Renamed export 'E4' to 'CONFIG_TOKEN'
// - Renamed export 'TA' to 'getBlockModel'
// - Renamed export 'bi' to 'EMPTY_STRING'
// - Renamed export 'hl' to 'isInsertOp'
// - Renamed export 'uW' to 'BLOCK_STRUCT_TOKEN'
// - Renamed export 'q4' to 'isTimeoutError'
// - Renamed export 'jW' to 'onServiceReady'
// - Renamed export 'l7' to 'registerModTrig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 135760
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var s;
  var a;
  var u;
  var c;
  var l;
  var p;
  var h;
  var f;
  var d;
  var v;
  var y;
  var g;
  var _;
  var m;
  var b;
  var E;
  var w;
  var S;
  var T;
  var I;
  var A;
  var C;
  var M;
  var k;
  var O;
  var R;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var subscriptionCore = require("subscription-core") /*id: 259043*/;
  var replaySubject = require("replay-subject") /*id: 229131*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var observableFromAnySource = require("observable-from-any-source") /*id: 562902*/;
  var j = Array.isArray;
  var emptyObservableInstance = require("empty-observable-instance") /*id: 724888*/;
  var safeSubscriber = require("safe-subscriber") /*id: 132026*/;
  var arrayPopUtils = require("array-pop-utils") /*id: 451401*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var G = new (function () {
    function t() {
      this._nameEditorsMap = new Map();
      this._idEditorMap = new Map();
    }
    t.prototype.add = function (t) {
      var e = this;
      this._idEditorMap.set(t.id, t);
      var n = this._nameEditorsMap.get(t.name);
      if (n) {
        n.push(t);
      } else {
        this._nameEditorsMap.set(t.name, [t]);
      }
      var r = t.lifecycle.editorWillDestroy$.subscribe(function () {
        r.unsubscribe();
        e._idEditorMap.delete(t.id);
        var n = e._nameEditorsMap.get(t.name);
        if (n) {
          var i = n.indexOf(t);
          if (i >= 0) {
            n.splice(i, 1);
          }
          if (n.length === 0) {
            e._nameEditorsMap.delete(t.name);
          }
        }
      });
    };
    return t;
  }())();
  if (typeof window != "undefined") {
    window.__x__ = G;
  }
  var Y = dependencyInjectionContainer.providerName("injection");
  (g ||= {}).BLOCK_VIEW = "block-view";
  var K = "__root__";
  function $(t, e, n) {
    return t.onServiceReady(e, n);
  }
  var X = dependencyInjectionContainer.providerName("config");
  var J = dependencyInjectionContainer.providerName("view");
  function Q(t, e) {
    return (Q = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          t[n] = e[n];
        }
      }
    })(t, e);
  }
  function tt(t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function n() {
      this.constructor = t;
    }
    Q(t, e);
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function te() {
    return (te = Object.assign || function (t) {
      var e;
      var n = 1;
      var r = arguments.length;
      for (; n < r; n++) {
        for (var i in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            t[i] = e[i];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  function tn(t, e) {
    var n = {};
    for (var r in t) {
      if (Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0) {
        n[r] = t[r];
      }
    }
    if (t != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var r = Object.getOwnPropertySymbols(t);
      for (; i < r.length; i++) {
        if (e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i])) {
          n[r[i]] = t[r[i]];
        }
      }
    }
    return n;
  }
  function tr(t, e, n, r) {
    return new (n ||= Promise)(function (i, o) {
      function s(t) {
        try {
          u(r.next(t));
        } catch (t) {
          o(t);
        }
      }
      function a(t) {
        try {
          u(r.throw(t));
        } catch (t) {
          o(t);
        }
      }
      function u(t) {
        var e;
        if (t.done) {
          i(t.value);
        } else {
          ((e = t.value) instanceof n ? e : new n(function (t) {
            t(e);
          })).then(s, a);
        }
      }
      u((r = r.apply(t, e || [])).next());
    });
  }
  function ti(t, e) {
    var n;
    var r;
    var i;
    var o;
    var s = {
      label: 0,
      sent: function () {
        if (i[0] & 1) {
          throw i[1];
        }
        return i[1];
      },
      trys: [],
      ops: []
    };
    o = {
      next: a(0),
      throw: a(1),
      return: a(2)
    };
    if (typeof Symbol == "function") {
      o[Symbol.iterator] = function () {
        return this;
      };
    }
    return o;
    function a(o) {
      return function (a) {
        return function (o) {
          if (n) {
            throw TypeError("Generator is already executing.");
          }
          while (s) {
            try {
              n = 1;
              if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                return i;
              }
              r = 0;
              if (i) {
                o = [o[0] & 2, i.value];
              }
              switch (o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  s.label++;
                  return {
                    value: o[1],
                    done: false
                  };
                case 5:
                  s.label++;
                  r = o[1];
                  o = [0];
                  continue;
                case 7:
                  o = s.ops.pop();
                  s.trys.pop();
                  continue;
                default:
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                    s = 0;
                    continue;
                  }
                  if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                    s.label = o[1];
                    break;
                  }
                  if (o[0] === 6 && s.label < i[1]) {
                    s.label = i[1];
                    i = o;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(o);
                    break;
                  }
                  if (i[2]) {
                    s.ops.pop();
                  }
                  s.trys.pop();
                  continue;
              }
              o = e.call(t, s);
            } catch (t) {
              o = [6, t];
              r = 0;
            } finally {
              n = i = 0;
            }
          }
          if (o[0] & 5) {
            throw o[1];
          }
          return {
            value: o[0] ? o[1] : undefined,
            done: true
          };
        }([o, a]);
      };
    }
  }
  function to(t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var n = e && t[e];
    var r = 0;
    if (n) {
      return n.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function ts(t, e) {
    var n = typeof Symbol == "function" && t[Symbol.iterator];
    if (!n) {
      return t;
    }
    var r;
    var i;
    var o = n.call(t);
    var s = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = o.next()).done) {
        s.push(r.value);
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (n = o.return)) {
          n.call(o);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return s;
  }
  function ta(t, e, n) {
    if (n || arguments.length == 2) {
      var r;
      var i = 0;
      var o = e.length;
      for (; i < o; i++) {
        if (!!r || !(i in e)) {
          r ||= Array.prototype.slice.call(e, 0, i);
          r[i] = e[i];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  }
  var tu = "fallback";
  var tc = "<root>";
  var tl = "pending";
  (r = _ ||= {})[r.NO = 0] = "NO";
  r[r.MAYBE = 1] = "MAYBE";
  r[r.YES = 2] = "YES";
  var tp = dependencyInjectionContainer.providerName("editor-api");
  function th(t, e = "assertion failed") {
    if (!t) {
      throw Error(e);
    }
  }
  var tf = function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      n.isNotSupportedBlockTypeError = true;
      return n;
    }
    tt(e, t);
    return e;
  }(Error);
  var td = dependencyInjectionContainer.providerName("module-manager");
  var tv = null;
  var ty = null;
  var tg = function (t) {
    function e(e) {
      var n = t.call(this, e) || this;
      n.isTimeoutError = true;
      return n;
    }
    tt(e, t);
    return e;
  }(Error);
  var t_ = function () {
    function t(t, e, n = {}) {
      this.name = t;
      this._fetch = e;
      this.options = n;
      this.error = null;
      this._promise = null;
      this._result = null;
      this._ready = false;
    }
    t.prototype.reset = function () {
      this.error = null;
      this._ready = false;
      this._promise = null;
      this._result = null;
    };
    t.prototype.isReady = function () {
      return this._ready;
    };
    t.prototype.isError = function () {
      return this.error != null;
    };
    t.prototype.isComplete = function () {
      return this.isReady() || this.isError();
    };
    t.prototype.shouldPreload = function () {
      return !!this.options.fetchBeforeModuleInit;
    };
    t.prototype.getFetchedResult = function () {
      return this._result;
    };
    t.prototype.fetch = function (t) {
      var e = this;
      if (this.isComplete()) {
        if (t != null) {
          t(this.error);
        }
        return;
      }
      if (this._promise == null) {
        this._promise = this._fetch().then(function (t) {
          e._ready = true;
          e.error = null;
          e._promise = null;
          e._result = t;
        }, function (t) {
          e.error = t;
          e._promise = null;
          e._result = null;
        });
      }
      this._promise.then(function () {
        if (t == null) {
          return undefined;
        } else {
          return t(e.error);
        }
      }, t);
    };
    return t;
  }();
  var tm = function () {
    function t(t) {
      this._fetcherMap = new Map();
      this._blockTypeFetcherMap = new Map();
      this._fetchingTimers = new Set();
      this._fetcherCallbacksMap = new Map();
      this._runningFetchers = new Set();
      this._pendingFetchers = new Set();
      this._isDestroyed = false;
      this._scheduleTask = t;
    }
    t.prototype.registerFetcher = function (t, e, n) {
      var r = this;
      var i = new t_(t.name, e, n);
      this._fetcherMap.set(t, i);
      t.blockTypes.forEach(function (t) {
        r._blockTypeFetcherMap.set(t, i);
      });
    };
    t.prototype.getModuleFetcher = function (t) {
      return this._fetcherMap.get(t.group);
    };
    t.prototype.getBlockFetcher = function (t) {
      return this._blockTypeFetcherMap.get(t);
    };
    t.prototype.bootstrapFetcher = function (t, e, n) {
      var r = this;
      if (e === undefined) {
        e = {};
      }
      var i = this._fetcherMap.get(t.group);
      if (!i || i.isReady()) {
        if (n != null) {
          n(null);
        }
        return;
      }
      if (n) {
        this._addFetcherCompleteCallback(i, n);
      }
      if (i.isError()) {
        i.reset();
        this._runningFetchers.delete(i);
      }
      if (!this._runningFetchers.has(i)) {
        function o(t) {
          if (!r._isDestroyed) {
            var e = r._fetcherCallbacksMap.get(i);
            if (e) {
              r._fetcherCallbacksMap.delete(i);
              e.forEach(function (e) {
                e(t);
              });
              r._runningFetchers.delete(i);
            }
          }
        }
        var s = e.immediately;
        var a = e.timeout;
        if (s !== undefined && s) {
          this._run(i, a).then(function (t) {
            return o(t);
          });
          this._runningFetchers.add(i);
        } else {
          if (this._pendingFetchers.has(i)) {
            return;
          }
          this._scheduleTask(function (t) {
            if (r._isDestroyed || (r._pendingFetchers.delete(i), r._runningFetchers.has(i))) {
              t(null);
              return;
            }
            r._run(i, a).then(function (t) {
              return o(t);
            });
            r._runningFetchers.add(i);
          }, e);
          this._pendingFetchers.add(i);
        }
      }
    };
    t.prototype.dispose = function () {
      this._fetcherMap.clear();
      this._blockTypeFetcherMap.clear();
      Array.from(this._fetchingTimers).forEach(function (t) {
        return clearTimeout(t);
      });
      this._fetchingTimers.clear();
      this._fetcherCallbacksMap.clear();
      this._runningFetchers.clear();
      this._pendingFetchers.clear();
      this._isDestroyed = true;
    };
    t.prototype._run = function (t, e) {
      var n = this;
      return new Promise(function (r) {
        try {
          if (e != null) {
            var i = false;
            var o = setTimeout(function () {
              i = true;
              n._fetchingTimers.delete(o);
              o = null;
              var e = new tg("[docx-editor] timeout to run module " + t.name + " fetcher");
              t.error = e;
              r(e);
            }, e);
            n._fetchingTimers.add(o);
            t.fetch(function (t) {
              if (!i) {
                if (o) {
                  clearTimeout(o);
                  n._fetchingTimers.delete(o);
                  o = null;
                }
                r(t);
              }
            });
          } else {
            t.fetch(function (t) {
              return r(t);
            });
          }
        } catch (e) {
          t.error = e;
          r(e);
        }
      });
    };
    t.prototype._addFetcherCompleteCallback = function (t, e) {
      var n = this._fetcherCallbacksMap.get(t);
      if (!n) {
        n = [];
        this._fetcherCallbacksMap.set(t, n);
      }
      n.push(e);
    };
    return t;
  }();
  (i = m ||= {})[i.INITIAL = 1] = "INITIAL";
  i[i.LOADING = 2] = "LOADING";
  i[i.LOADED = 4] = "LOADED";
  i[i.ERROR = 8] = "ERROR";
  i[i.ALL = 15] = "ALL";
  (o = b ||= {})[o.INITIAL = 16] = "INITIAL";
  o[o.RUNNING = 32] = "RUNNING";
  o[o.READY = 64] = "READY";
  o[o.ERROR = 128] = "ERROR";
  o[o.ALL = 240] = "ALL";
  (s = E ||= {}).BASE = "base";
  s.EDITABLE = "editable";
  (a = w ||= {})[a.NORMAL = 0] = "NORMAL";
  a[a.RENDERER = 1] = "RENDERER";
  a[a.BLOCK = 2] = "BLOCK";
  a[a.EXTENSION = 4] = "EXTENSION";
  (u = S ||= {})[u.BEFORE_SLOT = 1] = "BEFORE_SLOT";
  u[u.AFTER_SLOT = 2] = "AFTER_SLOT";
  u[u.NAMED_SLOT = 4] = "NAMED_SLOT";
  u[u.EFFECT = 8] = "EFFECT";
  u[u.WRAPPER = 16] = "WRAPPER";
  u[u.ALL = 31] = "ALL";
  var tb = S.BEFORE_SLOT | S.AFTER_SLOT | S.EFFECT;
  var tE = function () {
    function t(t, e, n, r) {
      this.status = b.INITIAL;
      this.retries = 0;
      this.error = null;
      this.loadError = null;
      this._hooks = null;
      this._isDisposed = false;
      this._autoRuns = null;
      this.group = t;
      this.option = n;
      this.desc = e;
      this.editMode = r;
      if (e.a) {
        this.status |= m.INITIAL;
      } else {
        this.status |= m.LOADED;
      }
    }
    Object.defineProperty(t.prototype, "name", {
      get: function () {
        return this.group.name;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "key", {
      get: function () {
        return this.desc.k;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "editableTrigger", {
      get: function () {
        return this.desc.et;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "kind", {
      get: function () {
        return this.desc.t;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "blockTypes", {
      get: function () {
        return this.group.blockTypes;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "requiredDeps", {
      get: function () {
        return this.desc.d[0];
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "optionalDeps", {
      get: function () {
        return this.desc.d[1];
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "providers", {
      get: function () {
        return this.desc.p;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "provideExtensions", {
      get: function () {
        return this.desc.e;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.isAsync = function () {
      return this.desc.a;
    };
    t.prototype.isReady = function () {
      return (this.status & b.READY) != 0;
    };
    t.prototype.isError = function () {
      return this.error != null;
    };
    t.prototype.isDisposed = function () {
      return this._isDisposed;
    };
    t.prototype.isBase = function () {
      return this.editMode === E.BASE;
    };
    t.prototype.addHook = function (t, e) {
      this._hooks ||= new Map();
      var n = this._hooks.get(t);
      if (n) {
        n.push(e);
      } else {
        this._hooks.set(t, [e]);
      }
    };
    t.prototype.callHook = function (t) {
      if (this._hooks) {
        var e = arguments;
        var n = e.length;
        var r = this._hooks.get(t);
        if (r) {
          this._hooks.delete(t);
          var i = 0;
          var o = r.length;
          for (; i < o; ++i) {
            var s = r[i];
            switch (n) {
              case 1:
                s.call(this);
                break;
              case 2:
                s.call(this, e[1]);
                break;
              case 3:
                s.call(this, e[1], e[2]);
                break;
              default:
                if (e === arguments) {
                  e = Array.from(arguments).slice(1);
                }
                s.apply(this, e);
            }
          }
        }
      }
    };
    t.prototype.setError = function (t) {
      this.error = t;
    };
    t.prototype.addAutoRun = function (t) {
      if (this._autoRuns) {
        this._autoRuns.push(t);
      } else {
        this._autoRuns = [t];
      }
    };
    t.prototype.resetLoadError = function () {
      if ((this.status & m.ERROR) != 0) {
        this.status = m.INITIAL | b.INITIAL;
        this.error = null;
        this.loadError = null;
        ++this.retries;
      }
    };
    t.prototype.load = function (t) {
      if ((this.status & (m.LOADED | m.ERROR)) != 0) {
        t(this.error);
        return;
      }
      if ((this.status & m.LOADING) != 0) {
        this.addHook("load", t);
        return;
      }
      this.status = this.status & ~m.INITIAL | m.LOADING;
      this.addHook("load", t);
      this._load();
    };
    t.prototype.run = function (t) {
      if ((this.status & b.INITIAL) != 0) {
        try {
          this.status = this.status & ~b.INITIAL | b.RUNNING;
          this.desc.y(this.option, t);
          this._postRun(t);
          this.status = this.status & ~b.RUNNING | b.READY;
        } catch (t) {
          this.status = this.status & ~b.RUNNING | b.ERROR;
          throw t;
        }
      }
    };
    t.prototype.dispose = function () {
      if (!this._isDisposed) {
        this._isDisposed = true;
        try {
          this.callHook("destroy", this);
        } catch (t) {}
      }
    };
    t.prototype.toString = function () {
      return this.name + "#" + this.editMode;
    };
    t.prototype._load = function () {
      var t = this;
      function e(e) {
        t.status &= ~m.LOADING;
        if (e) {
          t.loadError = e;
          t.status |= m.ERROR;
        } else {
          t.status |= m.LOADED;
        }
        if (!t._isDisposed) {
          t.callHook("load", e, t);
        }
      }
      try {
        this.desc.l().then(function (n) {
          t.desc.y = isFunctionUtil_1.isFunction(n) ? n : n.default;
          e(null);
        }, e);
      } catch (t) {
        e(t);
      }
    };
    t.prototype._postRun = function (t) {
      var e = dependencyInjectionContainer.getInjector();
      var n = t.injector;
      dependencyInjectionContainer.setInjector(n);
      try {
        this.callHook("init", this);
        if (this._autoRuns) {
          (function (t, e) {
            var n = -1;
            var r = e.length;
            while (++n < r) {
              t.get(e[n]);
            }
          })(n, this._autoRuns);
        }
      } finally {
        dependencyInjectionContainer.setInjector(e);
      }
    };
    return t;
  }();
  var tw = function () {
    function t(t, e) {
      this.kind = 0;
      this.disabled = false;
      this._disposed = false;
      this._teardown = emptyExportFunction.emptyFunction;
      this._modules = [];
      this._keyMap = new Map();
      this._editModeMap = Object.create(null);
      var n = t.s;
      var r = t.m;
      this._desc = t;
      this._setup = n || emptyExportFunction.emptyFunction;
      this._add(r, e);
    }
    Object.defineProperty(t.prototype, "name", {
      get: function () {
        return this._desc.n;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "blockTypes", {
      get: function () {
        return this._desc.bt || [];
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "modules", {
      get: function () {
        return this._modules;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.isDisposed = function () {
      return this._disposed;
    };
    t.prototype.setup = function (t) {
      this._teardown = this._setup(t) || emptyExportFunction.emptyFunction;
    };
    t.prototype.dispose = function () {
      this._disposed = true;
      this._modules.forEach(function (t) {
        return t.dispose();
      });
      this._teardown();
    };
    t.prototype.getBaseModule = function () {
      return this._editModeMap[E.BASE];
    };
    t.prototype.getEditableModule = function () {
      return this._editModeMap[E.EDITABLE];
    };
    t.prototype.getModuleByKind = function (t) {
      return this._modules.find(function (e) {
        return (e.kind & t) != 0;
      });
    };
    t.prototype.getModuleByKey = function (t) {
      return this._keyMap.get(t);
    };
    t.prototype.getModuleByEditMode = function (t) {
      return this._editModeMap[t];
    };
    t.prototype._add = function (t, e) {
      var n = this;
      t.forEach(function (t) {
        var r = ts(t, 2);
        var i = r[0];
        var o = new tE(n, r[1], e, i);
        n.kind |= o.kind;
        n._modules.push(o);
        n._keyMap.set(o.key, o);
        n._editModeMap[i] = o;
      });
    };
    return t;
  }();
  var tS = function () {
    function t() {
      this._groups = [];
      this._nameGroupMap = new Map();
      this._keyModuleMap = new Map();
      this._providerModuleMap = new Map();
      this._provideExtensionModuleMap = new Map();
      this._provideExtensionSlotTypesMap = new Map();
      this._blockTypeGroupMap = new Map();
    }
    t.prototype.init = function (t, e) {
      var n = 0;
      var r = t.length;
      for (; n < r; ++n) {
        var i = t[n];
        this._add(i, e[i.n]);
      }
    };
    t.prototype.dispose = function () {
      this._groups.forEach(function (t) {
        return t.dispose();
      });
    };
    t.prototype.forEachGroup = function (t) {
      var e = this._groups;
      var n = -1;
      var r = e.length;
      while (++n < r) {
        var i = e[n];
        if (!i.disabled) {
          t(i);
        }
      }
    };
    t.prototype.forEachModule = function (t) {
      this._keyModuleMap.forEach(t);
    };
    t.prototype.getModuleIterator = function () {
      return this._keyModuleMap.values();
    };
    t.prototype.getModulesByProvider = function (t) {
      var e = this._providerModuleMap.get(t);
      if (e && e.length) {
        if (e.length === 1) {
          if (e[0].group.disabled) {
            return undefined;
          } else {
            return e;
          }
        } else if ((e = e.filter(function (t) {
          return !t.group.disabled;
        })).length) {
          return e;
        } else {
          return undefined;
        }
      } else {
        return undefined;
      }
    };
    t.prototype.getSlotTypesByExtensionProvider = function (t) {
      return this._provideExtensionSlotTypesMap.get(t);
    };
    t.prototype.getModuleByExtensionProvider = function (t) {
      var e = this._provideExtensionModuleMap.get(t);
      if (e && !e.group.disabled) {
        return e;
      }
    };
    t.prototype.getModuleByKey = function (t) {
      return this._keyModuleMap.get(t);
    };
    t.prototype.getModuleListByEditMode = function (t) {
      var e = [];
      this._groups.forEach(function (n) {
        if (!n.disabled) {
          var r = n.getModuleByEditMode(t);
          if (r) {
            e.push(r);
          }
        }
      });
      return e;
    };
    t.prototype.getModuleByBlockType = function (t, e = E.BASE) {
      var n = this._blockTypeGroupMap.get(t);
      if (n && !n.disabled) {
        return n.getModuleByEditMode(e);
      }
    };
    t.prototype._add = function (t, e) {
      var n = this;
      var r = new tw(t, e);
      this._groups.push(r);
      this._nameGroupMap.set(r.name, r);
      r.modules.forEach(function (t) {
        n._keyModuleMap.set(t.key, t);
        t.providers.forEach(function (e) {
          var r = n._providerModuleMap.get(e);
          if (!r) {
            r = [];
            n._providerModuleMap.set(e, r);
          }
          r.push(t);
        });
        t.provideExtensions.forEach(function (e) {
          var r = ts(e, 2);
          var i = r[0];
          var o = r[1];
          n._provideExtensionModuleMap.set(i, t);
          n._provideExtensionSlotTypesMap.set(i, o);
        });
      });
      r.blockTypes.forEach(function (t) {
        n._blockTypeGroupMap.set(t, r);
      });
    };
    return t;
  }();
  var tT = function (t) {
    function e() {
      return t.call(this, 1) || this;
    }
    tt(e, t);
    e.prototype._subscribe = function (e) {
      if (this.isStopped) {
        e.complete();
        return subscriptionCore.Subscription.EMPTY;
      } else {
        return t.prototype._subscribe.call(this, e);
      }
    };
    return e;
  }(replaySubject.ReplaySubject);
  var tI = null;
  var tA = null;
  (c = T ||= {})[c.NO_ERROR = 0] = "NO_ERROR";
  c[c.LOAD_ERROR = 1] = "LOAD_ERROR";
  c[c.RUN_ERROR = 2] = "RUN_ERROR";
  (l = I ||= {})[l.INITIAL = 1] = "INITIAL";
  l[l.PREPARING = 2] = "PREPARING";
  l[l.LOADING = 4] = "LOADING";
  l[l.LOADED = 8] = "LOADED";
  l[l.LOAD_ERROR = 32] = "LOAD_ERROR";
  l[l.RUN_ERROR = 64] = "RUN_ERROR";
  l[l.READY = 128] = "READY";
  function tC(t, e) {
    this.dependents = null;
    this.id = t;
    this.priority = e;
  }
  var tM = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.dependencies = null;
      return e;
    }
    tt(e, t);
    Object.defineProperty(e.prototype, "type", {
      get: function () {
        return 1;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.addDependency = function (t) {
      this.dependencies ||= new Set();
      this.dependencies.add(t);
      t.dependents ||= new Set();
      t.dependents.add(this);
    };
    return e;
  }(tC);
  var tk = function (t) {
    function e(e, n, r, i, o) {
      var s = t.call(this, e, n) || this;
      s.args = null;
      s.loader = r;
      s.context = i;
      s.args = o;
      return s;
    }
    tt(e, t);
    Object.defineProperty(e.prototype, "type", {
      get: function () {
        return 2;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.load = function (t) {
      var e = this.loader;
      var n = this.context;
      var r = this.args;
      switch (r ? r.length : 0) {
        case 0:
          return e.call(n, t);
        case 1:
          return e.call(n, r[0], t);
        case 2:
          return e.call(n, r[0], r[1], t);
        case 3:
          return e.call(n, r[0], r[1], r[2], t);
        default:
          return e.apply(n, r.concat(t));
      }
    };
    return e;
  }(tC);
  function tO(t) {
    if (typeof window != "undefined" && window.requestIdleCallback) {
      window.requestIdleCallback(t);
      return;
    }
    setTimeout(t, 100);
  }
  var tR = function () {
    function t(t, e, n, r) {
      this.registry = t;
      this._editor = e;
      this._fetcherManager = n;
      this.moduleComplete$ = new observableSubjectClass.Subject();
      this.initialModulesReady$ = new tT();
      this._triggers = [];
      this._triggerMap = new Map();
      this._isActive = false;
      this._running = 0;
      this._flushing = false;
      this._isDisposed = false;
      this._timers = new Set();
      this._moduleStatusMap = new Map();
      this._moduleRetryMap = new Map();
      this._moduleErrorMap = new Map();
      this._moduleCallbacksMap = new Map();
      this._moduleToTaskMap = new Map();
      this._taskToScheduledIdMap = new Map();
      this._idToTaskMap = new Map();
      this._triggerToModuleConfigMap = new Map();
      this._queue = [];
      this._loaders = [this._loadRequiredDeps, this._loadOptionalDeps, this._preload, this._loadModuleSelf];
      this._initialModules = r.preprocessedInitialModules;
      this._scheduleTaskImpl = r.scheduleTask;
      this._getTaskPriorityImpl = r.getTaskPriority || tD;
      this._cancelTaskImpl = r.cancelTask;
      this.requestIdleCallback = r.requestIdleCallback || tO;
    }
    t.prototype.registerTrigger = function (t) {
      var e;
      var n;
      var r = this;
      if (this._triggerMap.has(t.name)) {
        throw Error("[docx-editor] Duplicate trigger name: " + t.name);
      }
      this._triggers.push(t);
      this._triggerMap.set(t.name, t);
      if ((e = t.init) !== null && e !== undefined) {
        e.call(t, this);
      }
      if (this._isActive) {
        var i = this._triggerToModuleConfigMap.get(t.name);
        if ((n = t.start) !== null && n !== undefined) {
          n.call(t, i);
        }
      }
      return function () {
        var e;
        var n = r._triggers.indexOf(t);
        if (n >= 0) {
          r._triggers.splice(n, 1);
        }
        if (r._isActive) {
          if ((e = t.stop) !== null && e !== undefined) {
            e.call(t);
          }
        }
      };
    };
    t.prototype.registerModuleTriggers = function (t, e) {
      var n = this;
      e.forEach(function (e) {
        var r;
        var i;
        var o = undefined;
        if (arrayIsArrayUtil.isArray(e)) {
          i = (r = ts(e, 2))[0];
          o = r[1];
        } else {
          i = e;
        }
        var s = n._triggerToModuleConfigMap.get(i);
        if (!s) {
          s = new Map();
          n._triggerToModuleConfigMap.set(i, s);
        }
        t.modules.forEach(function (t) {
          if (s == null) {
            return undefined;
          } else {
            return s.set(t, o);
          }
        });
      });
    };
    t.prototype.getModuleStatus = function (t) {
      return this._moduleStatusMap.get(t) || I.INITIAL;
    };
    t.prototype.bootstrapModule = function (t, e = {}, n) {
      return this._bootstrapModuleImpl(t, e, false, n);
    };
    t.prototype.start = function () {
      var t = this;
      this._isActive = true;
      this._triggers.forEach(function (e) {
        var n;
        if ((n = e.start) === null || n === undefined) {
          return undefined;
        } else {
          return n.call(e, t._triggerToModuleConfigMap.get(e.name));
        }
      });
    };
    t.prototype.stop = function () {
      this._triggers.forEach(function (t) {
        var e;
        if ((e = t.stop) === null || e === undefined) {
          return undefined;
        } else {
          return e.call(t);
        }
      });
    };
    t.prototype.init = function () {
      var t = -1;
      var e = this._initialModules;
      var n = e.length;
      var r = this.registry;
      var i = this._moduleStatusMap;
      for (this._disallowLoading(); ++t < n;) {
        var o = r.getModuleByKey(e[t]);
        if (!o.group.disabled && (i.set(o, I.LOADED), this._runModule(o), o.error)) {
          this._allowLoading();
          this.initialModulesReady$.error(o.error);
          return;
        }
      }
      this._allowLoading();
      this.initialModulesReady$.next(e);
    };
    t.prototype.dispose = function () {
      if (!this._isDisposed) {
        this._isDisposed = true;
        this.stop();
        this.moduleComplete$.complete();
        this.initialModulesReady$.complete();
        if (this._cancelTaskImpl) {
          this._taskToScheduledIdMap.forEach(this._cancelTaskImpl);
        }
        this._timers.forEach(function (t) {
          return clearTimeout(t);
        });
        this._taskToScheduledIdMap.clear();
        this._moduleCallbacksMap.clear();
        this._moduleErrorMap.clear();
        this._idToTaskMap.clear();
        this._scheduleTaskImpl = emptyExportFunction.emptyFunction;
        this._cancelTaskImpl = emptyExportFunction.emptyFunction;
        this._queue = [];
      }
    };
    t.prototype._bootstrapModuleImpl = function (t, e, n, r) {
      if (this._isDisposed) {
        if (r != null) {
          r(Error("[docx-editor] editor is disposed, unable to load module " + t.name), t);
        }
        return;
      }
      if (t.group.disabled && !n) {
        if (r != null) {
          r(Error("[docx-editor] failed to load disabled module " + t.name), t);
        }
      }
      var i = this._moduleStatusMap.get(t) || I.INITIAL;
      if ((i & (I.READY | I.RUN_ERROR)) != 0) {
        if (r != null) {
          r(this._moduleErrorMap.get(t), t);
        }
        return;
      }
      if ((i & I.LOAD_ERROR) != 0) {
        if (!e.autoRetry && !e.loadErrorRetry) {
          if (r != null) {
            r(this._moduleErrorMap.get(t), t);
          }
          return;
        }
        if (e.loadErrorRetry && !e.autoRetry) {
          var o = e.maxTimes || 3;
          var s = this._moduleRetryMap.get(t) || 0;
          if (s >= o) {
            if (r != null) {
              r(Error("[docx-editor] Exceed limit of retry times " + t.name), t);
            }
            return;
          }
          this._moduleRetryMap.set(t, s + 1);
        }
        this._moduleStatusMap.set(t, I.INITIAL);
        this._moduleErrorMap.delete(t);
        t.setError(null);
        i = I.INITIAL;
      }
      if (this._running > 0) {
        this._queue.push({
          module: t,
          options: e,
          onload: r
        });
        return;
      }
      if (r) {
        this._addModuleCompleteCallback(t, r);
      }
      if (e.timeout) {
        var a = e.timeout;
        e = tn(e, ["timeout"]);
        this._startTimeout(t, a);
      }
      var u = this._getTaskPriorityImpl(e);
      if ((i & I.INITIAL) != 0) {
        this._startLoading(t, e, u);
        return;
      }
      if ((i & I.LOADED) == 0) {
        this._updateModulePriority(t, e, u);
        return;
      }
    };
    t.prototype._disallowLoading = function () {
      ++this._running;
    };
    t.prototype._allowLoading = function () {
      if (!(--this._running > 0)) {
        this._flush();
      }
    };
    t.prototype._flush = function () {
      if (!this._flushing && this._queue.length !== 0) {
        this._flushing = true;
        var t = this._queue;
        var e = -1;
        while (++e < t.length) {
          var n = t[e];
          this.bootstrapModule(n.module, n.options, n.onload);
        }
        this._queue = [];
        this._flushing = false;
      }
    };
    t.prototype._startLoading = function (t, e, n) {
      var r;
      var i;
      var o = new tM(t, n);
      this._moduleToTaskMap.set(t, o);
      var s = this._moduleStatusMap;
      s.set(t, I.PREPARING);
      try {
        var a = to(this._loaders);
        var u = a.next();
        for (; !u.done; u = a.next()) {
          u.value.call(this, o, e);
          if (s.get(t) !== I.PREPARING) {
            return;
          }
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          if (u && !u.done && (i = a.return)) {
            i.call(a);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
      if (o.dependencies && o.dependencies.size !== 0) {
        s.set(t, I.LOADING);
      } else {
        this._finishModule(null, T.NO_ERROR, t);
      }
    };
    t.prototype._finishModule = function (t, e, n) {
      var r;
      var i;
      var o = this._moduleToTaskMap.get(n);
      if (o !== undefined) {
        this._moduleToTaskMap.delete(n);
        if (t) {
          this._onModuleError(t, e, n);
          return;
        }
        this._moduleStatusMap.set(n, I.LOADED);
        this._disallowLoading();
        try {
          this._runModule(n);
          var s = o.dependents;
          if (!s || s.size === 0) {
            return;
          }
          try {
            var a = to(s);
            var u = a.next();
            for (; !u.done; u = a.next()) {
              var c = u.value;
              this._updateModuleTask(t, e, c, o);
            }
          } catch (t) {
            r = {
              error: t
            };
          } finally {
            try {
              if (u && !u.done && (i = a.return)) {
                i.call(a);
              }
            } finally {
              if (r) {
                throw r.error;
              }
            }
          }
        } finally {
          this._allowLoading();
        }
      }
    };
    t.prototype._finalizeModule = function (t, e, n) {
      this._moduleStatusMap.set(t, n);
      try {
        this._callModuleCompleteCallbacks(e, t);
      } catch (t) {}
      this.moduleComplete$.next({
        error: e,
        module: t,
        status: n
      });
    };
    t.prototype._runModule = function (t) {
      var e = tI;
      var n = tA;
      tI = this._editor;
      tA = t;
      var r = I.LOADED;
      try {
        t.run(this._editor);
        r |= I.READY;
      } catch (e) {
        r |= I.RUN_ERROR;
        t.setError(e);
      }
      tI = e;
      tA = n;
      this._finalizeModule(t, t.error, r);
    };
    t.prototype._onModuleError = function (t, e, n) {
      var r = e === T.LOAD_ERROR ? I.LOAD_ERROR : I.RUN_ERROR;
      this._finalizeModule(n, t, r);
    };
    t.prototype._startTask = function (t, e) {
      var n = this;
      if (!this._isDisposed) {
        var r = false;
        var i = this._scheduleTaskImpl(function (e) {
          r = true;
          if (n._isDisposed || !n._idToTaskMap.has(t.id)) {
            e(null);
            return;
          }
          n._taskToScheduledIdMap.delete(t);
          t.load(function (r) {
            if (!n._idToTaskMap.has(t.id)) {
              e(null);
              return;
            }
            n._finishTask(r, r ? T.LOAD_ERROR : T.NO_ERROR, t);
            e(r);
          });
        }, e);
        if (!r && i !== undefined && !this._isDisposed && !this._taskToScheduledIdMap.has(t)) {
          this._taskToScheduledIdMap.set(t, i);
        }
      }
    };
    t.prototype._finishTask = function (t, e, n) {
      if (!this._isDisposed && this._idToTaskMap.delete(n.id)) {
        var r;
        var i;
        var o = n.dependents;
        if (o && o.size !== 0) {
          n.dependents = null;
          try {
            var s = to(o);
            var a = s.next();
            for (; !a.done; a = s.next()) {
              var u = a.value;
              this._updateModuleTask(t, e, u, n);
            }
          } catch (t) {
            r = {
              error: t
            };
          } finally {
            try {
              if (a && !a.done && (i = s.return)) {
                i.call(s);
              }
            } finally {
              if (r) {
                throw r.error;
              }
            }
          }
        }
      }
    };
    t.prototype._updateModuleTask = function (t, e, n, r) {
      var i = n.id;
      var o = n.dependencies;
      if (this._moduleToTaskMap.get(i) === n) {
        if (t || !o) {
          this._finishModule(t, e, i);
          return;
        }
        o.delete(r);
        if (!(o.size > 0)) {
          n.dependencies = null;
          if (this._moduleStatusMap.get(i) !== I.PREPARING) {
            this._finishModule(t, e, i);
          }
        }
      }
    };
    t.prototype._preload = function (t, e) {
      var n = t.id;
      var r = t.priority;
      var i = this._fetcherManager;
      var o = i.getModuleFetcher(n);
      if (o && o.shouldPreload()) {
        var s = this._idToTaskMap.get(o);
        if (s !== undefined) {
          t.addDependency(s);
          this._updateTaskPriority(s, e, r);
          return;
        }
        s = new tk(o, r, i.bootstrapFetcher, i, [n, {
          immediately: true
        }]);
        this._idToTaskMap.set(o, s);
        t.addDependency(s);
        this._startTask(s, e);
      }
    };
    t.prototype._loadModuleSelf = function (t, e) {
      var n = t.id;
      var r = t.priority;
      if ((n.status & m.ERROR) != 0) {
        n.resetLoadError();
      }
      var i = this._idToTaskMap.get(n);
      if (i !== undefined) {
        t.addDependency(i);
        this._updateTaskPriority(i, e, r);
        return;
      }
      i = new tk(n, r, n.load, n, null);
      this._idToTaskMap.set(n, i);
      t.addDependency(i);
      this._startTask(i, e);
    };
    t.prototype._loadRequiredDeps = function (t, e) {
      this._loadDepsImpl(t, t.id.requiredDeps, e, false);
    };
    t.prototype._loadOptionalDeps = function (t, e) {
      this._loadDepsImpl(t, t.id.optionalDeps, e, true);
    };
    t.prototype._loadDepsImpl = function (t, e, n, r) {
      var i = e.length;
      if (i !== 0) {
        var o = this.registry;
        var s = t.id;
        var a = this._moduleToTaskMap;
        var u = -1;
        while (++u < i) {
          var c = o.getModuleByKey(e[u]);
          if (!r || c && !c.group.disabled) {
            this._bootstrapModuleImpl(c, n, true);
            if (a.get(s) !== t) {
              return;
            }
            var l = a.get(c);
            if (l !== undefined) {
              t.addDependency(l);
            }
          }
        }
      }
    };
    t.prototype._updateModulePriority = function (t, e, n) {
      var r;
      var i;
      var o = this._moduleToTaskMap.get(t);
      if (o !== undefined && !(n >= o.priority)) {
        o.priority = n;
        var s = o.dependencies;
        if (s) {
          try {
            var a = to(s);
            var u = a.next();
            for (; !u.done; u = a.next()) {
              var c;
              var l = u.value;
              c = l;
              if (c.type === 1) {
                this._updateModulePriority(l.id, e, n);
              } else {
                this._updateTaskPriority(l, e, n);
              }
            }
          } catch (t) {
            r = {
              error: t
            };
          } finally {
            try {
              if (u && !u.done && (i = a.return)) {
                i.call(a);
              }
            } finally {
              if (r) {
                throw r.error;
              }
            }
          }
        }
      }
    };
    t.prototype._updateTaskPriority = function (t, e, n) {
      if (!(n >= t.priority) && this._idToTaskMap.get(t.id) === t) {
        t.priority = n;
        var r;
        var i = this._taskToScheduledIdMap.get(t);
        if (i !== undefined) {
          this._taskToScheduledIdMap.delete(t);
          if ((r = this._cancelTaskImpl) !== null && r !== undefined) {
            r.call(this, i);
          }
        }
        this._startTask(t, e);
      }
    };
    t.prototype._callModuleCompleteCallbacks = function (t, e) {
      var n = this._moduleCallbacksMap.get(e);
      if (n) {
        this._moduleCallbacksMap.delete(e);
        var r = -1;
        var i = n.length;
        while (++r < i) {
          n[r](t, e);
        }
      }
    };
    t.prototype._addModuleCompleteCallback = function (t, e) {
      var n = this._moduleCallbacksMap.get(t);
      if (n) {
        n.push(e);
      } else {
        this._moduleCallbacksMap.set(t, [e]);
      }
    };
    t.prototype._startTimeout = function (t, e) {
      var n = this;
      var r = setTimeout(function () {
        n._timers.delete(r);
        if (!n._isDisposed) {
          var e = n._moduleStatusMap.get(t);
          if (e !== undefined && (e === I.LOADING || e === I.PREPARING)) {
            n._finishModule(Error("[docx-editor] timeout to load \"" + t.toString() + "\""), T.LOAD_ERROR, t);
          }
        }
      }, e);
      this._timers.add(r);
      this._addModuleCompleteCallback(t, function () {
        if (n._timers.delete(r)) {
          clearTimeout(r);
        }
      });
    };
    return t;
  }();
  function tD(t) {
    return t.priority || 0;
  }
  var tN = function () {
    function t(t, e) {
      this.editor = t;
      this.blockModuleReady$ = new observableSubjectClass.Subject();
      this._isRunning = false;
      this._dynamicExtensionConfigMap = new Map();
      this._registry = new tS();
      this._registry.init(e.modules, e.moduleOptions);
      this._fetcherManager = new tm(e.scheduleTask);
      this._scheduler = new tR(this._registry, t, this._fetcherManager, e);
      this.moduleComplete$.subscribe(this.onModuleComplete.bind(this));
    }
    Object.defineProperty(t.prototype, "moduleComplete$", {
      get: function () {
        return this._scheduler.moduleComplete$;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "initialModulesReady$", {
      get: function () {
        return this._scheduler.initialModulesReady$;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "scheduler", {
      get: function () {
        return this._scheduler;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "registry", {
      get: function () {
        return this._registry;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "fetcherManager", {
      get: function () {
        return this._fetcherManager;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.init = function () {
      this._setupModules();
    };
    t.prototype.run = function () {
      if (this._isRunning) {
        throw Error("[module] Module manager is running!");
      }
      this._isRunning = true;
      this._scheduler.init();
      this._scheduler.start();
    };
    t.prototype.destroy = function () {
      this._scheduler.dispose();
      this._registry.dispose();
      this._fetcherManager.dispose();
      this._dynamicExtensionConfigMap.clear();
      this.blockModuleReady$.complete();
    };
    t.prototype.isBlockModuleReady = function (t, e) {
      var n = this.registry.getModuleByBlockType(t, e);
      return n != null && n.isReady();
    };
    t.prototype.isBlockModuleAsync = function (t, e) {
      var n = this.registry.getModuleByBlockType(t, e);
      return n != null && n.isAsync();
    };
    t.prototype.isBlockModuleExisted = function (t, e) {
      return this.registry.getModuleByBlockType(t, e) != null;
    };
    t.prototype.isModuleExistedForService = function (t) {
      var e = this.registry.getModulesByProvider(t);
      return e != null && e.length > 0;
    };
    t.prototype.loadModulesForService = function (t, e) {
      var n = this.registry.getModulesByProvider(t) || [];
      var r = te(te({}, e), {
        autoRetry: true
      });
      return this.loadModuleParallel(n, r);
    };
    t.prototype.setDynamicExtensionModuleConfig = function (t, e) {
      var n = this;
      t.provideExtensions.forEach(function (t) {
        n._dynamicExtensionConfigMap.set(t[0], e);
      });
    };
    t.prototype.isModuleExistedForExtension = function (t) {
      return this.registry.getModuleByExtensionProvider(t) != null;
    };
    t.prototype.loadModuleForExtension = function (t, e) {
      var n = this._dynamicExtensionConfigMap.get(t) || {};
      var r = this.registry.getModuleByExtensionProvider(t);
      if (!r) {
        return Promise.reject(Error("[docx-editor] failed to find module for extension \"" + dependencyInjectionContainer.getProviderName(t) + "\""));
      }
      var i = te(te(te({}, n), e), {
        autoRetry: true
      });
      return this.loadModule(r, i);
    };
    t.prototype.loadModule = function (t, e) {
      var n = this;
      return new Promise(function (r, i) {
        n.scheduler.bootstrapModule(t, e || {}, function (t, e) {
          if (t) {
            i(t);
          } else {
            r(e);
          }
        });
      });
    };
    t.prototype.loadModuleParallel = function (t, e) {
      var n = this;
      return new Promise(function (r, i) {
        (function (t, e, n) {
          var r = t.length;
          var i = 0;
          var o = false;
          if (r === 0) {
            o = true;
            n();
            return;
          }
          function s(t) {
            if (!o) {
              ++i;
              if (t) {
                o = true;
                n(t);
              } else if (i === r) {
                o = true;
                n();
              }
            }
          }
          t.forEach(function (t) {
            e(t, s);
          });
        })(t, function (t, r) {
          n.scheduler.bootstrapModule(t, e || {}, r);
        }, function (t) {
          if (t) {
            i(t);
          } else {
            r();
          }
        });
      });
    };
    t.prototype.loadBlockModule = function (t, e = {}) {
      var n = e.editMode || E.BASE;
      var r = this.registry.getModuleByBlockType(t, n);
      if (r) {
        return this.loadModule(r, te(te({}, e), {
          autoRetry: true
        }));
      } else {
        return Promise.reject(Error("[docx-editor] failed to find block module for \"" + t + "/" + n + "\""));
      }
    };
    t.prototype.loadBlockModuleByBlockId = function (t, e) {
      var n = this;
      var r = this.editor.structService.getBlockStructByBlockId(t);
      if (r) {
        return Promise.all(((e == null ? undefined : e.withAncestors) ? r.getAncestors(true) : [r]).map(function (t) {
          return n.loadBlockModule(t.type, e);
        }));
      } else {
        return Promise.resolve([]);
      }
    };
    t.prototype.loadAllBlockModules = function (t = E.BASE) {
      return this.loadModuleParallel(this.registry.getModuleListByEditMode(t).filter(function (t) {
        return !!(t.kind & w.BLOCK);
      }), {
        immediately: true,
        autoRetry: true
      });
    };
    t.prototype._setupModules = function () {
      var t = this.editor;
      var e = dependencyInjectionContainer.getInjector();
      var n = tv;
      var r = ty;
      tv = t;
      dependencyInjectionContainer.setInjector(t.injector);
      try {
        this.registry.forEachGroup(function (e) {
          ty = e;
          e.setup(t);
        });
      } finally {
        tv = n;
        ty = r;
        dependencyInjectionContainer.setInjector(e);
      }
    };
    t.prototype.onModuleComplete = function (t) {
      var e;
      var n;
      var r = t.error;
      var i = t.module;
      if ((i.kind & w.BLOCK) != 0) {
        var o = i.group.blockTypes;
        if (o.length !== 0) {
          try {
            var s = to(o);
            var a = s.next();
            for (; !a.done; a = s.next()) {
              var u = a.value;
              this.blockModuleReady$.next({
                error: r,
                module: i,
                blockType: u
              });
            }
          } catch (t) {
            e = {
              error: t
            };
          } finally {
            try {
              if (a && !a.done && (n = s.return)) {
                n.call(s);
              }
            } finally {
              if (e) {
                throw e.error;
              }
            }
          }
        }
      }
    };
    return t;
  }();
  (p = A ||= {})[p.EVENT = 0] = "EVENT";
  p[p.SUBJECT = 1] = "SUBJECT";
  var tx = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.type = A.SUBJECT;
      return e;
    }
    tt(e, t);
    e.prototype.onServiceDispose = function () {
      this.complete();
    };
    return e;
  }(observableSubjectClass.Subject);
  function tP(t) {
    if (!t.endsWith("-signal")) {
      throw Error("[editor] name should endsWith \"-signal\"");
    }
    var e = dependencyInjectionContainer.providerName(t);
    var n = dependencyInjectionContainer.providerName(t + "-receiver");
    return [e, n, {
      signal: e,
      receiver: n
    }];
  }
  var tB = dependencyInjectionContainer.providerName("renderer");
  function tL(t, e) {
    var n = tI;
    n.modelService.registerBlockModelCreator(t.type, t);
    n.renderer.registerViewCreator(t.type, e);
  }
  function tF(t, e) {
    tI.renderer.registerViewExtension(t, e);
  }
  function tj(t) {
    var e;
    var n;
    var r = tI.scopeManager;
    var i = tA;
    try {
      var o = to(t);
      var s = o.next();
      for (; !s.done; s = o.next()) {
        var a = s.value;
        if (a.scope) {
          tU(r, a.scope, a);
        } else {
          var u = r.addProvider(a, K);
          if (a.autoRun) {
            i.addAutoRun(u.id);
          }
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (s && !s.done && (n = o.return)) {
          n.call(o);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
  }
  function tU(t, e, n) {
    if (e.type === g.BLOCK_VIEW) {
      e.blocks.forEach(function (e) {
        t.addProvider(n, e);
      });
    }
  }
  function tz(t) {
    var e;
    var n;
    var r = tI.scopeManager;
    var i = tA;
    try {
      var o = to(t);
      var s = o.next();
      for (; !s.done; s = o.next()) {
        var a = s.value;
        var u = r.addProvider(a, K);
        i.addAutoRun(u.id);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (s && !s.done && (n = o.return)) {
          n.call(o);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
  }
  function tH(t) {
    var e;
    var n;
    var r = tI.scopeManager;
    try {
      var i = to(t);
      var o = i.next();
      for (; !o.done; o = i.next()) {
        var s = o.value;
        var a = s.provide;
        var u = s.scope;
        var c = Object.assign({}, s, {
          provide: a.signal
        });
        var l = {
          provide: a.receiver,
          useExisting: a.signal
        };
        if (u) {
          tU(r, u, c);
          tU(r, u, l);
        } else {
          r.addProvider(c, K);
          r.addProvider(l, K);
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        if (o && !o.done && (n = i.return)) {
          n.call(i);
        }
      } finally {
        if (e) {
          throw e.error;
        }
      }
    }
  }
  function tV(t) {
    tj([Object.assign({}, t, {
      provide: tB
    })]);
  }
  function tZ(t, e) {
    tI.renderer.updateBlockViewExtensions(t, e);
  }
  function tq(t) {
    tZ(tc, t);
  }
  function tW(t) {
    tA.addHook("init", function (e) {
      var n = t();
      if (n != null) {
        e.addHook("destroy", n);
      }
    });
  }
  function tG(t, e) {
    return tv.structService.registerBlockStructUpdateConfig(t, e);
  }
  function tY(t) {
    return tv.moduleService.scheduler.registerTrigger(t());
  }
  function tK(t) {
    var e = ty;
    tv.moduleService.scheduler.registerModuleTriggers(e, t);
  }
  function t$(t, e) {
    var n = ty;
    tv.moduleService.fetcherManager.registerFetcher(n, t, e);
  }
  function tX() {
    ty.disabled = true;
  }
  function tJ(t) {
    t(tv.dataset);
  }
  function tQ(t, e, n) {
    if (!t.moduleService.isModuleExistedForService(e)) {
      throw Error("[docx-editor] failed to load not-existed service: " + dependencyInjectionContainer.getProviderName(e));
    }
    return t.moduleService.loadModulesForService(e, n);
  }
  function t0(t) {
    return t && t.isTimeoutError === true;
  }
  var t1 = dependencyInjectionContainer.providerName("feature-manager");
  (h = C ||= {})[h.INIT = 0] = "INIT";
  h[h.LOADING = 1] = "LOADING";
  h[h.LOADED = 2] = "LOADED";
  var t2 = function () {
    function t() {
      this._metaMap = new Map();
      this._loadStatusMap = new Map();
      this._contentMap = new Map();
    }
    t.prototype.init = function (t) {
      var e = this;
      t.forEach(function (t) {
        e._metaMap.set(t.name, t);
        e._loadStatusMap.set(t.name, C.INIT);
      });
    };
    t.prototype.getFeatureLoadStatus = function (t) {
      if (this._metaMap.has(t)) {
        return this._loadStatusMap.get(t);
      } else {
        return C.INIT;
      }
    };
    t.prototype.loadFeatureConfigs = function (t, e, n) {
      var r = this;
      var i = this._metaMap.get(t);
      if (!i) {
        throw Error("[docx-kit FeatureManager] feature " + t + " not found");
      }
      if (this._loadStatusMap.get(t) === C.LOADED) {
        e(this._contentMap.get(t));
        return;
      }
      function o() {
        return i.configs.map(function (t) {
          return t.l();
        });
      }
      this._loadStatusMap.set(t, C.LOADING);
      if (i.async) {
        (function t(e, n = 3) {
          return new Promise(function (r, i) {
            e().then(r).catch(function (o) {
              if (n === 1) {
                i(o);
                return;
              }
              t(e, n - 1).then(r, i);
            });
          });
        })(function () {
          return Promise.all(o());
        }).then(function (n) {
          var i = n.map(function (t) {
            return t.default;
          }).reduce(function (t, e) {
            return ta(ta([], ts(t), false), ts(e), false);
          }, []);
          r._contentMap.set(t, i);
          r._loadStatusMap.set(t, C.LOADED);
          e(i);
        }, function (e) {
          r._loadStatusMap.set(t, C.INIT);
          if (n != null) {
            n(e);
          }
        });
      } else {
        try {
          var s = o().reduce(function (t, e) {
            return ta(ta([], ts(t), false), ts(e), false);
          }, []);
          this._contentMap.set(t, s);
          this._loadStatusMap.set(t, C.LOADED);
          e(s);
        } catch (e) {
          this._loadStatusMap.set(t, C.INIT);
          if (n != null) {
            n(e);
          }
        }
      }
    };
    return t;
  }();
  (f = M ||= {})[f.UPDATE_BY_DIFF = 1] = "UPDATE_BY_DIFF";
  f[f.UPDATE_BY_OPS = 2] = "UPDATE_BY_OPS";
  f[f.NO_CHILDREN_UPDATE = 0] = "NO_CHILDREN_UPDATE";
  var t3 = [];
  var t6 = 0;
  var t4 = "";
  var t5 = "init";
  var t8 = "inline";
  function t9(t, e, n) {
    var r = t.get(e);
    if (r) {
      if (r.record) {
        t.set(e, [r, n]);
      } else {
        r.push(n);
      }
    } else {
      t.set(e, n);
    }
  }
  function t7(t, e) {
    var n = t.get(e);
    if (n) {
      if (n.length) {
        return n;
      } else {
        return [n];
      }
    } else {
      return t3;
    }
  }
  function et(t, e, n) {
    var r = t.get(e);
    if (r) {
      if (Array.isArray(r)) {
        var i = r.filter(function (t) {
          return t !== n;
        });
        if (i.length > 1) {
          t.set(e, i);
        } else if (i.length === 1) {
          t.set(e, i[0]);
        } else {
          t.delete(e);
        }
      } else if (r === n) {
        t.delete(e);
      }
    }
  }
  var ee = 0;
  var en = function () {
    function t(t, e, n) {
      this.editorAPI = t;
      this.record = e;
      this.source = n;
      this.id = ++ee;
      this.parent = null;
      this.position = -1;
      this.children = [];
      this.active = true;
    }
    Object.defineProperty(t.prototype, "structService", {
      get: function () {
        return this.editorAPI.structService;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "snapshot", {
      get: function () {
        return this.record.snapshot;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "type", {
      get: function () {
        return this.snapshot.type;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "recordId", {
      get: function () {
        return this.record.id;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "previousSibling", {
      get: function () {
        var t = this.parent;
        var e = this.position;
        if (t && e > 0) {
          return t.children[e - 1];
        } else {
          return null;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "nextSibling", {
      get: function () {
        var t = this.parent;
        var e = this.position;
        if (t && e < t.children.length - 1) {
          return t.children[e + 1];
        } else {
          return null;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "previous", {
      get: function () {
        var t = this.parent;
        var e = this.position;
        if (t && e === 0) {
          return t;
        }
        for (var n = this.previousSibling; n;) {
          if (!n.children.length) {
            return n;
          }
          n = n.children[n.children.length - 1];
        }
        return null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "next", {
      get: function () {
        var t = this.children;
        if (t.length) {
          return t[0];
        }
        for (var e = this; e;) {
          var n = e.nextSibling;
          if (n) {
            return n;
          }
          e = e.parent;
        }
        return null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "root", {
      get: function () {
        for (var t = this; t.parent;) {
          t = t.parent;
        }
        return t;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "depth", {
      get: function () {
        var t = 0;
        var e = this.parent;
        while (e) {
          t++;
          e = e.parent;
        }
        return t;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.addDataListener = function (t) {
      this.structService.addBlockUpdateListener(this.id, t);
    };
    t.prototype.removeDataListener = function (t) {
      this.structService.removeBlockUpdateListener(this.id, t);
    };
    t.prototype.addChildrenListener = function (t) {
      this.structService.addBlockChildrenUpdateListener(this.id, t);
    };
    t.prototype.removeChildrenListener = function (t) {
      this.structService.removeBlockChildrenUpdateListener(this.id, t);
    };
    t.prototype.isCreatedFromLocal = function () {
      return this.structService.isLocalBlockStruct(this.id);
    };
    t.prototype.isRoot = function () {
      return this === this.editorAPI.structService.root;
    };
    t.prototype.isInline = function () {
      return this.position === -255;
    };
    t.prototype.isDataPending = function () {
      return this.type === tl;
    };
    t.prototype.toString = function () {
      return this.id + "#" + collaborativeEditingFlowSyncModule.transformOperationsWithInvert(this.recordId) + "/" + this.type;
    };
    t.prototype.getMaxDepth = function () {
      return function t(e) {
        var n;
        var r;
        var i = 1;
        try {
          var o = to(e.children);
          var s = o.next();
          for (; !s.done; s = o.next()) {
            var a = s.value;
            i = Math.max(i, t(a) + 1);
          }
        } catch (t) {
          n = {
            error: t
          };
        } finally {
          try {
            if (s && !s.done && (r = o.return)) {
              r.call(o);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
        return i;
      }(this);
    };
    t.prototype.getAncestors = function (t) {
      return function (t, e) {
        var n = [];
        var r = e ? t : t.parent;
        while (r) {
          n.push(r);
          r = r.parent;
        }
        return n.reverse();
      }(this, t);
    };
    t.prototype.traverse = function (t, e) {
      (e === "post" ? function t(e, n, r) {
        var i;
        var o;
        try {
          var s = to(e.children);
          var a = s.next();
          for (; !a.done; a = s.next()) {
            var u = a.value;
            t(u, n);
          }
        } catch (t) {
          i = {
            error: t
          };
        } finally {
          try {
            if (a && !a.done && (o = s.return)) {
              o.call(s);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
        if (!r) {
          n(e);
        }
      } : function t(e, n, r) {
        var i;
        var o;
        if (r || n(e) !== false) {
          try {
            var s = to(e.children);
            var a = s.next();
            for (; !a.done; a = s.next()) {
              var u = a.value;
              t(u, n);
            }
          } catch (t) {
            i = {
              error: t
            };
          } finally {
            try {
              if (a && !a.done && (o = s.return)) {
                o.call(s);
              }
            } finally {
              if (i) {
                throw i.error;
              }
            }
          }
        }
      })(this, t);
    };
    t.prototype.contains = function (t) {
      return !!t && function (t, e) {
        if (e === t) {
          return false;
        }
        for (var n = e.parent; n;) {
          if (n === t) {
            return true;
          }
          n = n.parent;
        }
        return false;
      }(this, t);
    };
    t.prototype.findDescendant = function (t) {
      return function t(e, n) {
        var r;
        var i;
        var o = e.children;
        try {
          var s = to(o);
          var a = s.next();
          for (; !a.done; a = s.next()) {
            var u = a.value;
            if (n(u)) {
              return u;
            }
            var c = t(u, n);
            if (c) {
              return c;
            }
          }
        } catch (t) {
          r = {
            error: t
          };
        } finally {
          try {
            if (a && !a.done && (i = s.return)) {
              i.call(s);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
        return null;
      }(this, t);
    };
    t.prototype.findAllDescendants = function (t) {
      return function t(e, n, r = []) {
        var i;
        var o;
        var s = e.children;
        try {
          var a = to(s);
          var u = a.next();
          for (; !u.done; u = a.next()) {
            var c = u.value;
            if (n(c)) {
              r.push(c);
            }
            t(c, n, r);
          }
        } catch (t) {
          i = {
            error: t
          };
        } finally {
          try {
            if (u && !u.done && (o = a.return)) {
              o.call(a);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
        return r;
      }(this, t);
    };
    t.prototype.closest = function (t, e = function () {
      return true;
    }) {
      return function (t, e, n = function () {
        return true;
      }) {
        var r = e ? t.next : t.previous;
        if (!r) {
          return null;
        }
        while (r) {
          if (n(r)) {
            return r;
          }
          r = e ? r.next : r.previous;
        }
        return null;
      }(this, t, e);
    };
    return t;
  }();
  var er = dependencyInjectionContainer.providerName("block-struct");
  (d = k ||= {})[d.ADD = 1] = "ADD";
  d[d.REMOVE = 2] = "REMOVE";
  d[d.UPDATE = 3] = "UPDATE";
  (v = O ||= {})[v.DATA = 1] = "DATA";
  v[v.CHILDREN = 2] = "CHILDREN";
  var ei = function () {
    function t(t) {
      this.onError = t;
      this.listeners = new Map();
      this.active = false;
      this.sub = null;
    }
    t.prototype.init = function (t) {
      var e = this;
      this.sub = t.subscribe(function (t) {
        if (e.active) {
          var n;
          var r;
          var i;
          var o;
          var s;
          var a;
          var u = t.mutations;
          var c = e.listeners;
          try {
            var l = to(u.removed);
            var p = l.next();
            for (; !p.done; p = l.next()) {
              var h = p.value;
              var f = h.parent;
              if (f && f.active) {
                e.dispatch(c, f.id, O.CHILDREN, h, t);
              }
            }
          } catch (t) {
            n = {
              error: t
            };
          } finally {
            try {
              if (p && !p.done && (r = l.return)) {
                r.call(l);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
          try {
            var d = to(u.added);
            var v = d.next();
            for (; !v.done; v = d.next()) {
              var h = v.value;
              e.dispatch(c, h.block.parent.id, O.CHILDREN, h, t);
            }
          } catch (t) {
            i = {
              error: t
            };
          } finally {
            try {
              if (v && !v.done && (o = d.return)) {
                o.call(d);
              }
            } finally {
              if (i) {
                throw i.error;
              }
            }
          }
          try {
            var y = to(u.updated);
            var g = y.next();
            for (; !g.done; g = y.next()) {
              var h = g.value;
              var _ = h.block;
              e.dispatch(c, _.id, O.DATA, h, t);
              if (h.originalType && _.parent) {
                e.dispatch(c, _.parent.id, O.CHILDREN, h, t);
              }
            }
          } catch (t) {
            s = {
              error: t
            };
          } finally {
            try {
              if (g && !g.done && (a = y.return)) {
                a.call(y);
              }
            } finally {
              if (s) {
                throw s.error;
              }
            }
          }
        }
      });
    };
    t.prototype.on = function (t, e, n) {
      var r = this.listeners;
      var i = r.get(t);
      var o = {
        fn: n,
        type: e
      };
      if (i) {
        if (i.fn) {
          r.set(t, [i, o]);
        } else {
          i.push(o);
        }
      } else {
        r.set(t, o);
      }
      this.active = true;
    };
    t.prototype.off = function (t, e, n) {
      var r;
      var i;
      var o = this.listeners;
      var s = o.get(t);
      if (s) {
        if (s.fn) {
          if (s.fn === n && s.type === e) {
            o.delete(t);
          }
        } else {
          var a = [];
          try {
            var u = to(s);
            var c = u.next();
            for (; !c.done; c = u.next()) {
              var l = c.value;
              if (l.fn !== n || l.type !== e) {
                a.push(l);
              }
            }
          } catch (t) {
            r = {
              error: t
            };
          } finally {
            try {
              if (c && !c.done && (i = u.return)) {
                i.call(u);
              }
            } finally {
              if (r) {
                throw r.error;
              }
            }
          }
          if (a.length) {
            o.set(t, a.length === 1 ? a[0] : a);
          } else {
            o.delete(t);
          }
        }
        this.active = !!o.size;
      }
    };
    t.prototype.clear = function (t) {
      this.listeners.delete(t);
    };
    t.prototype.destroy = function () {
      this.active = false;
      this.listeners.clear();
      if (this.sub) {
        this.sub.unsubscribe();
        this.sub = null;
      }
    };
    t.prototype.dispatch = function (t, e, n, r, i) {
      var o = t.get(e);
      if (o) {
        if (o.fn) {
          if (o.type === n) {
            eo(o.fn, r, i, this.onError);
          }
        } else {
          var s = 0;
          var a = o.length;
          for (; s < a; ++s) {
            var u = o[s];
            if (u.type === n) {
              eo(u.fn, r, i, this.onError);
            }
          }
        }
      }
    };
    return t;
  }();
  function eo(t, e, n, r) {
    try {
      t(e, n);
    } catch (t) {
      r(t);
    }
  }
  var es = function () {
    function t() {
      this.added = [];
      this.updated = [];
      this.removed = [];
    }
    t.prototype.forEach = function (t) {
      this.removed.forEach(t);
      this.added.forEach(t);
      this.updated.forEach(t);
    };
    return t;
  }();
  var ea = function () {
    function t(t) {
      this.context = t;
      this.mutations = new es();
    }
    Object.defineProperty(t.prototype, "options", {
      get: function () {
        return this.context.options;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "source", {
      get: function () {
        return this.options && this.options.source || t4;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "from", {
      get: function () {
        return this.options && this.options.from;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "name", {
      get: function () {
        return this.options && this.options.transactionName;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "frame", {
      get: function () {
        return this.options && this.options.transactionFrame;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "extra", {
      get: function () {
        return this.options && this.options.extra;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "recordOps", {
      get: function () {
        return this.context.recordOps;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "error", {
      get: function () {
        return this.context.error;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.isLocal = function () {
      return !!this.context.isLocal;
    };
    return t;
  }();
  var eu = function () {
    function t(t) {
      this.onError = t;
      this.closed = false;
      this.post$ = new observableSubjectClass.Subject();
      this.callbacks = [];
      this.cacheSubs = null;
      this.post$.subscribe({
        error: t
      });
    }
    Object.defineProperty(t.prototype, "subs", {
      get: function () {
        this.cacheSubs ||= this.callbacks.slice();
        return this.cacheSubs;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.subscribe = function (t) {
      if (this.closed) {
        return subscriptionCore.Subscription.EMPTY;
      } else {
        this.callbacks.push(t);
        this.cacheSubs = null;
        return this.makeUnsubscribable(t);
      }
    };
    t.prototype.next = function (t) {
      if (!this.closed) {
        var e;
        var n;
        var r = this.subs;
        var i = this.onError;
        try {
          var o = to(r);
          var s = o.next();
          for (; !s.done; s = o.next()) {
            var a = s.value;
            (function (t, e, n) {
              try {
                t(e);
              } catch (t) {
                n(t);
              }
            })(a, t, i);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (s && !s.done && (n = o.return)) {
              n.call(o);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        this.post$.next(t);
      }
    };
    t.prototype.close = function () {
      if (!this.closed) {
        this.closed = true;
        this.callbacks = [];
        this.cacheSubs = null;
        this.post$.complete();
      }
    };
    t.prototype.makeUnsubscribable = function (t) {
      var e = this;
      return new subscriptionCore.Subscription(function () {
        if (!e.closed) {
          var n = e.callbacks.indexOf(t);
          if (n >= 0) {
            e.callbacks.splice(n, 1);
            e.cacheSubs = null;
          }
        }
      });
    };
    return t;
  }();
  function ec(t, e) {
    return e.position - t.position;
  }
  function el(t, e) {
    return t.block.position - e.block.position;
  }
  function ep(t, e, n) {
    var r = e.removed;
    var i = r.parent;
    var o = t.get(i);
    var s = null;
    if (!o || !o.removed) {
      var a = (s = n ? r.nextSibling : r.previousSibling) && t.get(s);
      var u = a && a.removed;
      if (u) {
        s = n ? u.nextSibling : u.previousSibling;
      }
    }
    if (n) {
      r.nextSibling = s;
    } else {
      r.previousSibling = s;
    }
  }
  var eh = "children";
  function ef(t) {
    return t.p[0] === eh && collaborativeEditingFlowSyncModule.$b(t);
  }
  function ed(t) {
    var e = t.p;
    return e.length === 1 && e[0] === eh && collaborativeEditingFlowSyncModule.transformOperations(t);
  }
  function ev(t) {
    return t.p[0] === eh && collaborativeEditingFlowSyncModule.isListMoveOperation(t);
  }
  function ey(t) {
    return t.action === k.ADD && !t.moveFrom;
  }
  function eg(t) {
    return t.action === k.REMOVE && !t.moveTo;
  }
  function e_(t) {
    return t.action === k.REMOVE && !!t.moveTo;
  }
  function em(t) {
    return t.action === k.ADD && !!t.moveFrom;
  }
  function eb(t) {
    return t.action === k.UPDATE;
  }
  var eE = function () {
    function t() {
      this.added = [];
      this.removed = [];
      this.updated = [];
      this.infos = new Map();
      this.originalPositions = new Map();
    }
    t.prototype.onBlockAdd = function (t, e) {
      var n = ew(this.infos, t);
      var r = n.added;
      if (r) {
        r.valid = true;
      } else {
        r = {
          action: k.ADD,
          block: t,
          valid: true,
          moveFrom: null,
          explicit: false
        };
        this.added.push(r);
        n.added = r;
      }
      if (e) {
        r.explicit = true;
      }
      if (n.updated) {
        n.updated.valid = true;
      }
    };
    t.prototype.onBlockRemove = function (t, e) {
      var n = ew(this.infos, t);
      if (n) {
        var r = n.added;
        var i = n.updated;
        var o = n.removed;
        if (i) {
          i.valid = false;
        }
        if (r) {
          r.valid = false;
          if (o) {
            o.valid = true;
            if (e) {
              o.explicit = true;
            }
          } else {
            this.infos.delete(t);
          }
          return;
        }
        if (o) {
          o.valid = true;
        } else {
          var s;
          var a = this.originalPositions.get(t);
          s = a === undefined ? t.position : a;
          o = {
            action: k.REMOVE,
            block: t,
            valid: true,
            position: s,
            parent: t.parent,
            previousSibling: t.previousSibling,
            nextSibling: t.nextSibling,
            moveTo: null,
            explicit: false
          };
          n.removed = o;
          this.removed.push(o);
        }
        if (e) {
          o.explicit = true;
        }
      }
    };
    t.prototype.onBlockUpdate = function (t, e, n) {
      var r = ew(this.infos, t);
      if (!r.updated) {
        var i = {
          action: k.UPDATE,
          block: t,
          valid: true,
          ops: e,
          originalType: n && t.type !== n ? n : undefined
        };
        r.updated = i;
        this.updated.push(i);
      }
    };
    t.prototype.onBlockPositionUpdate = function (t, e) {
      var n = this.originalPositions;
      if (!n.has(t)) {
        n.set(t, e);
      }
    };
    return t;
  }();
  function ew(t, e) {
    var n = t.get(e);
    if (!n) {
      var r = {
        added: null,
        updated: null,
        removed: null
      };
      t.set(e, r);
      return r;
    }
    return n;
  }
  var eS = function () {
    function t(t, e, n) {
      this.recorder = t;
      this.delegate = e;
      this.source = n;
      this.childrenSettled = new Set();
      this.recycledBlocks = new Map();
      this.newBlocks = new Set();
      this.recordToNewBlocks = new Map();
    }
    t.prototype.forEachBlocks = function (t, e, n) {
      this.delegate.forEachBlockStructsByRecordId(t, e);
      if (n) {
        var r = this.recycledBlocks.get(t);
        if (r) {
          if (r.record) {
            e(r);
          } else {
            r.forEach(e);
          }
        }
      }
    };
    t.prototype.insertChild = function (t, e, n, r) {
      if (!this.isChildrenSettled(t)) {
        this.insertChildRaw(t, e, n);
        this.updateSiblingsPosition(t, e + 1, !r);
      }
    };
    t.prototype.removeChild = function (t, e, n) {
      if (!this.isChildrenSettled(t) && t.children[e]) {
        this.removeChildRaw(t, e, 0);
        this.updateSiblingsPosition(t, e, !n);
      }
    };
    t.prototype.replaceChild = function (t, e, n) {
      if (!this.isChildrenSettled(t)) {
        var r = t.children[e];
        this.removeRecursively(r, true);
        t.children[e] = this.createRecursively(t, e, n, true);
      }
    };
    t.prototype.rebuildChildren = function (t) {
      if (!this.isChildrenSettled(t)) {
        var e = this.dataService.deriveRecordChildren(t.record.id);
        this.updateChildren(t, e);
        this.settleChildren(t);
      }
    };
    t.prototype.update = function (t, e, n) {
      if (!this.newBlocks.has(t)) {
        this.onBlockUpdate(t, e, n);
      }
    };
    Object.defineProperty(t.prototype, "dataService", {
      get: function () {
        return this.delegate.dataService;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "editorAPI", {
      get: function () {
        return this.delegate.editorAPI;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.isChildrenSettled = function (t) {
      return this.childrenSettled.has(t);
    };
    t.prototype.settleChildren = function (t) {
      this.childrenSettled.add(t);
    };
    t.prototype.onBlockAdd = function (t, e) {
      this.delegate.onBlockAdd(t);
      this.recorder.onBlockAdd(t, e);
    };
    t.prototype.onBlockUpdate = function (t, e, n) {
      this.delegate.onBlockUpdate(t, n);
      this.recorder.onBlockUpdate(t, e, n);
    };
    t.prototype.onBlockRemove = function (t, e) {
      this.childrenSettled.delete(t);
      this.delegate.onBlockRemove(t);
      this.recorder.onBlockRemove(t, e);
    };
    t.prototype.onBlockPositionUpdate = function (t, e, n) {
      if (n) {
        this.recorder.onBlockPositionUpdate(t, e);
      }
    };
    t.prototype.createRecursively = function (t, e, n, r) {
      var i = function (t, e) {
        var n = t.get(e);
        if (!n) {
          return null;
        }
        if (!Array.isArray(n)) {
          t.delete(e);
          return n;
        }
        var r = n.pop();
        if (n.length) {
          if (n.length === 1) {
            t.set(e, n[0]);
          }
        } else {
          t.delete(e);
        }
        return r;
      }(this.recycledBlocks, n);
      if (!i) {
        var o = this.dataService.ensureRecordExist(n);
        i = new en(this.editorAPI, o, this.source);
        this.newBlocks.add(i);
        t9(this.recordToNewBlocks, i.recordId, i);
      }
      this.settleChildren(i);
      i.parent = t;
      i.position = e;
      this.createDerivation(i);
      this.onBlockAdd(i, r);
      return i;
    };
    t.prototype.createDerivation = function (t) {
      var e = t.recordId;
      var n = this.dataService.deriveRecordChildren(e);
      var r = n.length;
      if (r) {
        var i = t.children;
        var o = 0;
        for (; o < r; ++o) {
          i[o] = this.createRecursively(t, o, n[o], false);
        }
      }
    };
    t.prototype.removeRecursively = function (t, e) {
      if (t.active) {
        this.clearChildren(t, false);
        var n = this.recordToNewBlocks;
        var r = this.newBlocks.delete(t);
        if (r) {
          et(n, t.recordId, t);
        } else {
          t9(this.recycledBlocks, t.recordId, t);
        }
        this.onBlockRemove(t, e);
        t.parent = null;
        if (!r) {
          var i = t.recordId;
          var o = n.get(i);
          if (o) {
            var s = o.record ? o : o[0];
            var a = s.parent;
            var u = s.position;
            if (a) {
              this.replaceChild(a, u, i);
            }
          }
        }
      }
    };
    t.prototype.updateChildren = function (t, e) {
      var n = t.children;
      var r = e.length;
      if (n.length || r) {
        if (n.length) {
          if (r) {
            this.diffChildren(t, e);
          } else {
            this.clearChildren(t, true);
            n.length = 0;
          }
        } else {
          this.fillChildren(t, e);
        }
      }
      return n;
    };
    t.prototype.fillChildren = function (t, e) {
      var n;
      var r;
      var i = 0;
      var o = t.children;
      try {
        var s = to(e);
        var a = s.next();
        for (; !a.done; a = s.next()) {
          var u = a.value;
          o[i] = this.createRecursively(t, i, u, true);
          ++i;
        }
      } catch (t) {
        n = {
          error: t
        };
      } finally {
        try {
          if (a && !a.done && (r = s.return)) {
            r.call(s);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
    };
    t.prototype.clearChildren = function (t, e) {
      var n = t.children;
      var r = n.length;
      while (--r >= 0) {
        this.removeRecursively(n[r], e);
      }
      n.length = 0;
    };
    t.prototype.diffChildren = function (t, e) {
      var n = t.children;
      var r = 0;
      var i = n.length - 1;
      var o = e.length - 1;
      while (r <= i && r <= o && n[r].recordId === e[r]) {
        ++r;
      }
      while (i >= r && o >= r && n[i].recordId === e[o]) {
        --i;
        --o;
      }
      if (r > i) {
        while (r <= o) {
          this.insertChildRaw(t, r, e[r]);
          ++r;
        }
        this.updateSiblingsPosition(t, r, true);
      } else if (r > o) {
        while (r <= i) {
          this.removeChildRaw(t, i--, 0);
        }
        this.updateSiblingsPosition(t, r, true);
      } else {
        var s = new Set();
        var a = r;
        while (a <= o) {
          s.add(e[a++]);
        }
        a = r;
        for (var u = 0; a <= o && a <= i;) {
          var c = e[a];
          var l = n[a].recordId;
          if (l !== c) {
            if (s.has(l)) {
              this.insertChildRaw(t, a++, c);
              ++u;
              ++i;
            } else {
              this.removeChildRaw(t, a, u--);
              --i;
            }
          } else {
            ++a;
          }
        }
        while (a <= i) {
          this.removeChildRaw(t, i--, u);
        }
        while (a <= o) {
          this.insertChildRaw(t, a, e[a]);
          ++a;
        }
        this.updateSiblingsPosition(t, r, true);
      }
    };
    t.prototype.insertChildRaw = function (t, e, n) {
      var r = this.createRecursively(t, e, n, true);
      var i = t.children;
      if (e === i.length) {
        i.push(r);
      } else {
        i.splice(e, 0, r);
      }
    };
    t.prototype.removeChildRaw = function (t, e, n) {
      var r = t.children[e];
      if (n) {
        this.onBlockPositionUpdate(r, r.position, true);
        r.position += n;
      }
      this.removeRecursively(r, true);
      var i = t.children;
      if (e + 1 === i.length) {
        i.pop();
      } else {
        i.splice(e, 1);
      }
    };
    t.prototype.updateSiblingsPosition = function (t, e, n) {
      var r = t.children;
      var i = r.length;
      while (e < i) {
        var o = r[e];
        var s = o.position;
        o.position = e++;
        this.onBlockPositionUpdate(o, s, n);
      }
    };
    return t;
  }();
  function eT(t, e) {
    t.forEachBlocks(e.id, function (e) {
      t.rebuildChildren(e);
    });
  }
  function eI(t, e) {
    var n = e.record;
    var r = e.ops;
    var i = function (t) {
      var e;
      var n;
      var r = t.ops;
      var i = t.snapshotBeforeApply;
      if (i) {
        return i.type;
      }
      try {
        var o = to(r);
        var s = o.next();
        for (; !s.done; s = o.next()) {
          var a = s.value;
          if (function (t) {
            if (t.subType) {
              return false;
            }
            var e = t.p;
            var n = t.action;
            return e.length === 1 && e[0] === "type" && n.oi !== n.od;
          }(a)) {
            return a.action.od;
          }
          if (a.p.length === 0 && collaborativeEditingFlowSyncModule.transformOperations(a)) {
            return a.action.od.type;
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (s && !s.done && (n = o.return)) {
            n.call(o);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return "";
    }(e);
    t.forEachBlocks(n.id, function (e) {
      t.update(e, r, i);
    }, true);
  }
  var eA = function () {
    function t(t) {
      var e = this;
      this.editorAPI = t;
      this.ready$ = new tT();
      this.beforeMutation$ = new observableSubjectClass.Subject();
      this.inlineMutation$ = new observableSubjectClass.Subject();
      this.error$ = new observableSubjectClass.Subject();
      this.initErrors = null;
      this.blocks = new Map();
      this.localBlockIds = new Set();
      this.inlineBlockIds = new Map();
      this.typeToBlocks = new Map();
      this.recordToBlocks = new Map();
      this.configs = new Map();
      this.rootBlock = null;
      this.ready = false;
      function n(t) {
        if (e.ready) {
          e.error$.next(t);
        } else {
          e.initErrors ||= [];
          e.initErrors.push(t);
        }
      }
      this.mutation$ = new eu(n);
      this.dispatcher = new ei(n);
    }
    Object.defineProperty(t.prototype, "root", {
      get: function () {
        return this.rootBlock;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.isReady = function () {
      return this.ready;
    };
    t.prototype.destroy = function () {
      this.ready$.complete();
      this.beforeMutation$.complete();
      this.dispatcher.destroy();
      this.mutation$.close();
      this.inlineMutation$.complete();
      this.blocks.clear();
      this.recordToBlocks.clear();
      this.inlineBlockIds.clear();
      this.localBlockIds.clear();
    };
    t.prototype.getBlockStructCount = function () {
      return this.blocks.size;
    };
    t.prototype.getAllBlockStructs = function () {
      return this.blocks.values();
    };
    t.prototype.traverse = function (t, e) {
      var n = this.rootBlock;
      if (n) {
        n.traverse(t, e);
      }
    };
    t.prototype.find = function (t) {
      var e;
      var n;
      try {
        var r = to(this.blocks.values());
        var i = r.next();
        for (; !i.done; i = r.next()) {
          var o = i.value;
          if (t(o)) {
            return o;
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (i && !i.done && (n = r.return)) {
            n.call(r);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return null;
    };
    t.prototype.findAll = function (t) {
      var e;
      var n;
      var r = [];
      try {
        var i = to(this.blocks.values());
        var o = i.next();
        for (; !o.done; o = i.next()) {
          var s = o.value;
          if (t(s)) {
            r.push(s);
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (n = i.return)) {
            n.call(i);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return r;
    };
    t.prototype.getBlockStructByBlockId = function (t) {
      return this.blocks.get(t);
    };
    t.prototype.hasBlockStructByBlockId = function (t) {
      return this.blocks.has(t);
    };
    t.prototype.getBlockStructsByRecordId = function (t) {
      return t7(this.recordToBlocks, t);
    };
    t.prototype.hasBlockStructsByRecordId = function (t) {
      return this.recordToBlocks.has(t);
    };
    t.prototype.getBlockStructsByType = function (t) {
      return t7(this.typeToBlocks, t);
    };
    t.prototype.hasBlockStructsByType = function (t) {
      return this.typeToBlocks.has(t);
    };
    t.prototype.registerBlockStructUpdateConfig = function (t, e) {
      this.configs.set(t, e);
    };
    t.prototype.isLocalBlockStruct = function (t) {
      return this.localBlockIds.has(t);
    };
    t.prototype.addBlockUpdateListener = function (t, e) {
      this.dispatcher.on(t, O.DATA, e);
    };
    t.prototype.removeBlockUpdateListener = function (t, e) {
      this.dispatcher.off(t, O.DATA, e);
    };
    t.prototype.addBlockChildrenUpdateListener = function (t, e) {
      this.dispatcher.on(t, O.CHILDREN, e);
    };
    t.prototype.removeBlockChildrenUpdateListener = function (t, e) {
      this.dispatcher.off(t, O.CHILDREN, e);
    };
    t.prototype.createInlineBlockStruct = function (t, e) {
      var n = this.editorAPI.dataService.ensureRecordExist(t);
      var r = new en(this.editorAPI, n, t8);
      r.position = -255;
      r.parent = e;
      this.onBlockAdd(r);
      var i = this.inlineBlockIds.get(e.id);
      if (i) {
        i.add(r.id);
      } else {
        this.inlineBlockIds.set(e.id, new Set([r.id]));
      }
      this.inlineMutation$.next([{
        action: k.ADD,
        block: r
      }]);
      return r;
    };
    t.prototype.destroyInlineBlockStruct = function (t) {
      var e = this.getBlockStructByBlockId(t);
      if (!e) {
        return false;
      }
      var n = e.parent;
      th(n);
      this.onBlockRemove(e);
      this.dispatcher.clear(e.id);
      e.parent = null;
      var r = this.inlineBlockIds.get(n.id);
      if (r) {
        r.delete(e.id);
        if (!r.size) {
          this.inlineBlockIds.delete(n.id);
        }
      }
      this.inlineMutation$.next([{
        action: k.REMOVE,
        block: e,
        parent: n
      }]);
      return true;
    };
    Object.defineProperty(t.prototype, "dataService", {
      get: function () {
        return this.editorAPI.dataService;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.forEachBlockStructsByRecordId = function (t, e) {
      var n = this.recordToBlocks.get(t);
      if (n) {
        if (n.record) {
          e(n);
        } else {
          n.forEach(e);
        }
      }
    };
    t.prototype.getChildrenUpdateType = function (t) {
      var e = t.record.snapshot.type;
      var n = this.configs.get(e);
      if (n && n.getChildrenUpdateType) {
        return n.getChildrenUpdateType(t);
      } else {
        return M.UPDATE_BY_OPS;
      }
    };
    t.prototype.onBlockAdd = function (t) {
      t.active = true;
      this.blocks.set(t.id, t);
      t9(this.recordToBlocks, t.recordId, t);
      t9(this.typeToBlocks, t.type, t);
    };
    t.prototype.onBlockUpdate = function (t, e) {
      if (e && e !== t.type) {
        et(this.typeToBlocks, e, t);
        t9(this.typeToBlocks, t.type, t);
      }
    };
    t.prototype.onBlockRemove = function (t) {
      t.active = false;
      this.blocks.delete(t.id);
      et(this.recordToBlocks, t.recordId, t);
      et(this.typeToBlocks, t.type, t);
    };
    t.prototype.finalizeBlockAdd = function (t, e) {
      if (e.isLocal()) {
        this.localBlockIds.add(t.id);
      }
    };
    t.prototype.finalizeBlockRemove = function (t, e) {
      var n = this;
      this.localBlockIds.delete(t.id);
      this.dispatcher.clear(t.id);
      var r = this.inlineBlockIds.get(t.id);
      if (r) {
        r.forEach(function (t) {
          n.destroyInlineBlockStruct(t);
        });
      }
    };
    t.prototype.onInitialDataReady = function () {
      var t = this;
      this.dispatcher.init(this.mutation$);
      this.dataService.startBatchCallback(function () {
        try {
          var e;
          var n;
          e = t.editorAPI;
          n = function (e) {
            t.onBlockAdd(e);
          };
          t.rootBlock = function t(e, n, r, i, o) {
            var s;
            var a;
            var u = e.dataService;
            var c = new en(e, u.ensureRecordExist(n), t5);
            c.parent = r;
            c.position = i;
            o(c);
            var l = u.deriveRecordChildren(n);
            var p = 0;
            try {
              var h = to(l);
              var f = h.next();
              for (; !f.done; f = h.next()) {
                var d = f.value;
                var v = t(e, d, c, p, o);
                c.children[p++] = v;
              }
            } catch (t) {
              s = {
                error: t
              };
            } finally {
              try {
                if (f && !f.done && (a = h.return)) {
                  a.call(h);
                }
              } finally {
                if (s) {
                  throw s.error;
                }
              }
            }
            return c;
          }(e, e.dataService.rootRecordId, null, -1, n);
        } catch (e) {
          t.initErrors ||= [];
          t.initErrors.push(e);
        }
        t.ready = true;
        var r = t.initErrors;
        if (r) {
          t.initErrors = null;
          t.ready$.error(Error(r.map(function (t) {
            return "message: " + t.message + "\nstack: " + t.stack;
          }).join("\n")));
        } else {
          t.ready$.next();
        }
      });
    };
    t.prototype.onBeforeChange = function (t) {
      this.beforeMutation$.next({
        options: t.options
      });
    };
    t.prototype.onChange = function (t) {
      var e = t.recordOps;
      var n = t.options;
      this.dispatchMutation(e, n, undefined);
    };
    t.prototype.onError = function (t) {
      var e = t.recordOps;
      var n = t.options;
      if (e && n) {
        this.dispatchMutation(e, n, t);
      }
    };
    t.prototype.dispatchMutation = function (t, e, n) {
      var r;
      var i = e.from;
      var o = e.source || i || t4;
      var s = new ea({
        recordOps: t,
        options: e,
        isLocal: i === collaborativeEditingFlowSyncModule.kq.LOCAL || i === collaborativeEditingFlowSyncModule.kq.TEMPORARY,
        error: n
      });
      var a = [];
      (function (t, e, n) {
        var r;
        var i;
        var o = e.infos;
        var s = e.removed;
        s.sort(ec);
        for (var a = s.length; --a >= 0;) {
          ep(o, o.get(s[a].block), false);
        }
        var u = n.mutations;
        try {
          var c = to(s);
          var l = c.next();
          for (; !l.done; l = c.next()) {
            var p = l.value;
            var h = p.block;
            var f = o.get(h);
            ep(o, f, true);
            if (p.valid) {
              var d = f.added;
              if (d && d.valid) {
                p.moveTo = d;
                d.moveFrom = p;
              } else {
                t.finalizeBlockRemove(h, n);
                if (f.updated) {
                  f.updated.valid = false;
                }
              }
              u.removed.push(p);
            }
          }
        } catch (t) {
          r = {
            error: t
          };
        } finally {
          try {
            if (l && !l.done && (i = c.return)) {
              i.call(c);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
      })(this, r = function (t, e, n) {
        var r;
        var i;
        var o = new eE();
        var s = new eS(o, e, n);
        try {
          var a = to(t);
          var u = a.next();
          for (; !u.done; u = a.next()) {
            var c = u.value;
            var l = e.getChildrenUpdateType(c);
            if (l === M.UPDATE_BY_OPS) {
              (function (t, e) {
                var n;
                var r;
                var i = e.record;
                var o = e.ops;
                var s = o.length === 1;
                try {
                  var a = to(o);
                  var u = a.next();
                  for (; !u.done; u = a.next()) {
                    var c = u.value;
                    if (c.p.length === 0 || ed(c)) {
                      eT(t, i);
                      break;
                    }
                    if (ef(c)) {
                      (function (t, e, n, r) {
                        t.forEachBlocks(e.id, function (e) {
                          t.insertChild(e, n.p[1], n.action.li, r);
                        });
                      })(t, i, c, s);
                    } else if (c.p[0] === eh && collaborativeEditingFlowSyncModule.isDeleteOperation(c)) {
                      (function (t, e, n, r) {
                        t.forEachBlocks(e.id, function (e) {
                          t.removeChild(e, n.p[1], r);
                        });
                      })(t, i, c, s);
                    } else if (ev(c)) {
                      (function (t, e, n) {
                        t.forEachBlocks(e.id, function (e) {
                          t.replaceChild(e, n.p[1], n.action.li);
                        });
                      })(t, i, c);
                    }
                  }
                } catch (t) {
                  n = {
                    error: t
                  };
                } finally {
                  try {
                    if (u && !u.done && (r = a.return)) {
                      r.call(a);
                    }
                  } finally {
                    if (n) {
                      throw n.error;
                    }
                  }
                }
                eI(t, e);
              })(s, c);
            } else {
              var p = c.record;
              if (l === M.UPDATE_BY_DIFF) {
                eT(s, p);
              }
              eI(s, c);
            }
          }
        } catch (t) {
          r = {
            error: t
          };
        } finally {
          try {
            if (u && !u.done && (i = a.return)) {
              i.call(a);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
        return o;
      }(t, this, o), s);
      (function (t, e, n) {
        var r;
        var i;
        var o = e.added;
        o.sort(el);
        var s = n.mutations;
        try {
          var a = to(o);
          var u = a.next();
          for (; !u.done; u = a.next()) {
            var c = u.value;
            if (c.valid) {
              if (!c.moveFrom) {
                t.finalizeBlockAdd(c.block, n);
              }
              s.added.push(c);
            }
          }
        } catch (t) {
          r = {
            error: t
          };
        } finally {
          try {
            if (u && !u.done && (i = a.return)) {
              i.call(a);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
      })(this, r, s);
      (function (t, e, n) {
        var r;
        var i;
        var o = e.mutations;
        try {
          var s = to(t.updated);
          var a = s.next();
          for (; !a.done; a = s.next()) {
            var u = a.value;
            var c = u.block;
            if (u.valid && c.active) {
              if (c.isInline()) {
                if (c.parent && c.parent.active) {
                  n.push(u);
                }
              } else {
                o.updated.push(u);
              }
            }
          }
        } catch (t) {
          r = {
            error: t
          };
        } finally {
          try {
            if (a && !a.done && (i = s.return)) {
              i.call(s);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
      })(r, s, a);
      this.mutation$.next(s);
      if (a.length) {
        this.inlineMutation$.next(a);
      }
    };
    return t;
  }();
  var eC = function () {
    function t(t) {
      this._renderer = t;
      this._slotId = 0;
      this._slotCache = new Map();
      this._wrapperCache = new Map();
    }
    t.prototype.updateSlot = function (t, e, n, r) {
      var i;
      var o = (i = this._slotCache.get(e)) === null || i === undefined ? undefined : i.get(t);
      if (!o) {
        return this.cacheSlot(t, e, n, r);
      }
      if (!o.component || o.options !== r) {
        var s = this._renderer.getViewExtension(n);
        o.component = s ? eM(e, s, r) : undefined;
      }
      return o;
    };
    t.prototype.getSlot = function (t, e) {
      var n;
      if ((n = this._slotCache.get(e)) === null || n === undefined) {
        return undefined;
      } else {
        return n.get(t);
      }
    };
    t.prototype.cacheSlot = function (t, e, n, r) {
      var i = this._slotCache.get(e);
      if (!i) {
        i = new Map();
        this._slotCache.set(e, i);
      }
      var o = this._renderer.getViewExtension(n);
      var s = {
        id: ++this._slotId,
        cacheKey: t,
        name: n,
        options: r,
        type: e,
        async: !o,
        component: undefined
      };
      i.set(t, s);
      s.component = o ? eM(e, o, r) : undefined;
      return s;
    };
    t.prototype.getWrapper = function (t, e) {
      var n = this._wrapperCache.get(t);
      if (n && n[0] !== e) {
        this._wrapperCache.delete(t);
        n = undefined;
      }
      return n && n[1];
    };
    t.prototype.cacheWrapper = function (t, e, n, r) {
      var i;
      var o = this._renderer.getViewExtension(e);
      var s = ((i = o.getWrapper) === null || i === undefined ? undefined : i.call(o, r, n || {})) || r;
      this._wrapperCache.set(t, [r, s]);
      return s;
    };
    t.prototype.clear = function () {
      this._slotCache.clear();
      this._wrapperCache.clear();
    };
    return t;
  }();
  function eM(t, e, n) {
    var r;
    var i;
    var o;
    var s;
    var a;
    switch (t) {
      case S.BEFORE_SLOT:
        a = (r = e.getBeforeSlot) === null || r === undefined ? undefined : r.call(e, n || {});
        break;
      case S.AFTER_SLOT:
        a = (i = e.getAfterSlot) === null || i === undefined ? undefined : i.call(e, n || {});
        break;
      case S.EFFECT:
        a = (o = e.getEffect) === null || o === undefined ? undefined : o.call(e, n || {});
        break;
      case S.NAMED_SLOT:
        a = (s = e.getNamedSlot) === null || s === undefined ? undefined : s.call(e);
        break;
      default:
        throw Error("unreachable");
    }
    return a;
  }
  var ek = function () {
    function t(t) {
      this.options = t;
      this.blockViewMount$ = new observableSubjectClass.Subject();
      this.blockViewMove$ = new observableSubjectClass.Subject();
      this.blockViewUpdate$ = new observableSubjectClass.Subject();
      this.blockViewUnmount$ = new observableSubjectClass.Subject();
      this.willMount$ = new replaySubject.ReplaySubject(1);
      this.didMount$ = new replaySubject.ReplaySubject(1);
      this.extensionCache = new eC(this);
      this.renderConfigs = new Map();
      this.rootRenderConfigs = new Map();
      this.viewRegisterOptions = new Map();
      this.extensionRegistries = new Map();
      this.extensionInstances = new Map();
      this.cacheEditorAPI = null;
      this.blockDeferred = new Map();
      this.structService = dependencyInjectionContainer.get(er);
      this.dynamicEditorAPI = dependencyInjectionContainer.get(tp, {
        dynamic: true
      });
      this.injectionService = dependencyInjectionContainer.get(Y);
      this.moduleService = dependencyInjectionContainer.get(td);
    }
    Object.defineProperty(t.prototype, "root", {
      get: function () {
        var t = this.structService.root;
        if (t) {
          return this.getBlockViewByBlockId(t.id);
        } else {
          return undefined;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "editorAPI", {
      get: function () {
        this.cacheEditorAPI ||= this.dynamicEditorAPI.get();
        return this.cacheEditorAPI;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.requestBlockViewsRenderByType = function (t, e) {
      var n = this;
      if (this.isMounted()) {
        this.startTransaction(function () {
          var r;
          var i;
          var o = n.structService.getBlockStructsByType(t);
          try {
            var s = to(o);
            var a = s.next();
            for (; !a.done; a = s.next()) {
              var u = a.value;
              n.requestBlockViewRender(u.id, e);
            }
          } catch (t) {
            r = {
              error: t
            };
          } finally {
            try {
              if (a && !a.done && (i = s.return)) {
                i.call(s);
              }
            } finally {
              if (r) {
                throw r.error;
              }
            }
          }
        });
      }
    };
    t.prototype.hasBlockViewByBlockId = function (t) {
      return !!this.getBlockViewByBlockId(t);
    };
    t.prototype.getBlockViewsByRecordId = function (t) {
      var e = this;
      return this.structService.getBlockStructsByRecordId(t).map(function (t) {
        return e.getBlockViewByBlockId(t.id);
      }).filter(Boolean);
    };
    t.prototype.hasBlockViewsByRecordId = function (t) {
      var e = this;
      return this.structService.getBlockStructsByRecordId(t).some(function (t) {
        return e.hasBlockViewByBlockId(t.id);
      });
    };
    t.prototype.onMount = function () {
      this.willMount$.next();
      this.onMountImpl();
      this.didMount$.next();
    };
    t.prototype.isBlockTypeSupported = function (t) {
      var e = this.moduleService;
      if (e.isBlockModuleExisted(t)) {
        if (e.isBlockModuleReady(t)) {
          if (this.viewRegisterOptions.has(t)) {
            return _.YES;
          } else {
            return _.NO;
          }
        } else {
          return _.MAYBE;
        }
      } else {
        return _.NO;
      }
    };
    t.prototype.init = function () {
      this.structService.mutation$.post$.subscribe(this.onMutation.bind(this));
      this.structService.inlineMutation$.subscribe(this.onInlineMutation.bind(this));
    };
    t.prototype.destroy = function () {
      this.onUnmountImpl();
      this.viewRegisterOptions.clear();
      this.extensionRegistries.clear();
      this.renderConfigs.clear();
      try {
        var t;
        var e;
        var n;
        var r = to(this.extensionInstances);
        var i = r.next();
        for (; !i.done; i = r.next()) {
          var o = ts(i.value, 2)[1];
          try {
            if ((n = o.destroy) !== null && n !== undefined) {
              n.call(o);
            }
          } catch (t) {}
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (i && !i.done && (e = r.return)) {
            e.call(r);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      this.extensionCache.clear();
      this.extensionInstances.clear();
      this.blockViewUnmount$.complete();
      this.blockViewMount$.complete();
      this.willMount$.complete();
      this.didMount$.complete();
    };
    t.prototype.isBlockViewReady = function (t) {
      var e = this.structService.getBlockStructByBlockId(t);
      if (!e) {
        return false;
      }
      var n = e.type;
      if (!this.moduleService.isBlockModuleReady(n) || !this.viewRegisterOptions.has(n)) {
        return false;
      }
      var r = this.getBlockViewType(t);
      return !!r && r === n;
    };
    t.prototype.waitForBlockViewReady = function (t, e = {}) {
      return tr(this, undefined, undefined, function () {
        var n;
        var r;
        var i;
        var o;
        return ti(this, function (s) {
          if (this.isBlockViewReady(t)) {
            return [2, this.getBlockViewByBlockId(t)];
          } else {
            n = e.timeout;
            r = tn(e, ["timeout"]);
            i = this.structService.getBlockStructByBlockId(t);
            o = this.waitForBlockViewReadyImpl(i, r);
            if (n) {
              return [2, Promise.race([o, new Promise(function (t, e) {
                setTimeout(function () {
                  e(Error("[docx-editor] timeout to mount block view \"" + i.toString() + "\""));
                }, n);
              })])];
            } else {
              return [2, o];
            }
          }
        });
      });
    };
    t.prototype.registerViewCreator = function (t, e) {
      if (this.viewRegisterOptions.has(t)) {
        throw Error("[renderer] repeatedly register view of block type " + t);
      }
      this.viewRegisterOptions.set(t, e);
      if (e.extensions) {
        this.addExtensionsForBlockType(t, e.extensions);
      }
    };
    t.prototype.registerFallbackViewCreator = function (t) {
      this.registerViewCreator(tu, t);
    };
    t.prototype.registerPendingViewCreator = function (t) {
      this.registerViewCreator(tl, t);
    };
    t.prototype.updateBlockViewExtensions = function (t, e) {
      this.addExtensionsForBlockType(t, e);
      var n = t === tc;
      if (n) {
        this.rootRenderConfigs.clear();
      }
      if (this.isMounted()) {
        if (n) {
          this.requestAllBlockViewsRender();
        } else {
          this.requestBlockViewsRenderByType(t);
        }
      }
    };
    t.prototype.registerViewExtension = function (t, e) {
      if (this.extensionInstances.has(t)) {
        throw Error("[renderer] repeatedly register view extension " + t.toString());
      }
      var n = this.injectionService.instantiate(e);
      this.extensionInstances.set(t, n);
    };
    t.prototype.getBlockRegisterOptions = function (t) {
      return this.viewRegisterOptions.get(t);
    };
    t.prototype.getExtensionsByBlockType = function (t) {
      return this.extensionRegistries.get(t);
    };
    t.prototype.getViewExtension = function (t) {
      return this.extensionInstances.get(t);
    };
    t.prototype.getBlockViewCreatorByBlockType = function (t) {
      var e = this.getBlockRegisterOptions(t);
      return e && e.viewCreator;
    };
    t.prototype.getBlockRenderConfig = function (t, e) {
      if (e) {
        return this.getRootBlockRenderConfig(t);
      } else {
        return this.getBlockRenderConfigImpl(t, true);
      }
    };
    t.prototype.loadViewExtension = function (t, e = {}) {
      return tr(this, undefined, undefined, function () {
        var n;
        return ti(this, function (r) {
          switch (r.label) {
            case 0:
              if (this.extensionInstances.has(t)) {
                return [2, this.extensionInstances.get(t)];
              }
              if (!this.moduleService.isModuleExistedForExtension(t)) {
                throw Error("[docx-editor] cannot find extension \"" + t.toString() + "\"");
              }
              return [4, this.moduleService.loadModuleForExtension(t, e)];
            case 1:
              r.sent();
              if (!(n = this.extensionInstances.get(t))) {
                throw Error("[docx-editor] not support extension \"" + t.toString() + "\"");
              }
              return [2, n];
          }
        });
      });
    };
    t.prototype.onBlockViewMount = function (t, e, n) {
      this.blockViewMount$.next({
        blockView: e,
        props: n
      });
      if (this.isBlockViewReady(t)) {
        var r = this.blockDeferred.get(t);
        if (r) {
          this.blockDeferred.delete(t);
          r.resolve(e);
        }
      }
    };
    t.prototype.onBlockViewUpdate = function (t, e, n, r) {
      var i = {
        blockView: e,
        props: n
      };
      if (r) {
        this.blockViewMove$.next(i);
      }
      this.blockViewUpdate$.next(i);
    };
    t.prototype.onBlockViewUnmount = function (t, e, n) {
      this.blockViewUnmount$.next({
        blockView: e,
        props: n
      });
    };
    t.prototype.onMountImpl = function () {
      this.moduleService.blockModuleReady$.subscribe(this.onBlockModuleReady.bind(this));
    };
    t.prototype.startTransaction = function (t) {
      t();
    };
    t.prototype.waitForBlockViewReadyImpl = function (t, e) {
      return tr(this, undefined, undefined, function () {
        var n;
        var r;
        var i;
        var o;
        return ti(this, function (s) {
          switch (s.label) {
            case 0:
              n = this.moduleService;
              r = t.type;
              if ((i = this.isBlockTypeSupported(r)) === _.NO) {
                throw new tf("[docx] failed to find block module for view \"" + t.toString() + "\"");
              }
              if (i !== _.MAYBE) {
                return [3, 2];
              }
              return [4, n.loadBlockModule(r, e)];
            case 1:
              s.sent();
              s.label = 2;
            case 2:
              if (!this.viewRegisterOptions.has(r)) {
                throw Error("[docx] failed to load not-supported block view \"" + t.toString() + "\"");
              }
              if (!this.structService.hasBlockStructByBlockId(t.id)) {
                throw Error("[docx] failed to load non-existed block \"" + t.toString() + "\"");
              }
              if (this.isBlockViewReady(t.id)) {
                return [2, this.getBlockViewByBlockId(t.id)];
              }
              if (!(o = this.blockDeferred.get(t.id))) {
                var a;
                var u;
                o = {
                  promise: new Promise(function (t, e) {
                    a = t;
                    u = e;
                  }),
                  resolve: a,
                  reject: u
                };
                this.blockDeferred.set(t.id, o);
              }
              return [2, o.promise];
          }
        });
      });
    };
    t.prototype.onBlockModuleReady = function (t) {
      if (t.module.isBase() && !t.error) {
        this.requestBlockViewsRenderByType(t.blockType, {
          remount: true
        });
      }
    };
    t.prototype.getBlockRenderConfigImpl = function (t, e) {
      var n = this.renderConfigs.get(t);
      if (n) {
        return n;
      }
      var r = this.getBlockViewCreatorByBlockType(t);
      if (!r) {
        if (e) {
          return this.getFallbackBlockRenderConfig(t);
        } else {
          return undefined;
        }
      }
      var i = this.getExtensionsByBlockType(t);
      n = this.applyExtensionsToView(t, r, i);
      this.renderConfigs.set(t, n);
      return n;
    };
    t.prototype.getFallbackBlockRenderConfig = function (t) {
      return this.getBlockRenderConfigImpl(tu, false);
    };
    t.prototype.getRootBlockRenderConfig = function (t) {
      var e = this.rootRenderConfigs.get(t);
      if (e) {
        return e;
      }
      var n = this.getBlockRenderConfigImpl(t, false);
      th(n);
      var r = n.view;
      var i = n.beforeSlots;
      var o = n.afterSlots;
      var s = n.effects;
      var a = this.getExtensionsByBlockType(tc);
      (e = this.applyExtensionsToView(t, r, a)).effects = s.concat(e.effects);
      e.beforeSlots = i.concat(e.beforeSlots);
      e.afterSlots = o.concat(e.afterSlots);
      this.rootRenderConfigs.set(t, e);
      return e;
    };
    t.prototype.applyExtensionsToView = function (t, e, n) {
      var r = this.moduleService.registry;
      var i = this.extensionCache;
      var o = e;
      var s = [];
      var a = [];
      var u = [];
      if (n) {
        var c = n.length;
        var l = -1;
        while (++l < c) {
          var p = n[c - l - 1];
          o = this.resolveWrapper(o, p);
          var h = n[l];
          var f = r.getSlotTypesByExtensionProvider(h[0]);
          if (f === undefined) {
            f = S.ALL;
          }
          if ((f & tb) != 0) {
            eO(i, s, S.BEFORE_SLOT, h, f);
            eO(i, a, S.AFTER_SLOT, h, f);
            eO(i, u, S.EFFECT, h, f);
          }
        }
      }
      return {
        type: t,
        view: o,
        beforeSlots: s,
        afterSlots: a,
        effects: u
      };
    };
    t.prototype.resolveWrapper = function (t, e) {
      var n = e[0];
      var r = this.moduleService.registry.getSlotTypesByExtensionProvider(n);
      if (r === undefined) {
        r = S.ALL;
      }
      if ((r & S.WRAPPER) != 0) {
        var i = this.extensionCache;
        if (this.extensionInstances.has(n)) {
          t = i.getWrapper(e, t) || i.cacheWrapper(e, n, e[1], t) || t;
        }
      }
      return t;
    };
    t.prototype.addExtensionsForBlockType = function (t, e) {
      var n = this.extensionRegistries.get(t);
      var r = e.map(function (t) {
        if (arrayIsArrayUtil.isArray(t)) {
          return t;
        } else {
          return [t, null];
        }
      });
      this.extensionRegistries.set(t, n ? n.concat(r) : r);
      this.rootRenderConfigs.delete(t);
      this.renderConfigs.delete(t);
    };
    return t;
  }();
  function eO(t, e, n, r, i) {
    var o = r[0];
    if ((i & n) != 0) {
      var s = r[1];
      var a = s ? r : o;
      var u = t.getSlot(a, n) || t.cacheSlot(a, n, o, s);
      if (u.async || u.component) {
        e.push(u);
      }
    }
  }
  function eR(t) {
    return dependencyInjectionContainer.providerName(t);
  }
  var eD = dependencyInjectionContainer.providerName("editor-lifecycle");
  var eN = function () {
    function t() {
      this.editorDidInit$ = new tT();
      this.editorReady$ = new tT();
      this.editorError$ = new observableSubjectClass.Subject();
      this.editorWillDestroy$ = new replaySubject.ReplaySubject(1);
      this.editorDidDestroy$ = new replaySubject.ReplaySubject(1);
    }
    t.prototype.destroy = function () {
      this.editorDidInit$.complete();
      this.editorReady$.complete();
      this.editorError$.complete();
      this.editorWillDestroy$.complete();
    };
    return t;
  }();
  var ex = dependencyInjectionContainer.providerName("dataset");
  var eP = "replace-pending";
  var eB = [];
  function eL(t) {
    return t === tl;
  }
  (y = R ||= {})[y.CAN_BE_QUEUED = 1] = "CAN_BE_QUEUED";
  y[y.IMMEDIATELY = 2] = "IMMEDIATELY";
  var eF = function (t) {
    function e(e) {
      var n = t.call(this, "messages:\n  " + e.map(function (t) {
        return t.toString();
      }).join("\n  ")) || this;
      n.errors = e;
      n.name = "TransactionQueueError";
      n.stack = e.map(function (t) {
        return t.stack || "";
      }).join("\n-------\n");
      return n;
    }
    tt(e, t);
    return e;
  }(Error);
  var ej = function () {
    function t(t) {
      this.maxIteration = t;
      this.inTransaction = 0;
      this.queue = [];
    }
    t.prototype.schedule = function (t, e) {
      if (!this.inTransaction || e) {
        var n = this.call(t);
        if (this.queue.length) {
          this.flush(n);
        } else if (n) {
          throw n;
        }
      } else {
        this.queue.push(t);
      }
    };
    t.prototype.flush = function (t) {
      var e = this.queue;
      var n = 0;
      var r = t ? [t] : [];
      var i = 0;
      while (i < e.length) {
        if (++n >= this.maxIteration) {
          r.push(Error("max flush count reached, remained: " + e.length));
          break;
        }
        var o = this.call(e[i++]);
        if (o) {
          r.push(o);
        }
      }
      this.queue.length = 0;
      if (r.length) {
        var o = new eF(r);
        throw o;
      }
    };
    t.prototype.call = function (t) {
      ++this.inTransaction;
      try {
        t();
        return null;
      } catch (t) {
        return t;
      } finally {
        --this.inTransaction;
      }
    };
    return t;
  }();
  var eU = function () {
    function t(t) {
      var e = this;
      this.register$ = new observableSubjectClass.Subject();
      this.beforeChange$ = new observableSubjectClass.Subject();
      this.interceptChange$ = new observableSubjectClass.Subject();
      this.interceptRemoteChange$ = new observableSubjectClass.Subject();
      this.change$ = new observableSubjectClass.Subject();
      this.error$ = new observableSubjectClass.Subject();
      this.initialDataReady$ = new tT();
      this.tempTransaction$ = new observableSubjectClass.Subject();
      this.initialDataIsReady = false;
      this.transactions = new ej(1000);
      this.handleRecordsRegister = function (t) {
        if (t.records.length) {
          e.register$.next(t);
        }
      };
      this.handleRecordError = function (t) {
        e.error$.next(t);
      };
      this.handleRecordManagerBeforeChange = function (t) {
        e.beforeChange$.next(t);
      };
      this.handleRecordManagerInterceptChange = function (t) {
        e.interceptChange$.next(t);
      };
      this.handleRecordManagerInterceptRemoteChange = function (t) {
        e.interceptRemoteChange$.next(t);
      };
      this.handleRecordManagerChange = function (t) {
        e.change$.next(t);
      };
      this.rootRecordId = t.rootRecordId;
      this.recordManager = new collaborativeEditingFlowSyncModule.BackupModule(t);
      this.bindEvents();
      this.configs = t.derivationConfigs;
    }
    t.prototype.isInitialDataReady = function () {
      return this.initialDataIsReady;
    };
    t.prototype.getRecordMap = function () {
      return this.recordManager.getRecordMap();
    };
    t.prototype.register = function (t, e) {
      var n = this;
      var r = [];
      var i = [];
      var o = this.recordManager;
      var s = false;
      t.forEach(function (t) {
        var e = t.id;
        if (e === n.rootRecordId && !eL(t.snapshot.type)) {
          s = true;
        }
        if (o.hasRecord(e)) {
          if (!eL(o.getRecord(e).snapshot.type)) {
            return;
          }
          r.push(t);
        } else {
          i.push(t);
        }
      });
      var a = false;
      if (!this.initialDataIsReady && s) {
        this.initialDataIsReady = true;
        a = true;
      }
      o.registerRecords(i);
      if (r.length) {
        this.replacePending(r, e && e.op);
      }
      if (a) {
        this.initialDataReady$.next();
      }
    };
    t.prototype.unregister = function (t) {
      this.recordManager.unregisterRecords(t);
    };
    t.prototype.ensureRecordExist = function (t) {
      if (!this.has(t)) {
        this.register([{
          id: t,
          snapshot: {
            type: tl,
            children: []
          }
        }]);
      }
      return this.get(t);
    };
    t.prototype.get = function (t) {
      return this.recordManager.getRecord(t);
    };
    t.prototype.has = function (t) {
      return this.recordManager.hasRecord(t);
    };
    t.prototype.startBatchCallback = function (t) {
      this.transactions.schedule(t);
    };
    t.prototype.applyTransaction = function (t, e, n) {
      var r;
      var i = this;
      var o = (r = n && n.from) && r !== collaborativeEditingFlowSyncModule.kq.LOCAL && r !== collaborativeEditingFlowSyncModule.kq.TEMPORARY ? R.IMMEDIATELY : R.CAN_BE_QUEUED;
      this.transactions.schedule(function () {
        return i.applyTransactionSync(t, e, n);
      }, o === R.IMMEDIATELY);
    };
    t.prototype.submitTempTransaction = function (t) {
      this.tempTransaction$.next({
        action: "submit",
        transactionName: t
      });
    };
    t.prototype.cancelTempTransaction = function (t) {
      this.tempTransaction$.next({
        action: "cancel",
        transactionName: t
      });
    };
    t.prototype.notifyRemoteChanges = function (t) {
      this.interceptRemoteChange$.next(t);
    };
    t.prototype.createRecordSnapshot = function (t, e) {
      var n = this.configs.get(t);
      if (!n || !n.createSnapshot) {
        throw Error("[data-provider] please provide record snapshot factory for \"" + t + "\"");
      }
      return n.createSnapshot(e, t);
    };
    t.prototype.deriveRecordChildren = function (t) {
      if (!this.has(t)) {
        return eB;
      }
      var e = this.get(t);
      var n = this.configs.get(e.snapshot.type);
      if (n && n.deriveChildren) {
        return n.deriveChildren(e.snapshot, e);
      } else {
        return e.snapshot.children || eB;
      }
    };
    t.prototype.destroy = function () {
      this.register$.complete();
      this.beforeChange$.complete();
      this.interceptChange$.complete();
      this.interceptRemoteChange$.complete();
      this.change$.complete();
      this.error$.complete();
      this.initialDataReady$.complete();
      this.tempTransaction$.complete();
      this.recordManager.destroy();
    };
    t.prototype.traverse = function (t, e, n) {
      if (this.has(t)) {
        var r;
        var i;
        var o = this.get(t);
        if (n(o, e)) {
          var s = this.deriveRecordChildren(t);
          try {
            var a = to(s);
            var u = a.next();
            for (; !u.done; u = a.next()) {
              var c = u.value;
              this.traverse(c, o, n);
            }
          } catch (t) {
            r = {
              error: t
            };
          } finally {
            try {
              if (u && !u.done && (i = a.return)) {
                i.call(a);
              }
            } finally {
              if (r) {
                throw r.error;
              }
            }
          }
        }
      }
    };
    t.prototype.applyTransactionSync = function (t, e, n) {
      var r;
      var i = null;
      var o = n || {};
      var s = o.onFinish;
      var a = tn(o, ["onFinish"]);
      try {
        r = this.recordManager.applyTransaction(t, e, a);
      } catch (t) {
        i = t;
        throw t;
      } finally {
        if (s) {
          s(i, r);
        }
      }
    };
    t.prototype.replacePending = function (t, e) {
      if (e) {
        t.forEach(function (t) {
          var n = t.id;
          var r = t.snapshot;
          e.replace(n, [], r);
        });
        return;
      }
      this.applyTransaction(eP, function (e) {
        t.forEach(function (t) {
          var n = t.id;
          var r = t.snapshot;
          e.replace(n, [], r);
        });
      }, {
        from: collaborativeEditingFlowSyncModule.kq.SILENCE,
        source: eP
      });
    };
    t.prototype.bindEvents = function () {
      var t = this.recordManager;
      t.on(collaborativeEditingFlowSyncModule.ErrorCodes.REGISTER, this.handleRecordsRegister);
      t.on(collaborativeEditingFlowSyncModule.ErrorCodes.BEFORE_CHANGE, this.handleRecordManagerBeforeChange);
      t.on(collaborativeEditingFlowSyncModule.ErrorCodes.INTERCEPT_CHANGE, this.handleRecordManagerInterceptChange);
      t.on(collaborativeEditingFlowSyncModule.ErrorCodes.INTERCEPT_REMOTE_CHANGE, this.handleRecordManagerInterceptRemoteChange);
      t.on(collaborativeEditingFlowSyncModule.ErrorCodes.CHANGE, this.handleRecordManagerChange);
      t.on(collaborativeEditingFlowSyncModule.ErrorCodes.ERROR, this.handleRecordError);
    };
    return t;
  }();
  var ez = dependencyInjectionContainer.providerName("block-data");
  var eH = function () {
    function t(t, e) {
      this.editorAPI = t;
      this.dataProvider = e;
      this.register$ = new observableSubjectClass.Subject();
      this.beforeChange$ = new observableSubjectClass.Subject();
      this.interceptChange$ = new observableSubjectClass.Subject();
      this.interceptRemoteChange$ = new observableSubjectClass.Subject();
      this.change$ = new observableSubjectClass.Subject();
      this.error$ = new observableSubjectClass.Subject();
      this.initialDataReady$ = new tT();
      this.tempTransaction$ = new observableSubjectClass.Subject();
      this.initialDataIsReady = false;
      this.delegate = null;
      this.subs = [];
      this.initialDataReady$.subscribe(this.onInitialDataReady.bind(this));
      this.beforeChange$.subscribe(this.onDataBeforeChange.bind(this));
      this.change$.subscribe(this.onDataChange.bind(this));
      this.error$.subscribe(this.onDataError.bind(this));
    }
    t.prototype.init = function (t) {
      this.delegate = t;
      var e = this.dataProvider;
      this.subs = [e.register$.subscribe(this.register$), e.beforeChange$.subscribe(this.beforeChange$), e.interceptChange$.subscribe(this.interceptChange$), e.interceptRemoteChange$.subscribe(this.interceptRemoteChange$), e.change$.subscribe(this.change$), e.error$.subscribe(this.error$), e.initialDataReady$.subscribe(this.initialDataReady$), e.tempTransaction$.subscribe(this.tempTransaction$)];
    };
    t.prototype.destroy = function () {
      this.register$.complete();
      this.beforeChange$.complete();
      this.interceptChange$.complete();
      this.interceptRemoteChange$.complete();
      this.change$.complete();
      this.error$.complete();
      this.initialDataReady$.complete();
      this.tempTransaction$.complete();
      this.subs.forEach(function (t) {
        return t.unsubscribe();
      });
      this.subs = [];
    };
    Object.defineProperty(t.prototype, "rootRecordId", {
      get: function () {
        return this.dataProvider.rootRecordId;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.startBatchCallback = function (t) {
      return this.dataProvider.startBatchCallback(t);
    };
    t.prototype.applyTransaction = function (t, e, n) {
      return this.dataProvider.applyTransaction(t, e, Object.assign({}, n, {
        extra: Object.assign({}, n && n.extra, {
          editorId: this.editorAPI.id
        })
      }));
    };
    t.prototype.submitTempTransaction = function (t) {
      return this.dataProvider.submitTempTransaction(t);
    };
    t.prototype.cancelTempTransaction = function (t) {
      return this.dataProvider.cancelTempTransaction(t);
    };
    t.prototype.isInitialDataReady = function () {
      return this.initialDataIsReady;
    };
    t.prototype.getRecordMap = function () {
      return this.dataProvider.getRecordMap();
    };
    t.prototype.ensureRecordExist = function (t) {
      return this.dataProvider.ensureRecordExist(t);
    };
    t.prototype.getRecordByRecordId = function (t) {
      var e = this.dataProvider;
      if (e.has(t)) {
        return e.get(t);
      } else {
        return null;
      }
    };
    t.prototype.hasRecordByRecordId = function (t) {
      return this.dataProvider.has(t);
    };
    t.prototype.registerRecords = function (t, e) {
      return this.dataProvider.register(t, e);
    };
    t.prototype.createRecordSnapshot = function (t, e) {
      return this.dataProvider.createRecordSnapshot(t, e);
    };
    t.prototype.deriveRecordChildren = function (t) {
      return this.dataProvider.deriveRecordChildren(t);
    };
    t.prototype.traverse = function (t, e, n) {
      this.dataProvider.traverse(t, e, n);
    };
    t.prototype.onInitialDataReady = function () {
      this.initialDataIsReady = true;
      if (this.delegate) {
        this.delegate.onInitialDataReady();
      }
    };
    t.prototype.onDataBeforeChange = function (t) {
      if (this.delegate) {
        this.delegate.onBeforeChange(t);
      }
    };
    t.prototype.onDataChange = function (t) {
      if (this.delegate) {
        this.delegate.onChange(t);
      }
    };
    t.prototype.onDataError = function (t) {
      if (this.delegate) {
        this.delegate.onError(t);
      }
    };
    return t;
  }();
  var eV = dependencyInjectionContainer.providerName("model");
  var eZ = function () {
    function t(t, e, n, r) {
      this.injector = t;
      this.moduleService = e;
      this.structService = n;
      this.dataService = r;
      this.error$ = new observableSubjectClass.Subject();
      this.typeToCreators = new Map();
      this.modelInstances = new Map();
      this.subs = [e.blockModuleReady$.subscribe(this.onBlockModuleReady.bind(this)), n.mutation$.subscribe(this.onMutation.bind(this)), n.inlineMutation$.subscribe(this.onInlineMutation.bind(this))];
    }
    t.prototype.destroy = function () {
      var t = this;
      this.subs.forEach(function (t) {
        return t.unsubscribe();
      });
      this.modelInstances.forEach(function (e) {
        t.destroyBlockModel(e);
      });
      this.error$.complete();
    };
    t.prototype.isBlockModelCreated = function (t) {
      return this.structService.hasBlockStructByBlockId(t) && this.modelInstances.has(t);
    };
    t.prototype.loadBlockModel = function (t, e) {
      return tr(this, undefined, undefined, function () {
        var n;
        var r;
        var i;
        var o;
        return ti(this, function (s) {
          switch (s.label) {
            case 0:
              if (!(n = this.structService.getBlockStructByBlockId(t))) {
                throw Error("[docx] failed to load not-existed block model \"" + t + "\"");
              }
              if ((r = this.moduleService).isBlockModuleReady(n.type) && this.typeToCreators.has(n.type)) {
                return [2, this.getBlockModelByBlockId(t)];
              }
              i = n.type;
              if (!r.isBlockModuleExisted(i)) {
                throw new tf("[docx] failed to find module for \"" + n.toString() + "\"");
              }
              if (r.isBlockModuleReady(i)) {
                return [3, 2];
              }
              return [4, this.moduleService.loadBlockModule(i, e)];
            case 1:
              s.sent();
              s.label = 2;
            case 2:
              if (!this.typeToCreators.has(i)) {
                throw new tf("[docx] failed to load not-supported block model \"" + n.toString() + "\"");
              }
              if (!(o = this.getBlockModelByBlockId(t))) {
                throw Error("[docx] failed to load block model after module ready \"" + n.toString() + "\"");
              }
              return [2, o];
          }
        });
      });
    };
    t.prototype.getBlockModelByBlockId = function (t) {
      var e = this.structService.getBlockStructByBlockId(t);
      if (e) {
        var n = this.modelInstances.get(t);
        if (n) {
          if (n.type === e.type || !this.getBlockModelCreator(e.type)) {
            return n;
          }
          this.destroyBlockModel(n);
        }
        return this.createBlockModel(e);
      }
    };
    t.prototype.hasBlockModelByBlockId = function (t) {
      if (this.modelInstances.has(t)) {
        return true;
      }
      var e = this.structService.getBlockStructByBlockId(t);
      return !!e && !!this.getBlockModelCreator(e.type);
    };
    t.prototype.getBlockModelsByRecordId = function (t) {
      var e = this;
      return this.structService.getBlockStructsByRecordId(t).map(function (t) {
        return e.getBlockModelByBlockId(t.id);
      }).filter(Boolean);
    };
    t.prototype.hasBlockModelsByRecordId = function (t) {
      var e = this;
      return this.structService.getBlockStructsByRecordId(t).some(function (t) {
        return e.hasBlockModelByBlockId(t.id);
      });
    };
    t.prototype.isInitialDataReady = function () {
      return this.structService.isReady();
    };
    Object.defineProperty(t.prototype, "allBlockModels", {
      get: function () {
        var t = this;
        return ta([], ts(this.structService.getAllBlockStructs()), false).map(function (e) {
          return t.getBlockModelByBlockId(e.id);
        });
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "initialDataReady$", {
      get: function () {
        return this.structService.ready$;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "rootBlockId", {
      get: function () {
        return this.structService.root.id;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "rootRecordId", {
      get: function () {
        return this.dataService.rootRecordId;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.getRecordByRecordId = function (t) {
      return this.dataService.getRecordByRecordId(t);
    };
    t.prototype.hasRecordByRecordId = function (t) {
      return this.dataService.hasRecordByRecordId(t);
    };
    t.prototype.getRecordByBlockId = function (t) {
      return this.structService.getBlockStructByBlockId(t)?.record;
    };
    t.prototype.getBlockModelCreator = function (t) {
      return this.typeToCreators.get(t);
    };
    t.prototype.registerBlockModelCreator = function (t, e) {
      this.typeToCreators.set(t, e);
    };
    t.prototype.createBlockModel = function (t) {
      var e = this.typeToCreators.get(t.type) || this.typeToCreators.get(tu);
      if (e) {
        try {
          var n = this.injector.instantiate(e, {
            type: e.type,
            struct: t
          });
          n.init();
          this.modelInstances.set(t.id, n);
          return n;
        } catch (t) {
          this.error$.next(t);
          return;
        }
      }
    };
    t.prototype.destroyBlockModel = function (t) {
      this.modelInstances.delete(t.id);
      try {
        t.destroy();
      } catch (t) {
        this.error$.next(t);
      }
    };
    t.prototype.moveBlockModel = function (t, e, n) {
      try {
        t.doMove(e, n);
      } catch (t) {
        this.error$.next(t);
      }
    };
    t.prototype.updateBlockModel = function (t, e, n) {
      try {
        t.doUpdate(e, n);
      } catch (t) {
        this.error$.next(t);
      }
    };
    t.prototype.onBlockModuleReady = function (t) {
      var e;
      var n;
      var r = this.modelInstances;
      if (t.module.isBase()) {
        var i = this.structService.getBlockStructsByType(t.blockType);
        try {
          var o = to(i);
          var s = o.next();
          for (; !s.done; s = o.next()) {
            var a = s.value;
            var u = r.get(a.id);
            if (u && u.type !== a.type) {
              this.destroyBlockModel(u);
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (s && !s.done && (n = o.return)) {
              n.call(o);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      }
    };
    t.prototype.onInlineMutation = function (t) {
      var e;
      var n;
      var r = this.modelInstances;
      if (r.size) {
        try {
          var i = to(t);
          var o = i.next();
          for (; !o.done; o = i.next()) {
            var s = o.value;
            var a = s.block;
            var u = r.get(a.id);
            if (u) {
              if (s.action === k.REMOVE) {
                this.destroyBlockModel(u);
              } else if (s.action === k.UPDATE) {
                this.updateBlockModel(u, s);
              }
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (o && !o.done && (n = i.return)) {
              n.call(i);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      }
    };
    t.prototype.onMutation = function (t) {
      var e;
      var n;
      var r;
      var i;
      var o = this.modelInstances;
      if (o.size) {
        var s = t.mutations;
        var a = s.removed;
        var u = s.updated;
        try {
          var c = to(a);
          var l = c.next();
          for (; !l.done; l = c.next()) {
            var p = l.value;
            var h = p.block;
            var f = o.get(h.id);
            if (f) {
              if (e_(p)) {
                this.moveBlockModel(f, p, t);
              } else {
                this.destroyBlockModel(f);
              }
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (l && !l.done && (n = c.return)) {
              n.call(c);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        try {
          var d = to(u);
          var v = d.next();
          for (; !v.done; v = d.next()) {
            var p = v.value;
            var h = p.block;
            var y = p.originalType;
            var f = o.get(h.id);
            if (f) {
              if (y) {
                this.destroyBlockModel(f);
              } else {
                this.updateBlockModel(f, p, t);
              }
            }
          }
        } catch (t) {
          r = {
            error: t
          };
        } finally {
          try {
            if (v && !v.done && (i = d.return)) {
              i.call(d);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
      }
    };
    return t;
  }();
  function eq(t) {
    return t != null && t.isNotSupportedBlockTypeError === true;
  }
  function eW(t) {
    return t && t.editorAPI.modelService.getBlockModelByBlockId(t.id);
  }
  var eG = function () {
    function t(t) {
      this.isDestroyed = false;
      this.isError = false;
      var e = t.type;
      var n = t.struct;
      this.struct = n;
      this.type = e;
    }
    Object.defineProperty(t.prototype, "isRoot", {
      get: function () {
        return this.struct.isRoot();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "root", {
      get: function () {
        return eW(this.struct.root);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "parent", {
      get: function () {
        return eW(this.struct.parent) || null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "children", {
      get: function () {
        return this.struct.children.map(eW);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "previous", {
      get: function () {
        return eW(this.struct.previous) || null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "next", {
      get: function () {
        return eW(this.struct.next) || null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "previousSibling", {
      get: function () {
        return eW(this.struct.previousSibling) || null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "nextSibling", {
      get: function () {
        return eW(this.struct.nextSibling) || null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "position", {
      get: function () {
        return this.struct.position;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "depth", {
      get: function () {
        return this.struct.depth;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "id", {
      get: function () {
        return this.struct.id;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "record", {
      get: function () {
        return this.struct.record;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "recordId", {
      get: function () {
        return this.record.id;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "snapshot", {
      get: function () {
        return this.record.snapshot;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "editorAPI", {
      get: function () {
        return this.struct.editorAPI;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "dataService", {
      get: function () {
        return this.editorAPI.dataService;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "modelService", {
      get: function () {
        return this.editorAPI.modelService;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.init = function () {
      this.onInit();
    };
    t.prototype.destroy = function () {
      this.isDestroyed = true;
      this.onDestroy();
    };
    t.prototype.doMove = function (t, e) {
      this.onMove(t, e);
    };
    t.prototype.doUpdate = function (t, e) {
      this.onUpdate(t, e);
    };
    t.prototype.onInit = function () {};
    t.prototype.onDestroy = function () {};
    t.prototype.onMove = function (t, e) {};
    t.prototype.onUpdate = function (t, e) {};
    return t;
  }();
  function eY(t) {
    var e;
    var n = false;
    function r() {
      n = false;
      if (e) {
        return e;
      } else {
        return e = Promise.resolve().then(function () {
          e = undefined;
          if (!n) {
            t();
          }
        });
      }
    }
    r.cancel = function () {
      n = true;
    };
    return r;
  }
  var eK = Object.prototype.hasOwnProperty;
  var e$ = function () {
    function t(t) {
      this.version = 0;
      this.editableChange$ = new observableSubjectClass.Subject();
      this.change$ = new observableSubjectClass.Subject();
      this.configs = Object.assign({}, t);
    }
    Object.defineProperty(t.prototype, "editable", {
      get: function () {
        return this.get("editable");
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.get = function (t) {
      return this.configs[t];
    };
    t.prototype.set = function (t, e) {
      this.transaction(function (n) {
        n(t, e);
      });
    };
    t.prototype.update = function (t) {
      this.transaction(function (e) {
        for (var n in t) {
          if (eK.call(t, n)) {
            e(n, t[n]);
          }
        }
      });
    };
    t.prototype.transaction = function (t) {
      var e = new Map();
      var n = this.configs;
      t(function (t, r) {
        var i = n[t];
        if (i !== r) {
          n[t] = r;
          e.set(t, {
            oldValue: i,
            newValue: r
          });
        }
      });
      if (e.size > 0) {
        ++this.version;
        this.change$.next(e);
        var r = e.get("editable");
        if (r) {
          this.editableChange$.next(r.newValue);
        }
      }
    };
    t.prototype.toPlainObject = function () {
      return Object.assign({}, this.configs);
    };
    return t;
  }();
  var eX = function () {
    function t() {
      this._data = new Map();
    }
    t.prototype.get = function (t) {
      return this._data.get(t);
    };
    t.prototype.has = function (t) {
      return this._data.has(t);
    };
    t.prototype.delete = function (t) {
      return this._data.delete(t);
    };
    t.prototype.set = function (t, e) {
      this._data.set(t, e);
    };
    t.prototype.clear = function () {
      this._data.clear();
    };
    return t;
  }();
  var eJ = function () {
    function t(t, e) {
      this.rootInjector = t;
      this.scopeManager = e;
      this.injectorDidCreate$ = new observableSubjectClass.Subject();
      this.injectorWillDestroy$ = new observableSubjectClass.Subject();
      this.disposableInjectors = [];
      this.debounceDoDispose = eY(this.doDispose.bind(this));
      this.isDestroyed = false;
      this.instantiate = t.instantiate.bind(t);
      this.invoke = t.invoke.bind(t);
      this.resolveInstanceInjectableProps = t.resolveInstanceInjectableProps.bind(t);
      this.get = t.get.bind(t);
      this.findProvidersByName = t.findProvidersByName.bind(t);
      this.registerHook = t.registerHook.bind(t);
    }
    t.prototype.destroy = function () {
      this.isDestroyed = true;
      this.debounceDoDispose.cancel();
      this.doDispose();
    };
    t.prototype.createBlockViewInjector = function (t) {
      var e = this.rootInjector;
      var n = this.scopeManager.getScope(t.type);
      if (n) {
        var r = new dependencyInjectionContainer.Injector(n);
        var i = e.createChild(r);
        i.bind([{
          provide: en,
          useValue: t
        }]);
        this.injectorDidCreate$.next(i);
        return i;
      }
    };
    t.prototype.disposeBlockViewInjector = function (t) {
      if (t !== this.rootInjector) {
        this.injectorWillDestroy$.next(t);
        if (this.isDestroyed) {
          eQ(t);
        } else {
          this.disposableInjectors.push(t);
          this.debounceDoDispose();
        }
      }
    };
    t.prototype.doDispose = function () {
      var t = this.disposableInjectors;
      this.disposableInjectors = [];
      t.forEach(eQ);
    };
    return t;
  }();
  function eQ(t) {
    try {
      t.dispose();
    } catch (t) {}
  }
  var e0 = 0;
  var e1 = function () {
    function t(t) {
      this.id = ++e0;
      this.initError = null;
      this._renderer = null;
      this._isDestroyed = false;
      this._isReady = false;
      if ((n = (e = t.hooks) === null || e === undefined ? undefined : e.beforeConstructor) !== null && n !== undefined) {
        n.call(e, t);
      }
      this.name = t.name || "anonymous";
      var e;
      var n;
      var r;
      var i;
      var o = new dependencyInjectionContainer.ScopeManager();
      this.scopeManager = o;
      var s = new dependencyInjectionContainer.ProviderScope(K);
      var a = new dependencyInjectionContainer.InjectorCore(t.rootInjector, s);
      o.setScope(K, s);
      this.getService = a.get.bind(a);
      this.injector = a;
      this.config = new e$(t.config);
      this.dataService = new eH(this, t.dataProvider);
      this.structService = new eA(this);
      this.lifecycle = new eN();
      this.dataset = new eX();
      this.injectionService = new eJ(a, o);
      this.moduleService = new tN(this, t);
      this.modelService = new eZ(a, this.moduleService, this.structService, this.dataService);
      this.featureService = (t == null ? undefined : t.featureService) ? t.featureService : new t2();
      this._init(t);
      G.add(this);
      if ((i = (r = t.hooks) === null || r === undefined ? undefined : r.afterConstructor) !== null && i !== undefined) {
        i.call(r, this);
      }
    }
    Object.defineProperty(t.prototype, "api", {
      get: function () {
        return this;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "viewService", {
      get: function () {
        return this.renderer;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t.prototype, "renderer", {
      get: function () {
        this._renderer ||= this.injector.get(tB);
        return this._renderer;
      },
      enumerable: false,
      configurable: true
    });
    t.prototype.isDestroyed = function () {
      return this._isDestroyed;
    };
    t.prototype.isReady = function () {
      return this._isReady;
    };
    t.prototype.isInitError = function () {
      return !!this.initError;
    };
    t.prototype.onServiceReady = function (t, e) {
      return this.injector.get(t, {
        dynamic: true
      }).onReady(e);
    };
    t.prototype.renderRoot = function () {
      return this.renderer.renderRoot();
    };
    t.prototype.onMount = function () {
      if (!this.dataService.isInitialDataReady()) {
        throw Error("[docx-editor] Failed to mount, because initial data is not ready, please provide it in editor options or invoke \"setInitialData\" to set initial data");
      }
      this.renderer.onMount();
    };
    t.prototype.destroy = function () {
      this._isDestroyed = true;
      var t = this.lifecycle;
      t.editorWillDestroy$.next();
      t.destroy();
      this.structService.destroy();
      this.dataService.destroy();
      this.modelService.destroy();
      this.renderer.destroy();
      this.moduleService.destroy();
      this.injectionService.destroy();
      this.injector.dispose();
      this.scopeManager.dispose();
      this.dataset.clear();
      t.editorDidDestroy$.next();
      t.editorDidDestroy$.complete();
    };
    t.prototype._init = function (t) {
      var e;
      var n;
      var r;
      var i;
      var o;
      var s = t.hooks || {};
      if ((e = s.beforeInit) !== null && e !== undefined) {
        e.call(s, this);
      }
      this._initInternals();
      if ((n = s.afterInitInternals) !== null && n !== undefined) {
        n.call(s, this);
      }
      this._setupModules();
      this._setupFeatureManager(t);
      if ((r = s.afterSetupModules) !== null && r !== undefined) {
        r.call(s, this);
      }
      this._runModules();
      if ((i = s.afterRunModules) !== null && i !== undefined) {
        i.call(s, this);
      }
      this.lifecycle.editorDidInit$.next();
      this._initEditorReadyTrigger();
      if ((o = s.afterInit) !== null && o !== undefined) {
        o.call(s, this);
      }
      this._postInit(t);
    };
    t.prototype._initInternals = function () {
      var t = this;
      this.injector.bind([{
        provide: Y,
        useValue: this.injectionService
      }, {
        provide: eD,
        useValue: this.lifecycle
      }, {
        provide: X,
        useValue: this.config
      }, {
        provide: td,
        useValue: this.moduleService
      }, {
        provide: t1,
        useValue: this.featureService
      }, {
        provide: ez,
        useValue: this.dataService
      }, {
        provide: er,
        useValue: this.structService
      }, {
        provide: eV,
        useValue: this.modelService
      }, {
        provide: tp,
        useValue: this
      }, {
        provide: ex,
        useValue: this.dataset
      }, {
        provide: J,
        useExisting: tB
      }]);
      this.lifecycle.editorReady$.subscribe(function () {
        t._isReady = true;
      });
    };
    t.prototype._setupModules = function () {
      this.moduleService.init();
    };
    t.prototype._setupFeatureManager = function (t) {
      if (!t.featureService) {
        this.featureService.init(t.features);
      }
    };
    t.prototype._runModules = function () {
      var t = this;
      this.moduleService.run();
      this.moduleService.moduleComplete$.subscribe(function (e) {
        var n = e.error;
        if (n) {
          t.lifecycle.editorError$.next(n);
        }
      });
    };
    t.prototype._postInit = function (t) {
      var e;
      var n;
      var r = t.hooks || {};
      if ((e = r.beforeInitBlockTree) !== null && e !== undefined) {
        e.call(r, this);
      }
      var i = this.lifecycle.editorError$;
      this.modelService.error$.subscribe(i);
      this.dataService.error$.subscribe(i);
      this.structService.error$.subscribe(i);
      this.dataService.init(this.structService);
      if ((n = r.afterInitBlockTree) !== null && n !== undefined) {
        n.call(r, this);
      }
    };
    t.prototype._initEditorReadyTrigger = function () {
      var t = this;
      (function () {
        var t = [];
        var e = 0;
        for (; e < arguments.length; e++) {
          t[e] = arguments[e];
        }
        var n = arrayPopUtils.popFunction(t);
        var r = t.length === 1 && j(t[0]) ? t[0] : t;
        if (r.length) {
          return new observableCoreClass.Observable(function (t) {
            var e = r.map(function () {
              return [];
            });
            var i = r.map(function () {
              return false;
            });
            t.add(function () {
              e = i = null;
            });
            function o(o) {
              observableFromAnySource.fromAnySource(r[o]).subscribe(safeSubscriber.safeSubscriber(t, function (r) {
                e[o].push(r);
                if (e.every(function (t) {
                  return t.length;
                })) {
                  var s = e.map(function (t) {
                    return t.shift();
                  });
                  t.next(n ? n.apply(undefined, typescriptRuntimeHelpers.arraySpread([], typescriptRuntimeHelpers.spreadArray(s))) : s);
                  if (e.some(function (t, e) {
                    return !t.length && i[e];
                  })) {
                    t.complete();
                  }
                }
              }, function () {
                i[o] = true;
                if (!e[o].length) {
                  t.complete();
                }
              }));
            }
            var s = 0;
            for (; !t.closed && s < r.length; s++) {
              o(s);
            }
            return function () {
              e = i = null;
            };
          });
        } else {
          return emptyObservableInstance.emptyObservable;
        }
      })(this.structService.ready$, this.moduleService.initialModulesReady$).subscribe({
        next: function () {
          t.lifecycle.editorReady$.next();
        },
        error: function (e) {
          t.initError = e;
          t.lifecycle.editorReady$.error(e);
          t.lifecycle.editorError$.next(e);
        }
      });
    };
    return t;
  }();
  require.d(exports, {
    EditorInitStatus: function () {
      return C;
    },
    DATASET_TOKEN: function () {
      return ex;
    },
    LIFECYCLE_TOKEN: function () {
      return eD;
    },
    registerView: function () {
      return tV;
    },
    SupportStatus: function () {
      return _;
    },
    REPLACE_PENDING: function () {
      return eP;
    },
    MODEL_TOKEN: function () {
      return eV;
    },
    updateGlobalExts: function () {
      return tq;
    },
    isRemoveMutation: function () {
      return eg;
    },
    isMergeMutation: function () {
      return ev;
    },
    INLINE_LAYOUT: function () {
      return t8;
    },
    UpdateType: function () {
      return M;
    },
    isMoveMutation: function () {
      return e_;
    },
    registerProviders: function () {
      return tj;
    },
    PENDING_STATUS: function () {
      return tl;
    },
    DataService: function () {
      return eU;
    },
    MutationAction: function () {
      return k;
    },
    Editor: function () {
      return e1;
    },
    BlockStruct: function () {
      return en;
    },
    registerAutoRuns: function () {
      return tz;
    },
    isReplaceOp: function () {
      return ed;
    },
    registerViewModel: function () {
      return tL;
    },
    disableModule: function () {
      return tX;
    },
    runWithDataset: function () {
      return tJ;
    },
    debounce: function () {
      return eY;
    },
    INIT_STATUS: function () {
      return t5;
    },
    updateViewExts: function () {
      return tZ;
    },
    registerTrigger: function () {
      return tY;
    },
    EditMode: function () {
      return E;
    },
    isAddMutation: function () {
      return ey;
    },
    Renderer: function () {
      return ek;
    },
    SubjectType: function () {
      return tx;
    },
    loadServiceModule: function () {
      return tQ;
    },
    registerViewExt: function () {
      return tF;
    },
    isUpdateMutation: function () {
      return eb;
    },
    INJECTION_TOKEN: function () {
      return Y;
    },
    FALLBACK_STATUS: function () {
      return tu;
    },
    ZERO_OFFSET: function () {
      return t6;
    },
    isMoveAddMutation: function () {
      return em;
    },
    onInitHook: function () {
      return tW;
    },
    registerSignals: function () {
      return tH;
    },
    EDITOR_API_TOKEN: function () {
      return tp;
    },
    MODULE_MGR_TOKEN: function () {
      return td;
    },
    createSignal: function () {
      return tP;
    },
    isPendingType: function () {
      return eL;
    },
    registerUpdateCfg: function () {
      return tG;
    },
    registerFetcher: function () {
      return t$;
    },
    isUnsupportedError: function () {
      return eq;
    },
    getProviderName: function () {
      return eR;
    },
    SlotType: function () {
      return S;
    },
    BLOCK_DATA_TOKEN: function () {
      return ez;
    },
    BlockModel: function () {
      return eG;
    },
    VIEW_TOKEN: function () {
      return J;
    },
    ScopeType: function () {
      return g;
    },
    CONFIG_TOKEN: function () {
      return X;
    },
    getBlockModel: function () {
      return eW;
    },
    EMPTY_STRING: function () {
      return t4;
    },
    isInsertOp: function () {
      return ef;
    },
    BLOCK_STRUCT_TOKEN: function () {
      return er;
    },
    isTimeoutError: function () {
      return t0;
    },
    onServiceReady: function () {
      return $;
    },
    registerModTrig: function () {
      return tK;
    }
  });
}