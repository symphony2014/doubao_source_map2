// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'docxConfigManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 981333
         */
module.exports = function (module, exports, require) {
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  let o = new class {
    set(e, n) {
      let r = docTokenManager.getDocToken();
      if (r) {
        if (!this.docxConfigMap.has(r)) {
          this.docxConfigMap.set(r, {});
        }
        this.docxConfigMap.get(r)[e] = n;
      }
    }
    get(e) {
      let n = docTokenManager.getDocToken();
      if (n && this.docxConfigMap.has(n)) {
        return this.docxConfigMap.get(n)[e];
      }
    }
    get isEmbedDocx() {
      return this.get("business") === "sheet";
    }
    deleteDocxConfig(e) {
      let n = e;
      n ||= docTokenManager.getDocToken();
      this.docxConfigMap.delete(n);
    }
    clear() {
      this.docxConfigMap.clear();
    }
    constructor() {
      var e;
      var n;
      var r;
      e = "docxConfigMap";
      n = new Map();
      if ((e = typeof (r = function (e, n) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var i = r.call(e, n || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = n;
      }
    }
  }();
  require.d(exports, {
    docxConfigManager: function () {
      return o;
    }
  });
}