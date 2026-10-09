// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'setCookie'
// - Renamed export 'e' to 'getCookie'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 535970
         */
module.exports = function (module, exports, require) {
  let i = e => {
    if (!globalThis.document) {
      return "";
    }
    let t = `${e}=`;
    let n = document.cookie.split(";");
    for (let e = 0; e < n.length; e++) {
      var i;
      let r = n == null ? undefined : (i = n[e]) === null || i === undefined ? undefined : i.trim();
      if (r.startsWith(t)) {
        return r.substring(t.length, r.length);
      }
    }
    return "";
  };
  let r = (e, t, n) => {
    if (!globalThis.document) {
      return;
    }
    let {
      path: i = "/",
      domain: r,
      daysToLive: o
    } = n || {};
    let a = "";
    if (o) {
      let e = new Date();
      e.setTime(e.getTime() + o * 86400000);
      a = `;expires=${e.toUTCString()}`;
    }
    let l = "";
    if (r) {
      l = `;domain=${r}`;
    }
    document.cookie = `${e}=${t};path=${i}${l}${a}`;
  };
  require.d(exports, {
    setCookie: function () {
      return r;
    },
    getCookie: function () {
      return i;
    }
  });
}