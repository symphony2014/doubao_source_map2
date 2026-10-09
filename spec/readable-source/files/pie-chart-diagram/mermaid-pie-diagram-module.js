// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'selectSvgElement'
// - Resolved require(840584) to 'select-svg-element'
// - Renamed variable 'l' to 'populateCommonDb'
// - Resolved require(521289) to 'populate-common-db'
// - Renamed variable 'r' to 'mermaidDiagramUtils'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Renamed variable 'n' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'o' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'c' to 'mermaidDiagramParserFactory'
// - Resolved require(802699) to 'mermaid-diagram-parser-factory'
// - Renamed variable 's' to 'axisAndZoomUtilities'
// - Resolved require(381804) to 'axis-and-zoom-utilities'
// - Updated imported property 'vZ' to 'defaultConfig' (module 401926)
// - Updated imported property 'ZH' to 'clearCommonDb' (module 401926)
// - Updated imported property 'g2' to 'setDiagramTitle' (module 401926)
// - Updated imported property 'Kr' to 'getDiagramTitle' (module 401926)
// - Updated imported property 'GN' to 'setAccTitle' (module 401926)
// - Updated imported property 'eu' to 'getAccTitle' (module 401926)
// - Updated imported property 'U$' to 'setAccDescription' (module 401926)
// - Updated imported property 'Mx' to 'getAccDescription' (module 401926)
// - Updated imported property 'nV' to 'getConfigAlias' (module 401926)
// - Updated imported property 'v2' to 'configureSvgSize' (module 401926)
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'A' to 'populateCommonDb' (module 521289)
// - Updated imported property 'Qc' to 'parseDiagram' (module 802699)
// - Updated imported property 'Rb' to 'cleanAndMerge' (module 583673)
// - Updated imported property 'VG' to 'parseFontSize' (module 583673)
// - Updated imported property 'P' to 'selectSvgElement' (module 840584)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 87132.879a28e5.js
         * chunkId: 87132
         * moduleId: 358608
         */
module.exports = function (module, exports, require) {
  var selectSvgElement = require("select-svg-element") /*id: 840584*/;
  var populateCommonDb = require("populate-common-db") /*id: 521289*/;
  var mermaidDiagramUtils = require("mermaid-diagram-utils") /*id: 583673*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var mermaidDiagramParserFactory = require("mermaid-diagram-parser-factory") /*id: 802699*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  var u = mermaidConfigUtils_1.defaultConfig.pie;
  var p = {
    sections: new Map(),
    showData: false,
    config: u
  };
  var d = p.sections;
  var f = p.showData;
  var g = structuredClone(u);
  var h = loggerLevelUtils.setFunctionName(() => structuredClone(g), "getConfig");
  var v = loggerLevelUtils.setFunctionName(() => {
    d = new Map();
    f = p.showData;
    mermaidConfigUtils_1.clearCommonDb();
  }, "clear");
  var x = loggerLevelUtils.setFunctionName(e => {
    let {
      label: t,
      value: i
    } = e;
    if (i < 0) {
      throw Error(`"${t}" has invalid value: ${i}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
    }
    if (!d.has(t)) {
      d.set(t, i);
      loggerLevelUtils.logger.debug(`added new section: ${t}, with value: ${i}`);
    }
  }, "addSection");
  var m = loggerLevelUtils.setFunctionName(() => d, "getSections");
  var D = loggerLevelUtils.setFunctionName(e => {
    f = e;
  }, "setShowData");
  var w = loggerLevelUtils.setFunctionName(() => f, "getShowData");
  var S = {
    getConfig: h,
    clear: v,
    setDiagramTitle: mermaidConfigUtils_1.setDiagramTitle,
    getDiagramTitle: mermaidConfigUtils_1.getDiagramTitle,
    setAccTitle: mermaidConfigUtils_1.setAccTitle,
    getAccTitle: mermaidConfigUtils_1.getAccTitle,
    setAccDescription: mermaidConfigUtils_1.setAccDescription,
    getAccDescription: mermaidConfigUtils_1.getAccDescription,
    addSection: x,
    getSections: m,
    setShowData: D,
    getShowData: w
  };
  var $ = loggerLevelUtils.setFunctionName((e, t) => {
    populateCommonDb.populateCommonDb(e, t);
    t.setShowData(e.showData);
    e.sections.map(t.addSection);
  }, "populateDb");
  var y = {
    parse: loggerLevelUtils.setFunctionName(async e => {
      let t = await mermaidDiagramParserFactory.parseDiagram("pie", e);
      loggerLevelUtils.logger.debug(t);
      $(t, S);
    }, "parse")
  };
  var T = loggerLevelUtils.setFunctionName(e => `
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
  var A = loggerLevelUtils.setFunctionName(e => {
    let t = [...e.values()].reduce((e, t) => e + t, 0);
    let i = [...e.entries()].map(e => {
      let [t, i] = e;
      return {
        label: t,
        value: i
      };
    }).filter(e => e.value / t * 100 >= 1).sort((e, t) => t.value - e.value);
    return axisAndZoomUtilities.ve8().value(e => e.value)(i);
  }, "createPieArcs");
  var Z = {
    parser: y,
    db: S,
    renderer: {
      draw: loggerLevelUtils.setFunctionName((e, t, i, l) => {
        loggerLevelUtils.logger.debug("rendering pie chart\n" + e);
        let c = l.db;
        let u = mermaidConfigUtils_1.getConfigAlias();
        let p = mermaidDiagramUtils.cleanAndMerge(c.getConfig(), u.pie);
        let d = selectSvgElement.selectSvgElement(t);
        let f = d.append("g");
        f.attr("transform", "translate(225,225)");
        let {
          themeVariables: g
        } = u;
        let [h] = mermaidDiagramUtils.parseFontSize(g.pieOuterStrokeWidth);
        if (h == null) {
          h = 2;
        }
        let v = p.textPosition;
        let x = axisAndZoomUtilities.Nb1().innerRadius(0).outerRadius(185);
        let m = axisAndZoomUtilities.Nb1().innerRadius(v * 185).outerRadius(v * 185);
        f.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 185 + h / 2).attr("class", "pieOuterCircle");
        let D = c.getSections();
        let w = A(D);
        let S = [g.pie1, g.pie2, g.pie3, g.pie4, g.pie5, g.pie6, g.pie7, g.pie8, g.pie9, g.pie10, g.pie11, g.pie12];
        let $ = 0;
        D.forEach(e => {
          $ += e;
        });
        let y = w.filter(e => (e.data.value / $ * 100).toFixed(0) !== "0");
        let T = axisAndZoomUtilities.PKp(S);
        f.selectAll("mySlices").data(y).enter().append("path").attr("d", x).attr("fill", e => T(e.data.label)).attr("class", "pieCircle");
        f.selectAll("mySlices").data(y).enter().append("text").text(e => (e.data.value / $ * 100).toFixed(0) + "%").attr("transform", e => "translate(" + m.centroid(e) + ")").style("text-anchor", "middle").attr("class", "slice");
        f.append("text").text(c.getDiagramTitle()).attr("x", 0).attr("y", -200).attr("class", "pieTitleText");
        let Z = [...D.entries()].map(e => {
          let [t, i] = e;
          return {
            label: t,
            value: i
          };
        });
        let C = f.selectAll(".legend").data(Z).enter().append("g").attr("class", "legend").attr("transform", (e, t) => "translate(216," + (t * 22 - Z.length * 22 / 2) + ")");
        C.append("rect").attr("width", 18).attr("height", 18).style("fill", e => T(e.label)).style("stroke", e => T(e.label));
        C.append("text").attr("x", 22).attr("y", 14).text(e => c.getShowData() ? `${e.label} [${e.value}]` : e.label);
        let b = 512 + Math.max(...C.selectAll("text").nodes().map(e => {
          return (e == null ? undefined : e.getBoundingClientRect().width) ?? 0;
        }));
        d.attr("viewBox", `0 0 ${b} 450`);
        mermaidConfigUtils_1.configureSvgSize(d, 450, b, p.useMaxWidth);
      }, "draw")
    },
    styles: T
  };
  require.d(exports, {
    diagram: function () {
      return Z;
    }
  });
}