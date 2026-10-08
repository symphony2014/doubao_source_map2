// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fh' to 'isLabelStyle'
// - Renamed export 'TA' to 'solidStateFill'
// - Renamed export 'UG' to 'styles2String'
// - Renamed export '_q' to 'userNodeOverrides'
// - Renamed export 'dT' to 'compileStyles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68615.ae4e84e7.js
         * chunkId: 68615
         * moduleId: 587619
         */
module.exports = function (module, exports, require) {
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var i = mermaidConfigUtils.setName(t => {
    let {
      handDrawnSeed: e
    } = mermaidConfigUtils.getConfigAlias();
    return {
      fill: t,
      hachureAngle: 120,
      hachureGap: 4,
      fillWeight: 2,
      roughness: 0.7,
      stroke: t,
      seed: e
    };
  }, "solidStateFill");
  var n = mermaidConfigUtils.setName(t => {
    let e = r([...(t.cssCompiledStyles || []), ...(t.cssStyles || [])]);
    return {
      stylesMap: e,
      stylesArray: [...e]
    };
  }, "compileStyles");
  var r = mermaidConfigUtils.setName(t => {
    let e = new Map();
    t.forEach(t => {
      let [l, a] = t.split(":");
      e.set(l.trim(), a == null ? undefined : a.trim());
    });
    return e;
  }, "styles2Map");
  var s = mermaidConfigUtils.setName(t => t === "color" || t === "font-size" || t === "font-family" || t === "font-weight" || t === "font-style" || t === "text-decoration" || t === "text-align" || t === "text-transform" || t === "line-height" || t === "letter-spacing" || t === "word-spacing" || t === "text-shadow" || t === "text-overflow" || t === "white-space" || t === "word-wrap" || t === "word-break" || t === "overflow-wrap" || t === "hyphens", "isLabelStyle");
  var o = mermaidConfigUtils.setName(t => {
    let {
      stylesArray: e
    } = n(t);
    let l = [];
    let a = [];
    let i = [];
    let r = [];
    e.forEach(t => {
      let e = t[0];
      if (s(e)) {
        l.push(t.join(":") + " !important");
      } else {
        a.push(t.join(":") + " !important");
        if (e.includes("stroke")) {
          i.push(t.join(":") + " !important");
        }
        if (e === "fill") {
          r.push(t.join(":") + " !important");
        }
      }
    });
    return {
      labelStyles: l.join(";"),
      nodeStyles: a.join(";"),
      stylesArray: e,
      borderStyles: i,
      backgroundStyles: r
    };
  }, "styles2String");
  var h = mermaidConfigUtils.setName((t, e) => {
    var l;
    let {
      themeVariables: i,
      handDrawnSeed: r
    } = mermaidConfigUtils.getConfigAlias();
    let {
      nodeBorder: s,
      mainBkg: o
    } = i;
    let {
      stylesMap: h
    } = n(t);
    return Object.assign({
      roughness: 0.7,
      fill: h.get("fill") || o,
      fillStyle: "hachure",
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: h.get("stroke") || s,
      seed: r,
      strokeWidth: ((l = h.get("stroke-width")) === null || l === undefined ? undefined : l.replace("px", "")) || 1.3,
      fillLineDash: [0, 0],
      strokeLineDash: d(h.get("stroke-dasharray"))
    }, e);
  }, "userNodeOverrides");
  var d = mermaidConfigUtils.setName(t => {
    if (!t) {
      return [0, 0];
    }
    let e = t.trim().split(/\s+/).map(Number);
    if (e.length === 1) {
      let t = isNaN(e[0]) ? 0 : e[0];
      return [t, t];
    }
    return [isNaN(e[0]) ? 0 : e[0], isNaN(e[1]) ? 0 : e[1]];
  }, "getStrokeDashArray");
  require.d(exports, {
    isLabelStyle: function () {
      return s;
    },
    solidStateFill: function () {
      return i;
    },
    styles2String: function () {
      return o;
    },
    userNodeOverrides: function () {
      return h;
    },
    compileStyles: function () {
      return n;
    }
  });
}