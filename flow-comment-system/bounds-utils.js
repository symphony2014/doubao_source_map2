// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'compareBounds'
// - Renamed export 'h' to 'isBelowViewport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 94622
         */
module.exports = function (module, exports, require) {
  function o(e, i) {
    return e === i || !!e && !!i && e.width === i.width && e.height === i.height && e.top === i.top && e.left === i.left;
  }
  let r = function (e, i = 0) {
    let n = window.innerHeight || document.documentElement.clientHeight;
    return e && e.bottom + i > n;
  };
  require.d(exports, {
    compareBounds: function () {
      return o;
    },
    isBelowViewport: function () {
      return r;
    }
  });
}