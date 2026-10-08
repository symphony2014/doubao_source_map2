// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'getFeishuTempConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57467.ca189123.js
         * chunkId: 57467
         * moduleId: 767490
         */
module.exports = function (module, exports, require) {
  let r;
  let n = "__FEISHU_TEMP_CONF_TABLE__";
  let s = "__FEISHU_TEMP_CONF_KEY__";
  function o(e) {
    return new Promise((t, i) => {
      let r = e.open("__FEISHU_TEMP_CONF_DB__", 1);
      r.onupgradeneeded = () => {
        let e = r.result;
        if (!e.objectStoreNames.contains(n)) {
          e.createObjectStore(n, {
            keyPath: "id"
          });
        }
      };
      r.onsuccess = () => t(r.result);
      r.onerror = () => i(r.error);
    });
  }
  async function a(e) {
    let t = await fetch("https://www.feishu.cn/space/tmpl/conf/?formatFg=1", {
      headers: await e.getAuthHeaders()
    }).then(e => e.json());
    if (t && typeof t == "object" && t.code !== 0) {
      throw Error(`get tmpl conf failed, response msg: ${t.msg || ""}`);
    }
    return t.data;
  }
  async function c(e) {
    let {
      options: t,
      indexedDBCache: i
    } = e;
    let n = await a(t);
    if (i != null) {
      i.write(n);
    }
    r = n;
    return n;
  }
  async function l(e) {
    var t;
    var i;
    let a = e.indexedDB ? (t = e.indexedDB, {
      write: async e => {
        if (!e) {
          return;
        }
        let i = await o(t.indexedDB);
        return new Promise((r, o) => {
          if (!i || !i.objectStoreNames.contains(n)) {
            return;
          }
          let a = i.transaction(n, "readwrite");
          let c = a.objectStore(n);
          let l = {
            id: t.userId,
            value: e
          };
          c.put({
            id: s,
            value: l
          });
          a.oncomplete = () => r();
          a.onerror = () => o(a.error);
        });
      },
      read: async () => {
        let e = await o(t.indexedDB);
        return new Promise((t, i) => {
          if (!e || !e.objectStoreNames.contains(n)) {
            return;
          }
          let r = e.transaction(n, "readonly").objectStore(n).get(s);
          r.onsuccess = () => {
            return t(r.result?.value);
          };
          r.onerror = () => i(r.error);
        });
      }
    }) : undefined;
    let l = r;
    if (l) {
      c({
        options: e,
        indexedDBCache: a
      });
      return l;
    }
    if (a && e.indexedDB) {
      let t = await a.read();
      if (t && (i = e.indexedDB.userId, t && typeof t == "object" && t.id === i && typeof t.value == "object" && typeof t.value.cdn_host_v2 == "string")) {
        c({
          options: e,
          indexedDBCache: a
        });
        return t.value;
      }
    }
    return c({
      options: e,
      indexedDBCache: a
    });
  }
  require.d(exports, {
    getFeishuTempConfig: function () {
      return l;
    }
  });
}