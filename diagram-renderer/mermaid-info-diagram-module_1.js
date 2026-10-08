// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'mermaidPackageJson'
// - Resolved require(114389) to 'mermaid-package-json'
// - Renamed variable 'i' to 'selectSvgElement'
// - Resolved require(840584) to 'select-svg-element'
// - Renamed variable 'a' to 'mermaidConfigUtils_1'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'o' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Renamed variable 'u' to 'mermaidDiagramParserFactory'
// - Resolved require(802699) to 'mermaid-diagram-parser-factory'
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// - Updated imported property 'cM' to 'logger' (module 696754)
// - Updated imported property 'Qc' to 'parseDiagram' (module 802699)
// - Updated imported property 'X' to 'mermaidPackage' (module 114389)
// - Updated imported property 'P' to 'selectSvgElement' (module 840584)
// - Updated imported property 'v2' to 'configureSvgSize' (module 401926)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92902.b9dc5e57.js
         * chunkId: 92902
         * moduleId: 5081
         */
module.exports = function (module, exports, require) {
  var mermaidPackageJson = require("mermaid-package-json") /*id: 114389*/;
  var selectSvgElement = require("select-svg-element") /*id: 840584*/;
  var mermaidConfigUtils_1 = require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var mermaidDiagramParserFactory = require("mermaid-diagram-parser-factory") /*id: 802699*/;
  var c = {
    parse: loggerLevelUtils.setFunctionName(async n => {
      let t = await mermaidDiagramParserFactory.parseDiagram("info", n);
      loggerLevelUtils.logger.debug(t);
    }, "parse")
  };
  var f = {
    version: mermaidPackageJson.mermaidPackage.version + ""
  };
  var s = loggerLevelUtils.setFunctionName(() => f.version, "getVersion");
  var Z = {
    parser: c,
    db: {
      getVersion: s
    },
    renderer: {
      draw: loggerLevelUtils.setFunctionName((n, t, r) => {
        loggerLevelUtils.logger.debug("rendering info diagram\n" + n);
        let e = selectSvgElement.selectSvgElement(t);
        mermaidConfigUtils_1.configureSvgSize(e, 100, 400, true);
        e.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${r}`);
      }, "draw")
    }
  };
  require.d(exports, {
    diagram: function () {
      return Z;
    }
  });
}