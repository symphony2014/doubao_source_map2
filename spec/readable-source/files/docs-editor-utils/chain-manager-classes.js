// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'ChainNode'
// - Renamed export 'B' to 'ChainManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 842731
         */
module.exports = function (module, exports, require) {
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  function i(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  let l = debugBrowserConfig("docx:ChainManager");
  class c {
    main(e, n) {
      return true;
    }
    setNext(e) {
      this.next = e;
    }
    handle(e, n, r = 0) {
      l(`handle:${r}:${this.desc}`);
      let o = this.main(e, n);
      return o !== false && (this.next ? this.next.handle(e, o, r + 1) : o);
    }
    constructor() {
      i(this, "next", undefined);
      i(this, "desc", undefined);
    }
  }
  class u {
    static create(e) {
      return new u(e);
    }
    connect(e) {
      this.chainNodes = e.map(e => new e());
      for (let e = 0; e < this.chainNodes.length; e++) {
        let n = this.chainNodes[e];
        let r = this.chainNodes[e + 1];
        if (r) {
          n.setNext(r);
        }
      }
    }
    process(e, n) {
      if (!this.chainNodes.length) {
        throw Error("no chain node found");
      }
      return this.chainNodes[0].handle(e, n);
    }
    constructor(e) {
      i(this, "chainNodes", []);
      this.connect(e);
    }
  }
  require.d(exports, {
    ChainNode: function () {
      return c;
    },
    ChainManager: function () {
      return u;
    }
  });
}