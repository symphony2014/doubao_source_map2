// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'notificationManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 161823
         */
module.exports = function (module, exports, require) {
  let i = {
    open: e => {
      let {
        content: t
      } = e;
      return "";
    },
    info: e => {
      let {
        content: t
      } = e;
      return "";
    },
    error: e => {
      let {
        content: t
      } = e;
      return "";
    },
    warning: e => {
      let {
        content: t
      } = e;
      return "";
    },
    success: e => {
      let {
        content: t
      } = e;
      return "";
    },
    close: e => undefined
  };
  function r(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
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
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class o {
    static getInstance() {
      o.instance ||= new o();
      return o.instance;
    }
    set(e) {
      if (e.notification) {
        this.notification = Object.assign({}, this.notification, e.notification);
      }
    }
    constructor() {
      r(this, "notification", i);
    }
  }
  r(o, "instance", undefined);
  let s = o.getInstance();
  require.d(exports, {
    notificationManager: function () {
      return s;
    }
  });
}