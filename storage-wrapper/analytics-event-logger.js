// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Oi' to 'logInfo'
// - Renamed export 'aH' to 'logError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47421.f728df43.js
         * chunkId: 47421
         * moduleId: 618475
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var i;
  var storageConfigConstants = require("storage-config-constants") /*id: 837502*/;
  function u(e, t, r, n) {
    if (r === "a" && !n) {
      throw TypeError("Private accessor was defined without a getter");
    }
    if (typeof t == "function" ? e !== t || !n : !t.has(e)) {
      throw TypeError("Cannot read private member from an object whose class did not declare it");
    }
    if (r === "m") {
      return n;
    } else if (r === "a") {
      return n.call(e);
    } else if (n) {
      return n.value;
    } else {
      return t.get(e);
    }
  }
  (n = i ||= {}).Error = "error";
  n.Info = "info";
  n.Warn = "warn";
  o = new WeakMap();
  let c = new class {
    constructor() {
      o.set(this, new Map());
    }
    setLog(e) {
      u(this, o, "f").set(e, Number(new Date()));
    }
    hasLog(e) {
      return u(this, o, "f").has(e);
    }
    removeExpiredLog() {
      let e = Number(new Date());
      u(this, o, "f").forEach((t, r) => {
        if (t + storageConfigConstants.storageTimeout < e) {
          u(this, o, "f").delete(r);
        }
      });
    }
  }();
  let f = e => t => async (n, o = {}) => {
    try {
      let i;
      i = typeof n == "string" ? n : n instanceof Error ? `${n.message} ${n.stack}` : JSON.stringify(n);
      c.removeExpiredLog();
      if (c.hasLog(i)) {
        return;
      }
      c.setLog(i);
      let {
        collectEvent: u
      } = await require.e("analytics-tea-sdk") /*id: 30519*/.then(require.bind(require, "tea-sdk-component-biz-event-collector") /*id: 61668*/);
      u(storageConfigConstants.storageDevKey, Object.assign(Object.assign({}, o), {
        type: e,
        description: t,
        content: i
      }));
    } catch (e) {}
  };
  let s = f(i.Error);
  let l = f(i.Info);
  f(i.Warn);
  require.d(exports, {
    logInfo: function () {
      return l;
    },
    logError: function () {
      return s;
    }
  });
}