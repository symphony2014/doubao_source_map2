// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'syncedBlockUrlMgr'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 70948
         */
module.exports = function (module, exports, require) {
  let r = new class {
    updateUrlByClientVars(e) {
      let n = e.synced_block_url;
      if (n) {
        Object.keys(n).forEach(e => {
          this.syncedBlockUrlMap.set(e, n[e]);
        });
      }
    }
    getUrlBySyncedBlockToken(e) {
      return this.syncedBlockUrlMap.get(e);
    }
    constructor() {
      var e;
      var n;
      var r;
      e = "syncedBlockUrlMap";
      n = new Map();
      if ((e = typeof (r = function (e, n) {
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
  exports.syncedBlockUrlMgr = r;
}