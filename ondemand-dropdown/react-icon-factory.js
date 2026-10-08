// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: super-task-audio-play-card.63d4cbf3.js
         * chunkId: 17108
         * moduleId: 35095
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let o = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  let i = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim();
  var a = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  let u = reactCoreLibraryReexport.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: u = "",
    children: c,
    iconNode: l,
    ...s
  }, d) => reactCoreLibraryReexport.createElement("svg", {
    ref: d,
    ...a,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: o ? Number(n) * 24 / Number(t) : n,
    className: i("lucide", u),
    ...s
  }, [...l.map(([e, t]) => reactCoreLibraryReexport.createElement(e, t)), ...(Array.isArray(c) ? c : [c])]));
  let c = (e, t) => {
    let n = reactCoreLibraryReexport.forwardRef(({
      className: n,
      ...a
    }, c) => reactCoreLibraryReexport.createElement(u, {
      ref: c,
      iconNode: t,
      className: i(`lucide-${o(e)}`, n),
      ...a
    }));
    n.displayName = `${e}`;
    return n;
  };
  require.d(exports, {
    createIcon: function () {
      return c;
    }
  });
}