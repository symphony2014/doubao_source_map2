// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'joinCsvString'
// - Renamed export 'Q' to 'parseCsvString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 373920
         */
module.exports = function (module, exports, require) {
  function r(e) {
    let a = [];
    let t = String(e || "");
    let r = t.indexOf(",");
    let n = 0;
    let o = false;
    while (!o) {
      if (r === -1) {
        r = t.length;
        o = true;
      }
      let e = t.slice(n, r).trim();
      if (e || !o) {
        a.push(e);
      }
      n = r + 1;
      r = t.indexOf(",", n);
    }
    return a;
  }
  function n(e, a) {
    let t = a || {};
    return (e[e.length - 1] === "" ? [...e, ""] : e).join((t.padRight ? " " : "") + "," + (t.padLeft === false ? "" : " ")).trim();
  }
  require.d(exports, {
    joinCsvString: function () {
      return n;
    },
    parseCsvString: function () {
      return r;
    }
  });
}