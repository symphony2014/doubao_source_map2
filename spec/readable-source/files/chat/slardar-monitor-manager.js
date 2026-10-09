// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'slardarManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 309069
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  let r = new class {
    init(e, t) {
      let {
        plugins: n = {},
        integrations: i = [],
        setGlobalContexts: r,
        beforeSend: o
      } = t;
      if (e) {
        this.slardarInstance = e;
        this.reloadPlugins(n);
        this.applyIntegrations(i);
        if (r != null) {
          r(e);
        }
        if (o != null) {
          o(e);
        }
      }
    }
    addContexts(e) {
      Object.keys(e).forEach(t => {
        var n;
        if ((n = this.getInstance()) !== null && n !== undefined) {
          n("context.set", t, e[t]);
        }
      });
    }
    reloadPlugins(e) {
      Object.keys(e).forEach(t => {
        var n;
        if ((n = this.getInstance()) !== null && n !== undefined) {
          n("reloadPlugin", t, e[t]);
        }
      });
    }
    applyIntegrations(e) {
      if (e.length) {
        var t;
        if ((t = this.getInstance()) !== null && t !== undefined) {
          t("applyIntegrations", e);
        }
      }
    }
    sendEvent(e) {
      var t;
      if ((t = this.getInstance()) !== null && t !== undefined) {
        t("sendEvent", e);
      }
    }
    getInstance() {
      return this.slardarInstance();
    }
    constructor() {
      var e;
      var t;
      var n;
      t = undefined;
      if ((e = typeof (n = function (e, t) {
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
      }(e = "slardarInstance", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
      this.slardarInstance = emptyExportFunction.emptyFunction;
    }
  }();
  require.d(exports, {
    slardarManager: function () {
      return r;
    }
  });
}