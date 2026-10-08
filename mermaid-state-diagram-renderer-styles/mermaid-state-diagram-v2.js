// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'stateDiagramV2ParserDb'
// - Resolved require(831790) to 'state-diagram-v2-parser-db'
// - Resolved require(150827) to 'diagram-element-selector'
// - Resolved require(3049) to 'mermaid-svg-viewport-setup'
// - Resolved require(484129) to 'mermaid-layout-registry-renderer'
// - Resolved require(968232) to 'mermaid-flowchart-edge-renderer'
// - Resolved require(173696) to 'diagram-arrow-offset-utils'
// - Resolved require(411411) to 'mermaid-node-shapes-renderer'
// - Resolved require(954180) to 'subgraph-title-margins-calculator'
// - Resolved require(717687) to 'mermaid-style-utils'
// - Resolved require(990626) to 'icon-utils-text-rendering'
// - Resolved require(583673) to 'mermaid-diagram-utils'
// - Resolved require(401926) to 'mermaid-config-utils_1'
// - Renamed variable 'r' to 'loggerLevelUtils'
// - Resolved require(696754) to 'logger-level-utils'
// - Updated imported property 'J8' to 'parser' (module 831790)
// - Updated imported property 'oI' to 'StateDB' (module 831790)
// - Updated imported property '_$' to 'diagramRenderer' (module 831790)
// - Updated imported property 'Ee' to 'getStyles' (module 831790)
// - Updated imported property 'eW' to 'setFunctionName' (module 696754)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 91748.13ebfb05.js
         * chunkId: 91748
         * moduleId: 315688
         */
module.exports = function (module, exports, require) {
  var stateDiagramV2ParserDb = require("state-diagram-v2-parser-db") /*id: 831790*/;
  require("diagram-element-selector") /*id: 150827*/;
  require("mermaid-svg-viewport-setup") /*id: 3049*/;
  require("mermaid-layout-registry-renderer") /*id: 484129*/;
  require("mermaid-flowchart-edge-renderer") /*id: 968232*/;
  require("diagram-arrow-offset-utils") /*id: 173696*/;
  require("mermaid-node-shapes-renderer") /*id: 411411*/;
  require("subgraph-title-margins-calculator") /*id: 954180*/;
  require("mermaid-style-utils") /*id: 717687*/;
  require("icon-utils-text-rendering") /*id: 990626*/;
  require("mermaid-diagram-utils") /*id: 583673*/;
  require("mermaid-config-utils_1") /*id: 401926*/;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  var n = {
    parser: stateDiagramV2ParserDb.parser,
    get db() {
      return new stateDiagramV2ParserDb.StateDB(2);
    },
    renderer: stateDiagramV2ParserDb.diagramRenderer,
    styles: stateDiagramV2ParserDb.getStyles,
    init: loggerLevelUtils.setFunctionName(t => {
      t.state ||= {};
      t.state.arrowMarkerAbsolute = t.arrowMarkerAbsolute;
    }, "init")
  };
  require.d(exports, {
    diagram: function () {
      return n;
    }
  });
}