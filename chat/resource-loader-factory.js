// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'loaderMapUtils'
// - Renamed export 'o' to 'loaderFactory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 412557
         */
module.exports = function (module, exports, require) {
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var asyncMemoizeUtil = require("async-memoize-util") /*id: 855254*/;
  function o(e, t, n) {
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
  class a {
    constructor() {
      o(this, "resource", undefined);
      o(this, "init", e => {
        this.resource = e;
      });
      o(this, "load", () => this.resource);
    }
  }
  class l {
    constructor() {
      o(this, "resource", undefined);
      o(this, "init", e => {
        this.resource = e;
      });
      o(this, "load", () => asyncRetryUtils.retryPromise(() => this.resource));
    }
  }
  class s {
    constructor() {
      o(this, "resource", undefined);
      o(this, "init", e => {
        this.resource = e;
      });
      o(this, "load", () => {
        let e = this.resource;
        if (typeof e == "function") {
          return asyncRetryUtils.retryPromise(() => asyncMemoizeUtil.asyncMemoize(e));
        }
      });
    }
  }
  let u = {
    sync(e) {
      let t = new a();
      t.init(e);
      return t;
    },
    async(e) {
      let t = new l();
      t.init(e);
      return t;
    },
    onTrigger(e) {
      let t = new l();
      t.init(e());
      return t;
    },
    onDemand(e) {
      let t = new s();
      t.init(e);
      return t;
    }
  };
  let c = {
    mapLoaders: (e, t) => Object.fromEntries(e.map(e => [e, t]))
  };
  require.d(exports, {
    loaderMapUtils: function () {
      return c;
    },
    loaderFactory: function () {
      return u;
    }
  });
}