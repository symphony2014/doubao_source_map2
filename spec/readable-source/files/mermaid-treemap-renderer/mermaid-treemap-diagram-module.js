// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'svgViewportSetup'
// - Resolved require(509839) to 'svg-viewport-setup'
// - Renamed variable 'n' to 'mermaidNodeStyleUtils'
// - Resolved require(587619) to 'mermaid-node-style-utils'
// - Renamed variable 'i' to 'mermaidPopulateCommonDb'
// - Resolved require(341035) to 'mermaid-populate-common-db'
// - Renamed variable 'o' to 'mermaidTextLayoutUtils'
// - Resolved require(997032) to 'mermaid-text-layout-utils'
// - Renamed variable 's' to 'mermaidSvgElementSelector'
// - Resolved require(871430) to 'mermaid-svg-element-selector'
// - Renamed variable 'c' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 'd' to 'mermaidDiagramParserFactory'
// - Resolved require(802699) to 'mermaid-diagram-parser-factory'
// - Renamed variable 'u' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Updated imported property 'vZ' to 'configDefaults' (module 101498)
// - Updated imported property 'iE' to 'getConfig' (module 101498)
// - Updated imported property 'ZH' to 'clearAccData' (module 101498)
// - Updated imported property 'GN' to 'setAccTitle' (module 101498)
// - Updated imported property 'eu' to 'getAccTitle' (module 101498)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 101498)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 101498)
// - Updated imported property 'Mx' to 'getAccDescription' (module 101498)
// - Updated imported property 'U$' to 'setAccDescription' (module 101498)
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'v2' to 'configureSvgSize' (module 101498)
// - Updated imported property 'Rb' to 'cleanAndMerge' (module 997032)
// - Updated imported property 'Fh' to 'isLabelStyle' (module 587619)
// - Updated imported property 'UG' to 'styles2String' (module 587619)
// - Updated imported property 'A' to 'populateCommonDb' (module 341035)
// - Updated imported property 'Qc' to 'parseDiagram' (module 802699)
// - Updated imported property 'P' to 'selectSvgElement' (module 871430)
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'j' to 'setupSvgViewport' (module 509839)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79569.191aef07.js
         * chunkId: 79569
         * moduleId: 33419
         */
module.exports = function (module, exports, require) {
  var l;
  var svgViewportSetup = require("svg-viewport-setup") /*id: 509839*/;
  var mermaidNodeStyleUtils = require("mermaid-node-style-utils") /*id: 587619*/;
  var mermaidPopulateCommonDb = require("mermaid-populate-common-db") /*id: 341035*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidSvgElementSelector = require("mermaid-svg-element-selector") /*id: 871430*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var mermaidDiagramParserFactory = require("mermaid-diagram-parser-factory") /*id: 802699*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  l = class {
    getNodes() {
      return this.nodes;
    }
    getConfig() {
      let t = mermaidConfigUtils.configDefaults;
      let r = mermaidConfigUtils.getConfig();
      return mermaidTextLayoutUtils.cleanAndMerge({
        ...t.treemap,
        ...(r.treemap ?? {})
      });
    }
    addNode(e, t) {
      this.nodes.push(e);
      this.levels.set(e, t);
      if (t === 0) {
        var r;
        this.outerNodes.push(e);
        if ((r = this.root) === null || r === undefined) {
          this.root = e;
        }
      }
    }
    getRoot() {
      return {
        name: "",
        children: this.outerNodes
      };
    }
    addClass(e, t) {
      let l = this.classes.get(e) ?? {
        id: e,
        styles: [],
        textStyles: []
      };
      let a = t.replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
      if (a) {
        a.forEach(e => {
          if (mermaidNodeStyleUtils.isLabelStyle(e)) {
            if (l == null ? undefined : l.textStyles) {
              l.textStyles.push(e);
            } else {
              l.textStyles = [e];
            }
          }
          if (l == null ? undefined : l.styles) {
            l.styles.push(e);
          } else {
            l.styles = [e];
          }
        });
      }
      this.classes.set(e, l);
    }
    getClasses() {
      return this.classes;
    }
    getStylesForClass(e) {
      return this.classes.get(e)?.styles ?? [];
    }
    clear() {
      mermaidConfigUtils.clearAccData();
      this.nodes = [];
      this.levels = new Map();
      this.outerNodes = [];
      this.classes = new Map();
      this.root = undefined;
    }
    constructor() {
      this.nodes = [];
      this.levels = new Map();
      this.outerNodes = [];
      this.classes = new Map();
      this.setAccTitle = mermaidConfigUtils.setAccTitle;
      this.getAccTitle = mermaidConfigUtils.getAccTitle;
      this.setDiagramTitle = mermaidConfigUtils.setDiagramTitle;
      this.getDiagramTitle = mermaidConfigUtils.getDiagramTitle;
      this.getAccDescription = mermaidConfigUtils.getAccDescription;
      this.setAccDescription = mermaidConfigUtils.setAccDescription;
    }
  };
  mermaidConfigUtils.setName(l, "TreeMapDB");
  var h = l;
  function p(e) {
    if (!e.length) {
      return [];
    }
    let t = [];
    let r = [];
    e.forEach(e => {
      let l = {
        name: e.name,
        children: e.type === "Leaf" ? undefined : []
      };
      l.classSelector = e == null ? undefined : e.classSelector;
      if (e == null ? undefined : e.cssCompiledStyles) {
        l.cssCompiledStyles = [e.cssCompiledStyles];
      }
      if (e.type === "Leaf" && e.value !== undefined) {
        l.value = e.value;
      }
      while (r.length > 0 && r[r.length - 1].level >= e.level) {
        r.pop();
      }
      if (r.length === 0) {
        t.push(l);
      } else {
        let e = r[r.length - 1].node;
        if (e.children) {
          e.children.push(l);
        } else {
          e.children = [l];
        }
      }
      if (e.type !== "Leaf") {
        r.push({
          node: l,
          level: e.level
        });
      }
    });
    return t;
  }
  mermaidConfigUtils.setName(p, "buildHierarchy");
  var f = mermaidConfigUtils.setName((e, t) => {
    mermaidPopulateCommonDb.populateCommonDb(e, t);
    let o = [];
    for (let n of e.TreemapRows ?? []) {
      if (n.$type === "ClassDefStatement") {
        t.addClass(n.className ?? "", n.styleText ?? "");
      }
    }
    for (let r of e.TreemapRows ?? []) {
      let e = r.item;
      if (!e) {
        continue;
      }
      let l = r.indent ? parseInt(r.indent) : 0;
      let a = g(e);
      let n = e.classSelector ? t.getStylesForClass(e.classSelector) : [];
      let i = n.length > 0 ? n.join(";") : undefined;
      let s = {
        level: l,
        name: a,
        type: e.$type,
        value: e.value,
        classSelector: e.classSelector,
        cssCompiledStyles: i
      };
      o.push(s);
    }
    let s = p(o);
    let d = mermaidConfigUtils.setName((e, r) => {
      for (let l of e) {
        t.addNode(l, r);
        if (l.children && l.children.length > 0) {
          d(l.children, r + 1);
        }
      }
    }, "addNodesRecursively");
    d(s, 0);
  }, "populate");
  var g = mermaidConfigUtils.setName(e => e.name ? String(e.name) : "", "getItemName");
  var m = {
    parser: {
      yy: undefined
    },
    parse: mermaidConfigUtils.setName(async e => {
      try {
        let r = mermaidDiagramParserFactory.parseDiagram;
        let l = await r("treemap", e);
        mermaidConfigUtils.logger.debug("Treemap AST:", l);
        let a = m.parser?.yy;
        if (!(a instanceof h)) {
          throw Error("parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
        }
        f(l, a);
      } catch (e) {
        mermaidConfigUtils.logger.error("Error parsing treemap:", e);
        throw e;
      }
    }, "parse")
  };
  var y = mermaidConfigUtils.setName((e, t, r, l) => {
    let d;
    let h = l.db;
    let p = h.getConfig();
    let f = p.padding ?? 10;
    let g = h.getDiagramTitle();
    let m = h.getRoot();
    let {
      themeVariables: y
    } = mermaidConfigUtils.getConfig();
    if (!m) {
      return;
    }
    let x = !!g * 30;
    let v = mermaidSvgElementSelector.selectSvgElement(t);
    let S = p.nodeWidth ? p.nodeWidth * 10 : 960;
    let $ = p.nodeHeight ? p.nodeHeight * 10 : 500;
    let w = $ + x;
    v.attr("viewBox", `0 0 ${S} ${w}`);
    mermaidConfigUtils.configureSvgSize(v, w, S, p.useMaxWidth);
    try {
      let e = p.valueFormat || ",";
      if (e === "$0,0") {
        d = mermaidConfigUtils.setName(e => "$" + axisAndZoomUtilities.WUZ(",")(e), "valueFormat");
      } else if (e.startsWith("$") && e.includes(",")) {
        let t = /\.\d+/.exec(e);
        let r = t ? t[0] : "";
        d = mermaidConfigUtils.setName(e => "$" + axisAndZoomUtilities.WUZ("," + r)(e), "valueFormat");
      } else if (e.startsWith("$")) {
        let t = e.substring(1);
        d = mermaidConfigUtils.setName(e => "$" + axisAndZoomUtilities.WUZ(t || "")(e), "valueFormat");
      } else {
        d = axisAndZoomUtilities.WUZ(e);
      }
    } catch (e) {
      mermaidConfigUtils.logger.error("Error creating format function:", e);
      d = axisAndZoomUtilities.WUZ(",");
    }
    let b = axisAndZoomUtilities.PKp().range(["transparent", y.cScale0, y.cScale1, y.cScale2, y.cScale3, y.cScale4, y.cScale5, y.cScale6, y.cScale7, y.cScale8, y.cScale9, y.cScale10, y.cScale11]);
    let W = axisAndZoomUtilities.PKp().range(["transparent", y.cScalePeer0, y.cScalePeer1, y.cScalePeer2, y.cScalePeer3, y.cScalePeer4, y.cScalePeer5, y.cScalePeer6, y.cScalePeer7, y.cScalePeer8, y.cScalePeer9, y.cScalePeer10, y.cScalePeer11]);
    let C = axisAndZoomUtilities.PKp().range([y.cScaleLabel0, y.cScaleLabel1, y.cScaleLabel2, y.cScaleLabel3, y.cScaleLabel4, y.cScaleLabel5, y.cScaleLabel6, y.cScaleLabel7, y.cScaleLabel8, y.cScaleLabel9, y.cScaleLabel10, y.cScaleLabel11]);
    if (g) {
      v.append("text").attr("x", S / 2).attr("y", x / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(g);
    }
    let M = v.append("g").attr("transform", `translate(0, ${x})`).attr("class", "treemapContainer");
    let R = axisAndZoomUtilities.bT9(m).sum(e => {
      return e.value ?? 0;
    }).sort((e, t) => {
      return (t.value ?? 0) - (e.value ?? 0);
    });
    let L = axisAndZoomUtilities.pNI().size([S, $]).paddingTop(e => e.children && e.children.length > 0 ? 35 : 0).paddingInner(f).paddingLeft(e => e.children && e.children.length > 0 ? 10 : 0).paddingRight(e => e.children && e.children.length > 0 ? 10 : 0).paddingBottom(e => e.children && e.children.length > 0 ? 10 : 0).round(true)(R);
    let F = L.descendants().filter(e => e.children && e.children.length > 0);
    let N = M.selectAll(".treemapSection").data(F).enter().append("g").attr("class", "treemapSection").attr("transform", e => `translate(${e.x0},${e.y0})`);
    N.append("rect").attr("width", e => e.x1 - e.x0).attr("height", 25).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", 0.6).attr("stroke-width", 0.6).attr("style", e => e.depth === 0 ? "display: none;" : "");
    N.append("clipPath").attr("id", (e, r) => `clip-section-${t}-${r}`).append("rect").attr("width", e => Math.max(0, e.x1 - e.x0 - 12)).attr("height", 25);
    N.append("rect").attr("width", e => e.x1 - e.x0).attr("height", e => e.y1 - e.y0).attr("class", (e, t) => `treemapSection section${t}`).attr("fill", e => b(e.data.name)).attr("fill-opacity", 0.6).attr("stroke", e => W(e.data.name)).attr("stroke-width", 2).attr("stroke-opacity", 0.4).attr("style", e => {
      if (e.depth === 0) {
        return "display: none;";
      }
      let t = mermaidNodeStyleUtils.styles2String({
        cssCompiledStyles: e.data.cssCompiledStyles
      });
      return t.nodeStyles + ";" + t.borderStyles.join(";");
    });
    N.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", 12.5).attr("dominant-baseline", "middle").text(e => e.depth === 0 ? "" : e.data.name).attr("font-weight", "bold").attr("style", e => e.depth === 0 ? "display: none;" : "dominant-baseline: middle; font-size: 12px; fill:" + C(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + mermaidNodeStyleUtils.styles2String({
      cssCompiledStyles: e.data.cssCompiledStyles
    }).labelStyles.replace("color:", "fill:")).each(function (e) {
      if (e.depth === 0) {
        return;
      }
      let t = axisAndZoomUtilities.select(this);
      let r = e.data.name;
      t.text(r);
      let l = e.x1 - e.x0;
      let a = Math.max(15, p.showValues !== false && e.value ? l - 10 - 30 - 10 - 6 : l - 6 - 6);
      let n = t.node();
      if (n.getComputedTextLength() > a) {
        let e = r;
        while (e.length > 0) {
          if ((e = r.substring(0, e.length - 1)).length === 0) {
            t.text("...");
            if (n.getComputedTextLength() > a) {
              t.text("");
            }
            break;
          }
          t.text(e + "...");
          if (n.getComputedTextLength() <= a) {
            break;
          }
        }
      }
    });
    if (p.showValues !== false) {
      N.append("text").attr("class", "treemapSectionValue").attr("x", e => e.x1 - e.x0 - 10).attr("y", 12.5).attr("text-anchor", "end").attr("dominant-baseline", "middle").text(e => e.value ? d(e.value) : "").attr("font-style", "italic").attr("style", e => e.depth === 0 ? "display: none;" : "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" + C(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + mermaidNodeStyleUtils.styles2String({
        cssCompiledStyles: e.data.cssCompiledStyles
      }).labelStyles.replace("color:", "fill:"));
    }
    let k = L.leaves();
    let E = M.selectAll(".treemapLeafGroup").data(k).enter().append("g").attr("class", (e, t) => `treemapNode treemapLeafGroup leaf${t}${e.data.classSelector ? ` ${e.data.classSelector}` : ""}x`).attr("transform", e => `translate(${e.x0},${e.y0})`);
    E.append("rect").attr("width", e => e.x1 - e.x0).attr("height", e => e.y1 - e.y0).attr("class", "treemapLeaf").attr("fill", e => e.parent ? b(e.parent.data.name) : b(e.data.name)).attr("style", e => mermaidNodeStyleUtils.styles2String({
      cssCompiledStyles: e.data.cssCompiledStyles
    }).nodeStyles).attr("fill-opacity", 0.3).attr("stroke", e => e.parent ? b(e.parent.data.name) : b(e.data.name)).attr("stroke-width", 3);
    E.append("clipPath").attr("id", (e, r) => `clip-${t}-${r}`).append("rect").attr("width", e => Math.max(0, e.x1 - e.x0 - 4)).attr("height", e => Math.max(0, e.y1 - e.y0 - 4));
    E.append("text").attr("class", "treemapLabel").attr("x", e => (e.x1 - e.x0) / 2).attr("y", e => (e.y1 - e.y0) / 2).attr("style", e => "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" + C(e.data.name) + ";" + mermaidNodeStyleUtils.styles2String({
      cssCompiledStyles: e.data.cssCompiledStyles
    }).labelStyles.replace("color:", "fill:")).attr("clip-path", (e, r) => `url(#clip-${t}-${r})`).text(e => e.data.name).each(function (e) {
      let t = axisAndZoomUtilities.select(this);
      let r = e.x1 - e.x0;
      let l = e.y1 - e.y0;
      let a = t.node();
      let n = r - 8;
      let i = l - 8;
      if (n < 10 || i < 10) {
        t.style("display", "none");
        return;
      }
      let o = parseInt(t.style("font-size"), 10);
      while (a.getComputedTextLength() > n && o > 8) {
        o--;
        t.style("font-size", `${o}px`);
      }
      let s = Math.max(6, Math.min(28, Math.round(o * 0.6)));
      let c = o + 2 + s;
      while (c > i && o > 8 && (!((s = Math.max(6, Math.min(28, Math.round(--o * 0.6)))) < 6) || o !== 8)) {
        t.style("font-size", `${o}px`);
        c = o + 2 + s;
      }
      t.style("font-size", `${o}px`);
      if (a.getComputedTextLength() > n || o < 8 || i < o) {
        t.style("display", "none");
      }
    });
    if (p.showValues !== false) {
      E.append("text").attr("class", "treemapValue").attr("x", e => (e.x1 - e.x0) / 2).attr("y", function (e) {
        return (e.y1 - e.y0) / 2;
      }).attr("style", e => "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" + C(e.data.name) + ";" + mermaidNodeStyleUtils.styles2String({
        cssCompiledStyles: e.data.cssCompiledStyles
      }).labelStyles.replace("color:", "fill:")).attr("clip-path", (e, r) => `url(#clip-${t}-${r})`).text(e => e.value ? d(e.value) : "").each(function (e) {
        let t = axisAndZoomUtilities.select(this);
        let r = this.parentNode;
        if (!r) {
          t.style("display", "none");
          return;
        }
        let l = axisAndZoomUtilities.select(r).select(".treemapLabel");
        if (l.empty() || l.style("display") === "none") {
          t.style("display", "none");
          return;
        }
        let a = parseFloat(l.style("font-size"));
        let n = Math.max(6, Math.min(28, Math.round(a * 0.6)));
        t.style("font-size", `${n}px`);
        let i = (e.y1 - e.y0) / 2 + a / 2 + 2;
        t.attr("y", i);
        let o = e.x1 - e.x0;
        let s = e.y1 - e.y0;
        if (t.node().getComputedTextLength() > o - 8 || i + n > s - 4 || n < 6) {
          t.style("display", "none");
        } else {
          t.style("display", null);
        }
      });
    }
    let T = p.diagramPadding ?? 8;
    svgViewportSetup.setupSvgViewport(v, T, "flowchart", (p == null ? undefined : p.useMaxWidth) || false);
  }, "draw");
  var x = mermaidConfigUtils.setName(function (e, t) {
    return t.db.getClasses();
  }, "getClasses");
  var v = {
    sectionStrokeColor: "black",
    sectionStrokeWidth: "1",
    sectionFillColor: "#efefef",
    leafStrokeColor: "black",
    leafStrokeWidth: "1",
    leafFillColor: "#efefef",
    labelColor: "black",
    labelFontSize: "12px",
    valueFontSize: "10px",
    valueColor: "black",
    titleColor: "black",
    titleFontSize: "14px"
  };
  var S = {
    parser: m,
    get db() {
      return new h();
    },
    renderer: {
      draw: y,
      getClasses: x
    },
    styles: mermaidConfigUtils.setName(function ({
      treemap: e
    } = {}) {
      let t = mermaidTextLayoutUtils.cleanAndMerge(v, e);
      return `
  .treemapNode.section {
    stroke: ${t.sectionStrokeColor};
    stroke-width: ${t.sectionStrokeWidth};
    fill: ${t.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${t.leafStrokeColor};
    stroke-width: ${t.leafStrokeWidth};
    fill: ${t.leafFillColor};
  }
  .treemapLabel {
    fill: ${t.labelColor};
    font-size: ${t.labelFontSize};
  }
  .treemapValue {
    fill: ${t.valueColor};
    font-size: ${t.valueFontSize};
  }
  .treemapTitle {
    fill: ${t.titleColor};
    font-size: ${t.titleFontSize};
  }
  `;
    }, "getStyles")
  };
  require.d(exports, {
    diagram: function () {
      return S;
    }
  });
}