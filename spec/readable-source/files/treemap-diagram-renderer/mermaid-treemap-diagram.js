// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'selectSvgElement'
// - Resolved require(840584) to 'select-svg-element'
// - Renamed variable 'i' to 'mermaidSvgViewportSetup'
// - Resolved require(3049) to 'mermaid-svg-viewport-setup'
// - Renamed variable 'n' to 'mermaidStyleUtils'
// - Resolved require(717687) to 'mermaid-style-utils'
// - Renamed variable 's' to 'populateCommonDb'
// - Resolved require(521289) to 'populate-common-db'
// - Renamed variable 'o' to 'mermaidDiagramUtils'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'c' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'd' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'p' to 'mermaidDiagramParserFactory'
// - Resolved require(802699) to 'mermaid-diagram-parser-factory'
// - Renamed variable 'h' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Updated imported property 'vZ' to 'defaultConfig' (module 401926)
// - Updated imported property 'iE' to 'getConfig' (module 401926)
// - Updated imported property 'ZH' to 'clearCommonDb' (module 401926)
// - Updated imported property 'GN' to 'setAccTitle' (module 401926)
// - Updated imported property 'eu' to 'getAccTitle' (module 401926)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 401926)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 401926)
// - Updated imported property 'Mx' to 'getAccDescription' (module 401926)
// - Updated imported property 'U$' to 'setAccDescription' (module 401926)
// - Updated imported property 'v2' to 'configureSvgSize' (module 401926)
// - Updated imported property 'Rb' to 'cleanAndMerge' (module 583673)
// - Updated imported property 'Fh' to 'isLabelStyle' (module 717687)
// - Updated imported property 'UG' to 'stylesToString' (module 717687)
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'A' to 'populateCommonDb' (module 521289)
// - Updated imported property 'Qc' to 'parseDiagram' (module 802699)
// - Updated imported property 'P' to 'selectSvgElement' (module 840584)
// - Updated imported property 'Ys' to 'select' (module 381804)
// - Updated imported property 'j' to 'setupViewPortForSvg' (module 3049)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 41287.1ce12720.js
         * chunkId: 41287
         * moduleId: 239234
         */
module.exports = function (module, exports, require) {
  var a;
  var selectSvgElement = require("select-svg-element") /*id: 840584*/;
  var mermaidSvgViewportSetup = require("mermaid-svg-viewport-setup") /*id: 3049*/;
  var mermaidStyleUtils = require("mermaid-style-utils") /*id: 717687*/;
  var populateCommonDb = require("populate-common-db") /*id: 521289*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var mermaidDiagramParserFactory = require("mermaid-diagram-parser-factory") /*id: 802699*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  a = class {
    getNodes() {
      return this.nodes;
    }
    getConfig() {
      let t = mermaidConfigUtils_1.defaultConfig;
      let l = mermaidConfigUtils_1.getConfig();
      return mermaidDiagramUtils.cleanAndMerge({
        ...t.treemap,
        ...(l.treemap ?? {})
      });
    }
    addNode(e, t) {
      this.nodes.push(e);
      this.levels.set(e, t);
      if (t === 0) {
        var l;
        this.outerNodes.push(e);
        if ((l = this.root) === null || l === undefined) {
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
      let a = this.classes.get(e) ?? {
        id: e,
        styles: [],
        textStyles: []
      };
      let r = t.replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
      if (r) {
        r.forEach(e => {
          if (mermaidStyleUtils.isLabelStyle(e)) {
            if (a == null ? undefined : a.textStyles) {
              a.textStyles.push(e);
            } else {
              a.textStyles = [e];
            }
          }
          if (a == null ? undefined : a.styles) {
            a.styles.push(e);
          } else {
            a.styles = [e];
          }
        });
      }
      this.classes.set(e, a);
    }
    getClasses() {
      return this.classes;
    }
    getStylesForClass(e) {
      return this.classes.get(e)?.styles ?? [];
    }
    clear() {
      mermaidConfigUtils_1.clearCommonDb();
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
      this.setAccTitle = mermaidConfigUtils_1.setAccTitle;
      this.getAccTitle = mermaidConfigUtils_1.getAccTitle;
      this.setDiagramTitle = mermaidConfigUtils_1.setDiagramTitle;
      this.getDiagramTitle = mermaidConfigUtils_1.getDiagramTitle;
      this.getAccDescription = mermaidConfigUtils_1.getAccDescription;
      this.setAccDescription = mermaidConfigUtils_1.setAccDescription;
    }
  };
  loggerLevelUtils.setFunctionName(a, "TreeMapDB");
  var u = a;
  function f(e) {
    if (!e.length) {
      return [];
    }
    let t = [];
    let l = [];
    e.forEach(e => {
      let a = {
        name: e.name,
        children: e.type === "Leaf" ? undefined : []
      };
      a.classSelector = e == null ? undefined : e.classSelector;
      if (e == null ? undefined : e.cssCompiledStyles) {
        a.cssCompiledStyles = [e.cssCompiledStyles];
      }
      if (e.type === "Leaf" && e.value !== undefined) {
        a.value = e.value;
      }
      while (l.length > 0 && l[l.length - 1].level >= e.level) {
        l.pop();
      }
      if (l.length === 0) {
        t.push(a);
      } else {
        let e = l[l.length - 1].node;
        if (e.children) {
          e.children.push(a);
        } else {
          e.children = [a];
        }
      }
      if (e.type !== "Leaf") {
        l.push({
          node: a,
          level: e.level
        });
      }
    });
    return t;
  }
  loggerLevelUtils.setFunctionName(f, "buildHierarchy");
  var m = loggerLevelUtils.setFunctionName((e, t) => {
    populateCommonDb.populateCommonDb(e, t);
    let n = [];
    for (let i of e.TreemapRows ?? []) {
      if (i.$type === "ClassDefStatement") {
        t.addClass(i.className ?? "", i.styleText ?? "");
      }
    }
    for (let l of e.TreemapRows ?? []) {
      let e = l.item;
      if (!e) {
        continue;
      }
      let a = l.indent ? parseInt(l.indent) : 0;
      let r = y(e);
      let i = e.classSelector ? t.getStylesForClass(e.classSelector) : [];
      let s = i.length > 0 ? i.join(";") : undefined;
      let o = {
        level: a,
        name: r,
        type: e.$type,
        value: e.value,
        classSelector: e.classSelector,
        cssCompiledStyles: s
      };
      n.push(o);
    }
    let o = f(n);
    let c = loggerLevelUtils.setFunctionName((e, l) => {
      for (let a of e) {
        t.addNode(a, l);
        if (a.children && a.children.length > 0) {
          c(a.children, l + 1);
        }
      }
    }, "addNodesRecursively");
    c(o, 0);
  }, "populate");
  var y = loggerLevelUtils.setFunctionName(e => e.name ? String(e.name) : "", "getItemName");
  var g = {
    parser: {
      yy: undefined
    },
    parse: loggerLevelUtils.setFunctionName(async e => {
      try {
        let l = mermaidDiagramParserFactory.parseDiagram;
        let a = await l("treemap", e);
        loggerLevelUtils.logger.debug("Treemap AST:", a);
        let r = g.parser?.yy;
        if (!(r instanceof u)) {
          throw Error("parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
        }
        m(a, r);
      } catch (e) {
        loggerLevelUtils.logger.error("Error parsing treemap:", e);
        throw e;
      }
    }, "parse")
  };
  var S = loggerLevelUtils.setFunctionName((e, t, l, a) => {
    let p;
    let u = a.db;
    let f = u.getConfig();
    let m = f.padding ?? 10;
    let y = u.getDiagramTitle();
    let g = u.getRoot();
    let {
      themeVariables: S
    } = mermaidConfigUtils_1.getConfig();
    if (!g) {
      return;
    }
    let v = !!y * 30;
    let x = selectSvgElement.selectSvgElement(t);
    let b = f.nodeWidth ? f.nodeWidth * 10 : 960;
    let $ = f.nodeHeight ? f.nodeHeight * 10 : 500;
    let C = $ + v;
    x.attr("viewBox", `0 0 ${b} ${C}`);
    mermaidConfigUtils_1.configureSvgSize(x, C, b, f.useMaxWidth);
    try {
      let e = f.valueFormat || ",";
      if (e === "$0,0") {
        p = loggerLevelUtils.setFunctionName(e => "$" + axisAndZoomUtilities.WUZ(",")(e), "valueFormat");
      } else if (e.startsWith("$") && e.includes(",")) {
        let t = /\.\d+/.exec(e);
        let l = t ? t[0] : "";
        p = loggerLevelUtils.setFunctionName(e => "$" + axisAndZoomUtilities.WUZ("," + l)(e), "valueFormat");
      } else if (e.startsWith("$")) {
        let t = e.substring(1);
        p = loggerLevelUtils.setFunctionName(e => "$" + axisAndZoomUtilities.WUZ(t || "")(e), "valueFormat");
      } else {
        p = axisAndZoomUtilities.WUZ(e);
      }
    } catch (e) {
      loggerLevelUtils.logger.error("Error creating format function:", e);
      p = axisAndZoomUtilities.WUZ(",");
    }
    let w = axisAndZoomUtilities.PKp().range(["transparent", S.cScale0, S.cScale1, S.cScale2, S.cScale3, S.cScale4, S.cScale5, S.cScale6, S.cScale7, S.cScale8, S.cScale9, S.cScale10, S.cScale11]);
    let L = axisAndZoomUtilities.PKp().range(["transparent", S.cScalePeer0, S.cScalePeer1, S.cScalePeer2, S.cScalePeer3, S.cScalePeer4, S.cScalePeer5, S.cScalePeer6, S.cScalePeer7, S.cScalePeer8, S.cScalePeer9, S.cScalePeer10, S.cScalePeer11]);
    let W = axisAndZoomUtilities.PKp().range([S.cScaleLabel0, S.cScaleLabel1, S.cScaleLabel2, S.cScaleLabel3, S.cScaleLabel4, S.cScaleLabel5, S.cScaleLabel6, S.cScaleLabel7, S.cScaleLabel8, S.cScaleLabel9, S.cScaleLabel10, S.cScaleLabel11]);
    if (y) {
      x.append("text").attr("x", b / 2).attr("y", v / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(y);
    }
    let T = x.append("g").attr("transform", `translate(0, ${v})`).attr("class", "treemapContainer");
    let M = axisAndZoomUtilities.bT9(g).sum(e => {
      return e.value ?? 0;
    }).sort((e, t) => {
      return (t.value ?? 0) - (e.value ?? 0);
    });
    let k = axisAndZoomUtilities.pNI().size([b, $]).paddingTop(e => e.children && e.children.length > 0 ? 35 : 0).paddingInner(m).paddingLeft(e => e.children && e.children.length > 0 ? 10 : 0).paddingRight(e => e.children && e.children.length > 0 ? 10 : 0).paddingBottom(e => e.children && e.children.length > 0 ? 10 : 0).round(true)(M);
    let Z = k.descendants().filter(e => e.children && e.children.length > 0);
    let P = T.selectAll(".treemapSection").data(Z).enter().append("g").attr("class", "treemapSection").attr("transform", e => `translate(${e.x0},${e.y0})`);
    P.append("rect").attr("width", e => e.x1 - e.x0).attr("height", 25).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", 0.6).attr("stroke-width", 0.6).attr("style", e => e.depth === 0 ? "display: none;" : "");
    P.append("clipPath").attr("id", (e, l) => `clip-section-${t}-${l}`).append("rect").attr("width", e => Math.max(0, e.x1 - e.x0 - 12)).attr("height", 25);
    P.append("rect").attr("width", e => e.x1 - e.x0).attr("height", e => e.y1 - e.y0).attr("class", (e, t) => `treemapSection section${t}`).attr("fill", e => w(e.data.name)).attr("fill-opacity", 0.6).attr("stroke", e => L(e.data.name)).attr("stroke-width", 2).attr("stroke-opacity", 0.4).attr("style", e => {
      if (e.depth === 0) {
        return "display: none;";
      }
      let t = mermaidStyleUtils.stylesToString({
        cssCompiledStyles: e.data.cssCompiledStyles
      });
      return t.nodeStyles + ";" + t.borderStyles.join(";");
    });
    P.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", 12.5).attr("dominant-baseline", "middle").text(e => e.depth === 0 ? "" : e.data.name).attr("font-weight", "bold").attr("style", e => e.depth === 0 ? "display: none;" : "dominant-baseline: middle; font-size: 12px; fill:" + W(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + mermaidStyleUtils.stylesToString({
      cssCompiledStyles: e.data.cssCompiledStyles
    }).labelStyles.replace("color:", "fill:")).each(function (e) {
      if (e.depth === 0) {
        return;
      }
      let t = axisAndZoomUtilities.select(this);
      let l = e.data.name;
      t.text(l);
      let a = e.x1 - e.x0;
      let r = Math.max(15, f.showValues !== false && e.value ? a - 10 - 30 - 10 - 6 : a - 6 - 6);
      let i = t.node();
      if (i.getComputedTextLength() > r) {
        let e = l;
        while (e.length > 0) {
          if ((e = l.substring(0, e.length - 1)).length === 0) {
            t.text("...");
            if (i.getComputedTextLength() > r) {
              t.text("");
            }
            break;
          }
          t.text(e + "...");
          if (i.getComputedTextLength() <= r) {
            break;
          }
        }
      }
    });
    if (f.showValues !== false) {
      P.append("text").attr("class", "treemapSectionValue").attr("x", e => e.x1 - e.x0 - 10).attr("y", 12.5).attr("text-anchor", "end").attr("dominant-baseline", "middle").text(e => e.value ? p(e.value) : "").attr("font-style", "italic").attr("style", e => e.depth === 0 ? "display: none;" : "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" + W(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + mermaidStyleUtils.stylesToString({
        cssCompiledStyles: e.data.cssCompiledStyles
      }).labelStyles.replace("color:", "fill:"));
    }
    let z = k.leaves();
    let D = T.selectAll(".treemapLeafGroup").data(z).enter().append("g").attr("class", (e, t) => `treemapNode treemapLeafGroup leaf${t}${e.data.classSelector ? ` ${e.data.classSelector}` : ""}x`).attr("transform", e => `translate(${e.x0},${e.y0})`);
    D.append("rect").attr("width", e => e.x1 - e.x0).attr("height", e => e.y1 - e.y0).attr("class", "treemapLeaf").attr("fill", e => e.parent ? w(e.parent.data.name) : w(e.data.name)).attr("style", e => mermaidStyleUtils.stylesToString({
      cssCompiledStyles: e.data.cssCompiledStyles
    }).nodeStyles).attr("fill-opacity", 0.3).attr("stroke", e => e.parent ? w(e.parent.data.name) : w(e.data.name)).attr("stroke-width", 3);
    D.append("clipPath").attr("id", (e, l) => `clip-${t}-${l}`).append("rect").attr("width", e => Math.max(0, e.x1 - e.x0 - 4)).attr("height", e => Math.max(0, e.y1 - e.y0 - 4));
    D.append("text").attr("class", "treemapLabel").attr("x", e => (e.x1 - e.x0) / 2).attr("y", e => (e.y1 - e.y0) / 2).attr("style", e => "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" + W(e.data.name) + ";" + mermaidStyleUtils.stylesToString({
      cssCompiledStyles: e.data.cssCompiledStyles
    }).labelStyles.replace("color:", "fill:")).attr("clip-path", (e, l) => `url(#clip-${t}-${l})`).text(e => e.data.name).each(function (e) {
      let t = axisAndZoomUtilities.select(this);
      let l = e.x1 - e.x0;
      let a = e.y1 - e.y0;
      let r = t.node();
      let i = l - 8;
      let n = a - 8;
      if (i < 10 || n < 10) {
        t.style("display", "none");
        return;
      }
      let s = parseInt(t.style("font-size"), 10);
      while (r.getComputedTextLength() > i && s > 8) {
        s--;
        t.style("font-size", `${s}px`);
      }
      let o = Math.max(6, Math.min(28, Math.round(s * 0.6)));
      let c = s + 2 + o;
      while (c > n && s > 8 && (!((o = Math.max(6, Math.min(28, Math.round(--s * 0.6)))) < 6) || s !== 8)) {
        t.style("font-size", `${s}px`);
        c = s + 2 + o;
      }
      t.style("font-size", `${s}px`);
      if (r.getComputedTextLength() > i || s < 8 || n < s) {
        t.style("display", "none");
      }
    });
    if (f.showValues !== false) {
      D.append("text").attr("class", "treemapValue").attr("x", e => (e.x1 - e.x0) / 2).attr("y", function (e) {
        return (e.y1 - e.y0) / 2;
      }).attr("style", e => "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" + W(e.data.name) + ";" + mermaidStyleUtils.stylesToString({
        cssCompiledStyles: e.data.cssCompiledStyles
      }).labelStyles.replace("color:", "fill:")).attr("clip-path", (e, l) => `url(#clip-${t}-${l})`).text(e => e.value ? p(e.value) : "").each(function (e) {
        let t = axisAndZoomUtilities.select(this);
        let l = this.parentNode;
        if (!l) {
          t.style("display", "none");
          return;
        }
        let a = axisAndZoomUtilities.select(l).select(".treemapLabel");
        if (a.empty() || a.style("display") === "none") {
          t.style("display", "none");
          return;
        }
        let r = parseFloat(a.style("font-size"));
        let i = Math.max(6, Math.min(28, Math.round(r * 0.6)));
        t.style("font-size", `${i}px`);
        let n = (e.y1 - e.y0) / 2 + r / 2 + 2;
        t.attr("y", n);
        let s = e.x1 - e.x0;
        let o = e.y1 - e.y0;
        if (t.node().getComputedTextLength() > s - 8 || n + i > o - 4 || i < 6) {
          t.style("display", "none");
        } else {
          t.style("display", null);
        }
      });
    }
    let F = f.diagramPadding ?? 8;
    mermaidSvgViewportSetup.setupViewPortForSvg(x, F, "flowchart", (f == null ? undefined : f.useMaxWidth) || false);
  }, "draw");
  var v = loggerLevelUtils.setFunctionName(function (e, t) {
    return t.db.getClasses();
  }, "getClasses");
  var x = {
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
  var b = {
    parser: g,
    get db() {
      return new u();
    },
    renderer: {
      draw: S,
      getClasses: v
    },
    styles: loggerLevelUtils.setFunctionName(function ({
      treemap: e
    } = {}) {
      let t = mermaidDiagramUtils.cleanAndMerge(x, e);
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
      return b;
    }
  });
}