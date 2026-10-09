// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'IdleTaskScheduler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 580927
         */
module.exports = function (module, exports, require) {
  var idleCallbackPolyfill_1 = require("idle-callback-polyfill_1") /*id: 55404*/;
  function o(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class l {
    start(e) {
      this._start(e);
    }
    constructor(e) {
      this._start = e;
    }
  }
  class s {
    addTask(e) {
      this.idleTasks.push(new l(e));
    }
    start() {
      this.run();
    }
    run() {
      if (!this.isDestroyed && this.idleTasks.length !== 0) {
        while (this.runningTasks < this.concurrency) {
          let e = this.idleTasks.shift();
          if (!e) {
            break;
          }
          this.runningTasks++;
          let i = idleCallbackPolyfill_1.requestIdleCallback(() => {
            if (!this.isDestroyed) {
              e.start(e => {
                this.runningTasks--;
                this.run();
              });
              this.idleCallbackIds.delete(i);
            }
          });
          this.idleCallbackIds.add(i);
        }
      }
    }
    destroy() {
      Array.from(this.idleCallbackIds).forEach(e => idleCallbackPolyfill_1.cancelIdleCallback(e));
      this.isDestroyed = true;
    }
    constructor(e = 10) {
      this.concurrency = e;
      o(this, "idleTasks", []);
      o(this, "runningTasks", 0);
      o(this, "idleCallbackIds", new Set());
      o(this, "isDestroyed", false);
    }
  }
  require.d(exports, {
    IdleTaskScheduler: function () {
      return s;
    }
  });
}