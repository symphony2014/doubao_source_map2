// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'DocxEventLogger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 141272
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var idleCallbackPolyfill_1 = require("idle-callback-polyfill_1") /*id: 55404*/;
  function l(e = Date.now()) {
    let i = new Date(e);
    let r = (i.getMonth() + 1).toString().padStart(2, "0");
    let s = i.getDate().toString().padStart(2, "0");
    let n = i.getHours().toString().padStart(2, "0");
    let o = i.getMinutes().toString().padStart(2, "0");
    let a = i.getSeconds().toString().padStart(2, "0");
    let l = i.getMilliseconds().toString().padStart(3, "0");
    return `${r}-${s} ${n}:${o}:${a}.${l}`;
  }
  function c(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
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
  class h {
    getBuffer(e) {
      let i = this.bufferMap.get(e);
      if (!i) {
        i = [];
        this.bufferMap.set(e, i);
      }
      return i;
    }
    _teaLog(e, i) {
      var r;
      let n = (r = this.getCommonParams) === null || r === undefined ? undefined : r.call(this);
      let a = {
        ...i,
        ...n,
        origin_root_file_id: platformDocUtils.p5T(this.options.realRootToken),
        origin_root_file_type: this.options.realRootType
      };
      docxEventCollector.wrappedCollector(e, a);
    }
    log(e, i) {
      var r;
      if (!this.normalThrottleEvents.has(e) && !((r = this.customGroupLogMap) === null || r === undefined ? undefined : r.has(e))) {
        return this._teaLog(e, i);
      }
      this.batchLog(e, i);
    }
    batchLog(e, i) {
      let r = Object.assign({
        timestamp: l()
      }, i);
      this.getBuffer(e).push(r);
      this.throttleLog();
    }
    delayLog(e, i) {
      let r = Object.assign({
        timestamp: l()
      }, i);
      idleCallbackPolyfill_1.requestIdleCallback(() => {
        this._teaLog(e, r);
      });
    }
    encrypt(e) {
      return platformDocUtils.p5T(e);
    }
    destroy() {
      this.throttleLog.flush();
      this.throttleLog.cancel();
    }
    constructor(e, i, r, s) {
      this.normalThrottleEvents = e;
      this.options = i;
      this.customGroupLogMap = r;
      this.getCommonParams = s;
      c(this, "bufferMap", new Map());
      c(this, "throttleLog", debounceUtilWrapper.createDebounce(() => {
        let {
          bufferMap: e
        } = this;
        this.bufferMap = new Map();
        e.forEach((e, i) => {
          var r;
          let s = (r = this.customGroupLogMap) === null || r === undefined ? undefined : r.get(i);
          if (s) {
            s(e).forEach(e => {
              this._teaLog(i, e);
            });
            return;
          }
          this._teaLog(i, {
            logs: e
          });
        });
      }, 2000, {
        leading: false,
        trailing: true
      }));
    }
  }
  require.d(exports, {
    DocxEventLogger: function () {
      return h;
    }
  });
}