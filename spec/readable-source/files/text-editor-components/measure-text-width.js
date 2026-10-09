// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'measureTextWidth'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 853350
         */
module.exports = function (module, exports, require) {
  let i = function (e, {
    fontSize: n = 16
  } = {}) {
    let o = document.createElement("div");
    o.style.fontSize = `${n}px`;
    o.style.position = "absolute";
    o.style.opacity = "0";
    o.style.userSelect = "none";
    o.style.pointerEvents = "none";
    o.style.zIndex = "-1";
    o.textContent = e;
    document.body.appendChild(o);
    let i = o.clientWidth;
    document.body.removeChild(o);
    return i;
  };
  require.d(exports, {
    measureTextWidth: function () {
      return i;
    }
  });
}