// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'generateUuid'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-js-runtime.7be57fd6.js
         * chunkId: 1795
         * moduleId: 907521
         */
module.exports = function (module, exports, require) {
  function i() {
    var e;
    var t;
    var i;
    let n;
    let s;
    return ((t = globalThis.crypto) === null || t === undefined ? undefined : (e = t.randomUUID) === null || e === undefined ? undefined : e.call(t)) ?? (n = new Date().getTime(), s = ((i = performance) === null || i === undefined ? undefined : i.now()) * 1000 || 0, "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
      let t = Math.random() * 16;
      if (n > 0) {
        t = (n + t) % 16 | 0;
        n = Math.floor(n / 16);
      } else {
        t = (s + t) % 16 | 0;
        s = Math.floor(s / 16);
      }
      return (e === "x" ? t : t & 3 | 8).toString(16);
    }));
  }
  require.d(exports, {
    generateUuid: function () {
      return i;
    }
  });
}