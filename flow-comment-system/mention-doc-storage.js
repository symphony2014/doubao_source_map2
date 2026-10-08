// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'storagePrefix'
// - Renamed export 'O' to 'mentionDocStorage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 483967
         */
module.exports = function (module, exports, require) {
  function r(e) {
    if (!e) {
      return e;
    }
    let i = [];
    for (let n = 0; n < e.length; n++) {
      let o = e.charCodeAt(n);
      o = Number(o) ^ 49;
      i.push(o.toString(25));
    }
    return i.join("z");
  }
  function l(e) {
    if (!e) {
      return e;
    }
    let i = [];
    e.split("z").forEach(e => {
      let n = parseInt(e, 25);
      n = Number(n) ^ 49;
      i.push(String.fromCharCode(n));
    });
    return i.join("");
  }
  let a = "mention_doc_db_";
  let s = `v2_mentiondoc_db_${window.User?.id || ""}`;
  let c = `${s}/`;
  let d = {
    setItem(e, i) {
      try {
        localStorage.setItem(c + r(e), JSON.stringify({
          ...i,
          title: i.title ? r(i.title) : i.title,
          token: r(i.token)
        }));
      } catch (e) {}
    },
    getItem(e) {
      try {
        let i = localStorage.getItem(c + r(e));
        if (!i) {
          return null;
        }
        let n = JSON.parse(i);
        if (n == null ? undefined : n.title) {
          n.title = l(n.title);
        }
        if (n == null ? undefined : n.token) {
          n.token = l(n.token);
        }
        return n;
      } catch (e) {
        return null;
      }
    },
    removeItem(e) {
      localStorage.removeItem(c + r(e));
    },
    keys() {
      let e = [];
      let {
        length: i
      } = localStorage;
      for (let n = 0; n < i; n++) {
        let i = localStorage.key(n);
        if (i && i.indexOf(c) === 0) {
          e.push(l(i.substring(c.length)));
        }
      }
      return e;
    }
  };
  require.d(exports, {
    storagePrefix: function () {
      return a;
    },
    mentionDocStorage: function () {
      return d;
    }
  });
}