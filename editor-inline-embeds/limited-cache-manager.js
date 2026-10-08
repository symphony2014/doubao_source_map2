// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z6' to 'LimitedCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 861263
         */
module.exports = function (module, exports, require) {
  function r(e, i, n) {
    var r;
    if ((i = typeof (r = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, i || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  require("debounce-util_1_1") /*id: 887312*/;
  require("idle-callback-polyfill_1") /*id: 55404*/;
  class o {
    get size() {
      return this.keyList.length;
    }
    deleteKey(e) {
      this.keyList = this.keyList.filter(i => i !== e);
    }
    moveToFront(e) {
      if (this.has(e)) {
        this.deleteKey(e);
      }
      this.keyList.unshift(e);
    }
    get(e) {
      return this.map.get(e);
    }
    has(e) {
      return this.map.has(e);
    }
    set(e, i) {
      this.moveToFront(e);
      return this.map.set(e, i);
    }
    clear() {
      this.keyList = [];
      return this.map.clear();
    }
    delete(e) {
      this.deleteKey(e);
      return this.map.delete(e);
    }
    keys() {
      return this.keyList;
    }
    values() {
      return this.keyList.map(e => this.get(e));
    }
    entries() {
      return this.keyList.reduce((e, i) => ({
        ...e,
        [i]: this.get(i)
      }), {});
    }
    constructor(e = []) {
      r(this, "keyList", []);
      r(this, "map", undefined);
      this.map = new Map(e);
      for (let [i] of e) {
        if (!this.keyList.includes(i)) {
          this.keyList.push(i);
        }
      }
    }
  }
  class l {
    get size() {
      return this.caches.size;
    }
    get caches() {
      return this._caches;
    }
    autoDeleteKey(e) {
      let i = this.caches.keys()[e];
      this.notifyAutoDelete(i);
      this.delete(i);
    }
    get(e) {
      let i = this.caches.get(e);
      if (i) {
        this.caches.moveToFront(e);
      }
      return i;
    }
    set(e, i) {
      if (this.isBeyondTheCapacityWhenAddKey(e)) {
        this.autoDeleteKey(this.capacity - 1);
      }
      if (this.capacity === 0 || !this.enabled) {
        return this.notifyAutoDelete(e, i);
      }
      this.caches.set(e, i);
    }
    delete(e) {
      return this.caches.delete(e);
    }
    deleteWithEffect(e) {
      this.notifyAutoDelete(e);
      this.delete(e);
    }
    clear() {
      this.caches.keys().forEach(e => this.notifyAutoDelete(e));
      return this.caches.clear();
    }
    updateCapacity(e) {
      if (e < this.capacity) {
        for (let i = this.size - 1; i >= e; i--) {
          this.autoDeleteKey(i);
        }
      }
      this.capacity = e;
    }
    onAutoDelete(e) {
      if (!this.handleDeleteCallbacks.includes(e)) {
        this.handleDeleteCallbacks.push(e);
      }
    }
    offAutoDelete(e) {
      this.handleDeleteCallbacks = this.handleDeleteCallbacks.filter(i => i !== e);
    }
    keys() {
      return this.caches.keys();
    }
    isBeyondTheCapacityWhenAddKey(e) {
      return !this.caches.has(e) && this.caches.size >= this.capacity;
    }
    constructor(e) {
      this.capacity = e;
      r(this, "_caches", new o());
      r(this, "handleDeleteCallbacks", []);
      r(this, "enabled", true);
      r(this, "notifyAutoDelete", (e, i) => {
        let n = i || this.caches.get(e);
        this.handleDeleteCallbacks.forEach(i => {
          i(e, n);
        });
      });
    }
  }
  require.d(exports, {
    LimitedCache: function () {
      return l;
    }
  });
}