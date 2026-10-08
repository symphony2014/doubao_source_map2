// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'federationRuntime'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57467.ca189123.js
         * chunkId: 57467
         * moduleId: 380632
         */
module.exports = function (module, exports, require) {
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var n = require.t(reactDomEntryWrapper, 2);
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var o = require.t(reactCoreLibraryReexport, 2);
  var cdnResourceConfig = require("cdn-resource-config") /*id: 594571*/;
  var federationRuntimeCore = require("federation-runtime-core") /*id: 922290*/;
  var moduleFederationRetryPlugin = require("module-federation-retry-plugin") /*id: 335887*/;
  var u = {
    u2: "@flow-web/l2-core-vmok-consumer-core"
  };
  var d = new class {
    getInstance() {
      if (!this.instance) {
        this.initialize();
      }
      return this.instance;
    }
    initialize() {
      if (!this.instance) {
        this.instance = federationRuntimeCore.createFederationRuntime({
          name: u.u2,
          remotes: [],
          shared: {
            react: {
              version: "18.2.0",
              scope: "default",
              lib: () => o,
              shareConfig: {
                requiredVersion: "18.2.0",
                singleton: true
              }
            },
            "react-dom": {
              version: "18.2.0",
              scope: "default",
              lib: () => n,
              shareConfig: {
                requiredVersion: "18.2.0",
                singleton: true
              }
            }
          },
          region: cdnResourceConfig.cdnConfig,
          plugins: [moduleFederationRetryPlugin.RetryPlugin({
            retryTimes: 3,
            retryDelay: 200
          })]
        });
      }
    }
    registerRemote(e, t, i) {
      var r;
      if ((r = this.getInstance()) !== null && r !== undefined) {
        r.registerRemotes([{
          name: e,
          entry: t
        }], i);
      }
    }
    preloadRemote(e) {
      var t;
      if ((t = this.getInstance()) !== null && t !== undefined) {
        t.preloadRemote(e);
      }
    }
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var i = e[Symbol.toPrimitive];
        if (i !== undefined) {
          var r = i.call(e, t || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "instance", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: null,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = null;
      }
    }
  }();
  require.d(exports, {
    federationRuntime: function () {
      return d;
    }
  });
}