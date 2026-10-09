// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mermaidPopulateCommonDb'
// - Resolved require(341035) to 'mermaid-populate-common-db'
// - Renamed variable 'i' to 'mermaidTextLayoutUtils'
// - Resolved require(997032) to 'mermaid-text-layout-utils'
// - Renamed variable 'a' to 'mermaidSvgElementSelector'
// - Resolved require(871430) to 'mermaid-svg-element-selector'
// - Renamed variable 'l' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 'o' to 'mermaidDiagramParserFactory'
// - Resolved require(802699) to 'mermaid-diagram-parser-factory'
// - Updated imported property 'vZ' to 'configDefaults' (module 101498)
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'iE' to 'getConfig' (module 101498)
// - Updated imported property 'ZH' to 'clearAccData' (module 101498)
// - Updated imported property 'GN' to 'setAccTitle' (module 101498)
// - Updated imported property 'eu' to 'getAccTitle' (module 101498)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 101498)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 101498)
// - Updated imported property 'Mx' to 'getAccDescription' (module 101498)
// - Updated imported property 'U$' to 'setAccDescription' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'xN' to 'getDefaultTheme' (module 101498)
// - Updated imported property 'Rb' to 'cleanAndMerge' (module 997032)
// - Updated imported property 'A' to 'populateCommonDb' (module 341035)
// - Updated imported property 'Qc' to 'parseDiagram' (module 802699)
// - Updated imported property 'P' to 'selectSvgElement' (module 871430)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11049.b9a4593e.js
         * chunkId: 11049
         * moduleId: 636218
         */
module.exports = function (module, exports, require) {
  var mermaidPopulateCommonDb = require("mermaid-populate-common-db") /*id: 341035*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidSvgElementSelector = require("mermaid-svg-element-selector") /*id: 871430*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var mermaidDiagramParserFactory = require("mermaid-diagram-parser-factory") /*id: 802699*/;
  var c = {
    showLegend: true,
    ticks: 5,
    max: null,
    min: 0,
    graticule: "circle"
  };
  var s = {
    axes: [],
    curves: [],
    options: c
  };
  var u = structuredClone(s);
  var d = mermaidConfigUtils.configDefaults.radar;
  var h = mermaidConfigUtils.setName(() => mermaidTextLayoutUtils.cleanAndMerge({
    ...d,
    ...mermaidConfigUtils.getConfig().radar
  }), "getConfig");
  var g = mermaidConfigUtils.setName(() => u.axes, "getAxes");
  var f = mermaidConfigUtils.setName(() => u.curves, "getCurves");
  var p = mermaidConfigUtils.setName(() => u.options, "getOptions");
  var x = mermaidConfigUtils.setName(e => {
    u.axes = e.map(e => {
      return {
        name: e.name,
        label: e.label ?? e.name
      };
    });
  }, "setAxes");
  var m = mermaidConfigUtils.setName(e => {
    u.curves = e.map(e => {
      return {
        name: e.name,
        label: e.label ?? e.name,
        entries: v(e.entries)
      };
    });
  }, "setCurves");
  var v = mermaidConfigUtils.setName(e => {
    if (e[0].axis == undefined) {
      return e.map(e => e.value);
    }
    let t = g();
    if (t.length === 0) {
      throw Error("Axes must be populated before curves for reference entries");
    }
    return t.map(t => {
      let r = e.find(e => {
        return e.axis?.$refText === t.name;
      });
      if (r === undefined) {
        throw Error("Missing entry for axis " + t.label);
      }
      return r.value;
    });
  }, "computeCurveEntries");
  var $ = {
    getAxes: g,
    getCurves: f,
    getOptions: p,
    setAxes: x,
    setCurves: m,
    setOptions: mermaidConfigUtils.setName(e => {
      let g = e.reduce((e, t) => {
        e[t.name] = t;
        return e;
      }, {});
      u.options = {
        showLegend: g.showLegend?.value ?? c.showLegend,
        ticks: g.ticks?.value ?? c.ticks,
        max: g.max?.value ?? c.max,
        min: g.min?.value ?? c.min,
        graticule: g.graticule?.value ?? c.graticule
      };
    }, "setOptions"),
    getConfig: h,
    clear: mermaidConfigUtils.setName(() => {
      mermaidConfigUtils.clearAccData();
      u = structuredClone(s);
    }, "clear"),
    setAccTitle: mermaidConfigUtils.setAccTitle,
    getAccTitle: mermaidConfigUtils.getAccTitle,
    setDiagramTitle: mermaidConfigUtils.setDiagramTitle,
    getDiagramTitle: mermaidConfigUtils.getDiagramTitle,
    getAccDescription: mermaidConfigUtils.getAccDescription,
    setAccDescription: mermaidConfigUtils.setAccDescription
  };
  var y = mermaidConfigUtils.setName(e => {
    mermaidPopulateCommonDb.populateCommonDb(e, $);
    let {
      axes: t,
      curves: r,
      options: i
    } = e;
    $.setAxes(t);
    $.setCurves(r);
    $.setOptions(i);
  }, "populate");
  var W = {
    parse: mermaidConfigUtils.setName(async e => {
      let t = await mermaidDiagramParserFactory.parseDiagram("radar", e);
      mermaidConfigUtils.logger.debug(t);
      y(t);
    }, "parse")
  };
  var w = mermaidConfigUtils.setName((e, t, r, n) => {
    let l = n.db;
    let o = l.getAxes();
    let c = l.getCurves();
    let s = l.getOptions();
    let u = l.getConfig();
    let d = l.getDiagramTitle();
    let h = M(mermaidSvgElementSelector.selectSvgElement(t), u);
    let g = s.max ?? Math.max(...c.map(e => Math.max(...e.entries)));
    let f = s.min;
    let p = Math.min(u.width, u.height) / 2;
    b(h, o, p, s.ticks, s.graticule);
    R(h, o, p, u);
    C(h, o, c, f, g, s.graticule, u);
    E(h, c, s.showLegend, u);
    h.append("text").attr("class", "radarTitle").text(d).attr("x", 0).attr("y", -u.height / 2 - u.marginTop);
  }, "draw");
  var M = mermaidConfigUtils.setName((e, t) => {
    let r = t.width + t.marginLeft + t.marginRight;
    let n = t.height + t.marginTop + t.marginBottom;
    let i = {
      x: t.marginLeft + t.width / 2,
      y: t.marginTop + t.height / 2
    };
    e.attr("viewbox", `0 0 ${r} ${n}`).attr("width", r).attr("height", n);
    return e.append("g").attr("transform", `translate(${i.x}, ${i.y})`);
  }, "drawFrame");
  var b = mermaidConfigUtils.setName((e, t, r, n, i) => {
    if (i === "circle") {
      for (let t = 0; t < n; t++) {
        let i = r * (t + 1) / n;
        e.append("circle").attr("r", i).attr("class", "radarGraticule");
      }
    } else if (i === "polygon") {
      let i = t.length;
      for (let a = 0; a < n; a++) {
        let l = r * (a + 1) / n;
        let o = t.map((e, t) => {
          let r = t * 2 * Math.PI / i - Math.PI / 2;
          let n = l * Math.cos(r);
          let a = l * Math.sin(r);
          return `${n},${a}`;
        }).join(" ");
        e.append("polygon").attr("points", o).attr("class", "radarGraticule");
      }
    }
  }, "drawGraticule");
  var R = mermaidConfigUtils.setName((e, t, r, n) => {
    let i = t.length;
    for (let a = 0; a < i; a++) {
      let l = t[a].label;
      let o = a * 2 * Math.PI / i - Math.PI / 2;
      e.append("line").attr("x1", 0).attr("y1", 0).attr("x2", r * n.axisScaleFactor * Math.cos(o)).attr("y2", r * n.axisScaleFactor * Math.sin(o)).attr("class", "radarAxisLine");
      e.append("text").text(l).attr("x", r * n.axisLabelFactor * Math.cos(o)).attr("y", r * n.axisLabelFactor * Math.sin(o)).attr("class", "radarAxisLabel");
    }
  }, "drawAxes");
  function C(e, t, r, n, i, a, l) {
    let o = t.length;
    let c = Math.min(l.width, l.height) / 2;
    r.forEach((t, r) => {
      if (t.entries.length !== o) {
        return;
      }
      let s = t.entries.map((e, t) => {
        let r = Math.PI * 2 * t / o - Math.PI / 2;
        let a = S(e, n, i, c);
        return {
          x: a * Math.cos(r),
          y: a * Math.sin(r)
        };
      });
      if (a === "circle") {
        e.append("path").attr("d", L(s, l.curveTension)).attr("class", `radarCurve-${r}`);
      } else if (a === "polygon") {
        e.append("polygon").attr("points", s.map(e => `${e.x},${e.y}`).join(" ")).attr("class", `radarCurve-${r}`);
      }
    });
  }
  function S(e, t, r, n) {
    return n * (Math.min(Math.max(e, t), r) - t) / (r - t);
  }
  function L(e, t) {
    let r = e.length;
    let n = `M${e[0].x},${e[0].y}`;
    for (let i = 0; i < r; i++) {
      let a = e[(i - 1 + r) % r];
      let l = e[i];
      let o = e[(i + 1) % r];
      let c = e[(i + 2) % r];
      let s = {
        x: l.x + (o.x - a.x) * t,
        y: l.y + (o.y - a.y) * t
      };
      let u = {
        x: o.x - (c.x - l.x) * t,
        y: o.y - (c.y - l.y) * t
      };
      n += ` C${s.x},${s.y} ${u.x},${u.y} ${o.x},${o.y}`;
    }
    return `${n} Z`;
  }
  function E(e, t, r, n) {
    if (!r) {
      return;
    }
    let i = (n.width / 2 + n.marginRight) * 3 / 4;
    let a = -((n.height / 2 + n.marginTop) * 3) / 4;
    t.forEach((t, r) => {
      let n = e.append("g").attr("transform", `translate(${i}, ${a + r * 20})`);
      n.append("rect").attr("width", 12).attr("height", 12).attr("class", `radarLegendBox-${r}`);
      n.append("text").attr("x", 16).attr("y", 0).attr("class", "radarLegendText").text(t.label);
    });
  }
  mermaidConfigUtils.setName(C, "drawCurves");
  mermaidConfigUtils.setName(S, "relativeRadius");
  mermaidConfigUtils.setName(L, "closedRoundCurve");
  mermaidConfigUtils.setName(E, "drawLegend");
  var F = mermaidConfigUtils.setName((e, t) => {
    let r = "";
    for (let n = 0; n < e.THEME_COLOR_LIMIT; n++) {
      let i = e[`cScale${n}`];
      r += `
		.radarCurve-${n} {
			color: ${i};
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${n} {
			fill: ${i};
			fill-opacity: ${t.curveOpacity};
			stroke: ${i};
		}
		`;
    }
    return r;
  }, "genIndexStyles");
  var T = mermaidConfigUtils.setName(e => {
    let t = mermaidConfigUtils.getDefaultTheme();
    let r = mermaidConfigUtils.getConfig();
    let n = mermaidTextLayoutUtils.cleanAndMerge(t, r.themeVariables);
    let a = mermaidTextLayoutUtils.cleanAndMerge(n.radar, e);
    return {
      themeVariables: n,
      radarOptions: a
    };
  }, "buildRadarStyleOptions");
  var A = {
    parser: W,
    db: $,
    renderer: {
      draw: w
    },
    styles: mermaidConfigUtils.setName(function ({
      radar: e
    } = {}) {
      let {
        themeVariables: t,
        radarOptions: r
      } = T(e);
      return `
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${r.axisColor};
		stroke-width: ${r.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${r.axisLabelFontSize}px;
		color: ${r.axisColor};
	}
	.radarGraticule {
		fill: ${r.graticuleColor};
		fill-opacity: ${r.graticuleOpacity};
		stroke: ${r.graticuleColor};
		stroke-width: ${r.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${r.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${F(t, r)}
	`;
    }, "styles")
  };
  require.d(exports, {
    diagram: function () {
      return A;
    }
  });
}