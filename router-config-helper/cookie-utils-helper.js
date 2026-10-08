// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd8' to 'setCookie'
// - Renamed export 'ej' to 'getCookie'
// - Renamed export 'kT' to 'deleteCookie'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15236.8a9a9ca2.js
         * chunkId: 15236
         * moduleId: 586277
         */
module.exports = function (module, exports, require) {
  function n(t) {
    let e = document.cookie.match(RegExp(`(?:^|;)\\s*${t}=([^;]+)`));
    return window.decodeURIComponent(e ? e[1] : "");
  }
  function o(t, e, r, n, o) {
    let a = [[t, e || ""], ["path", "/"]];
    if (r) {
      let t = new Date();
      t.setTime(t.getTime() + r * 86400000);
      a.push(["expires", t.toUTCString()]);
    }
    if (n) {
      a.push(["domain", n]);
    }
    if (o) {
      a = a.concat(o);
    }
    document.cookie = a.reduce((t, e, r) => `${t}${r === 0 ? "" : ";"}${e.join("=")}`, "");
  }
  function a(t, e = "", r = "/") {
    document.cookie = `${t}=; path=${r}; domain=${e}; max-age=0`;
  }
  require.d(exports, {
    setCookie: function () {
      return o;
    },
    getCookie: function () {
      return n;
    },
    deleteCookie: function () {
      return a;
    }
  });
}