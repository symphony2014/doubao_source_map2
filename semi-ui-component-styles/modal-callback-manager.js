// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'getModalManager'
// - Renamed export 'd' to 'findModalManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 941211
         */
module.exports = function (module, exports, require) {
  class n {
    showModal(e, t) {
      var a;
      if ((a = this.callbacks[e]) !== null && a !== undefined) {
        a.apply(null, [t]);
      }
    }
    showMarkdownPreviewModal(e, t) {
      var a;
      var n;
      if ((a = (n = this.callbacks)[e]) !== null && a !== undefined) {
        a.call(n, t);
      }
    }
    registerCallBack(e, t) {
      this.callbacks[e] = t;
    }
    unregister(e) {
      delete this.callbacks[e];
    }
    constructor() {
      var e;
      var t;
      var a;
      t = {};
      if ((e = typeof (a = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var a = e[Symbol.toPrimitive];
        if (a !== undefined) {
          var n = a.call(e, t || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "callbacks", "string")) == "symbol" ? a : a + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  let r = new Map();
  let i = e => r.get(e);
  let l = e => {
    let t = r.get(e);
    if (!t) {
      t = new n();
      r.set(e, t);
    }
    return t;
  };
  require.d(exports, {
    getModalManager: function () {
      return l;
    },
    findModalManager: function () {
      return i;
    }
  });
}