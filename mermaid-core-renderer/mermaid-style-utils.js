// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fh' to 'isLabelStyle'
// - Renamed export 'TA' to 'solidStateFill'
// - Renamed export 'UG' to 'stylesToString'
// - Renamed export '_q' to 'userNodeOverrides'
// - Renamed export 'dT' to 'compileStyles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34190.b63a1963.js
         * chunkId: 34190
         * moduleId: 717687
         */
module.exports = function (module, exports, require) {
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var o = loggerLevelUtils.setFunctionName(t => {
    let {
      handDrawnSeed: e
    } = mermaidConfigUtils_1.getConfigAlias();
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
  var l = loggerLevelUtils.setFunctionName(t => {
    let e = n([...(t.cssCompiledStyles || []), ...(t.cssStyles || []), ...(t.labelStyle || [])]);
    return {
      stylesMap: e,
      stylesArray: [...e]
    };
  }, "compileStyles");
  var n = loggerLevelUtils.setFunctionName(t => {
    let e = new Map();
    t.forEach(t => {
      let [r, i] = t.split(":");
      e.set(r.trim(), i == null ? undefined : i.trim());
    });
    return e;
  }, "styles2Map");
  var s = loggerLevelUtils.setFunctionName(t => t === "color" || t === "font-size" || t === "font-family" || t === "font-weight" || t === "font-style" || t === "text-decoration" || t === "text-align" || t === "text-transform" || t === "line-height" || t === "letter-spacing" || t === "word-spacing" || t === "text-shadow" || t === "text-overflow" || t === "white-space" || t === "word-wrap" || t === "word-break" || t === "overflow-wrap" || t === "hyphens", "isLabelStyle");
  var h = loggerLevelUtils.setFunctionName(t => {
    let {
      stylesArray: e
    } = l(t);
    let r = [];
    let i = [];
    let a = [];
    let o = [];
    e.forEach(t => {
      let e = t[0];
      if (s(e)) {
        r.push(t.join(":") + " !important");
      } else {
        i.push(t.join(":") + " !important");
        if (e.includes("stroke")) {
          a.push(t.join(":") + " !important");
        }
        if (e === "fill") {
          o.push(t.join(":") + " !important");
        }
      }
    });
    return {
      labelStyles: r.join(";"),
      nodeStyles: i.join(";"),
      stylesArray: e,
      borderStyles: a,
      backgroundStyles: o
    };
  }, "styles2String");
  var c = loggerLevelUtils.setFunctionName((t, e) => {
    var r;
    let {
      themeVariables: a,
      handDrawnSeed: o
    } = mermaidConfigUtils_1.getConfigAlias();
    let {
      nodeBorder: n,
      mainBkg: s
    } = a;
    let {
      stylesMap: h
    } = l(t);
    return Object.assign({
      roughness: 0.7,
      fill: h.get("fill") || s,
      fillStyle: "hachure",
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: h.get("stroke") || n,
      seed: o,
      strokeWidth: ((r = h.get("stroke-width")) === null || r === undefined ? undefined : r.replace("px", "")) || 1.3,
      fillLineDash: [0, 0],
      strokeLineDash: d(h.get("stroke-dasharray"))
    }, e);
  }, "userNodeOverrides");
  var d = loggerLevelUtils.setFunctionName(t => {
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
      return o;
    },
    stylesToString: function () {
      return h;
    },
    userNodeOverrides: function () {
      return c;
    },
    compileStyles: function () {
      return l;
    }
  });
}