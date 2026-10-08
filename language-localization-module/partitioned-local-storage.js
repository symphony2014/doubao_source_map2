// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'createStorageMgr'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68685.ba4452d3.js
         * chunkId: 68685
         * moduleId: 991902
         */
module.exports = function (module, exports, require) {
  function n(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class i {
    async setItems(e) {
      let t = [];
      for (let r = 0; r < e.length; r++) {
        let n = e[r];
        t.push(await this.setItem(n.key, n.value));
      }
      return t;
    }
    async setItem(e, t) {
      let r = this.makeRecord(t);
      let n = this.makeSaveKey(e);
      localStorage.setItem(n, r);
      return true;
    }
    async getItems(e) {
      let t = [];
      for (let r = 0; r < e.length; r++) {
        t.push(await this.getItem(e[r]));
      }
      return t;
    }
    async getItem(e) {
      let t = this.makeSaveKey(e);
      let r = localStorage.getItem(t);
      if (r == null) {
        return r;
      } else {
        return JSON.parse(r).orgVal;
      }
    }
    async removeItems(e) {
      let t = [];
      for (let r = 0; r < e.length; r++) {
        t.push(await this.removeItem(e[r]));
      }
      return t;
    }
    async removeItem(e) {
      let t = this.makeSaveKey(e);
      localStorage.removeItem(t);
      return true;
    }
    async clear() {
      for (let e = 0; e < localStorage.length; ++e) {
        let t = localStorage.key(e);
        if (t && t.indexOf(this.partition) === 0) {
          await localStorage.removeItem(t);
        }
      }
    }
    constructor(e) {
      n(this, "partition", undefined);
      n(this, "makeSaveKey", e => `${this.partition}__${e}`);
      n(this, "makeRecord", e => JSON.stringify({
        orgVal: e
      }));
      if (!e) {
        throw Error("partition can not be empty");
      }
      this.partition = e;
    }
  }
  let o = function () {
    var e = arguments.length;
    var t = Array(e);
    var r = 0;
    for (; r < e; r++) {
      t[r] = arguments[r];
    }
    return new i(t.join("_"));
  };
  require.d(exports, {
    createStorageMgr: function () {
      return o;
    }
  });
}