// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'mermaidPackageJson_1'
// - Resolved require(965787) to 'mermaid-package-json_1'
// - Renamed variable 'i' to 'mermaidSvgElementSelector'
// - Resolved require(871430) to 'mermaid-svg-element-selector'
// - Renamed variable 'c' to 'mermaidConfigUtils'
// - Resolved require(101498) to 'mermaid-config-utils'
// - Renamed variable 'd' to 'mermaidDiagramParserFactory'
// - Resolved require(802699) to 'mermaid-diagram-parser-factory'
// - Updated imported property 'eW' to 'setName' (module 101498)
// - Updated imported property 'cM' to 'logger' (module 101498)
// - Updated imported property 'v2' to 'configureSvgSize' (module 101498)
// - Updated imported property 'Qc' to 'parseDiagram' (module 802699)
// - Updated imported property 'X' to 'packageJson' (module 965787)
// - Updated imported property 'P' to 'selectSvgElement' (module 871430)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 65529.780e626b.js
         * chunkId: 65529
         * moduleId: 162873
         */
module.exports = function (module, exports, require) {
  var mermaidPackageJson_1 = require("mermaid-package-json_1") /*id: 965787*/;
  var mermaidSvgElementSelector = require("mermaid-svg-element-selector") /*id: 871430*/;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  var mermaidDiagramParserFactory = require("mermaid-diagram-parser-factory") /*id: 802699*/;
  var a = {
    parse: mermaidConfigUtils.setName(async e => {
      let s = await mermaidDiagramParserFactory.parseDiagram("info", e);
      mermaidConfigUtils.logger.debug(s);
    }, "parse")
  };
  var p = {
    version: mermaidPackageJson_1.packageJson.version + ""
  };
  var o = mermaidConfigUtils.setName(() => p.version, "getVersion");
  var n = {
    parser: a,
    db: {
      getVersion: o
    },
    renderer: {
      draw: mermaidConfigUtils.setName((e, s, r) => {
        mermaidConfigUtils.logger.debug("rendering info diagram\n" + e);
        let t = mermaidSvgElementSelector.selectSvgElement(s);
        mermaidConfigUtils.configureSvgSize(t, 100, 400, true);
        t.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${r}`);
      }, "draw")
    }
  };
  require.d(exports, {
    diagram: function () {
      return n;
    }
  });
}