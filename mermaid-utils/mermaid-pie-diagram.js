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
// - Renamed variable 'c' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Updated imported property 'vZ' to 'configDefaults' (module 101498)
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'ZH' to 'clearAccData' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 101498)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 101498)
// - Updated imported property 'GN' to 'setAccTitle' (module 101498)
// - Updated imported property 'eu' to 'getAccTitle' (module 101498)
// - Updated imported property 'U$' to 'setAccDescription' (module 101498)
// - Updated imported property 'Mx' to 'getAccDescription' (module 101498)
// - Updated imported property 'nV' to 'getConfigAlias' (module 101498)
// - Updated imported property 'v2' to 'configureSvgSize' (module 101498)
// - Updated imported property 'A' to 'populateCommonDb' (module 341035)
// - Updated imported property 'Qc' to 'parseDiagram' (module 802699)
// - Updated imported property 'Rb' to 'cleanAndMerge' (module 997032)
// - Updated imported property 'VG' to 'parseFontSize' (module 997032)
// - Updated imported property 'P' to 'selectSvgElement' (module 871430)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 84277.126eebc9.js
         * chunkId: 84277
         * moduleId: 852342
         */
module.exports = function (module, exports, require) {
  var mermaidPopulateCommonDb = require("mermaid-populate-common-db") /*id: 341035*/;
  var mermaidTextLayoutUtils = require("mermaid-text-layout-utils") /*id: 997032*/;
  var mermaidSvgElementSelector = require("mermaid-svg-element-selector") /*id: 871430*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var mermaidDiagramParserFactory = require("mermaid-diagram-parser-factory") /*id: 802699*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var s = mermaidConfigUtils.configDefaults.pie;
  var u = {
    sections: new Map(),
    showData: false,
    config: s
  };
  var h = u.sections;
  var d = u.showData;
  var f = structuredClone(s);
  var g = mermaidConfigUtils.setName(() => structuredClone(f), "getConfig");
  var p = mermaidConfigUtils.setName(() => {
    h = new Map();
    d = u.showData;
    mermaidConfigUtils.clearAccData();
  }, "clear");
  var x = mermaidConfigUtils.setName(e => {
    let {
      label: t,
      value: r
    } = e;
    if (r < 0) {
      throw Error(`"${t}" has invalid value: ${r}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
    }
    if (!h.has(t)) {
      h.set(t, r);
      mermaidConfigUtils.logger.debug(`added new section: ${t}, with value: ${r}`);
    }
  }, "addSection");
  var m = mermaidConfigUtils.setName(() => h, "getSections");
  var v = mermaidConfigUtils.setName(e => {
    d = e;
  }, "setShowData");
  var y = mermaidConfigUtils.setName(() => d, "getShowData");
  var $ = {
    getConfig: g,
    clear: p,
    setDiagramTitle: mermaidConfigUtils.setDiagramTitle,
    getDiagramTitle: mermaidConfigUtils.getDiagramTitle,
    setAccTitle: mermaidConfigUtils.setAccTitle,
    getAccTitle: mermaidConfigUtils.getAccTitle,
    setAccDescription: mermaidConfigUtils.setAccDescription,
    getAccDescription: mermaidConfigUtils.getAccDescription,
    addSection: x,
    getSections: m,
    setShowData: v,
    getShowData: y
  };
  var w = mermaidConfigUtils.setName((e, t) => {
    mermaidPopulateCommonDb.populateCommonDb(e, t);
    t.setShowData(e.showData);
    e.sections.map(t.addSection);
  }, "populateDb");
  var W = {
    parse: mermaidConfigUtils.setName(async e => {
      let t = await mermaidDiagramParserFactory.parseDiagram("pie", e);
      mermaidConfigUtils.logger.debug(t);
      w(t, $);
    }, "parse")
  };
  var R = mermaidConfigUtils.setName(e => `
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`, "getStyles");
  var S = mermaidConfigUtils.setName(e => {
    let t = [...e.values()].reduce((e, t) => e + t, 0);
    let r = [...e.entries()].map(e => {
      let [t, r] = e;
      return {
        label: t,
        value: r
      };
    }).filter(e => e.value / t * 100 >= 1).sort((e, t) => t.value - e.value);
    return axisAndZoomUtilities.ve8().value(e => e.value)(r);
  }, "createPieArcs");
  var b = {
    parser: W,
    db: $,
    renderer: {
      draw: mermaidConfigUtils.setName((e, t, r, n) => {
        mermaidConfigUtils.logger.debug("rendering pie chart\n" + e);
        let o = n.db;
        let s = mermaidConfigUtils.getConfigAlias();
        let u = mermaidTextLayoutUtils.cleanAndMerge(o.getConfig(), s.pie);
        let h = mermaidSvgElementSelector.selectSvgElement(t);
        let d = h.append("g");
        d.attr("transform", "translate(225,225)");
        let {
          themeVariables: f
        } = s;
        let [g] = mermaidTextLayoutUtils.parseFontSize(f.pieOuterStrokeWidth);
        if (g == null) {
          g = 2;
        }
        let p = u.textPosition;
        let x = axisAndZoomUtilities.Nb1().innerRadius(0).outerRadius(185);
        let m = axisAndZoomUtilities.Nb1().innerRadius(p * 185).outerRadius(p * 185);
        d.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 185 + g / 2).attr("class", "pieOuterCircle");
        let v = o.getSections();
        let y = S(v);
        let $ = [f.pie1, f.pie2, f.pie3, f.pie4, f.pie5, f.pie6, f.pie7, f.pie8, f.pie9, f.pie10, f.pie11, f.pie12];
        let w = 0;
        v.forEach(e => {
          w += e;
        });
        let W = y.filter(e => (e.data.value / w * 100).toFixed(0) !== "0");
        let R = axisAndZoomUtilities.PKp($);
        d.selectAll("mySlices").data(W).enter().append("path").attr("d", x).attr("fill", e => R(e.data.label)).attr("class", "pieCircle");
        d.selectAll("mySlices").data(W).enter().append("text").text(e => (e.data.value / w * 100).toFixed(0) + "%").attr("transform", e => "translate(" + m.centroid(e) + ")").style("text-anchor", "middle").attr("class", "slice");
        d.append("text").text(o.getDiagramTitle()).attr("x", 0).attr("y", -200).attr("class", "pieTitleText");
        let b = [...v.entries()].map(e => {
          let [t, r] = e;
          return {
            label: t,
            value: r
          };
        });
        let M = d.selectAll(".legend").data(b).enter().append("g").attr("class", "legend").attr("transform", (e, t) => "translate(216," + (t * 22 - b.length * 22 / 2) + ")");
        M.append("rect").attr("width", 18).attr("height", 18).style("fill", e => R(e.label)).style("stroke", e => R(e.label));
        M.append("text").attr("x", 22).attr("y", 14).text(e => o.getShowData() ? `${e.label} [${e.value}]` : e.label);
        let C = 512 + Math.max(...M.selectAll("text").nodes().map(e => {
          return (e == null ? undefined : e.getBoundingClientRect().width) ?? 0;
        }));
        h.attr("viewBox", `0 0 ${C} 450`);
        mermaidConfigUtils.configureSvgSize(h, 450, C, u.useMaxWidth);
      }, "draw")
    },
    styles: R
  };
  require.d(exports, {
    diagram: function () {
      return b;
    }
  });
}