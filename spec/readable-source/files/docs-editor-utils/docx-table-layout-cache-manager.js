// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'tableLayoutCacheManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 970630
         */
module.exports = function (module, exports, require) {
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
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
  let l = new class {
    setLayout(e, n) {
      this.layoutMap.set(e, n);
    }
    setTableScrollLeft(e, n) {
      this.tableScrollLeftMap.set(e, n);
    }
    constructor() {
      i(this, "layoutMap", new Map());
      i(this, "tableScrollLeftMap", new Map());
      i(this, "getLayout", (e, n) => {
        if (!this.layoutMap.has(e)) {
          this.layoutMap.set(e, docxTableLayoutUtils.getTableLayoutInfo(n));
        }
        return this.layoutMap.get(e);
      });
      i(this, "getTableScrollLeft", e => this.tableScrollLeftMap.get(e) || null);
      i(this, "clear", () => {
        this.layoutMap.clear();
        this.tableScrollLeftMap.clear();
      });
    }
  }();
  exports.tableLayoutCacheManager = l;
}