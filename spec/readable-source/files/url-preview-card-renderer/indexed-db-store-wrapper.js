// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E9' to 'IndexedDbStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72488.8973e534.js
         * chunkId: 72488
         * moduleId: 813101
         */
module.exports = function (module, exports, require) {
  function r(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
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
  class i {
    getItem(e) {
      let t;
      return this.withIdbStore("readonly", n => {
        t = n.get(e);
      }).then(() => t.result || null);
    }
    getItems(e) {
      let t;
      return this.withIdbStore("readonly", n => {
        t = e.map(e => n.get(e));
      }).then(() => t.reduce((t, n, r) => ({
        ...t,
        [e[r]]: n.result || null
      }), {}));
    }
    setItem(e, t) {
      return this.withIdbStore("readwrite", n => {
        n.put(t, e);
      });
    }
    setItems(e) {
      return this.withIdbStore("readwrite", t => {
        Object.entries(e).forEach(e => {
          let [n, r] = e;
          return t.put(r, n);
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
      let n = [];
      if (e < 0) {
        return Promise.resolve(n);
      } else {
        return this.withIdbStore("readonly", r => {
          (t = r.openCursor()).onsuccess = () => {
            let r = t.result;
            if (r) {
              n.push(r.value);
              if (e !== r.key) {
                r.continue();
              }
            }
          };
        }).then(() => n);
      }
    }
    key(e) {
      let t;
      if (e < 0) {
        return Promise.resolve(null);
      } else {
        return this.withIdbStore("readonly", n => {
          let r = false;
          (t = n.openCursor()).onsuccess = () => {
            let n = t.result;
            if (n && e !== 0 && !r) {
              r = true;
              n.advance(e);
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
      }).then(e => Object.keys(e.objectStoreNames).reduce((t, n) => e.objectStoreNames[n] === this.storeName ? t : [...t, e.objectStoreNames[n]], []));
    }
    withIdbStore(e, t) {
      return this.connect({
        dbName: this.dbName,
        storeName: this.storeName
      }).then(n => new Promise((r, i) => {
        let o = n.transaction(this.storeName, e);
        o.oncomplete = () => r();
        o.onabort = () => i(o.error);
        o.onerror = () => i(o.error);
        t(o.objectStore(this.storeName));
      }));
    }
    async connect(e) {
      let {
        dbName: t,
        storeName: n,
        truncate: r,
        truncateStores: o
      } = e;
      i.connections[t] ||= this.openIdb({
        dbName: t,
        storeName: n
      });
      let _ = await i.connections[t];
      if (!_.objectStoreNames.contains(n) || r) {
        let e = _.version + 1;
        _.close();
        i.connections[t] = this.openIdb({
          dbName: t,
          storeName: n,
          version: e,
          truncate: r,
          truncateStores: o
        });
      }
      return i.connections[t];
    }
    openIdb(e) {
      var t;
      var n;
      var r;
      let {
        dbName: i,
        storeName: o,
        version: _,
        truncate: a,
        truncateStores: E
      } = e;
      t = i;
      n = _;
      r = e => {
        if (a) {
          if (!E) {
            e.deleteObjectStore(o);
          }
          if (E) {
            E.forEach(t => e.deleteObjectStore(t));
          }
          return;
        }
        e.createObjectStore(o);
      };
      return new Promise((e, i) => {
        let o = indexedDB.open(t, n);
        o.onerror = () => i(o.error);
        o.onsuccess = () => {
          e(o.result);
        };
        o.onupgradeneeded = () => {
          if (r) {
            r(o.result);
          }
        };
      });
    }
    constructor({
      dbName: e,
      storeName: t
    } = {}) {
      r(this, "dbName", undefined);
      r(this, "storeName", undefined);
      this.dbName = e || "lark-idb-store";
      this.storeName = t || "lark-idb-keyval";
    }
  }
  r(i, "connections", {});
  new i();
  require.d(exports, {
    IndexedDbStore: function () {
      return i;
    }
  });
}