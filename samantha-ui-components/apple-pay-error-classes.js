// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'OV' to 'isBlockedByBrowserError'
// - Renamed export '_e' to 'UserCanceledError'
// - Renamed export 'ee' to 'AppleError'
// - Renamed export 'sn' to 'isUserCanceledError'
// - Renamed export 'xF' to 'BlockedByBrowserError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 950762
         */
module.exports = function (module, exports, require) {
  function t(e, n, i) {
    var t;
    if ((n = typeof (t = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var t = i.call(e, n || "default");
        if (typeof t != "object") {
          return t;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? t : t + "") in e) {
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
  class o extends Error {
    constructor(e = {}) {
      let {
        message: n,
        appleError: i
      } = e;
      super(n);
      this.options = e;
      t(this, "name", "apple_error");
      t(this, "appleError", undefined);
      this.appleError = i;
    }
  }
  class a extends o {
    constructor(...e) {
      super(...e);
      t(this, "name", "user_canceled_error");
    }
  }
  let r = e => e instanceof a;
  class c extends o {
    constructor(...e) {
      super(...e);
      t(this, "name", "blocked_by_browser_error");
    }
  }
  let s = e => e instanceof c;
  require.d(exports, {
    isBlockedByBrowserError: function () {
      return s;
    },
    UserCanceledError: function () {
      return a;
    },
    AppleError: function () {
      return o;
    },
    isUserCanceledError: function () {
      return r;
    },
    BlockedByBrowserError: function () {
      return c;
    }
  });
}