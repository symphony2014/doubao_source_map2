// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'getRetryableModuleInstance'
// - Renamed export 'l' to 'getRetryableModuleLoader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 99395
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var l;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var c = reactLoadableComponent;
  var debugLoggerFactory = require("debug-logger-factory") /*id: 102743*/;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  class f {
    static getInstance() {
      f.instance ||= new f();
      return f.instance;
    }
    logLoadStart(e) {
      return Math.floor(Math.random() * 10) === 5 && (docxEventCollector.wrappedCollector("ccm_async_module_fail_dev", {
        action: "module_load_start",
        module_name: e,
        info: JSON.stringify({
          online: networkStateEventCollector.collectNetworkState()
        })
      }), true);
    }
    logLoadEnd(e, n = false) {
      docxEventCollector.wrappedCollector("ccm_async_module_fail_dev", {
        action: "module_load_end",
        has_retry: n,
        module_name: e,
        info: JSON.stringify({
          online: networkStateEventCollector.collectNetworkState()
        })
      });
    }
    logLoadError(e, n) {
      docxEventCollector.wrappedCollector("ccm_async_module_fail_dev", {
        action: "module_load_error",
        module_name: e,
        info: JSON.stringify({
          error: n.message,
          online: networkStateEventCollector.collectNetworkState()
        })
      });
    }
    constructor() {}
  }
  l = undefined;
  if ((o = typeof (r = function (e, n) {
    if (typeof e != "object" || !e) {
      return e;
    }
    var i = e[Symbol.toPrimitive];
    if (i !== undefined) {
      var r = i.call(e, n || "default");
      if (typeof r != "object") {
        return r;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (n === "string" ? String : Number)(e);
  }(o = "instance", "string")) == "symbol" ? r : r + "") in f) {
    Object.defineProperty(f, o, {
      value: l,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    f[o] = l;
  }
  let g = f.getInstance();
  function p(e, n, i) {
    var r;
    if ((n = typeof (r = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var r = i.call(e, n || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = i;
    }
    return e;
  }
  let m = debugLoggerFactory.createDebugLogger("retry-lodable:module-loader");
  class v {
    static getModuleLoader(e, n) {
      let {
        moduleName: i
      } = n;
      if (!v.moduleLoaderMap.has(i)) {
        v.moduleLoaderMap.set(i, new v(e, n));
      }
      return v.moduleLoaderMap.get(i);
    }
    constructor(e, n) {
      var i;
      p(this, "moduleInstance", undefined);
      p(this, "moduleName", undefined);
      p(this, "hasOfflineRetry", undefined);
      p(this, "loadableProps", undefined);
      p(this, "isLoading", false);
      p(this, "hasLoaded", false);
      p(this, "hasRetry", false);
      p(this, "hasBindEvent", false);
      p(this, "retryFun", undefined);
      p(this, "bindEvents", () => {
        if (this.hasOfflineRetry && !this.hasBindEvent) {
          this.hasBindEvent = true;
          window.addEventListener("online", this.handleOnline);
        }
      });
      p(this, "unbindEvents", () => {
        if (this.hasOfflineRetry && this.hasBindEvent) {
          this.hasBindEvent = false;
          window.removeEventListener("online", this.handleOnline);
        }
      });
      p(this, "handleOnline", () => {
        if (!this.isLoading && !this.hasLoaded) {
          this.retryLoad();
        }
      });
      p(this, "retryLoad", async () => {
        m(`moduleName is ${this.moduleName} , start retryLoad ${this.retryFun}`);
        this.hasRetry = true;
        if (this.retryFun) {
          this.retryFun();
        }
      });
      p(this, "loadModule", () => {
        let {
          loader: e,
          loading: n
        } = this.loadableProps;
        return c({
          ...this.loadableProps,
          loader: async () => {
            let n = g.logLoadStart(this.moduleName);
            m(`moduleName is ${this.moduleName} , load start`);
            this.isLoading = true;
            let i = await e();
            m(`moduleName is ${this.moduleName} , load end`);
            this.hasLoaded = true;
            this.isLoading = false;
            this.unbindEvents();
            if (n) {
              g.logLoadEnd(this.moduleName, this.hasRetry);
            }
            return i;
          },
          loading: e => {
            let {
              error: i,
              retry: r,
              isLoading: o
            } = e;
            m(`moduleName is ${this.moduleName} , loadingProps ${e}`);
            this.retryFun ||= r;
            this.isLoading = o;
            if (i) {
              this.bindEvents();
              m(`moduleName is ${this.moduleName} , load error`);
              g.logLoadError(this.moduleName, i);
            }
            return reactCoreLibraryReexport.createElement(n, e);
          }
        });
      });
      p(this, "getModuleInstance", () => {
        if (this.moduleInstance) {
          if (!this.isLoading && !this.hasLoaded) {
            m(`moduleName is ${this.moduleName} , getModuleInstance retryLoad`);
            this.retryLoad();
          }
        } else {
          this.moduleInstance = this.loadModule();
          m(`moduleName is ${this.moduleName} , getModuleInstance`);
        }
        return this.moduleInstance;
      });
      this.moduleName = n.moduleName;
      this.hasOfflineRetry = (i = n.hasOfflineRetry) !== null && i !== undefined && i;
      this.loadableProps = e;
    }
  }
  function b(e, n) {
    return v.getModuleLoader(e, n).getModuleInstance();
  }
  function _(e, n) {
    return v.getModuleLoader(e, n);
  }
  p(v, "moduleLoaderMap", new Map());
  require.d(exports, {
    getRetryableModuleInstance: function () {
      return b;
    },
    getRetryableModuleLoader: function () {
      return _;
    }
  });
}