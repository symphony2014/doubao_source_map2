// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E9' to 'IdbStoreManager'
// - Renamed export 'zh' to 'openIndexedDb'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 408621
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
    getItem(e) {
      let t;
      return this.withIdbStore("readonly", r => {
        t = r.get(e);
      }).then(() => t.result || null);
    }
    getItems(e) {
      let t;
      return this.withIdbStore("readonly", r => {
        t = e.map(e => r.get(e));
      }).then(() => t.reduce((t, r, n) => ({
        ...t,
        [e[n]]: r.result || null
      }), {}));
    }
    setItem(e, t) {
      return this.withIdbStore("readwrite", r => {
        r.put(t, e);
      });
    }
    setItems(e) {
      return this.withIdbStore("readwrite", t => {
        Object.entries(e).forEach(e => {
          let [r, n] = e;
          return t.put(n, r);
        });
      });
    }
    removeItem(e) {
      return this.withIdbStore("readwrite", t => {
        t.delete(e);
      });
    }
    removeItems(e) {
      return this.withIdbStore("readwrite", t => {
        e.forEach(e => t.delete(e));
      });
    }
    clear() {
      return this.withIdbStore("readwrite", e => {
        e.clear();
      });
    }
    length() {
      let e;
      return this.withIdbStore("readonly", t => {
        e = t.count();
      }).then(() => e.result);
    }
    queryRows(e) {
      let t;
      let r = [];
      if (e < 0) {
        return Promise.resolve(r);
      } else {
        return this.withIdbStore("readonly", n => {
          (t = n.openCursor()).onsuccess = () => {
            let n = t.result;
            if (n) {
              r.push(n.value);
              if (e !== n.key) {
                n.continue();
              }
            }
          };
        }).then(() => r);
      }
    }
    key(e) {
      let t;
      if (e < 0) {
        return Promise.resolve(null);
      } else {
        return this.withIdbStore("readonly", r => {
          let n = false;
          (t = r.openCursor()).onsuccess = () => {
            let r = t.result;
            if (r && e !== 0 && !n) {
              n = true;
              r.advance(e);
            }
          };
        }).then(() => t.result ? t.result.key : null);
      }
    }
    async truncate(e) {
      await this.connect({
        dbName: this.dbName,
        storeName: this.storeName,
        truncate: true,
        truncateStores: e
      });
    }
    getPeerStores() {
      return this.connect({
        dbName: this.dbName,
        storeName: this.storeName
      }).then(e => Object.keys(e.objectStoreNames).reduce((t, r) => e.objectStoreNames[r] === this.storeName ? t : [...t, e.objectStoreNames[r]], []));
    }
    withIdbStore(e, t) {
      return this.connect({
        dbName: this.dbName,
        storeName: this.storeName
      }).then(r => new Promise((n, i) => {
        let o = r.transaction(this.storeName, e);
        o.oncomplete = () => n();
        o.onabort = () => i(o.error);
        o.onerror = () => i(o.error);
        t(o.objectStore(this.storeName));
      }));
    }
    async connect(e) {
      let {
        dbName: t,
        storeName: r,
        truncate: n,
        truncateStores: o
      } = e;
      i.connections[t] ||= this.openIdb({
        dbName: t,
        storeName: r
      });
      let a = await i.connections[t];
      if (!a.objectStoreNames.contains(r) || n) {
        let e = a.version + 1;
        a.close();
        i.connections[t] = this.openIdb({
          dbName: t,
          storeName: r,
          version: e,
          truncate: n,
          truncateStores: o
        });
      }
      return i.connections[t];
    }
    openIdb(e) {
      let {
        dbName: t,
        storeName: r,
        version: n,
        truncate: i,
        truncateStores: a
      } = e;
      return o(t, n, e => {
        if (i) {
          if (!a) {
            e.deleteObjectStore(r);
          }
          if (a) {
            a.forEach(t => e.deleteObjectStore(t));
          }
          return;
        }
        e.createObjectStore(r);
      });
    }
    constructor({
      dbName: e,
      storeName: t
    } = {}) {
      n(this, "dbName", undefined);
      n(this, "storeName", undefined);
      this.dbName = e || "lark-idb-store";
      this.storeName = t || "lark-idb-keyval";
    }
  }
  function o(e, t, r) {
    return new Promise((n, i) => {
      let o = indexedDB.open(e, t);
      o.onerror = () => i(o.error);
      o.onsuccess = () => {
        n(o.result);
      };
      o.onupgradeneeded = () => {
        if (r) {
          r(o.result);
        }
      };
    });
  }
  n(i, "connections", {});
  new i();
  require.d(exports, {
    IdbStoreManager: function () {
      return i;
    },
    openIndexedDb: function () {
      return o;
    }
  });
}