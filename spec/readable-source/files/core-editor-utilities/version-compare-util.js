// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'compareVersions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 147266
         */
module.exports = function (module, exports, require) {
  function n(e) {
    return e.toLowerCase().replace(/[^a-z0-9]/g, ".").replace(/([a-z])([0-9])/g, "$1.$2").replace(/([0-9])([a-z])/g, "$1.$2").replace(/alpha/g, "-3").replace(/beta/g, "-2").replace(/rc/g, "-1").replace(/[^0-9.\-]+/g, "-4");
  }
  function o(e, t) {
    if (!e || !t) {
      return false;
    }
    let r = n(e).split(".");
    let o = n(t).split(".");
    let a = Math.max(r.length, t.length);
    for (let e = 0; e < a; e++) {
      let t = Number(r[e]) || 0;
      let n = Number(o[e]) || 0;
      if (t < n) {
        return false;
      }
      if (t > n) {
        break;
      }
    }
    return true;
  }
  require.d(exports, {
    compareVersions: function () {
      return o;
    }
  });
}