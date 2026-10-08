// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'jb' to 'loggerManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 400425
         */
module.exports = function (module, exports, require) {
  var eventEmitterPolyfill = require("event-emitter-polyfill") /*id: 361873*/;
  var noopArgumentHelper = require("noop-argument-helper") /*id: 391235*/;
  var webCoreLoggerManager = require("web-core-logger-manager") /*id: 101534*/;
  let a = new eventEmitterPolyfill.EventEmitter();
  let s = {
    getLogger(e, t) {
      noopArgumentHelper.noopHelper("log", "logger", "2.0.0");
      let r = webCoreLoggerManager.createLoggerManager({
        name: e,
        dblimit: t,
        onDBLimited(e) {
          a.emit("log_max_row_length", e);
        },
        debug: false
      });
      let n = {
        info: () => undefined,
        warn: () => undefined,
        error: () => undefined,
        debug: () => undefined
      };
      for (let e of ["info", "warn", "error", "debug"]) {
        n[e] = function () {
          var t = arguments.length;
          var n = Array(t);
          var i = 0;
          for (; i < t; i++) {
            n[i] = arguments[i];
          }
          let o = Array.prototype.map.call(n, t => e === "error" && t instanceof Error ? `
    Error: ${t.message}.
    Stack: ${t.stack}` : String(JSON.stringify(t)).replace(/^"|"$/g, "")).join(" ");
          r[e](o);
        };
      }
      return n;
    },
    on(e, t) {
      a.on(e, t);
    },
    once(e, t) {
      a.once(e, t);
    },
    off(e, t) {
      a.off(e, t);
    }
  };
  s.getLogger("");
  require.d(exports, {
    loggerManager: function () {
      return s;
    }
  });
}