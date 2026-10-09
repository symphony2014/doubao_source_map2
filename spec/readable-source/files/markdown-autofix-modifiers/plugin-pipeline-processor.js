// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MP' to 'PluginBase'
// - Renamed export 'VH' to 'runPlugins'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52853.7f831412.js
         * chunkId: 52853
         * moduleId: 934336
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var o = {
    Normal: 0
  };
  function u(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class a {
    constructor() {
      u(this, "name", undefined);
      u(this, "config", {});
      u(this, "modifier", undefined);
      u(this, "before", emptyExportFunction.emptyFunction);
      u(this, "after", emptyExportFunction.emptyFunction);
      u(this, "beforeEach", emptyExportFunction.emptyFunction);
      u(this, "afterEach", emptyExportFunction.emptyFunction);
    }
  }
  let s = e => {
    let {
      source: t,
      plugins: r,
      fixEnding: i = false,
      katex: u,
      skipWhenError: a = true
    } = e;
    return throttledOrderByUtil.throttledOrderBy(r, e => {
      return e.config?.priority ?? o.Normal;
    }).filter(e => {
      let {
        fixEndingOnly: r = false
      } = e.config ?? {};
      return !r || i;
    }).reduce((e, t) => {
      t.before(e);
      let r = (isFunctionUtil_1.isFunction(t.modifier) ? [t.modifier.bind(t)] : t.modifier.map(e => e.bind(t))).reduce((e, r) => {
        try {
          t.beforeEach(e);
          let i = r({
            source: e,
            katex: u
          });
          t.afterEach(i);
          return i;
        } catch (t) {
          if (!a) {
            throw t;
          }
          return e;
        }
      }, e);
      t.after(r);
      return r;
    }, t);
  };
  require.d(exports, {
    PluginBase: function () {
      return a;
    },
    runPlugins: function () {
      return s;
    }
  });
}