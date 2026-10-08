// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'selectSvgElement'
// - Resolved require(840584) to 'select-svg-element'
// - Renamed variable 'i' to 'populateCommonDb'
// - Resolved require(521289) to 'populate-common-db'
// - Renamed variable 'n' to 'mermaidDiagramUtils'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'l' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'o' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 's' to 'mermaidDiagramParserFactory'
// - Resolved require(802699) to 'mermaid-diagram-parser-factory'
// - Updated imported property 'vZ' to 'defaultConfig' (module 401926)
// - Updated imported property 'iE' to 'getConfig' (module 401926)
// - Updated imported property 'ZH' to 'clearCommonDb' (module 401926)
// - Updated imported property 'GN' to 'setAccTitle' (module 401926)
// - Updated imported property 'eu' to 'getAccTitle' (module 401926)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 401926)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 401926)
// - Updated imported property 'Mx' to 'getAccDescription' (module 401926)
// - Updated imported property 'U$' to 'setAccDescription' (module 401926)
// - Updated imported property 'xN' to 'getDefaultThemeVars' (module 401926)
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'Rb' to 'cleanAndMerge' (module 583673)
// - Updated imported property 'A' to 'populateCommonDb' (module 521289)
// - Updated imported property 'Qc' to 'parseDiagram' (module 802699)
// - Updated imported property 'P' to 'selectSvgElement' (module 840584)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63809.aa7550a8.js
         * chunkId: 63809
         * moduleId: 163463
         */
module.exports = function (module, exports, require) {
  var selectSvgElement = require("select-svg-element") /*id: 840584*/;
  var populateCommonDb = require("populate-common-db") /*id: 521289*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var mermaidDiagramParserFactory = require("mermaid-diagram-parser-factory") /*id: 802699*/;
  var c = {
    showLegend: true,
    ticks: 5,
    max: null,
    min: 0,
    graticule: "circle"
  };
  var u = {
    axes: [],
    curves: [],
    options: c
  };
  var d = structuredClone(u);
  var g = mermaidConfigUtils_1.defaultConfig.radar;
  var h = loggerLevelUtils.setFunctionName(() => mermaidDiagramUtils.cleanAndMerge({
    ...g,
    ...mermaidConfigUtils_1.getConfig().radar
  }), "getConfig");
  var p = loggerLevelUtils.setFunctionName(() => d.axes, "getAxes");
  var x = loggerLevelUtils.setFunctionName(() => d.curves, "getCurves");
  var v = loggerLevelUtils.setFunctionName(() => d.options, "getOptions");
  var f = loggerLevelUtils.setFunctionName(t => {
    d.axes = t.map(t => {
      return {
        name: t.name,
        label: t.label ?? t.name
      };
    });
  }, "setAxes");
  var m = loggerLevelUtils.setFunctionName(t => {
    d.curves = t.map(t => {
      return {
        name: t.name,
        label: t.label ?? t.name,
        entries: $(t.entries)
      };
    });
  }, "setCurves");
  var $ = loggerLevelUtils.setFunctionName(t => {
    if (t[0].axis == undefined) {
      return t.map(t => t.value);
    }
    let e = p();
    if (e.length === 0) {
      throw Error("Axes must be populated before curves for reference entries");
    }
    return e.map(e => {
      let a = t.find(t => {
        return t.axis?.$refText === e.name;
      });
      if (a === undefined) {
        throw Error("Missing entry for axis " + e.label);
      }
      return a.value;
    });
  }, "computeCurveEntries");
  var y = {
    getAxes: p,
    getCurves: x,
    getOptions: v,
    setAxes: f,
    setCurves: m,
    setOptions: loggerLevelUtils.setFunctionName(t => {
      let h = t.reduce((t, e) => {
        t[e.name] = e;
        return t;
      }, {});
      d.options = {
        showLegend: h.showLegend?.value ?? c.showLegend,
        ticks: h.ticks?.value ?? c.ticks,
        max: h.max?.value ?? c.max,
        min: h.min?.value ?? c.min,
        graticule: h.graticule?.value ?? c.graticule
      };
    }, "setOptions"),
    getConfig: h,
    clear: loggerLevelUtils.setFunctionName(() => {
      mermaidConfigUtils_1.clearCommonDb();
      d = structuredClone(u);
    }, "clear"),
    setAccTitle: mermaidConfigUtils_1.setAccTitle,
    getAccTitle: mermaidConfigUtils_1.getAccTitle,
    setDiagramTitle: mermaidConfigUtils_1.setDiagramTitle,
    getDiagramTitle: mermaidConfigUtils_1.getDiagramTitle,
    getAccDescription: mermaidConfigUtils_1.getAccDescription,
    setAccDescription: mermaidConfigUtils_1.setAccDescription
  };
  var b = loggerLevelUtils.setFunctionName(t => {
    populateCommonDb.populateCommonDb(t, y);
    let {
      axes: e,
      curves: a,
      options: r
    } = t;
    y.setAxes(e);
    y.setCurves(a);
    y.setOptions(r);
  }, "populate");
  var L = {
    parse: loggerLevelUtils.setFunctionName(async t => {
      let e = await mermaidDiagramParserFactory.parseDiagram("radar", t);
      loggerLevelUtils.logger.debug(e);
      b(e);
    }, "parse")
  };
  var w = loggerLevelUtils.setFunctionName((t, e, a, i) => {
    let l = i.db;
    let o = l.getAxes();
    let s = l.getCurves();
    let c = l.getOptions();
    let u = l.getConfig();
    let d = l.getDiagramTitle();
    let g = M(selectSvgElement.selectSvgElement(e), u);
    let h = c.max ?? Math.max(...s.map(t => Math.max(...t.entries)));
    let p = c.min;
    let x = Math.min(u.width, u.height) / 2;
    W(g, o, x, c.ticks, c.graticule);
    C(g, o, x, u);
    A(g, o, s, p, h, c.graticule, u);
    O(g, s, c.showLegend, u);
    g.append("text").attr("class", "radarTitle").text(d).attr("x", 0).attr("y", -u.height / 2 - u.marginTop);
  }, "draw");
  var M = loggerLevelUtils.setFunctionName((t, e) => {
    let a = e.width + e.marginLeft + e.marginRight;
    let r = e.height + e.marginTop + e.marginBottom;
    let i = {
      x: e.marginLeft + e.width / 2,
      y: e.marginTop + e.height / 2
    };
    t.attr("viewbox", `0 0 ${a} ${r}`).attr("width", a).attr("height", r);
    return t.append("g").attr("transform", `translate(${i.x}, ${i.y})`);
  }, "drawFrame");
  var W = loggerLevelUtils.setFunctionName((t, e, a, r, i) => {
    if (i === "circle") {
      for (let e = 0; e < r; e++) {
        let i = a * (e + 1) / r;
        t.append("circle").attr("r", i).attr("class", "radarGraticule");
      }
    } else if (i === "polygon") {
      let i = e.length;
      for (let n = 0; n < r; n++) {
        let l = a * (n + 1) / r;
        let o = e.map((t, e) => {
          let a = e * 2 * Math.PI / i - Math.PI / 2;
          let r = l * Math.cos(a);
          let n = l * Math.sin(a);
          return `${r},${n}`;
        }).join(" ");
        t.append("polygon").attr("points", o).attr("class", "radarGraticule");
      }
    }
  }, "drawGraticule");
  var C = loggerLevelUtils.setFunctionName((t, e, a, r) => {
    let i = e.length;
    for (let n = 0; n < i; n++) {
      let l = e[n].label;
      let o = n * 2 * Math.PI / i - Math.PI / 2;
      t.append("line").attr("x1", 0).attr("y1", 0).attr("x2", a * r.axisScaleFactor * Math.cos(o)).attr("y2", a * r.axisScaleFactor * Math.sin(o)).attr("class", "radarAxisLine");
      t.append("text").text(l).attr("x", a * r.axisLabelFactor * Math.cos(o)).attr("y", a * r.axisLabelFactor * Math.sin(o)).attr("class", "radarAxisLabel");
    }
  }, "drawAxes");
  function A(t, e, a, r, i, n, l) {
    let o = e.length;
    let s = Math.min(l.width, l.height) / 2;
    a.forEach((e, a) => {
      if (e.entries.length !== o) {
        return;
      }
      let c = e.entries.map((t, e) => {
        let a = Math.PI * 2 * e / o - Math.PI / 2;
        let n = T(t, r, i, s);
        return {
          x: n * Math.cos(a),
          y: n * Math.sin(a)
        };
      });
      if (n === "circle") {
        t.append("path").attr("d", Z(c, l.curveTension)).attr("class", `radarCurve-${a}`);
      } else if (n === "polygon") {
        t.append("polygon").attr("points", c.map(t => `${t.x},${t.y}`).join(" ")).attr("class", `radarCurve-${a}`);
      }
    });
  }
  function T(t, e, a, r) {
    return r * (Math.min(Math.max(t, e), a) - e) / (a - e);
  }
  function Z(t, e) {
    let a = t.length;
    let r = `M${t[0].x},${t[0].y}`;
    for (let i = 0; i < a; i++) {
      let n = t[(i - 1 + a) % a];
      let l = t[i];
      let o = t[(i + 1) % a];
      let s = t[(i + 2) % a];
      let c = {
        x: l.x + (o.x - n.x) * e,
        y: l.y + (o.y - n.y) * e
      };
      let u = {
        x: o.x - (s.x - l.x) * e,
        y: o.y - (s.y - l.y) * e
      };
      r += ` C${c.x},${c.y} ${u.x},${u.y} ${o.x},${o.y}`;
    }
    return `${r} Z`;
  }
  function O(t, e, a, r) {
    if (!a) {
      return;
    }
    let i = (r.width / 2 + r.marginRight) * 3 / 4;
    let n = -((r.height / 2 + r.marginTop) * 3) / 4;
    e.forEach((e, a) => {
      let r = t.append("g").attr("transform", `translate(${i}, ${n + a * 20})`);
      r.append("rect").attr("width", 12).attr("height", 12).attr("class", `radarLegendBox-${a}`);
      r.append("text").attr("x", 16).attr("y", 0).attr("class", "radarLegendText").text(e.label);
    });
  }
  loggerLevelUtils.setFunctionName(A, "drawCurves");
  loggerLevelUtils.setFunctionName(T, "relativeRadius");
  loggerLevelUtils.setFunctionName(Z, "closedRoundCurve");
  loggerLevelUtils.setFunctionName(O, "drawLegend");
  var D = loggerLevelUtils.setFunctionName((t, e) => {
    let a = "";
    for (let r = 0; r < t.THEME_COLOR_LIMIT; r++) {
      let i = t[`cScale${r}`];
      a += `
		.radarCurve-${r} {
			color: ${i};
			fill: ${i};
			fill-opacity: ${e.curveOpacity};
			stroke: ${i};
			stroke-width: ${e.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${i};
			fill-opacity: ${e.curveOpacity};
			stroke: ${i};
		}
		`;
    }
    return a;
  }, "genIndexStyles");
  var k = loggerLevelUtils.setFunctionName(t => {
    let e = mermaidConfigUtils_1.getDefaultThemeVars();
    let a = mermaidConfigUtils_1.getConfig();
    let r = mermaidDiagramUtils.cleanAndMerge(e, a.themeVariables);
    let i = mermaidDiagramUtils.cleanAndMerge(r.radar, t);
    return {
      themeVariables: r,
      radarOptions: i
    };
  }, "buildRadarStyleOptions");
  var _ = {
    parser: L,
    db: y,
    renderer: {
      draw: w
    },
    styles: loggerLevelUtils.setFunctionName(function ({
      radar: t
    } = {}) {
      let {
        themeVariables: e,
        radarOptions: a
      } = k(t);
      return `
	.radarTitle {
		font-size: ${e.fontSize};
		color: ${e.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${a.axisColor};
		stroke-width: ${a.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${a.axisLabelFontSize}px;
		color: ${a.axisColor};
	}
	.radarGraticule {
		fill: ${a.graticuleColor};
		fill-opacity: ${a.graticuleOpacity};
		stroke: ${a.graticuleColor};
		stroke-width: ${a.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${a.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${D(e, a)}
	`;
    }, "styles")
  };
  require.d(exports, {
    diagram: function () {
      return _;
    }
  });
}